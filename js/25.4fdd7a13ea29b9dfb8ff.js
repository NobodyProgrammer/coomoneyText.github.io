webpackJsonp([25],{

/***/ "3aUB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PHSn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/common/Menu.vue + 2 modules
var Menu = __webpack_require__("fa3u");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/personal-profile/PersonalProfileUpdate.vue
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



/* harmony default export */ var PersonalProfileUpdate = ({
  name: 'PersonalProfileUpdate',
  components: {
    Menu: Menu["a" /* default */]
  },
  data: function data() {
    return {
      nickname: '',
      nickname_limit: 10,
      sign_limit: 40,
      sign: '',
      value: '',
      modalContent: '',
      modal: false
    };
  },

  computed: {
    nicknameRemain: function nicknameRemain() {
      return this.nickname_limit - this.nickname.length;
    },
    signRemain: function signRemain() {
      return this.sign_limit - this.sign.length;
    }
  },
  mounted: function mounted() {
    this.nickname = this.$store.state.user.nickname;
    this.sign = this.$store.state.user.sign;
  },

  methods: {
    submit: function submit() {
      var _this = this;

      if (!this.nickname || !this.nickname.trim()) {
        this.modal = true;
        this.modalContent = '暱稱請勿空白喔';
      } else if (!this.sign || !this.sign.trim()) {
        this.modal = true;
        this.modalContent = '簽名檔請勿空白喔';
      } else if (this.nickname.length > 10) {
        this.modal = true;
        this.modalContent = '暱稱長度請勿多於 10 個字';
      } else if (this.sign.length > 40) {
        this.modal = true;
        this.modalContent = '簽名檔長度請勿多於 40 個字';
      } else {
        var newNickname = this.nickname;
        var newSign = this.sign;
        this.$store.dispatch('submitForm', {
          nickname: newNickname,
          sign: newSign
        }).then(function () {
          _this.$router.push('/personalProfile');
        });
      }
    },
    checkNickname: function checkNickname() {
      if (this.nicknameRemain < 0) {
        this.nickname = this.nickname.substr(0, this.nickname_limit);
      }
    },
    checkSign: function checkSign() {
      if (this.signRemain < 0) {
        this.sign = this.sign.substr(0, this.sign_limit);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-431076ec","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/personal-profile/PersonalProfileUpdate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'編輯個人檔案'},on:{"back":function($event){return _vm.$router.go(-1)}}},[_c('div',{attrs:{"slot":"right-top"},on:{"click":_vm.submit},slot:"right-top"},[_vm._v("確定")])]),_vm._v(" "),_c('div',{staticClass:"main text-center"},[_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key name"},[_vm._v("暱稱")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nickname),expression:"nickname"}],staticClass:"nickname",class:{'is-invalid':!_vm.nicknameRemain},attrs:{"type":"text","placeholder":'輸入暱稱'},domProps:{"value":(_vm.nickname)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.nickname=$event.target.value},_vm.checkNickname]}}),_vm._v(" "),_c('div',{staticClass:"text-limit"},[_vm._v(_vm._s(_vm.nickname.length)+"/"+_vm._s(_vm.nickname_limit))])]),_vm._v(" "),_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key signature"},[_vm._v("簽名檔")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.sign),expression:"sign"}],staticClass:"sign",class:{'is-invalid':!_vm.signRemain},staticStyle:{"-webkit-user-select":"text !important"},attrs:{"contenteditable":"true","type":"text","placeholder":'輸入簽名檔'},domProps:{"value":(_vm.sign)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.sign=$event.target.value},_vm.checkSign]}}),_vm._v(" "),_c('div',{staticClass:"text-limit"},[_vm._v(_vm._s(_vm.sign.length)+"/"+_vm._s(_vm.sign_limit))])]),_vm._v(" "),_c('Modal',{attrs:{"show":_vm.modal,"content":_vm.modalContent,"okText":"確定"},on:{"ok":function($event){_vm.modal=false}}}),_vm._v(" "),_c('Menu',{attrs:{"active":"4"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personal_profile_PersonalProfileUpdate = (esExports);
// CONCATENATED MODULE: ./src/components/personal-profile/PersonalProfileUpdate.vue
function injectStyle (ssrContext) {
  __webpack_require__("3aUB")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-431076ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PersonalProfileUpdate,
  personal_profile_PersonalProfileUpdate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_personal_profile_PersonalProfileUpdate = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=25.4fdd7a13ea29b9dfb8ff.js.map