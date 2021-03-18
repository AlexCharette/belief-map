(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ })

}]);