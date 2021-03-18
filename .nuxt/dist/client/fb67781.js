(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(83).default
var update = add("6ac3c623", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(172);


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(82);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.mjs + 2 modules
var dist = __webpack_require__(7);

// CONCATENATED MODULE: ./.nuxt/utils.js
























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (true) {
  window.onNuxtReadyCbs = [];

  window.onNuxtReady = function (cb) {
    window.onNuxtReadyCbs.push(cb);
  };
}

function createGetCounter(counterObject) {
  var defaultKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function getCounter() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue_runtime_esm["default"].config.errorHandler) {
    vue_runtime_esm["default"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(function (m) {
    return m.default || m;
  });
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue_runtime_esm["default"].extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'components';
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m[prop]).map(function (key) {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).reduce(function (promises, key) {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Component, instance, match, key) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              match.components[key] = Component = sanitizeComponent(Component);
              return _context.abrupt("return", typeof fn === 'function' ? fn(Component, instance, match, key) : Component);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
}
function getRouteData(_x5) {
  return _getRouteData.apply(this, arguments);
}

function _getRouteData() {
  _getRouteData = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(route) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (route) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _context2.next = 4;
            return resolveRouteComponents(route);

          case 4:
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, route), {}, {
              meta: getMatchedComponents(route).map(function (Component, index) {
                return _objectSpread(_objectSpread({}, Component.options.meta), (route.matched[index] || {}).meta);
              })
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRouteData.apply(this, arguments);
}

function setContext(_x6, _x7) {
  return _setContext.apply(this, arguments);
}

function _setContext() {
  _setContext = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(app, context) {
    var _yield$Promise$all, _yield$Promise$all2, currentRouteData, fromRouteData;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // If context not defined, create it
            if (!app.context) {
              app.context = {
                isStatic: true,
                isDev: false,
                isHMR: false,
                app: app,
                store: app.store,
                payload: context.payload,
                error: context.error,
                base: app.router.options.base,
                env: {} // eslint-disable-line

              }; // Only set once

              if (context.ssrContext) {
                app.context.ssrContext = context.ssrContext;
              }

              app.context.redirect = function (status, path, query) {
                if (!status) {
                  return;
                }

                app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

                var pathType = Object(esm_typeof["a" /* default */])(path);

                if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                  query = path || {};
                  path = status;
                  pathType = Object(esm_typeof["a" /* default */])(path);
                  status = 302;
                }

                if (pathType === 'object') {
                  path = app.router.resolve(path).route.fullPath;
                } // "/absolute/route", "./relative/route" or "../relative/route"


                if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                  app.context.next({
                    path: path,
                    query: query,
                    status: status
                  });
                } else {
                  path = Object(dist["f" /* withQuery */])(path, query);

                  if (false) {}

                  if (true) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                    window.location.replace(path); // Throw a redirect error

                    throw new Error('ERR_REDIRECT');
                  }
                }
              };

              if (false) {}

              if (true) {
                app.context.nuxtState = window.__NUXT__;
              }
            } // Dynamic keys


            _context3.next = 3;
            return Promise.all([getRouteData(context.route), getRouteData(context.from)]);

          case 3:
            _yield$Promise$all = _context3.sent;
            _yield$Promise$all2 = Object(slicedToArray["a" /* default */])(_yield$Promise$all, 2);
            currentRouteData = _yield$Promise$all2[0];
            fromRouteData = _yield$Promise$all2[1];

            if (context.route) {
              app.context.route = currentRouteData;
            }

            if (context.from) {
              app.context.from = fromRouteData;
            }

            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = false;
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setContext.apply(this, arguments);
}

function promisify(fn, context) {
  var promise = fn(context);

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  var path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  var fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["d" /* normalizeURL */])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  var diff = {};

  var queries = _objectSpread(_objectSpread({}, toQuery), fromQuery);

  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  var message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = "[".concat(err.constructor.name, "]");
    }
  } else {
    message = err.message || err;
  }

  return _objectSpread(_objectSpread({}, err), {}, {
    message: message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  var re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (Object(esm_typeof["a" /* default */])(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var _i = 0; _i < tokens.length; _i++) {
      var token = tokens[_i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name || 'pathMatch'];
      var segment = void 0;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[_i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[_i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
var utils_urlJoin = dist["c" /* joinURL */];
var stripTrailingSlash = dist["h" /* withoutTrailingSlash */];
var isSamePath = dist["b" /* isSamePath */];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(79);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js



if (true) {
  if ('scrollRestoration' in window.history) {
    setScrollRestoration('manual'); // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.

    window.addEventListener('beforeunload', function () {
      setScrollRestoration('auto');
    }); // Setting scrollRestoration to manual again when returning to this page.

    window.addEventListener('load', function () {
      setScrollRestoration('manual');
    });
  }
}

function shouldScrollToTop(route) {
  var Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    var _Pages$0$options = Pages[0].options,
        options = _Pages$0$options === void 0 ? {} : _Pages$0$options;
    return options.scrollToTop !== false;
  }

  return Pages.some(function (_ref) {
    var options = _ref.options;
    return options && options.scrollToTop;
  });
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  var position = false;
  var isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  var nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(function () {
      return nuxt.$emit('triggerScroll');
    });
  }

  return new Promise(function (resolve) {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', function () {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        var hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js


function router_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function router_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { router_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { router_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // eslint-disable-line no-unused-vars



var emptyFn = function emptyFn() {};

vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
var routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,

  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [],

  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  fallback: false
};
function createRouter(ssrContext, config) {
  var base = config.app && config.app.basePath || routerOptions.base;
  var router = new vue_router_esm["a" /* default */](router_objectSpread(router_objectSpread({}, routerOptions), {}, {
    base: base
  })); // TODO: remove in Nuxt 3

  var originalPush = router.push;

  router.push = function push(location) {
    var onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
    var onAbort = arguments.length > 2 ? arguments[2] : undefined;
    return originalPush.call(this, location, onComplete, onAbort);
  };

  var resolve = router.resolve.bind(router);

  router.resolve = function (to, current, append) {
    if (typeof to === 'string') {
      to = Object(dist["d" /* normalizeURL */])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
// @vue/component
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render: function render(_, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;
    var h = parent.$createElement;
    var routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return routerView;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var nuxt_errorvue_type_template_id_5eb69f1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_c('div',{staticClass:"error"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"90","height":"90","fill":"#DBE1EC","viewBox":"0 0 48 48"}},[_c('path',{attrs:{"d":"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),(_vm.statusCode === 404)?_c('p',{staticClass:"description"},[(typeof _vm.$route === 'undefined')?_c('a',{staticClass:"error-link",attrs:{"href":"/"}}):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('a',{attrs:{"href":"https://nuxtjs.org","target":"_blank","rel":"noopener"}},[_vm._v("Nuxt")])])}]


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode: function statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message: function message() {
      return this.error.message || 'Error';
    }
  },
  head: function head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&
var nuxt_errorvue_type_style_index_0_lang_css_ = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  nuxt_errorvue_type_template_id_5eb69f1c_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nuxt_error = (component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js








 // @vue/component

/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured: function errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      var _this$$route$matched = Object(slicedToArray["a" /* default */])(this.$route.matched, 1),
          matchedRoute = _this$$route$matched[0];

      if (!matchedRoute) {
        return this.$route.path;
      }

      var Component = matchedRoute.components.default;

      if (Component && Component.options) {
        var options = Component.options;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      var strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render: function render(h) {
    var _this = this;

    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(function () {
        return _this.errorFromNuxtError = false;
      });
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', "Error details: ".concat(this.errorFromNuxtError.toString())), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(function () {
      return _this.displayingNuxtError = false;
    });
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.css
var dist_vuetify = __webpack_require__(170);

// CONCATENATED MODULE: ./.nuxt/App.js








/* harmony default export */ var App = ({
  render: function render(h, props) {
    var templateEl = h('nuxt');
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [templateEl]);
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (true) {
      // add to window so we can listen when ready
      window.$nuxt = this;
    } // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.isPreview) {
                _context.next = 6;
                break;
              }

              if (!(_this.$store && _this.$store._actions.nuxtServerInit)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.$store.dispatch('nuxtServerInit', _this.context);

            case 4:
              _context.next = 6;
              return _this.refresh();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    /* eslint-disable comma-dangle */
    refresh: function refresh() {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    errorChanged: function errorChanged() {
      if (this.nuxt.err) {
        var errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },
    getRouterBase: function getRouterBase() {
      return Object(dist["h" /* withoutTrailingSlash */])(this.$router.options.base);
    },
    getRoutePath: function getRoutePath() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      var base = this.getRouterBase();
      return Object(dist["h" /* withoutTrailingSlash */])(Object(dist["g" /* withoutBase */])(Object(dist["e" /* parsePath */])(route).pathname, base));
    },
    getStaticAssetsPath: function getStaticAssetsPath() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      var staticAssetsBase = window.__NUXT__.staticAssetsBase;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },
    fetchStaticManifest: function fetchStaticManifest() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", window.__NUXT_IMPORT__('manifest.js', Object(dist["d" /* normalizeURL */])(urlJoin(_this2.getStaticAssetsPath(), 'manifest.js'))));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setPagePayload: function setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },
    fetchPayload: function fetchPayload(route, prefetch) {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var path, manifest, src, payload;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                path = Object(dist["a" /* decode */])(_this3.getRoutePath(route));
                _context4.next = 3;
                return _this3.fetchStaticManifest();

              case 3:
                manifest = _context4.sent;

                if (manifest.routes.includes(path)) {
                  _context4.next = 7;
                  break;
                }

                if (!prefetch) {
                  _this3.setPagePayload(false);
                }

                throw new Error("Route ".concat(path, " is not pre-rendered"));

              case 7:
                src = urlJoin(_this3.getStaticAssetsPath(route), 'payload.js');
                _context4.prev = 8;
                _context4.next = 11;
                return window.__NUXT_IMPORT__(path, Object(dist["d" /* normalizeURL */])(src));

              case 11:
                payload = _context4.sent;

                if (!prefetch) {
                  _this3.setPagePayload(payload);
                }

                return _context4.abrupt("return", payload);

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](8);

                if (!prefetch) {
                  _this3.setPagePayload(false);
                }

                throw _context4.t0;

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[8, 16]]);
      }))();
    }
  }
  /* eslint-enable comma-dangle */

});
// CONCATENATED MODULE: ./.nuxt/store.js


vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
var store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


var createStore = store_store instanceof Function ? store_store : function () {
  return new vuex_esm["a" /* default */].Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error("[nuxt] ".concat(filePath, " should export a method that returns a Vuex instance."));
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    // eslint-disable-next-line no-console
    console.warn("'state' should be a method that returns an object in ".concat(filePath));

    var _state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys


    moduleData = Object.assign({}, moduleData, {
      state: function state() {
        return _state;
      }
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


var components = {
  AddBelief: function AddBelief() {
    return __webpack_require__.e(/* import() | components/add-belief */ 2).then(__webpack_require__.bind(null, 200)).then(function (c) {
      return c.default || c;
    });
  },
  AppBackground: function AppBackground() {
    return __webpack_require__.e(/* import() | components/app-background */ 3).then(__webpack_require__.bind(null, 292)).then(function (c) {
      return c.default || c;
    });
  },
  AppBar: function AppBar() {
    return __webpack_require__.e(/* import() | components/app-bar */ 4).then(__webpack_require__.bind(null, 293)).then(function (c) {
      return c.default || c;
    });
  },
  BaseWidget: function BaseWidget() {
    return __webpack_require__.e(/* import() | components/base-widget */ 5).then(__webpack_require__.bind(null, 175)).then(function (c) {
      return c.default || c;
    });
  },
  BeliefDetails: function BeliefDetails() {
    return __webpack_require__.e(/* import() | components/belief-details */ 6).then(__webpack_require__.bind(null, 294)).then(function (c) {
      return c.default || c;
    });
  },
  BeliefNode: function BeliefNode() {
    return __webpack_require__.e(/* import() | components/belief-node */ 7).then(__webpack_require__.bind(null, 202)).then(function (c) {
      return c.default || c;
    });
  },
  D3Tree: function D3Tree() {
    return Promise.all(/* import() | components/d3tree */[__webpack_require__.e(14), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 295)).then(function (c) {
      return c.default || c;
    });
  },
  DonutChart: function DonutChart() {
    return __webpack_require__.e(/* import() | components/donut-chart */ 9).then(__webpack_require__.bind(null, 177)).then(function (c) {
      return c.default || c;
    });
  },
  FileInput: function FileInput() {
    return __webpack_require__.e(/* import() | components/file-input */ 10).then(__webpack_require__.bind(null, 296)).then(function (c) {
      return c.default || c;
    });
  },
  IconRoundedSquare: function IconRoundedSquare() {
    return __webpack_require__.e(/* import() | components/icon-rounded-square */ 11).then(__webpack_require__.bind(null, 201)).then(function (c) {
      return c.default || c;
    });
  }
};

for (var plugin_name in components) {
  vue_runtime_esm["default"].component(plugin_name, components[plugin_name]);
  vue_runtime_esm["default"].component('Lazy' + plugin_name, components[plugin_name]);
}
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify_dist_vuetify = __webpack_require__(80);
var dist_vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var vuetify_options = ({
  "theme": {
    "themes": {
      "light": {
        "primary": "#fafafa"
      },
      "dark": {
        "primary": "#fafafa",
        "accent": "#424242",
        "secondary": "#ff8f00",
        "info": "#26a69a",
        "warning": "#ffc107",
        "error": "#dd2c00",
        "success": "#00e676"
      }
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



vue_runtime_esm["default"].use(dist_vuetify_default.a, {});
/* harmony default export */ var vuetify_plugin = (function (ctx) {
  var vuetifyOptions = typeof vuetify_options === 'function' ? vuetify_options(ctx) : vuetify_options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  var vuetify = new dist_vuetify_default.a(vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// CONCATENATED MODULE: ./.nuxt/index.js






function _nuxt_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _nuxt_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _nuxt_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _nuxt_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/* Plugins */

/* eslint-disable camelcase */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./vuetify/plugin.js (mode: 'all')

/* eslint-enable camelcase */
// Component: <NuxtChild>

vue_runtime_esm["default"].component(nuxt_child.name, nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

vue_runtime_esm["default"].component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime_esm["default"].prototype, '$nuxt', {
  get: function get() {
    return this.$root.$options.$nuxt;
  },
  configurable: true
});
var originalRegisterModule = vuex_esm["a" /* default */].Store.prototype.registerModule;

function registerModule(path, rawModule) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var preserveState =  true && (Array.isArray(path) ? !!path.reduce(function (namespacedState, path) {
    return namespacedState && namespacedState[path];
  }, this.state) : path in this.state);
  return originalRegisterModule.call(this, path, rawModule, _nuxt_objectSpread({
    preserveState: preserveState
  }, options));
}

function createApp(_x) {
  return _createApp.apply(this, arguments);
}

function _createApp() {
  _createApp = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ssrContext) {
    var config,
        router,
        store,
        app,
        next,
        route,
        path,
        inject,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            inject = function _inject(key, value) {
              if (!key) {
                throw new Error('inject(key, value) has no key provided');
              }

              if (value === undefined) {
                throw new Error("inject('".concat(key, "', value) has no value provided"));
              }

              key = '$' + key; // Add into app

              app[key] = value; // Add into context

              if (!app.context[key]) {
                app.context[key] = value;
              } // Add into store


              store[key] = app[key]; // Check if plugin not already installed

              var installKey = '__nuxt_' + key + '_installed__';

              if (vue_runtime_esm["default"][installKey]) {
                return;
              }

              vue_runtime_esm["default"][installKey] = true; // Call Vue.use() to install the plugin into vm

              vue_runtime_esm["default"].use(function () {
                if (!Object.prototype.hasOwnProperty.call(vue_runtime_esm["default"].prototype, key)) {
                  Object.defineProperty(vue_runtime_esm["default"].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            };

            config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 4;
            return createRouter(ssrContext, config);

          case 4:
            router = _context2.sent;
            store = createStore(ssrContext); // Add this.$router into store actions/mutations

            store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

            store.registerModule = registerModule; // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = _nuxt_objectSpread({
              store: store,
              router: router,
              nuxt: {
                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = Boolean(err);
                  err = err ? normalizeError(err) : null;
                  var nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

                  if (this) {
                    nuxt = this.nuxt || this.$options.nuxt;
                  }

                  nuxt.dateErr = Date.now();
                  nuxt.err = err; // Used in src/server.js

                  if (ssrContext) {
                    ssrContext.nuxt.error = err;
                  }

                  return err;
                }
              }
            }, App); // Make app available into store via this.app

            store.app = app;
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            }; // Resolve route

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = getLocation(router.options.base, router.options.mode);
              route = router.resolve(path).route;
            } // Set context to app.context


            _context2.next = 14;
            return setContext(app, {
              store: store,
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),
              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
              ssrContext: ssrContext
            });

          case 14:
            // Inject runtime config as $config
            inject('config', config);

            if (true) {
              // Replace store state before plugins execution
              if (window.__NUXT__ && window.__NUXT__.state) {
                store.replaceState(window.__NUXT__.state);
              }
            } // Add enablePreview(previewData = {}) in context for plugins


            if (true) {
              app.context.enablePreview = function () {
                var previewData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                app.previewData = Object.assign({}, previewData);
                inject('preview', previewData);
              };
            } // Plugin execution

            /* eslint-disable camelcase */


            if (!(typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function')) {
              _context2.next = 20;
              break;
            }

            _context2.next = 20;
            return /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);

          case 20:
            if (!(typeof vuetify_plugin === 'function')) {
              _context2.next = 23;
              break;
            }

            _context2.next = 23;
            return vuetify_plugin(app.context, inject);

          case 23:
            /* eslint-enable camelcase */
            // Lock enablePreview in context
            if (true) {
              app.context.enablePreview = function () {
                console.warn('You cannot call enablePreview() outside a plugin.');
              };
            } // If server-side, wait for async component to be resolved first


            if (true) {
              _context2.next = 27;
              break;
            }

            _context2.next = 27;
            return new Promise(function (resolve, reject) {
              router.push(ssrContext.url, resolve, function (err) {
                // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
                if (!err._isRouter) return reject(err);
                if (err.type !== 2
                /* NavigationFailureType.redirected */
                ) return resolve(); // navigated to a different route in router guard

                var unregister = router.afterEach( /*#__PURE__*/function () {
                  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            ssrContext.url = to.fullPath;
                            _context.next = 3;
                            return getRouteData(to);

                          case 3:
                            app.context.route = _context.sent;
                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            });

          case 27:
            return _context2.abrupt("return", {
              store: store,
              app: app,
              router: router
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createApp.apply(this, arguments);
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js
 // @vue/component

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: vue_runtime_esm["default"].component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/jsonp.js



var chunks = {}; // chunkId => exports

var chunksInstalling = {}; // chunkId => Promise

var failedChunks = {};

function importChunk(chunkId, src) {
  // Already installed
  if (chunks[chunkId]) {
    return Promise.resolve(chunks[chunkId]);
  } // Failed loading


  if (failedChunks[chunkId]) {
    return Promise.reject(failedChunks[chunkId]);
  } // Installing


  if (chunksInstalling[chunkId]) {
    return chunksInstalling[chunkId];
  } // Set a promise in chunk cache


  var resolve, reject;
  var promise = chunksInstalling[chunkId] = new Promise(function (_resolve, _reject) {
    resolve = _resolve;
    reject = _reject;
  }); // Clear chunk data from cache

  delete chunks[chunkId]; // Start chunk loading

  var script = document.createElement('script');
  script.charset = 'utf-8';
  script.timeout = 120;
  script.src = src;
  var timeout; // Create error before stack unwound to get useful stacktrace later

  var error = new Error(); // Complete handlers

  var onScriptComplete = script.onerror = script.onload = function (event) {
    // Cleanups
    clearTimeout(timeout);
    delete chunksInstalling[chunkId]; // Avoid mem leaks in IE

    script.onerror = script.onload = null; // Verify chunk is loaded

    if (chunks[chunkId]) {
      return resolve(chunks[chunkId]);
    } // Something bad happened


    var errorType = event && (event.type === 'load' ? 'missing' : event.type);
    var realSrc = event && event.target && event.target.src;
    error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
    error.name = 'ChunkLoadError';
    error.type = errorType;
    error.request = realSrc;
    failedChunks[chunkId] = error;
    reject(error);
  }; // Timeout


  timeout = setTimeout(function () {
    onScriptComplete({
      type: 'timeout',
      target: script
    });
  }, 120000); // Append script

  document.head.appendChild(script); // Return promise

  return promise;
}

function installJsonp() {
  window.__NUXT_JSONP__ = function (chunkId, exports) {
    chunks[chunkId] = exports;
  };

  window.__NUXT_JSONP_CACHE__ = chunks;
  window.__NUXT_IMPORT__ = importChunk;
}
// CONCATENATED MODULE: ./.nuxt/client.js















 // should be included after ./index.js


installJsonp(); // Component: <NuxtLink>

vue_runtime_esm["default"].component(nuxt_link_server.name, nuxt_link_server); // Global shared references

var _lastPaths = []; // eslint-disable-line no-unused-vars

var client_app;
var client_router;
var client_store; // eslint-disable-line no-unused-vars
// Try to rehydrate SSR data from window

var NUXT = window.__NUXT__ || {};
var $config = NUXT.config || {};

if ($config.app) {
  __webpack_require__.p = utils_urlJoin($config.app.cdnURL, $config.app.assetsPath);
}

Object.assign(vue_runtime_esm["default"].config, {
  "silent": true,
  "performance": false
}); // eslint-disable-line

var errorHandler = vue_runtime_esm["default"].config.errorHandler || console.error; // Create and mount App

createApp(null, NUXT.config).then(mountApp).catch(errorHandler);

function loadAsyncComponents(_x, _x2, _x3) {
  return _loadAsyncComponents.apply(this, arguments);
}

function _loadAsyncComponents() {
  _loadAsyncComponents = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from, next) {
    var _this2 = this;

    var Components, startLoader, err, statusCode, message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if route changed (this._routeChanged), only if the page is not an error (for validate())
            this._routeChanged = Boolean(client_app.nuxt.err) || from.name !== to.name;
            this._paramChanged = !this._routeChanged && from.path !== to.path;
            this._queryChanged = !this._paramChanged && from.fullPath !== to.fullPath;
            this._diffQuery = this._queryChanged ? getQueryDiff(to.query, from.query) : [];
            _context.prev = 4;

            if (!this._queryChanged) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return resolveRouteComponents(to, function (Component, instance) {
              return {
                Component: Component,
                instance: instance
              };
            });

          case 8:
            Components = _context.sent;
            // Add a marker on each component that it needs to refresh or not
            startLoader = Components.some(function (_ref) {
              var Component = _ref.Component,
                  instance = _ref.instance;
              var watchQuery = Component.options.watchQuery;

              if (watchQuery === true) {
                return true;
              }

              if (Array.isArray(watchQuery)) {
                return watchQuery.some(function (key) {
                  return _this2._diffQuery[key];
                });
              }

              if (typeof watchQuery === 'function') {
                return watchQuery.apply(instance, [to.query, from.query]);
              }

              return false;
            });

          case 10:
            // Call next()
            next();
            _context.next = 24;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](4);
            err = _context.t0 || {};
            statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
            message = err.message || ''; // Handle chunk loading errors
            // This may be due to a new deployment or a network problem

            if (!/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
              _context.next = 21;
              break;
            }

            window.location.reload(true
            /* skip cache */
            );
            return _context.abrupt("return");

          case 21:
            this.error({
              statusCode: statusCode,
              message: message
            });
            this.$nuxt.$emit('routeChanged', to, from, err);
            next();

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 13]]);
  }));
  return _loadAsyncComponents.apply(this, arguments);
}

function client_render(_x4, _x5, _x6) {
  return _render.apply(this, arguments);
} // Fix components format in matched, it's due to code-splitting of vue-router


function _render() {
  _render = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(to, from, next) {
    var spaFallback, fromMatches, nextCalled, _next, matches, Components, error;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(this._routeChanged === false && this._paramChanged === false && this._queryChanged === false)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", next());

          case 2:
            // Handle first render on SPA mode
            spaFallback = false;

            if (to === from) {
              _lastPaths = [];
              spaFallback = true;
            } else {
              fromMatches = [];
              _lastPaths = getMatchedComponents(from, fromMatches).map(function (Component, i) {
                return compile(from.matched[fromMatches[i]].path)(from.params);
              });
            } // nextCalled is true when redirected


            nextCalled = false;

            _next = function _next(path) {
              if (nextCalled) {
                return;
              }

              nextCalled = true;
              next(path);
            }; // Update context


            _context2.next = 8;
            return setContext(client_app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 8:
            this._dateLastError = client_app.nuxt.dateErr;
            this._hadError = Boolean(client_app.nuxt.err); // Get route's matched components

            matches = [];
            Components = getMatchedComponents(to, matches); // If no Components matched, generate 404

            if (Components.length) {
              _context2.next = 15;
              break;
            }

            // Show error page
            client_app.context.error({
              statusCode: 404,
              message: 'This page could not be found'
            });
            return _context2.abrupt("return", next());

          case 15:
            _context2.prev = 15;

            // If not redirected
            if (!nextCalled) {
              next();
            }

            _context2.next = 29;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](15);
            error = _context2.t0 || {};

            if (!(error.message === 'ERR_REDIRECT')) {
              _context2.next = 24;
              break;
            }

            return _context2.abrupt("return", this.$nuxt.$emit('routeChanged', to, from, error));

          case 24:
            _lastPaths = [];
            globalHandleError(error);
            this.error(error);
            this.$nuxt.$emit('routeChanged', to, from, error);
            next();

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[15, 19]]);
  }));
  return _render.apply(this, arguments);
}

function normalizeComponents(to, ___) {
  flatMapComponents(to, function (Component, _, match, key) {
    if (Object(esm_typeof["a" /* default */])(Component) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = vue_runtime_esm["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }

    return Component;
  });
}

function checkForErrors(app) {
  // Hide error component if no error
  if (app._hadError && app._dateLastError === app.$options.nuxt.dateErr) {
    app.error();
  }
} // When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves


function fixPrepatch(to, ___) {
  var _this = this;

  if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
    return;
  }

  var instances = getMatchedComponentsInstances(to);
  var Components = getMatchedComponents(to);
  var triggerScroll = true;
  vue_runtime_esm["default"].nextTick(function () {
    instances.forEach(function (instance, i) {
      if (!instance || instance._isDestroyed) {
        return;
      }

      if (instance.constructor._dataRefresh && Components[i] === instance.constructor && instance.$vnode.data.keepAlive !== true && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);

        for (var key in newData) {
          vue_runtime_esm["default"].set(instance.$data, key, newData[key]);
        }

        triggerScroll = true;
      }
    });

    if (triggerScroll) {
      // Ensure to trigger scroll event after calling scrollBehavior
      window.$nuxt.$nextTick(function () {
        window.$nuxt.$emit('triggerScroll');
      });
    }

    checkForErrors(_this);
  });
}

function nuxtReady(_app) {
  window.onNuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  }); // Special JSDOM

  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  } // Add router hooks


  client_router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    vue_runtime_esm["default"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

function mountApp(_x7) {
  return _mountApp.apply(this, arguments);
}

function _mountApp() {
  _mountApp = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(__app) {
    var _app, payload, mount, clientFirstMount;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Set global variables
            client_app = __app.app;
            client_router = __app.router;
            client_store = __app.store; // Create Vue instance

            _app = new vue_runtime_esm["default"](client_app); // Load page chunk

            if (!(!NUXT.data && NUXT.serverRendered)) {
              _context3.next = 14;
              break;
            }

            _context3.prev = 5;
            _context3.next = 8;
            return _app.fetchPayload(NUXT.routePath || _app.context.route.path);

          case 8:
            payload = _context3.sent;
            Object.assign(NUXT, payload);
            _context3.next = 14;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);

          case 14:
            // Mounts Vue app to DOM element
            mount = function mount() {
              _app.$mount('#__nuxt'); // Add afterEach router hooks


              client_router.afterEach(normalizeComponents);
              client_router.afterEach(fixPrepatch.bind(_app)); // Listen for first Vue update

              vue_runtime_esm["default"].nextTick(function () {
                // Call window.{{globals.readyCallback}} callbacks
                nuxtReady(_app);
              });
            }; // Initialize error handler


            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist

            if (NUXT.error) {
              _app.error(NUXT.error);
            } // Add beforeEach router hooks


            client_router.beforeEach(loadAsyncComponents.bind(_app));
            client_router.beforeEach(client_render.bind(_app)); // Fix in static: remove trailing slash to force hydration
            // Full static, if server-rendered: hydrate, to allow custom redirect to generated page

            if (!NUXT.serverRendered) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", mount());

          case 21:
            // First render on client-side
            clientFirstMount = function clientFirstMount() {
              normalizeComponents(client_router.currentRoute, client_router.currentRoute);
              setLayoutForNextPage.call(_app, client_router.currentRoute);
              checkForErrors(_app); // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render

              mount();
            }; // fix: force next tick to avoid having same timestamp when an error happen on spa fallback


            _context3.next = 24;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });

          case 24:
            client_render.call(_app, client_router.currentRoute, client_router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                clientFirstMount();
                return;
              } // Add a one-time afterEach hook to
              // mount the app wait for redirect and route gets resolved


              var unregisterHook = client_router.afterEach(function (to, from) {
                unregisterHook();
                clientFirstMount();
              }); // Push the path and let route to be resolved

              client_router.push(path, undefined, function (err) {
                if (err) {
                  errorHandler(err);
                }
              });
            });

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));
  return _mountApp.apply(this, arguments);
}

/***/ })

},[[130,12,1,13]]]);