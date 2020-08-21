webpackJsonp([21],{

/***/ "uu5N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xL8U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/friend/pick-friend/PickFriendByEmail.vue
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


/* harmony default export */ var PickFriendByEmail = ({
  name: 'PickFriendByEmail',
  data: function data() {
    return {
      friendEmail: '', // friend's email in input field
      pickFriendResponseMessage: '',
      isModalShown: false,
      isPickSuccess: false
    };
  },

  methods: {
    pickFriendByEmail: function pickFriendByEmail() {
      var _this = this;

      this.$store.dispatch('addFriendByGid', {
        friend_email: this.friendEmail
      }).then(function (responseMsg) {
        if (responseMsg === 'Success') {
          _this.isModalShown = true;
          _this.pickFriendResponseMessage = '配對成功！快和對方聊聊天吧！';
          _this.isPickSuccess = true;
        } else {
          _this.isModalShown = true;
          _this.pickFriendResponseMessage = '沒有這個帳號歐，再重新輸入一次吧！';
          _this.isPickSuccess = false;
        }
      });
    },
    closeModal: function closeModal() {
      this.isModalShown = false;
      if (this.isPickSuccess) {
        this.isPickSuccess = false;
        this.$router.push('/friendPage');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ffd0203","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/friend/pick-friend/PickFriendByEmail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'抽抽'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"main text-left"},[_c('p',[_vm._v("在成大光復校區一活草皮前有實體配對活動，快來歐！")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.friendEmail),expression:"friendEmail"},{name:"focus",rawName:"v-focus"}],ref:"input",attrs:{"id":"input","placeholder":"請輸入對方email"},domProps:{"value":(_vm.friendEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.friendEmail=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-tertiary btn-pick",on:{"click":function($event){return _vm.pickFriendByEmail()}}},[_vm._v("\n        　　開始配對　　\n      ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-offline-activity"},[_c('Button',{staticClass:"btn btn-pick",on:{"click":function($event){return _vm.$router.go(-1)}}},[_vm._v("\n        返回一般抽卡功能\n      ")])],1)]),_vm._v(" "),_c('SlotModal',{attrs:{"show":_vm.isModalShown,"okText":"OK"},on:{"ok":function($event){return _vm.closeModal()}}},[_c('div',[_vm._v(_vm._s(_vm.pickFriendResponseMessage))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pick_friend_PickFriendByEmail = (esExports);
// CONCATENATED MODULE: ./src/components/friend/pick-friend/PickFriendByEmail.vue
function injectStyle (ssrContext) {
  __webpack_require__("uu5N")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ffd0203"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PickFriendByEmail,
  pick_friend_PickFriendByEmail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var friend_pick_friend_PickFriendByEmail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=21.fc67b484283a06bbff96.js.map