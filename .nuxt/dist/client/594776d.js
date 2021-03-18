(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3,11],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconRoundedSquare.vue?vue&type=template&id=5dc6a02e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{ref:_vm.name},[_c('rect',{style:(_vm.styles),attrs:{"x":_vm.position.x,"y":_vm.position.y,"width":_vm.rectSize,"height":_vm.rectSize,"opacity":_vm.opacity}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/IconRoundedSquare.vue?vue&type=template&id=5dc6a02e&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconRoundedSquare.vue?vue&type=script&lang=ts&

/* harmony default export */ var IconRoundedSquarevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
  name: 'IconRoundedSquare',
  props: ['name', 'position', 'size', 'opacity', 'colour'],
  computed: {
    rectSize: function rectSize() {
      var minSize = 50,
          maxSize = 250,
          randomSize = this.size / Math.random();
      return this.getFramedValue(minSize, maxSize, randomSize);
    },
    rectRotation: function rectRotation() {
      var minRotation = 35,
          maxRotation = 65,
          randomRotation = 100 * Math.random();
      return this.getFramedValue(minRotation, maxRotation, randomRotation);
    },
    rectDepth: function rectDepth() {
      return 999 / Math.random();
    },
    styles: function styles() {
      return {
        fill: this.colour,
        transformOrigin: 'center',
        transform: 'rotate(' + this.rectRotation + 'deg)',
        zIndex: 999
      };
    }
  },
  methods: {
    getFramedValue: function getFramedValue(min, max, val) {
      if (val < min) return min;else if (val > max) return max;else return val;
    }
  },
  mounted: function mounted() {// const travel = this.$anime({
    // })
  }
}));
// CONCATENATED MODULE: ./components/IconRoundedSquare.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_IconRoundedSquarevue_type_script_lang_ts_ = (IconRoundedSquarevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./components/IconRoundedSquare.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IconRoundedSquarevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "5dc6a02e",
  null
  
)

/* harmony default export */ var IconRoundedSquare = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(83).default
var update = add("08a7d348", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackground_vue_vue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(82);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app-background[data-v-46bc9ac2]{position:fixed;top:0;right:0;width:200%;height:200%;z-index:0;pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppBackground.vue?vue&type=template&id=46bc9ac2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app-background"}},[_c('svg',{attrs:{"viewBox":_vm.viewBoxAttrs,"width":"100%","height":"100%","xmlns":"http://www.w3.org/2000/svg"}},_vm._l((_vm.numSquares),function(n){return _c('icon-rounded-square',{key:n,attrs:{"name":("rect_" + n),"position":{ 
        x: ((75 * n) / Math.random()), 
        y: (((_vm.windowDimensions.height / 10) * n) / Math.random())
      },"size":50,"opacity":0.6,"colour":'#FFF'}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppBackground.vue?vue&type=template&id=46bc9ac2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./components/IconRoundedSquare.vue + 4 modules
var IconRoundedSquare = __webpack_require__(201);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppBackground.vue?vue&type=script&lang=ts&



/* harmony default export */ var AppBackgroundvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
  name: 'AppBackground',
  components: {
    IconRoundedSquare: IconRoundedSquare["default"]
  },
  data: function data() {
    return {
      numSquares: 7
    };
  },
  computed: {
    windowDimensions: function windowDimensions() {
      return  true ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : undefined;
    },
    viewBoxAttrs: function viewBoxAttrs() {
      return  true ? "0 0 ".concat(window.innerWidth, " ").concat(window.innerHeight) : undefined;
    }
  }
}));
// CONCATENATED MODULE: ./components/AppBackground.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AppBackgroundvue_type_script_lang_ts_ = (AppBackgroundvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./components/AppBackground.vue?vue&type=style&index=0&id=46bc9ac2&lang=scss&scoped=true&
var AppBackgroundvue_type_style_index_0_id_46bc9ac2_lang_scss_scoped_true_ = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./components/AppBackground.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppBackgroundvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "46bc9ac2",
  null
  
)

/* harmony default export */ var AppBackground = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconRoundedSquare: __webpack_require__(201).default})


/***/ })

}]);