exports.ids = [2,10];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconRoundedSquare.vue?vue&type=template&id=5dc6a02e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{ref:_vm.name},[_vm._ssrNode("<rect"+(_vm._ssrAttr("x",_vm.position.x))+(_vm._ssrAttr("y",_vm.position.y))+(_vm._ssrAttr("width",_vm.rectSize))+(_vm._ssrAttr("height",_vm.rectSize))+(_vm._ssrAttr("opacity",_vm.opacity))+(_vm._ssrStyle(null,_vm.styles, null))+" data-v-5dc6a02e></rect>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/IconRoundedSquare.vue?vue&type=template&id=5dc6a02e&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconRoundedSquare.vue?vue&type=script&lang=ts&

/* harmony default export */ var IconRoundedSquarevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'IconRoundedSquare',
  props: ['name', 'position', 'size', 'opacity', 'colour'],
  computed: {
    rectSize() {
      const minSize = 50,
            maxSize = 250,
            randomSize = this.size / Math.random();
      return this.getFramedValue(minSize, maxSize, randomSize);
    },

    rectRotation() {
      const minRotation = 35,
            maxRotation = 65,
            randomRotation = 100 * Math.random();
      return this.getFramedValue(minRotation, maxRotation, randomRotation);
    },

    rectDepth() {
      return 999 / Math.random();
    },

    styles() {
      return {
        fill: this.colour,
        transformOrigin: 'center',
        transform: 'rotate(' + this.rectRotation + 'deg)',
        zIndex: 999
      };
    }

  },
  methods: {
    getFramedValue(min, max, val) {
      if (val < min) return min;else if (val > max) return max;else return val;
    }

  },

  mounted() {// const travel = this.$anime({
    // })
  }

}));
// CONCATENATED MODULE: ./components/IconRoundedSquare.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_IconRoundedSquarevue_type_script_lang_ts_ = (IconRoundedSquarevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/IconRoundedSquare.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IconRoundedSquarevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5dc6a02e",
  "04bfc7bc"
  
)

/* harmony default export */ var IconRoundedSquare = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("08a7d348", content, false, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app-background[data-v-46bc9ac2]{position:fixed;top:0;right:0;width:200%;height:200%;z-index:0;pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppBackground.vue?vue&type=template&id=46bc9ac2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app-background"}},[_vm._ssrNode("<svg"+(_vm._ssrAttr("viewBox",_vm.viewBoxAttrs))+" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" data-v-46bc9ac2>","</svg>",_vm._l((_vm.numSquares),function(n){return _c('icon-rounded-square',{key:n,attrs:{"name":("rect_" + n),"position":{ 
        x: ((75 * n) / Math.random()), 
        y: (((_vm.windowDimensions.height / 10) * n) / Math.random())
      },"size":50,"opacity":0.6,"colour":'#FFF'}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppBackground.vue?vue&type=template&id=46bc9ac2&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/IconRoundedSquare.vue + 4 modules
var IconRoundedSquare = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppBackground.vue?vue&type=script&lang=ts&


/* harmony default export */ var AppBackgroundvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'AppBackground',
  components: {
    IconRoundedSquare: IconRoundedSquare["default"]
  },

  data() {
    return {
      numSquares: 7
    };
  },

  computed: {
    windowDimensions() {
      return  false ? undefined : {
        width: 1000,
        height: 800
      };
    },

    viewBoxAttrs() {
      return  false ? undefined : '0 0 1000 800';
    }

  }
}));
// CONCATENATED MODULE: ./components/AppBackground.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AppBackgroundvue_type_script_lang_ts_ = (AppBackgroundvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/AppBackground.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppBackgroundvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46bc9ac2",
  "06f75e3a"
  
)

/* harmony default export */ var AppBackground = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconRoundedSquare: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=app-background.js.map