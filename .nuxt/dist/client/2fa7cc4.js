(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(83).default
var update = add("94a7572e", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=template&id=123db654&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return ((_vm.hasSegments && _vm.numSegments > 1))?_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_c('defs',[_c('filter',{attrs:{"id":((_vm.node.id) + "-path-shadow"),"x":"0","y":"0","width":"200%","height":"200%"}},[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"10","dy":"10"}}),_vm._v(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"}}),_vm._v(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._v(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],1)]),_vm._v(" "),_c('circle',{key:("double_circle_path_" + _vm.index + "_a"),staticClass:"clickable",attrs:{"fill":"white","cx":_vm.circleData.x,"cy":_vm.circleData.y,"r":_vm.circleData.radius,"stroke":_vm.getHexColour(this.segments[0].colour),"stroke-width":1,"filter":("url(#" + (_vm.node.id) + "-path-shadow)")}}),_vm._v(" "),_c('circle',{key:("double_circle_path_" + _vm.index + "_b"),staticClass:"clickable",attrs:{"fill":"white","cx":_vm.circleData.x,"cy":_vm.circleData.y,"r":_vm.circleData.radius / 3,"stroke":_vm.getHexColour(this.typeColour),"stroke-width":2}}),_vm._v(" "),_vm._l((_vm.segments),function(segment,loopIndex){return _c('path',{key:("path_" + _vm.index + "_" + loopIndex),attrs:{"fill":"white","stroke":_vm.getHexColour(segment.colour),"stroke-width":(_vm.strokeWidth + (segment.count * 3)),"d":_vm.describeArc(_vm.circleData.x, _vm.circleData.y, _vm.circleData.radius, _vm.arcPoints[loopIndex][0], _vm.arcPoints[loopIndex][1])}})})],2):((_vm.hasSegments && _vm.numSegments == 1))?_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_c('defs',[_c('filter',{attrs:{"id":((_vm.node.id) + "-shadow"),"x":"-35%","y":"-35%","width":"200%","height":"200%"}},[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"5","dy":"7"}}),_vm._v(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),_vm._v(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._v(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],1)]),_vm._v(" "),_c('circle',{key:("double_circle_" + _vm.index + "_a"),staticClass:"clickable",attrs:{"fill":"white","cx":_vm.circleData.x,"cy":_vm.circleData.y,"r":_vm.circleData.radius / 3,"stroke":_vm.getHexColour(this.typeColour),"stroke-width":2}}),_vm._v(" "),_c('circle',{key:("double_circle_" + _vm.index + "_b"),staticClass:"clickable",attrs:{"fill":"white","cx":_vm.circleData.x,"cy":_vm.circleData.y,"r":_vm.circleData.radius,"stroke":_vm.getHexColour(this.segments[0].colour),"stroke-width":_vm.strokeWidth,"filter":("url(#" + (_vm.node.id) + "-shadow)")}})]):_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_c('defs',[_c('filter',{attrs:{"id":((_vm.node.id) + "-shadow"),"x":"-35%","y":"-35%","width":"200%","height":"200%"}},[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"5","dy":"7"}}),_vm._v(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),_vm._v(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._v(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],1)]),_vm._v(" "),_c('circle',{key:("single_circle_" + _vm.index),staticClass:"clickable",attrs:{"fill":"white","cx":_vm.circleData.x,"cy":_vm.circleData.y,"r":_vm.circleData.radius,"stroke":_vm.getHexColour(this.typeColour),"stroke-width":_vm.strokeWidth,"filter":("url(#" + (_vm.node.id) + "-shadow)")}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DonutChart.vue?vue&type=template&id=123db654&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=script&lang=ts&


var colourMap = {
  'light-green darken-1': '#7CB342',
  'green darken-1': '#43A047',
  'light-blue darken-1': '#039BE5',
  'blue darken-1': '#1E88E5',
  'indigo darken-1': '#3949AB',
  'deep-purple darken-1': '#5E35B1',
  'amber darken-1': '#FFB300',
  'orange darken-1': '#FB8C00',
  'red darken-1': '#E53935',
  'light-green darken-3': '#558B2F',
  'green darken-3': '#2E7D32',
  'blue darken-3': '#2979FF',
  'indigo darken-3': '#283593',
  'deep-purple darken-3': '#4527A0',
  'amber darken-3': '#FF8F00',
  'orange darken-3': '#EF6C00',
  'red darken-3': '#C62828'
};
/* harmony default export */ var DonutChartvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
  name: 'DonutChart',
  props: ['index', 'node', 'segments', 'typeColour', 'circleData'],
  data: function data() {
    return {
      numSegments: this.segments.length,
      strokeWidth: 15
    };
  },
  computed: {
    hasSegments: function hasSegments() {
      return this.segments !== undefined && this.segments.length > 0;
    },
    // svgSize(): number {
    //   const circleData = this.circleData as CircleData
    //   return circleData.x * 2
    // },
    arcSize: function arcSize() {
      var size = 360 / this.segments.length;
      return size;
    },
    arcPoints: function arcPoints() {
      var arcs = [];

      for (var i = 0; i < this.segments.length; i++) {
        var start = i * this.arcSize;
        arcs.push([start, start + this.arcSize]);
      }

      return arcs;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$store.commit('nodes/set', this.node);
      this.$store.commit('display/setDisplayBeliefDetails', true);
    },
    getHexColour: function getHexColour(name) {
      return colourMap[name]; // switch (name) {
      //   case 'light-green darken-1':
      //     return '#7CB342'
      //   case 'green darken-1':
      //     return '#43A047'
      //   case 'light-blue darken-1':
      //     return '#039BE5'
      //   case 'blue darken-1': 
      //     return '#1E88E5'
      //   case 'indigo darken-1': 
      //     return '#3949AB'
      //   case 'deep-purple darken-1': 
      //     return '#5E35B1'
      //   case 'amber darken-1': 
      //     return '#FFB300'
      //   case 'orange darken-1': 
      //     return '##FB8C00'
      //   case 'red darken-1': 
      //     return '#E53935'
      //   case 'light-green darken-3':
      //     return '#558B2F'
      //   case 'green darken-3':
      //     return '#2E7D32'
      //   case 'blue darken-3': 
      //     return '#2979FF'
      //   case 'indigo darken-3': 
      //     return '#283593'
      //   case 'deep-purple darken-3': 
      //     return '#4527A0'
      //   case 'amber darken-3': 
      //     return '#FF8F00'
      //   case 'orange darken-3': 
      //     return '#EF6C00'
      //   case 'red darken-3': 
      //     return '#C62828'
      //   default:
      //     return '#FFFFFF'
      // }
    },
    // CODE TAKEN FROM https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
    describeArc: function describeArc(x, y, radius, startAngle, endAngle) {
      var start = this.polarToCartesian(x, y, radius, endAngle);
      var end = this.polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
      return d;
    },
    polarToCartesian: function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    } // END OF TAKEN CODE

  }
}));
// CONCATENATED MODULE: ./components/DonutChart.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_DonutChartvue_type_script_lang_ts_ = (DonutChartvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./components/DonutChart.vue?vue&type=style&index=0&lang=scss&
var DonutChartvue_type_style_index_0_lang_scss_ = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./components/DonutChart.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DonutChartvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DonutChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(82);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clickable:hover{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);