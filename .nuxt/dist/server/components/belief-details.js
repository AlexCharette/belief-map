exports.ids = [5,1,4];
exports.modules = {

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("832c434a", content, false, context)
};

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BaseWidget.vue?vue&type=template&id=a5f5e6b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{class:{ overlay: _vm.overlay },attrs:{"min-width":_vm.initialWidth,"min-height":_vm.initialHeight,"elevation":"8","shaped":""}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BaseWidget.vue?vue&type=template&id=a5f5e6b4&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BaseWidget.vue?vue&type=script&lang=ts&

/* harmony default export */ var BaseWidgetvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'BaseWidget',
  props: ['initialWidth', 'initialHeight', 'overlay']
}));
// CONCATENATED MODULE: ./components/BaseWidget.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BaseWidgetvue_type_script_lang_ts_ = (BaseWidgetvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/BaseWidget.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BaseWidgetvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a5a570c"
  
)

/* harmony default export */ var BaseWidget = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseWidget_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseWidget_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseWidget_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseWidget_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseWidget_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overlay{position:absolute!important;z-index:60}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b7ac8fde", content, false, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBelief_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBelief_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBelief_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBelief_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBelief_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddBelief.vue?vue&type=template&id=67f73f52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-widget',{ref:"addBeliefCard",attrs:{"id":"add-belief","overlay":false}},[_c('v-container',{staticClass:"pa-3"},[_c('v-row',[_c('v-col',{attrs:{"md":"8"}},[_c('v-btn',{attrs:{"disabled":!_vm.hasCopyData},on:{"click":function($event){$event.preventDefault();return _vm.pasteDetails($event)}}},[_vm._v("\n        Paste details\n      ")])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"3"}}),_vm._v(" "),_c('v-col',{attrs:{"md":"1"}},[_vm._t("default"),_vm._v(" "),_c('v-icon',{attrs:{"large":"","color":"red darken-3"},on:{"click":function($event){$event.preventDefault();return _vm.close($event)}}},[_vm._v("\n        mdi-close\n      ")])],2)],1),_vm._v(" "),_c('v-form',{on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"Name","placeholder":"Enter a short name for this belief","rules":_vm.nameRules,"required":""},model:{value:(_vm.formData.name),callback:function ($$v) {_vm.$set(_vm.formData, "name", $$v)},expression:"formData.name"}})],1),_vm._v(" "),_c('v-col',[_c('v-select',{attrs:{"items":_vm.beliefTypes,"label":"Type","placeholder":_vm.beliefTypes[2],"rules":_vm.typeRules,"required":""},model:{value:(_vm.formData.type),callback:function ($$v) {_vm.$set(_vm.formData, "type", $$v)},expression:"formData.type"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-textarea',{attrs:{"solo":""},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',[_vm._v("\n              Notes "),_c('small',[_vm._v("(optional)")])])]},proxy:true}]),model:{value:(_vm.formData.notes),callback:function ($$v) {_vm.$set(_vm.formData, "notes", $$v)},expression:"formData.notes"}})],1),_vm._v(" "),_c('v-container',[_vm._l((_vm.formData.references),function(value,index){return _c('v-row',{key:index},[_c('v-col',{attrs:{"md":"6"}},[_c('v-text-field',{attrs:{"label":"Name","placeholder":"Enter a short name for this reference"},model:{value:(_vm.formData.references[index].text),callback:function ($$v) {_vm.$set(_vm.formData.references[index], "text", $$v)},expression:"formData.references[index].text"}})],1),_vm._v(" "),_c('v-col',{attrs:{"md":"5"}},[_c('v-text-field',{attrs:{"label":"Link","placeholder":"Enter a link for this reference"},model:{value:(_vm.formData.references[index].link),callback:function ($$v) {_vm.$set(_vm.formData.references[index], "link", $$v)},expression:"formData.references[index].link"}})],1),_vm._v(" "),_c('v-col',{attrs:{"md":"1"}},[_c('v-btn',{attrs:{"elevation":"2","icon":"","small":""},on:{"click":function($event){$event.preventDefault();return _vm.subtractReferenceSlot($event)}}},[_c('v-icon',[_vm._v("mdi-minus")])],1)],1)],1)}),_vm._v(" "),_c('v-row',{staticClass:"d-flex align-center"},[_c('v-col',{attrs:{"md":"1"}},[_c('v-btn',{attrs:{"elevation":"2","icon":"","small":""},on:{"click":function($event){$event.preventDefault();return _vm.addReferenceSlot($event)}}},[_c('v-icon',[_vm._v("mdi-plus")])],1)],1),_vm._v(" "),_c('v-col',{staticClass:"d-flex align-center",attrs:{"md":"3"}},[_c('h5',[_vm._v("Add reference")])])],1)],2)],1),_vm._v(" "),_c('v-btn',{attrs:{"type":"submit","disabled":!_vm.valid}},[_vm._v("Submit")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AddBelief.vue?vue&type=template&id=67f73f52&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(16);

// EXTERNAL MODULE: ./components/BaseWidget.vue + 4 modules
var BaseWidget = __webpack_require__(20);

// CONCATENATED MODULE: ./belief-map.types.ts
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddBelief.vue?vue&type=script&lang=ts&




/* harmony default export */ var AddBeliefvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'AddBelief',
  components: {
    BaseWidget: BaseWidget["default"]
  },
  props: ['parentName'],

  data() {
    return {
      numReferenceSlots: 0,
      formData: {
        name: '',
        notes: '',
        references: [],
        type: ''
      },
      nameRules: [v => !!v || 'You must enter a name'],
      typeRules: [v => !!v || 'You must choose a type'],
      valid: true
    };
  },

  computed: {
    beliefTypes() {
      return Object.keys(BeliefType);
    },

    hasCopyData() {
      const copiedNode = this.$store.state.nodes.copiedNode;
      return Object.keys(copiedNode).length > 0;
    },

    node() {
      const value = this.formData.type[0].toLowerCase() + this.formData.type.slice(1);
      return {
        id: external_uuid_["v4"](),
        name: this.formData.name,
        notes: this.formData.notes,
        references: this.formData.references,
        type: value,
        isRoot: false,
        children: []
      };
    }

  },
  methods: {
    addReferenceSlot() {
      this.formData.references.push({
        text: '',
        link: ''
      });
    },

    subtractReferenceSlot() {
      this.formData.references.pop();
    },

    close() {
      this.$nuxt.$emit('add-belief-closed');
    },

    pasteDetails() {
      const details = this.$store.state.nodes.copiedNode;
      this.formData = {
        name: details.name,
        notes: details.notes,
        references: details.references,
        type: details.type
      };
    },

    submit() {
      const selectedNode = this.$store.state.nodes.selectedNode;
      this.$store.commit('data/addNode', [this.node, selectedNode.id]);
      this.close();
    }

  }
}));
// CONCATENATED MODULE: ./components/AddBelief.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AddBeliefvue_type_script_lang_ts_ = (AddBeliefvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/AddBelief.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddBeliefvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "68a19ca6"
  
)

/* harmony default export */ var AddBelief = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseWidget: __webpack_require__(20).default})


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b98ca11e", content, false, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeliefDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeliefDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeliefDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeliefDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeliefDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#belief-details{top:25;right:2.5vw}#belief-details div{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefDetails.vue?vue&type=template&id=07dab4e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-widget',{ref:"beliefDetailsCard",attrs:{"id":"belief-details","overlay":true,"initialWidth":300,"initialHeight":450}},[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"md":"5"}},[_c('v-dialog',{attrs:{"max-width":"660px"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({on:{"click":function($event){$event.preventDefault();_vm.addBelief = true}}},'v-btn',attrs,false),on),[_vm._v("\n              Add Premise\n            ")])]}}]),model:{value:(_vm.addBelief),callback:function ($$v) {_vm.addBelief=$$v},expression:"addBelief"}},[_vm._v(" "),_c('add-belief')],1)],1),_vm._v(" "),_c('v-col',{attrs:{"md":"6"}}),_vm._v(" "),_c('v-col',{attrs:{"md":"1"}},[_c('v-icon',{attrs:{"large":"","color":"red darken-3"},on:{"click":function($event){$event.preventDefault();return _vm.close($event)}}},[_vm._v("\n          mdi-close\n        ")])],1)],1),_vm._v(" "),_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"md":"8"}},[_c('h3',[_vm._v(_vm._s(_vm.getFormattedTypeAndIcon(_vm.node.type)[0]))])]),_vm._v(" "),_c('v-col',{attrs:{"md":"3"}}),_vm._v(" "),_c('v-col',{attrs:{"md":"1"}},[_c('v-icon',{attrs:{"color":_vm.getFormattedTypeAndIcon(_vm.node.type)[2],"large":""}},[_vm._v("\n            "+_vm._s(_vm.getFormattedTypeAndIcon(_vm.node.type)[1])+"\n          ")])],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"12"}},[_c('h4',[_vm._v(_vm._s(_vm.node.name))])])],1),_vm._v(" "),(_vm.node.notes != '')?_c('v-row',[_c('p',[_vm._v(_vm._s(_vm.node.notes))])]):_c('v-spacer'),_vm._v(" "),(_vm.node.references.length > 0)?_c('v-container',_vm._l((_vm.node.references),function(value,index){return _c('v-row',{key:index},[(value.link !== '')?_c('a',{attrs:{"href":value.link,"target":"_blank","rel":"noreferrer noopener"}},[_vm._v(_vm._s(value.text))]):_c('p',[_vm._v(_vm._s(value.text))])])}),1):_c('v-spacer')],1),_vm._v(" "),(!_vm.node.isRoot)?_c('v-row',[_c('v-col',{attrs:{"md":"4"}},[_c('v-btn',{on:{"click":function($event){$event.preventDefault();return _vm.copyDetails($event)}}},[_vm._v("Copy Details")])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"2"}}),_vm._v(" "),_c('v-col',{attrs:{"md":"4"}},[_c('v-btn',{on:{"click":function($event){$event.preventDefault();return _vm.deleteBelief($event)}}},[_vm._v("Delete Belief")])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"2"}})],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BeliefDetails.vue?vue&type=template&id=07dab4e4&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/AddBelief.vue + 5 modules
var AddBelief = __webpack_require__(29);

// EXTERNAL MODULE: ./components/BaseWidget.vue + 4 modules
var BaseWidget = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BeliefDetails.vue?vue&type=script&lang=ts&


 // switch (type) {
//   case 'scientificEvidence':
//     return ['Scientific Evidence', 'mdi-beaker', 'light-green darken-1']
//   case 'observation':
//     return ['Observation', 'mdi-eye', 'light-blue darken-1']
//   case 'personalConclusion':
//     return ['Personal Conclusion', 'mdi-account-plus', 'indigo darken-1']
//   case 'personalAssumption':
//     return ['Personal Assumption', 'mdi-account-check', 'deep-purple darken-1']
//   case 'religiousThinking':
//     return ['Religious Thinking', 'mdi-book-open-page-variant', 'amber darken-1']
//   case 'statedByAuthority':
//     return ['Stated by Authority', 'mdi-exclamation-thick', 'orange darken-1']
//   case 'unableToDisprove':
//     return ['Unable to Disprove', 'mdi-help', 'red darken-1']
//   default: return ['', '', '']
// }

const iconDataMap = {
  'scientificEvidence': ['Scientific Evidence', 'mdi-beaker', 'light-green darken-1'],
  'observation': ['Observation', 'mdi-eye', 'light-blue darken-1'],
  'personalConclusion': ['Personal Conclusion', 'mdi-account-plus', 'indigo darken-1'],
  'personalAssumption': ['Personal Assumption', 'mdi-account-check', 'deep-purple darken-1'],
  'religiousThinking': ['Religious Thinking', 'mdi-book-open-page-variant', 'amber darken-1'],
  'statedByAuthority': ['Stated by Authority', 'mdi-exclamation-thick', 'orange darken-1'],
  'unableToDisprove': ['Unable to Disprove', 'mdi-help', 'red darken-1']
};
/* harmony default export */ var BeliefDetailsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'BeliefDetails',
  components: {
    AddBelief: AddBelief["default"],
    BaseWidget: BaseWidget["default"]
  },

  data() {
    return {
      addBelief: false
    };
  },

  computed: {
    node() {
      return this.$store.state.nodes.selectedNode;
    }

  },
  methods: {
    getFormattedTypeAndIcon(type) {
      return iconDataMap[type];
    },

    copyDetails() {
      this.$store.commit('nodes/copy', {
        id: this.node.id,
        name: this.node.name,
        notes: this.node.notes,
        type: this.node.type,
        references: this.node.references,
        isRoot: this.node.isRoot
      });
    },

    deleteBelief() {
      // TODO Show overlay first to confirm
      this.$store.commit('data/deleteNode', [this.node.id, this.node.children]);
    },

    close() {
      this.$store.commit('display/setDisplayBeliefDetails', false);
    }

  },

  created() {
    const self = this;
    this.$nuxt.$on('add-belief-closed', () => {
      self.addBelief = false;
    });
  }

}));
// CONCATENATED MODULE: ./components/BeliefDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BeliefDetailsvue_type_script_lang_ts_ = (BeliefDetailsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/BeliefDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BeliefDetailsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4371ff28"
  
)

/* harmony default export */ var BeliefDetails = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AddBelief: __webpack_require__(29).default,BaseWidget: __webpack_require__(20).default})


/***/ })

};;
//# sourceMappingURL=belief-details.js.map