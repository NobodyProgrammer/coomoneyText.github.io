webpackJsonp([19],{

/***/ "Z9Gc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/array/from.js
var from = __webpack_require__("c/Tr");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/login/sign-up/PersonalDataFillOut.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PersonalDataFillOut = ({
  name: 'PersonalDataFillOut',
  data: function data() {
    return {
      modal: false,
      modalContent: '',
      nickname: '',
      year: '',
      gender: '',
      years: from_default()({ length: 100 }, function (v, k) {
        return 2018 - k;
      })
    };
  },

  methods: {
    submit: function submit() {
      var _this = this;

      if (this.nickname === '') {
        this.modalContent = '請輸入暱稱';
        this.modal = true;
        return;
      } else if (this.year === '') {
        this.modalContent = '請輸入出生年份';
        this.modal = true;
        return;
      } else if (this.gender === '') {
        this.modalContent = '請輸入性別';
        this.modal = true;
        return;
      } else if (this.nickname.length > 10) {
        this.modalContent = '暱稱長度請勿超過 10 個字';
        this.modal = true;
        return;
      }

      this.$store.dispatch('submitForm', {
        nickname: this.nickname,
        b_year: this.year,
        gender: this.gender
      }).then(function () {
        _this.$router.push('TermsAndConditions');
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fd5d90f4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/login/sign-up/PersonalDataFillOut.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'基本資料'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"bg"},[_c('div',{staticClass:"mask"},[_c('div',{staticClass:"main text-center"},[_c('div',{staticClass:"block-form"},[_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("暱稱")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nickname),expression:"nickname"}],staticClass:"value",attrs:{"placeholder":"1-10個字元"},domProps:{"value":(_vm.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nickname=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"style-select"},[_vm._m(0),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.year),expression:"year"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.year=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("出生年份")]),_vm._v(" "),_vm._l((_vm.years),function(year){return _c('option',{domProps:{"value":year}},[_vm._v(_vm._s(year))])})],2)]),_vm._v(" "),_c('div',{staticClass:"style-radio text-left"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"id":"male","type":"radio","value":"male","name":"gender"},domProps:{"checked":_vm._q(_vm.gender,"male")},on:{"change":function($event){_vm.gender="male"}}}),_vm._v(" "),_c('label',{attrs:{"for":"male"}},[_vm._v("男性")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"id":"female","type":"radio","value":"female","name":"gender"},domProps:{"checked":_vm._q(_vm.gender,"female")},on:{"change":function($event){_vm.gender="female"}}}),_vm._v(" "),_c('label',{attrs:{"for":"female"}},[_vm._v("女性")])]),_vm._v(" "),_c('div',{staticClass:"text-right"},[_c('Button',{staticClass:"btn btn-default btn-complete",on:{"click":_vm.submit}},[_vm._v("\n              完成\n            ")])],1)])])])]),_vm._v(" "),_c('Modal',{attrs:{"show":_vm.modal,"content":_vm.modalContent,"okText":"OK"},on:{"ok":function($event){_vm.modal = false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sign_up_PersonalDataFillOut = (esExports);
// CONCATENATED MODULE: ./src/components/login/sign-up/PersonalDataFillOut.vue
function injectStyle (ssrContext) {
  __webpack_require__("jsDS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fd5d90f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PersonalDataFillOut,
  sign_up_PersonalDataFillOut,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var login_sign_up_PersonalDataFillOut = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jsDS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=19.4a9d6ed6ea4fddeb6530.js.map