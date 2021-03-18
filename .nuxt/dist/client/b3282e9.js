(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FileInput.vue?vue&type=template&id=18227615&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"align":"center"}},[_c('v-row',[_c('v-col',{attrs:{"md":"4"}},[_c('v-file-input',{attrs:{"placeholder":"Your existing belief map","accept":".json"},on:{"change":_vm.processFile}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FileInput.vue?vue&type=template&id=18227615&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FileInput.vue?vue&type=script&lang=ts&


/* harmony default export */ var FileInputvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
  name: "FileInput",
  data: function data() {
    return {
      fileReader: {},
      file: {},
      jsonData: {}
    };
  },
  methods: {
    processFile: function processFile(file) {
      if (file === undefined) {
        console.log('Error processing uploaded file');
        return;
      }

      this.file = file;

      if (true) {
        this.fileReader = new FileReader();
        var self = this;

        this.fileReader.onload = function (e) {
          try {
            self.jsonData = JSON.parse(e.target.result);
            self.$store.commit('data/set', [self.jsonData, file.name]);
            console.log('Data sent to Vuex store');
          } catch (exception) {
            alert('Your file does not appear to contain a valid JSON object');
          }
        };

        this.fileReader.readAsText(this.file);
      } else {}
    }
  }
}));
// CONCATENATED MODULE: ./components/FileInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_FileInputvue_type_script_lang_ts_ = (FileInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(81);

// CONCATENATED MODULE: ./components/FileInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FileInputvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FileInput = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);