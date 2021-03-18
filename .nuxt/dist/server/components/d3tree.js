exports.ids = [7,6,8];
exports.modules = {

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("94a7572e", content, false, context)
};

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=template&id=123db654&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return ((_vm.hasSegments && _vm.numSegments > 1))?_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_vm._ssrNode("<defs>","</defs>",[_vm._ssrNode("<filter"+(_vm._ssrAttr("id",((_vm.node.id) + "-path-shadow")))+" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\">","</filter>",[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"10","dy":"10"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],2)]),_vm._ssrNode(" <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.segments[0].colour)))+(_vm._ssrAttr("stroke-width",1))+(_vm._ssrAttr("filter",("url(#" + (_vm.node.id) + "-path-shadow)")))+" class=\"clickable\"></circle> <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius / 3))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.typeColour)))+(_vm._ssrAttr("stroke-width",2))+" class=\"clickable\"></circle> "+(_vm._ssrList((_vm.segments),function(segment,loopIndex){return ("<path fill=\"white\""+(_vm._ssrAttr("stroke",_vm.getHexColour(segment.colour)))+(_vm._ssrAttr("stroke-width",(_vm.strokeWidth + (segment.count * 3))))+(_vm._ssrAttr("d",_vm.describeArc(_vm.circleData.x, _vm.circleData.y, _vm.circleData.radius, _vm.arcPoints[loopIndex][0], _vm.arcPoints[loopIndex][1])))+"></path>")})))],2):((_vm.hasSegments && _vm.numSegments == 1))?_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_vm._ssrNode("<defs>","</defs>",[_vm._ssrNode("<filter"+(_vm._ssrAttr("id",((_vm.node.id) + "-shadow")))+" x=\"-35%\" y=\"-35%\" width=\"200%\" height=\"200%\">","</filter>",[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"5","dy":"7"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],2)]),_vm._ssrNode(" <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius / 3))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.typeColour)))+(_vm._ssrAttr("stroke-width",2))+" class=\"clickable\"></circle> <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.segments[0].colour)))+(_vm._ssrAttr("stroke-width",_vm.strokeWidth))+(_vm._ssrAttr("filter",("url(#" + (_vm.node.id) + "-shadow)")))+" class=\"clickable\"></circle>")],2):_c('svg',{key:_vm.index,on:{"click":_vm.onClick}},[_vm._ssrNode("<defs>","</defs>",[_vm._ssrNode("<filter"+(_vm._ssrAttr("id",((_vm.node.id) + "-shadow")))+" x=\"-35%\" y=\"-35%\" width=\"200%\" height=\"200%\">","</filter>",[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"5","dy":"7"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],2)]),_vm._ssrNode(" <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.typeColour)))+(_vm._ssrAttr("stroke-width",_vm.strokeWidth))+(_vm._ssrAttr("filter",("url(#" + (_vm.node.id) + "-shadow)")))+" class=\"clickable\"></circle>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DonutChart.vue?vue&type=template&id=123db654&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=script&lang=ts&

const colourMap = {
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
/* harmony default export */ var DonutChartvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'DonutChart',
  props: ['index', 'node', 'segments', 'typeColour', 'circleData'],

  data() {
    return {
      numSegments: this.segments.length,
      strokeWidth: 15
    };
  },

  computed: {
    hasSegments() {
      return this.segments !== undefined && this.segments.length > 0;
    },

    // svgSize(): number {
    //   const circleData = this.circleData as CircleData
    //   return circleData.x * 2
    // },
    arcSize() {
      const size = 360 / this.segments.length;
      return size;
    },

    arcPoints() {
      let arcs = [];

      for (let i = 0; i < this.segments.length; i++) {
        const start = i * this.arcSize;
        arcs.push([start, start + this.arcSize]);
      }

      return arcs;
    }

  },
  methods: {
    onClick(event) {
      this.$store.commit('nodes/set', this.node);
      this.$store.commit('display/setDisplayBeliefDetails', true);
    },

    getHexColour(name) {
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
    describeArc(x, y, radius, startAngle, endAngle) {
      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
      return d;
    },

    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    } // END OF TAKEN CODE


  }
}));
// CONCATENATED MODULE: ./components/DonutChart.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_DonutChartvue_type_script_lang_ts_ = (DonutChartvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/DonutChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DonutChartvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "17f94b3e"
  
)

/* harmony default export */ var DonutChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clickable:hover{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefNode.vue?vue&type=template&id=34572da8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"mouseenter":function($event){_vm.isInflated = true},"mouseleave":function($event){_vm.isInflated = false}}},[_c('donut-chart',{key:_vm.index,attrs:{"index":_vm.index,"node":_vm.fullNode,"segments":_vm.segments,"typeColour":_vm.getTypeColour(this.type),"circleData":_vm.circleData}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=template&id=34572da8&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/DonutChart.vue + 4 modules
var DonutChart = __webpack_require__(21);

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

const typeColourMap = {
  'scientificEvidence': 'light-green darken-1',
  'observation': 'light-blue darken-1',
  'personalConclusion': 'indigo darken-1',
  'personalAssumption': 'deep-purple darken-1',
  'religiousThinking': 'amber darken-1',
  'statedByAuthority': 'orange darken-1',
  'unableToDisprove': 'red darken-1'
};
/* harmony default export */ var BeliefNodevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'BeliefNode',
  components: {
    DonutChart: DonutChart["default"]
  },
  props: ['index', 'node', 'shapeData'],

  data() {
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
    fullNode() {
      return {
        id: this.node.id,
        name: this.node.name,
        notes: this.node.notes,
        references: this.node.references,
        type: this.node.type,
        children: this.hasChildren ? this.node.children : []
      };
    },

    hasChildren() {
      return this.node.children !== undefined && this.node.children.length > 0;
    },

    circleData() {
      const x = this.shapeData.x;
      const y = this.shapeData.y;
      const radius = this.isInflated ? this.shapeData.size / 2 : this.shapeData.size / 3;
      return {
        x,
        y,
        radius
      };
    },

    segments() {
      const self = this;
      let segments = [];

      if (this.hasChildren) {
        // console.log(this.node.children)
        const typeCount = this.childrenTypeCount;
        Object.entries(typeCount).forEach(entry => {
          if (entry[1] > 0) {
            // Create a new segment object
            const segment = {
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

    childrenTypeCount() {
      if (!this.hasChildren) return 0;
      let typeCount = {
        scientificEvidence: 0,
        observation: 0,
        personalConclusion: 0,
        personalAssumption: 0,
        religiousThinking: 0,
        statedByAuthority: 0,
        unableToDisprove: 0
      };
      this.node.children.forEach(child => {
        const type = child.type;
        typeCount[type]++;
      });
      return typeCount;
    }

  },
  methods: {
    getTypeColour(type) {
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
  mounted() {
    // console.log(this.node)
    this.numTypes = Object.keys(this.childrenTypeCount).length; // TODO revise
  }

}));
// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BeliefNodevue_type_script_lang_ts_ = (BeliefNodevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/BeliefNode.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BeliefNodevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34572da8",
  "091cdc48"
  
)

/* harmony default export */ var BeliefNode = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DonutChart: __webpack_require__(21).default})


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("457bffea", content, false, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_D3Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_D3Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_D3Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_D3Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_D3Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#tree-container,#tree-container #belief-map{position:relative}#tree-container #belief-map .link{stroke-width:2px!important;fill:transparent!important;stroke:#757575!important}#tree-container #node-container{z-index:1}#tree-container #belief-map,#tree-container #node-container,#tree-container svg{width:100%;height:100%;position:absolute;left:0;top:0;overflow:visible;transform-origin:0 50%}#tree-container .node{position:absolute;box-sizing:border-box;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;box-sizing:content-box;transition:all .8s;transition-timing-function:ease-in-out}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/D3Tree.vue?vue&type=template&id=58f6a95d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",attrs:{"id":"tree-container"}},[_vm._ssrNode("<svg id=\"belief-map\""+(_vm._ssrStyle(null,_vm.initialTransformStyle, null))+"></svg> "),_vm._ssrNode("<div id=\"node-container\""+(_vm._ssrStyle(null,_vm.initialTransformStyle, null))+">","</div>",_vm._l((_vm.nodes),function(node,index){return _c('belief-node',{key:node.id,staticClass:"node",style:(_vm.nodeStyle(node)),attrs:{"index":index,"node":node.data,"shapeData":{ x: node.x, y: node.y, size: _vm.nodeWidth }}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/D3Tree.vue?vue&type=template&id=58f6a95d&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(16);

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(17);

// EXTERNAL MODULE: ./components/BeliefNode.vue + 4 modules
var BeliefNode = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/D3Tree.vue?vue&type=script&lang=ts&




const NODE_WIDTH = 75;
const NODE_HEIGHT = 75;
const HEIGHT_LEVEL = 225;
/* harmony default export */ var D3Treevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'D3Tree',
  components: {
    BeliefNode: BeliefNode["default"]
  },

  data() {
    return {
      nodeWidth: NODE_WIDTH,
      nodeHeight: NODE_HEIGHT,
      heightLevel: HEIGHT_LEVEL,
      links: [],
      nodes: [],
      currentNode: null,
      duration: 250,
      newNode: null,
      root: null,
      svg: null,
      initTransformData: {
        x: 0,
        y: 0
      },
      unsubscribe: null
    };
  },

  computed: {
    dataset() {
      return this.$store.state.data.tree;
    },

    initialTransformStyle() {
      return {
        transform: `scale(1) translate(${this.initTransformData.x}px, ${this.initTransformData.y}px)`,
        transformOrigin: 'center'
      };
    }

  },
  methods: {
    nodeStyle(node) {
      return node.data.isRoot ? {
        left: this.formatDimension(node.x + this.nodeWidth / 2),
        top: this.formatDimension(node.y + this.nodeHeight / 2),
        width: this.formatDimension(this.nodeWidth),
        height: this.formatDimension(this.nodeHeight)
      } : {
        left: this.formatDimension(this.nodeWidth / 2),
        top: this.formatDimension(this.nodeHeight / 2),
        width: this.formatDimension(this.nodeWidth),
        height: this.formatDimension(this.nodeHeight)
      };
    },

    deleteNode() {
      let self = this;

      if (this.currentNode.parent && this.currentNode.parent.children.length > 0) {
        this.currentNode.parent.children.filter((node, index) => {
          if (node.id && node.id == self.currentNode.id) {
            self.currentNode.parent.children.splice(index, 1);

            if (self.currentNode.parent.children.length === 0) {
              delete self.currentNode.parent.children;
            }

            self.update(self.currentNode);
          }
        });
      }
    },

    formatDimension(dimension) {
      if (typeof dimension === 'number') return `${dimension}px`;

      if (dimension.indexOf('px') !== -1) {
        return dimension;
      } else {
        return `${dimension}px`;
      }
    },

    addUniqueKey(root) {
      // TODO this is modifiying state data which is no bueno
      const queue = [root];

      while (queue.length !== 0) {
        const node = queue.pop();

        if (node === undefined) {
          console.log('Node is undefined');
          return;
        }

        node.id = external_uuid_["v4"]();

        if (node.children) {
          queue.push(...node.children);
        }
      }

      return root;
    },

    initTransform() {
      const containerWidth = this.$refs.container.offsetWidth;
      const containerHeight = this.$refs.container.offsetHeight;
      this.initTransformData.x = Math.floor(containerWidth / 2);
      this.initTransformData.y = Math.floor(NODE_HEIGHT);
    },

    buildTree(root) {
      const treeBuilder = external_d3_["tree"]().nodeSize([NODE_WIDTH * 2, HEIGHT_LEVEL]); // TODO [nodeWidth, levelHeight]

      const tree = treeBuilder(external_d3_["hierarchy"](root));
      return [tree.descendants(), tree.links()];
    },

    update(source) {
      const self = this;
      const [nodes, links] = this.buildTree(source);
      this.links = links;
      this.svg = external_d3_["select"]('#belief-map');
      const linkObjects = this.svg.selectAll('.link').data(links, d => {
        return `${d.source.data.id}-${d.target.data.id}`;
      }); // Enter any new links at the parent's previous position.

      linkObjects.enter().append('path').style('opacity', 0).transition().duration(this.duration).ease(external_d3_["easeCubicInOut"]).style('opacity', 1).attr('class', 'link').attr('d', d => {
        return self.diagonal(d);
      }); // Transition back to the parent element position

      linkObjects.transition().duration(self.duration).ease(external_d3_["easeCubicInOut"]).attr('d', d => {
        return self.diagonal(d);
      }); // Remove any exiting links

      linkObjects.exit().transition().duration(self.duration).ease(external_d3_["easeCubicInOut"]).style('opacity', 0).remove();
      this.nodes = nodes;
    },

    diagonal(d) {
      const linkPath = external_d3_["linkVertical"](); // let source = { x: d.source.x, y: d.source.y };
      // let target = { x: d.target.x, y: d.target.y };

      linkPath.x(d => {
        return d.x;
      }).y(d => {
        return d.y;
      }).source(d => {
        return d.source;
      }).target(d => {
        return d.target;
      });
      return linkPath(d);
    },

    onClick(node) {
      this.currentNode = node;

      if (node.children) {
        node._children = node.children;
        node.children = null;
      } else {
        node.children = node._children;
        node._children = null;
      }

      this.update(node);
    }

  },
  watch: {
    dataset(newData, oldData) {
      // this.addUniqueKey(this.dataSet)
      this.root = this.dataset;
      this.update(this.root);
      this.initTransform();
    }

  },

  created() {
    const self = this;
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'data/deleteNode' || mutation.type === 'data/addNode') {
        self.update(state.data.tree);
      }
    });
  },

  mounted() {
    this.duration = 250;
    this.root = this.dataset;
    this.update(this.root);
    this.initTransform();
  },

  beforeDestroy() {
    this.unsubscribe();
  }

}));
// CONCATENATED MODULE: ./components/D3Tree.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_D3Treevue_type_script_lang_ts_ = (D3Treevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/D3Tree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_D3Treevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66930f12"
  
)

/* harmony default export */ var D3Tree = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BeliefNode: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=d3tree.js.map