import Vue from 'vue'
import { decode, parsePath, withoutBase, withoutTrailingSlash, normalizeURL } from 'ufo'

import NuxtError from './components/nuxt-error.vue'

import '../node_modules/vuetify/dist/vuetify.css'

export default {
  render (h, props) {
    const templateEl = h('nuxt')

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [

      templateEl
    ])
  },

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this

    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  async mounted () {
    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        await this.$store.dispatch('nuxtServerInit', this.context)
      }
      await this.refresh()
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    /* eslint-disable comma-dangle */

    async refresh () {
    },
    errorChanged () {
      if (this.nuxt.err) {
        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context)
        }

        this.setLayout(errorLayout)
      }
    },

    getRouterBase() {
      return withoutTrailingSlash(this.$router.options.base)
    },
    getRoutePath(route = '/') {
      const base = this.getRouterBase()
      return withoutTrailingSlash(withoutBase(parsePath(route).pathname, base))
    },
    getStaticAssetsPath(route = '/') {
      const { staticAssetsBase } = window.__NUXT__

      return urlJoin(staticAssetsBase, this.getRoutePath(route))
    },

      async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', normalizeURL(urlJoin(this.getStaticAssetsPath(), 'manifest.js')))
    },

    setPagePayload(payload) {
      this._pagePayload = payload
      this._fetchCounters = {}
    },
    async fetchPayload(route, prefetch) {
      const path = decode(this.getRoutePath(route))

      const manifest = await this.fetchStaticManifest()
      if (!manifest.routes.includes(path)) {
        if (!prefetch) { this.setPagePayload(false) }
        throw new Error(`Route ${path} is not pre-rendered`)
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js')
      try {
        const payload = await window.__NUXT_IMPORT__(path, normalizeURL(src))
        if (!prefetch) { this.setPagePayload(payload) }
        return payload
      } catch (err) {
        if (!prefetch) { this.setPagePayload(false) }
        throw err
      }
    }
  },

  /* eslint-enable comma-dangle */
}
