exports.ids = [10];
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

/***/ })

};;
//# sourceMappingURL=icon-rounded-square.js.map