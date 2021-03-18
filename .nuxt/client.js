import Vue from 'vue'

import {
  resolveRouteComponents,
  getMatchedComponents,
  getMatchedComponentsInstances,
  flatMapComponents,
  setContext,

  compile,
  getQueryDiff,
  globalHandleError,
  isSamePath,
  urlJoin
} from './utils.js'
import { createApp } from './index.js'

import NuxtLink from './components/nuxt-link.server.js' // should be included after ./index.js
import { installJsonp } from './jsonp'

installJsonp()

// Component: <NuxtLink>
Vue.component(NuxtLink.name, NuxtLink)

// Global shared references
let _lastPaths = []// eslint-disable-line no-unused-vars
let app
let router
let store// eslint-disable-line no-unused-vars

// Try to rehydrate SSR data from window
const NUXT = window.__NUXT__ || {}

const $config = NUXT.config || {}
if ($config.app) {
  __webpack_public_path__ = urlJoin($config.app.cdnURL, $config.app.assetsPath)
}

Object.assign(Vue.config, {"silent":true,"performance":false})// eslint-disable-line

const errorHandler = Vue.config.errorHandler || console.error

// Create and mount App
createApp(null, NUXT.config).then(mountApp).catch(errorHandler)

async function loadAsyncComponents (to, from, next) {
  // Check if route changed (this._routeChanged), only if the page is not an error (for validate())
  this._routeChanged = Boolean(app.nuxt.err) || from.name !== to.name
  this._paramChanged = !this._routeChanged && from.path !== to.path
  this._queryChanged = !this._paramChanged && from.fullPath !== to.fullPath
  this._diffQuery = (this._queryChanged ? getQueryDiff(to.query, from.query) : [])

  try {
    if (this._queryChanged) {
      const Components = await resolveRouteComponents(
        to,
        (Component, instance) => ({ Component, instance })
      )
      // Add a marker on each component that it needs to refresh or not
      const startLoader = Components.some(({ Component, instance }) => {
        const watchQuery = Component.options.watchQuery
        if (watchQuery === true) {
          return true
        }
        if (Array.isArray(watchQuery)) {
          return watchQuery.some(key => this._diffQuery[key])
        }
        if (typeof watchQuery === 'function') {
          return watchQuery.apply(instance, [to.query, from.query])
        }
        return false
      })
    }
    // Call next()
    next()
  } catch (error) {
    const err = error || {}
    const statusCode = err.statusCode || err.status || (err.response && err.response.status) || 500
    const message = err.message || ''

    // Handle chunk loading errors
    // This may be due to a new deployment or a network problem
    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
      window.location.reload(true /* skip cache */)
      return // prevent error page blinking for user
    }

    this.error({ statusCode, message })
    this.$nuxt.$emit('routeChanged', to, from, err)
    next()
  }
}

async function render (to, from, next) {
  if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
    return next()
  }
  // Handle first render on SPA mode
  let spaFallback = false
  if (to === from) {
    _lastPaths = []
    spaFallback = true
  } else {
    const fromMatches = []
    _lastPaths = getMatchedComponents(from, fromMatches).map((Component, i) => {
      return compile(from.matched[fromMatches[i]].path)(from.params)
    })
  }

  // nextCalled is true when redirected
  let nextCalled = false
  const _next = (path) => {
    if (nextCalled) {
      return
    }

    nextCalled = true
    next(path)
  }

  // Update context
  await setContext(app, {
    route: to,
    from,
    next: _next.bind(this)
  })
  this._dateLastError = app.nuxt.dateErr
  this._hadError = Boolean(app.nuxt.err)

  // Get route's matched components
  const matches = []
  const Components = getMatchedComponents(to, matches)

  // If no Components matched, generate 404
  if (!Components.length) {
    // Show error page
    app.context.error({ statusCode: 404, message: 'This page could not be found' })
    return next()
  }

  try {
    // If not redirected
    if (!nextCalled) {
      next()
    }
  } catch (err) {
    const error = err || {}
    if (error.message === 'ERR_REDIRECT') {
      return this.$nuxt.$emit('routeChanged', to, from, error)
    }
    _lastPaths = []

    globalHandleError(error)

    this.error(error)
    this.$nuxt.$emit('routeChanged', to, from, error)
    next()
  }
}

// Fix components format in matched, it's due to code-splitting of vue-router
function normalizeComponents (to, ___) {
  flatMapComponents(to, (Component, _, match, key) => {
    if (typeof Component === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = Vue.extend(Component)
      Component._Ctor = Component
      match.components[key] = Component
    }
    return Component
  })
}

function checkForErrors (app) {
  // Hide error component if no error
  if (app._hadError && app._dateLastError === app.$options.nuxt.dateErr) {
    app.error()
  }
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch (to, ___) {
  if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
    return
  }

  const instances = getMatchedComponentsInstances(to)
  const Components = getMatchedComponents(to)

  let triggerScroll = true

  Vue.nextTick(() => {
    instances.forEach((instance, i) => {
      if (!instance || instance._isDestroyed) {
        return
      }

      if (
        instance.constructor._dataRefresh &&
        Components[i] === instance.constructor &&
        instance.$vnode.data.keepAlive !== true &&
        typeof instance.constructor.options.data === 'function'
      ) {
        const newData = instance.constructor.options.data.call(instance)
        for (const key in newData) {
          Vue.set(instance.$data, key, newData[key])
        }

        triggerScroll = true
      }
    })

    if (triggerScroll) {
      // Ensure to trigger scroll event after calling scrollBehavior
      window.$nuxt.$nextTick(() => {
        window.$nuxt.$emit('triggerScroll')
      })
    }

    checkForErrors(this)
  })
}

function nuxtReady (_app) {
  window.onNuxtReadyCbs.forEach((cb) => {
    if (typeof cb === 'function') {
      cb(_app)
    }
  })
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app)
  }
  // Add router hooks
  router.afterEach((to, from) => {
    // Wait for fixPrepatch + $data updates
    Vue.nextTick(() => _app.$nuxt.$emit('routeChanged', to, from))
  })
}

async function mountApp (__app) {
  // Set global variables
  app = __app.app
  router = __app.router
  store = __app.store

  // Create Vue instance
  const _app = new Vue(app)

  // Load page chunk
  if (!NUXT.data && NUXT.serverRendered) {
    try {
      const payload = await _app.fetchPayload(NUXT.routePath || _app.context.route.path)
      Object.assign(NUXT, payload)
    } catch (err) {}
  }

  // Mounts Vue app to DOM element
  const mount = () => {
    _app.$mount('#__nuxt')

    // Add afterEach router hooks
    router.afterEach(normalizeComponents)

    router.afterEach(fixPrepatch.bind(_app))

    // Listen for first Vue update
    Vue.nextTick(() => {
      // Call window.{{globals.readyCallback}} callbacks
      nuxtReady(_app)
    })
  }

  // Initialize error handler
  _app.$loading = {} // To avoid error while _app.$nuxt does not exist
  if (NUXT.error) {
    _app.error(NUXT.error)
  }

  // Add beforeEach router hooks
  router.beforeEach(loadAsyncComponents.bind(_app))
  router.beforeEach(render.bind(_app))

  // Fix in static: remove trailing slash to force hydration
  // Full static, if server-rendered: hydrate, to allow custom redirect to generated page

  if (NUXT.serverRendered) {
    return mount()
  }

  // First render on client-side
  const clientFirstMount = () => {
    normalizeComponents(router.currentRoute, router.currentRoute)
    setLayoutForNextPage.call(_app, router.currentRoute)
    checkForErrors(_app)
    // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render
    mount()
  }

  // fix: force next tick to avoid having same timestamp when an error happen on spa fallback
  await new Promise(resolve => setTimeout(resolve, 0))
  render.call(_app, router.currentRoute, router.currentRoute, (path) => {
    // If not redirected
    if (!path) {
      clientFirstMount()
      return
    }

    // Add a one-time afterEach hook to
    // mount the app wait for redirect and route gets resolved
    const unregisterHook = router.afterEach((to, from) => {
      unregisterHook()
      clientFirstMount()
    })

    // Push the path and let route to be resolved
    router.push(path, undefined, (err) => {
      if (err) {
        errorHandler(err)
      }
    })
  })
}
