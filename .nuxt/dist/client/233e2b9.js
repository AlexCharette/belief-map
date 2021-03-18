(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7,9],{

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


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var $entries = __webpack_require__(199).entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var objectKeys = __webpack_require__(48);
var toIndexedObject = __webpack_require__(24);
var propertyIsEnumerable = __webpack_require__(86).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefNode.vue?vue&type=template&id=34572da8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"mouseenter":function($event){_vm.isInflated = true},"mouseleave":function($event){_vm.isInflated = false}}},[_c('donut-chart',{key:_vm.index,attrs:{"index":_vm.index,"node":_vm.fullNode,"segments":_vm.segments,"typeColour":_vm.getTypeColour(this.type),"circleData":_vm.circleData}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=template&id=34572da8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./components/DonutChart.vue + 4 modules
var DonutChart = __webpack_require__(177);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefNode.vue?vue&type=script&lang=ts&





 // switch(type) {
//   case BeliefType.ScientificEvidence:
//     return 'light-green darken-1'
//   case BeliefType.Observation:
//     return 'light-blue darken-1'
//   case BeliefType.PersonalConclusion:
//     return 'indigo darken-1'
//   case BeliefType.PersonalAssumption:
//     return 'deep-purple darken-1'
//   case BeliefType.ReligiousThinking:
//     return 'amber darken-1'
//   case BeliefType.StatedByAuthority:
//     return 'orange darken-1'
//   case BeliefType.UnableToDisprove:
//     return 'red darken-1'
//   default: 
//     return 'white'
// }

var typeColourMap = {
  'scientificEvidence': 'light-green darken-1',
  'observation': 'light-blue darken-1',
  'personalConclusion': 'indigo darken-1',
  'personalAssumption': 'deep-purple darken-1',
  'religiousThinking': 'amber darken-1',
  'statedByAuthority': 'orange darken-1',
  'unableToDisprove': 'red darken-1'
};
/* harmony default export */ var BeliefNodevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
  name: 'BeliefNode',
  components: {
    DonutChart: DonutChart["default"]
  },
  props: ['index', 'node', 'shapeData'],
  data: function data() {
    return {
      id: this.node.id,
      name: this.node.name,
      notes: this.node.notes,
      references: this.node.references,
      type: this.node.type,
      numTypes: 0,
      isInflated: false
    };
  },
  computed: {
    fullNode: function fullNode() {
      return {
        id: this.node.id,
        name: this.node.name,
        notes: this.node.notes,
        references: this.node.references,
        type: this.node.type,
        children: this.hasChildren ? this.node.children : []
      };
    },
    hasChildren: function hasChildren() {
      return this.node.children !== undefined && this.node.children.length > 0;
    },
    circleData: function circleData() {
      var x = this.shapeData.x;
      var y = this.shapeData.y;
      var radius = this.isInflated ? this.shapeData.size / 2 : this.shapeData.size / 3;
      return {
        x: x,
        y: y,
        radius: radius
      };
    },
    segments: function segments() {
      var self = this;
      var segments = [];

      if (this.hasChildren) {
        // console.log(this.node.children)
        var typeCount = this.childrenTypeCount;
        Object.entries(typeCount).forEach(function (entry) {
          if (entry[1] > 0) {
            // Create a new segment object
            var segment = {
              type: entry[0],
              count: entry[1],
              colour: self.getTypeColour(entry[0])
            };
            segments.push(segment);
          }
        });
      }

      return segments;
    },
    childrenTypeCount: function childrenTypeCount() {
      if (!this.hasChildren) return 0;
      var typeCount = {
        scientificEvidence: 0,
        observation: 0,
        personalConclusion: 0,
        personalAssumption: 0,
        religiousThinking: 0,
        statedByAuthority: 0,
        unableToDisprove: 0
      };
      this.node.children.forEach(function (child) {
        var type = child.type;
        typeCount[type]++;
      });
      return typeCount;
    }
  },
  methods: {
    getTypeColour: function getTypeColour(type) {
      return typeColourMap[type]; // switch(type) {
      //   case BeliefType.ScientificEvidence:
      //     return 'light-green darken-1'
      //   case BeliefType.Observation:
      //     return 'light-blue darken-1'
      //   case BeliefType.PersonalConclusion:
      //     return 'indigo darken-1'
      //   case BeliefType.PersonalAssumption:
      //     return 'deep-purple darken-1'
      //   case BeliefType.ReligiousThinking:
      //     return 'amber darken-1'
      //   case BeliefType.StatedByAuthority:
      //     return 'orange darken-1'
      //   case BeliefType.UnableToDisprove:
      //     return 'red darken-1'
      //   default: 
      //     return 'white'
      // }
    }
  },
  // created() {
  //   if (this.children === undefined) {
  //     this.hasChildren = false
  //   }
  // },
  mounted: function mounted() {
    // console.log(this.node)
    this.numTypes = Object.keys(this.childrenTypeCount).length; // TODO revise
  }
}));
// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BeliefNodevue_type_script_lang_ts_ = (BeliefNodevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./components/BeliefNode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BeliefNodevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "34572da8",
  null
  
)

/* harmony default export */ var BeliefNode = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DonutChart: __webpack_require__(177).default})


/***/ })

}]);