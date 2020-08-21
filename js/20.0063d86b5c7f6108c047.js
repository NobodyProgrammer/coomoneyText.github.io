webpackJsonp([20],{

/***/ "Dnfj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/common/Menu.vue + 2 modules
var Menu = __webpack_require__("fa3u");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/setting/NotificationSetting.vue
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
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NotificationSetting = ({
  name: 'SettingList',
  components: {
    Menu: Menu["a" /* default */]
  },
  data: function data() {
    return {
      isNewFriend: 1,
      isNewMessage: 1,
      isAddFriend: 1,
      isChatNotification: 0,
      isLoginNotification: 1
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('getNotificationSetting').then(function (data) {
      _this.isNewFriend = data.new_friend;
      _this.isNewMessage = data.new_message;
      _this.isAddFriend = data.pick_notification;
      _this.isChatNotification = data.random_chat;
      _this.isLoginNotification = data.login_notification;
    });
  },

  methods: {
    changeNotificationSetting: function changeNotificationSetting() {
      var _this2 = this;

      this.$store.dispatch('submitForm', {
        new_friend: this.isNewFriend,
        new_message: this.isNewMessage,
        pick_notification: this.isAddFriend,
        random_chat: this.isChatNotification,
        login_notification: this.isLoginNotification
      }).then(function () {
        _this2.$router.push('/setting');
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cc92519a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/setting/NotificationSetting.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'通知設定'},on:{"back":function($event){_vm.$router.go(-1) && _vm.changeNotificationSetting}}}),_vm._v(" "),_c('div',{staticClass:"main text-center"},[_c('div',{staticClass:"setting-bar"},[_c('div',{staticClass:"list"},[_c('div',{staticClass:"item-container"},[_c('div',{staticClass:"item"},[_vm._v("加新好友")]),_vm._v(" "),_c('div',{staticClass:"btn",class:{on:_vm.isNewFriend,off:!_vm.isNewFriend},on:{"click":function($event){_vm.isNewFriend=!_vm.isNewFriend}}},[_c('div',{staticClass:"btn dot"})])])]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"item-container"},[_c('div',{staticClass:"item"},[_vm._v("新訊息")]),_vm._v(" "),_c('div',{staticClass:"btn",class:{on:_vm.isNewMessage,off:!_vm.isNewMessage},on:{"click":function($event){_vm.isNewMessage=!_vm.isNewMessage}}},[_c('div',{staticClass:"btn dot"})])])]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"item-container"},[_c('div',{staticClass:"item"},[_vm._v("抽抽提醒")]),_vm._v(" "),_c('div',{staticClass:"btn",class:{on:_vm.isAddFriend,off:!_vm.isAddFriend},on:{"click":function($event){_vm.isAddFriend=!_vm.isAddFriend}}},[_c('div',{staticClass:"btn dot"})])])]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"item-container"},[_c('div',{staticClass:"item"},[_vm._v("即時聊天")]),_vm._v(" "),_c('div',{staticClass:"btn",class:{on:_vm.isChatNotification,off:!_vm.isChatNotification},on:{"click":function($event){_vm.isChatNotification=!_vm.isChatNotification}}},[_c('div',{staticClass:"btn dot"})])])]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"item-container"},[_c('div',{staticClass:"item"},[_vm._v("登入提醒")]),_vm._v(" "),_c('div',{staticClass:"btn",class:{on:_vm.isLoginNotification,off:!_vm.isLoginNotification},on:{"click":function($event){_vm.isLoginNotification=!_vm.isLoginNotification}}},[_c('div',{staticClass:"btn dot"})])])])]),_vm._v(" "),_c('Menu',{attrs:{"active":"4"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setting_NotificationSetting = (esExports);
// CONCATENATED MODULE: ./src/components/setting/NotificationSetting.vue
function injectStyle (ssrContext) {
  __webpack_require__("fI7x")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cc92519a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  NotificationSetting,
  setting_NotificationSetting,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_setting_NotificationSetting = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fI7x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=20.0063d86b5c7f6108c047.js.map