exports.ids = [5,7];
exports.modules = {

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("94a7572e", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeliefType; });
var BeliefType;

(function (BeliefType) {
  BeliefType["ScientificEvidence"] = "scientificEvidence";
  BeliefType["Observation"] = "observation";
  BeliefType["PersonalConclusion"] = "personalConclusion";
  BeliefType["PersonalAssumption"] = "personalAssumption";
  BeliefType["ReligiousThinking"] = "religiousThinking";
  BeliefType["StatedByAuthority"] = "statedByAuthority";
  BeliefType["UnableToDisprove"] = "unableToDisprove";
})(BeliefType || (BeliefType = {}));

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=template&id=0a880a2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return ((_vm.numSegments > 1))?_c('svg',{on:{"click":_vm.onClick}},[_vm._ssrNode("<defs>","</defs>",[_vm._ssrNode("<filter"+(_vm._ssrAttr("id",((_vm.node.id) + "-path-shadow")))+" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\">","</filter>",[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"10","dy":"10"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],2)]),_vm._ssrNode(" <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.segments[0].colour)))+(_vm._ssrAttr("stroke-width",1))+(_vm._ssrAttr("filter",("url(#" + (_vm.node.id) + "-path-shadow)")))+" class=\"clickable\"></circle> "+(_vm._ssrList((_vm.segments),function(segment,index){return ("<path fill=\"white\""+(_vm._ssrAttr("stroke",_vm.getHexColour(segment.colour)))+(_vm._ssrAttr("stroke-width",(_vm.strokeWidth + (segment.count * 3))))+(_vm._ssrAttr("d",_vm.describeArc(_vm.circleData.x, _vm.circleData.y, _vm.circleData.radius, _vm.arcPoints[index][0], _vm.arcPoints[index][1])))+"></path>")})))],2):_c('svg',{on:{"click":_vm.onClick}},[_vm._ssrNode("<defs>","</defs>",[_vm._ssrNode("<filter"+(_vm._ssrAttr("id",((_vm.node.id) + "-shadow")))+" x=\"-35%\" y=\"-35%\" width=\"200%\" height=\"200%\">","</filter>",[_c('feOffset',{attrs:{"result":"offOut","in":"SourceGraphic","dx":"5","dy":"7"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"result":"matrixOut","in":"offOut","type":"matrix","values":"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"result":"blurOut","in":"matrixOut","stdDeviation":"10"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"in":"SourceGraphic","in2":"blurOut","mode":"normal"}})],2)]),_vm._ssrNode(" <circle fill=\"white\""+(_vm._ssrAttr("cx",_vm.circleData.x))+(_vm._ssrAttr("cy",_vm.circleData.y))+(_vm._ssrAttr("r",_vm.circleData.radius))+(_vm._ssrAttr("stroke",_vm.getHexColour(this.segments[0].colour)))+(_vm._ssrAttr("stroke-width",_vm.strokeWidth))+(_vm._ssrAttr("filter",("url(#" + (_vm.node.id) + "-shadow)")))+" class=\"clickable\"></circle>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DonutChart.vue?vue&type=template&id=0a880a2a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DonutChart.vue?vue&type=script&lang=ts&

/* harmony default export */ var DonutChartvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'DonutChart',
  props: ['node', 'segments', 'circleData'],

  data() {
    return {
      numSegments: this.segments.length,
      strokeWidth: 15
    };
  },

  computed: {
    svgSize() {
      const circleData = this.circleData;
      return circleData.x * 2;
    },

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
      switch (name) {
        case 'light-green darken-1':
          return '#7CB342';

        case 'green darken-1':
          return '#43A047';

        case 'light-blue darken-1':
          return '#039BE5';

        case 'blue darken-1':
          return '#1E88E5';

        case 'indigo darken-1':
          return '#3949AB';

        case 'deep-purple darken-1':
          return '#5E35B1';

        case 'amber darken-1':
          return '#FFB300';

        case 'orange darken-1':
          return '##FB8C00';

        case 'red darken-1':
          return '#E53935';

        case 'light-green darken-3':
          return '#558B2F';

        case 'green darken-3':
          return '#2E7D32';

        case 'blue darken-3':
          return '#2979FF';

        case 'indigo darken-3':
          return '#283593';

        case 'deep-purple darken-3':
          return '#4527A0';

        case 'amber darken-3':
          return '#FF8F00';

        case 'orange darken-3':
          return '#EF6C00';

        case 'red darken-3':
          return '#C62828';

        default:
          return '#FFFFFF';
      }
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
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/DonutChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
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
  "34135b10"
  
)

/* harmony default export */ var DonutChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonutChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clickable:hover{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefNode.vue?vue&type=template&id=8c21a018&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"mouseenter":function($event){_vm.isInflated = true},"mouseleave":function($event){_vm.isInflated = false}}},[_c('donut-chart',{attrs:{"node":_vm.node,"segments":_vm.segments,"circleData":_vm.circleData}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=template&id=8c21a018&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./belief-map.types.ts
var belief_map_types = __webpack_require__(119);

// EXTERNAL MODULE: ./components/DonutChart.vue + 4 modules
var DonutChart = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefNode.vue?vue&type=script&lang=ts&




const getKeyValue = (obj, key) => obj[key];

/* harmony default export */ var BeliefNodevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'BeliefNode',
  components: {
    DonutChart: DonutChart["default"]
  },
  props: ['index', 'node', 'children', 'distance', 'bezierData', 'shapeData'],

  data() {
    return {
      id: this.node.id,
      name: this.node.name,
      notes: this.node.notes,
      references: this.node.references,
      type: this.node.type,
      hasChildren: true,
      numTypes: 0,
      segmentData: [],
      isInflated: false
    };
  },

  computed: {
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

    // x() {
    //   return this.distance * this.index + this.distance * 0.5
    // },
    segments() {
      const self = this;
      let segments = [];

      if (this.hasChildren) {
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
      } else {
        const segment = {
          type: this.type,
          count: 1,
          colour: self.getTypeColour(this.type)
        };
        segments.push(segment);
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
      this.children.forEach(child => {
        const type = child.data.type;
        typeCount[type]++;
      });
      return typeCount;
    }

  },
  methods: {
    onClick(event) {
      this.$store.commit('nodes/set', this.node);

      if (!this.$store.state.displayBeliefDetails) {
        this.$store.commit('display/toggleDisplayBeliefDetails');
      }
    },

    getTypeColour(type) {
      switch (type) {
        case belief_map_types["a" /* BeliefType */].ScientificEvidence:
          return 'light-green darken-1';

        case belief_map_types["a" /* BeliefType */].Observation:
          return 'light-blue darken-1';

        case belief_map_types["a" /* BeliefType */].PersonalConclusion:
          return 'indigo darken-1';

        case belief_map_types["a" /* BeliefType */].PersonalAssumption:
          return 'deep-purple darken-1';

        case belief_map_types["a" /* BeliefType */].ReligiousThinking:
          return 'amber darken-1';

        case belief_map_types["a" /* BeliefType */].StatedByAuthority:
          return 'orange darken-1';

        case belief_map_types["a" /* BeliefType */].UnableToDisprove:
          return 'red darken-1';

        default:
          return 'white';
      }
    }

  },

  created() {
    if (this.children === undefined) {
      this.hasChildren = false;
    }
  },

  mounted() {
    this.numTypes = Object.keys(this.childrenTypeCount).length; // TODO revise
  }

}));
// CONCATENATED MODULE: ./components/BeliefNode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BeliefNodevue_type_script_lang_ts_ = (BeliefNodevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

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
  "8c21a018",
  "09e05742"
  
)

/* harmony default export */ var BeliefNode = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DonutChart: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=belief-node.js.map