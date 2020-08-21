webpackJsonp([13],{

/***/ "/4zw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google_icon.08f18c9.svg";

/***/ }),

/***/ "NaOX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/mixins/checkAuth.js
var checkAuth = __webpack_require__("UgeC");

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/mixins/regSubscription.js



/* harmony default export */ var mixins_regSubscription = ({
  methods: {
    regSubscription: function regSubscription(user) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var serviceWorkerRegistration, subscription, method, subscriptionInfo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!('serviceWorker' in navigator)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 3;
                return navigator.serviceWorker.getRegistration('/.');

              case 3:
                serviceWorkerRegistration = _context.sent;
                _context.next = 6;
                return serviceWorkerRegistration.pushManager.getSubscription();

              case 6:
                subscription = _context.sent;

                if (subscription) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return serviceWorkerRegistration.pushManager.subscribe({
                  applicationServerKey: 'BF5w21SOcJTbukVtbG2QSuelDI-0AHbwoZLqHMT0ZjhKBG43v0T4plcfefE9hRKUkP7AcIaEqp38XJ5e-Wpkcyo',
                  userVisibleOnly: true
                });

              case 10:
                subscription = _context.sent;

              case 11:
                method = 'webpush';
                subscriptionInfo = stringify_default()(subscription.toJSON());

                _this.$store.dispatch('subscription', { user: user, subscriptionInfo: subscriptionInfo, method: method });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/vue-google-login/dist/vue-google-login.min.js
var vue_google_login_min = __webpack_require__("iNQL");
var vue_google_login_min_default = /*#__PURE__*/__webpack_require__.n(vue_google_login_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/common/BasicInfor.vue
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
//
//
//
//
//
//
//

/* harmony default export */ var BasicInfor = ({
  name: "BasicInfor",
  data: function data() {
    return {
      gender: "",
      year: "",
      nickname: "",
      showError: ""
    };
  },

  props: ["show", "content", "okText"],

  mounted: function mounted() {
    this.showError = this.content;
  },


  methods: {
    ok: function ok() {

      if (this.nickname === "") this.showError = "暱稱不可空白!";else if (this.year === "") this.showError = "請填寫出生日期!";else if (this.gender === "") this.showErrord = "請填寫性別";else {
        var userData = {
          nickname: this.nickname,
          b_year: this.year,
          gender: this.gender
        };
        this.$emit("ok", userData);
      }

      //console.log(this.year);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e29436f8","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/common/BasicInfor.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"modal"},[_c('div',{staticClass:"bg"}),_vm._v(" "),_c('div',{staticClass:"wrapper text-center"},[_c('div',{staticClass:"content",domProps:{"innerHTML":_vm._s(_vm.showError)}}),_vm._v(" "),_c('div',{staticClass:"userData"},[_c('div',[_c('label',{attrs:{"for":""}},[_vm._v("暱稱")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nickname),expression:"nickname"}],staticStyle:{"width":"55vw"},attrs:{"type":"text"},domProps:{"value":(_vm.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nickname=$event.target.value}}})]),_vm._v(" "),_c('div',[_c('label',{attrs:{"for":""}},[_vm._v("生日")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.year),expression:"year"}],staticStyle:{"width":"55vw"},attrs:{"type":"date"},domProps:{"value":(_vm.year)},on:{"input":function($event){if($event.target.composing){ return; }_vm.year=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"style-radio"},[_c('div',{staticClass:"con"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"id":"male","type":"radio","value":"male","name":"gender"},domProps:{"checked":_vm._q(_vm.gender,"male")},on:{"change":function($event){_vm.gender="male"}}}),_vm._v(" "),_c('label',{attrs:{"for":"male"}},[_vm._v("男")]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("男")])]),_vm._v(" "),_c('div',{staticClass:"con"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"id":"female","type":"radio","value":"female","name":"gender"},domProps:{"checked":_vm._q(_vm.gender,"female")},on:{"change":function($event){_vm.gender="female"}}}),_vm._v(" "),_c('label',{attrs:{"for":"female"}},[_vm._v("女")]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("女")])])])]),_vm._v(" "),_c('div',{staticClass:"block-btn"},[(_vm.okText)?_c('Button',{staticClass:"btn btn-tertiary rounded ripple",on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okText))]):_vm._e()],1)])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_BasicInfor = (esExports);
// CONCATENATED MODULE: ./src/components/common/BasicInfor.vue
function injectStyle (ssrContext) {
  __webpack_require__("mSjr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e29436f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  BasicInfor,
  common_BasicInfor,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_common_BasicInfor = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/login/Login.vue
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





/* harmony default export */ var Login = ({
  name: "Login",
  mixins: [checkAuth["a" /* default */], mixins_regSubscription],
  components: {
    GoogleLogin: vue_google_login_min_default.a,
    BasicInfor: components_common_BasicInfor
  },
  data: function data() {
    return {
      showModal: false,
      modalContent: "",
      showEmailModal: false,
      showTokenModal: false,
      showResetModal: false,
      recoveryEmail: "",
      tokenInput: "",
      pwd: "",
      pwdConfirm: "",
      id: -1,

      admobId: {
        banner: "ca-app-pub-3940256099942544/6300978111",
        interstitial: "ca-app-pub-3940256099942544/1033173712",
        rewardvideo: "ca-app-pub-3940256099942544/5224354917"
      },
      //google
      params: {
        client_id: "1032573795647-qikt9aingpgg2me5kml6klrciboeinrq.apps.googleusercontent.com"
      },
      showInfor: false
    };
  },

  methods: {
    showBanner: function showBanner() {
      AdMob.createBanner({
        adId: this.admobId.banner,
        poistion: AdMob.AD_POSITION.TOP_CENTER,
        autoShow: true
      });
    },
    showInter: function showInter() {
      AdMob.prepareInterstitial({ adId: this.admobId.interstitial });
    },
    showReward: function showReward() {
      AdMob.prepareRewardVideoAd({ adId: this.admobId.rewardvideo });
    },
    reset: function reset() {
      var _this = this;

      //console.log("reset");
      if (this.pwd !== this.pwdConfirm) {
        this.showModal = true;
        this.modalContent = "請輸入相同密碼兩次！";
      } else if (this.pwd.length < 6 || this.pwd.length > 20) {
        this.modalContent = "密碼請介於6~20碼喔";
        this.showModal = true;
      } else {
        this.$store.dispatch("resetPwd", this.pwd).then(function (result) {
          switch (result) {
            case 0:
              _this.showResetModal = false;
              _this.showModal = true;
              _this.modalContent = "密碼更新完成！";
              break;
            case 1:
              _this.showResetModal = false;
              _this.showModal = true;
              _this.modalContent = "您的認證過期了:(<br>下次想新密碼要及時喔";
              break;
          }
        }).catch(function (e) {
          _this.showModal = true;
          _this.modalContent = "嘗試處理您的要求時發生問題<br>請稍後再試";
        });
      }
    },
    verify: function verify() {
      var _this2 = this;

      this.$store.dispatch("verifyRecovery", this.tokenInput).then(function (result) {
        switch (result) {
          case 0:
            _this2.showResetModal = true;
            _this2.showTokenModal = false;
            break;
          case 2:
            _this2.showModal = true;
            _this2.modalContent = "驗證碼錯誤！";
            break;
          case 1:
            _this2.showTokenModal = false;
            _this2.showModal = true;
            _this2.modalContent = "您輸入錯誤太多次<br>請回到上步驟重新嘗試";
            break;
        }
        _this2.tokenInput = "";
      });
    },
    forgetPwd: function forgetPwd() {
      var _this3 = this;

      this.showModal = true;
      this.modalContent = "請稍候";
      this.$store.dispatch("forgetPwd", this.recoveryEmail).then(function (result) {
        switch (result) {
          case 0:
            // email sent successfully
            _this3.showEmailModal = false;
            _this3.showModal = false;
            _this3.showTokenModal = true;
            break;
          case 1:
            // account does not exist
            _this3.modalContent = "此帳號並不存在";
            break;
        }
      }).catch(function (e) {
        _this3.showModal = true;
        _this3.modalContent = "嘗試處理您的要求時發生問題<br>請稍後再試";
      });
    },
    googleLogin: function googleLogin(googleUser) {
      var _this4 = this;

      var profile = googleUser.getBasicProfile();
      //console.log(profile.getId());
      var name = profile.getName();
      var id = profile.getId();
      var email = profile.getEmail();
      var picture = profile.getImageUrl();

      this.$store.dispatch("loginGoogle", { email: email, gid: id }).then(function (user) {
        //console.log("hey");
        //console.log(user);
        //檢查是否已登入過
        _this4.checkAuth(user);
        //並沒有
        _this4.showInfor = true;
      });
    },
    googleConfirm: function googleConfirm(data) {
      var _this5 = this;

      this.showInfor = false;

      this.$store.dispatch("submitForm", data).then(function (data) {
        //第一次註冊進入條款部分
        _this5.$router.push("TermsAndConditions");
      });
    },
    login: function login() {
      var _this6 = this;

      var email = document.getElementById("accountEmail").value;
      var pwd = document.getElementById("accountPassword").value;

      if (email === "" || pwd === "") {
        this.showModal = true;
        this.modalContent = "帳號or密碼不可以空白喔";
      } else {
        var data = { email: email, password: pwd };
        this.$store.dispatch("loginAccount", data).then(function (user) {
          if (user === -1) {
            _this6.showModal = true;
            _this6.modalContent = "帳號or密碼錯誤喔";
          } else {
            _this6.checkAuth(user);
            // this.regSubscription(user);
          }
        });
      }
    },
    modalConfirm: function modalConfirm() {
      this.showModal = false;
    },
    modalClose: function modalClose() {
      this.showModal = false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1ab9002e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/login/Login.vue
var Login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"bg"},[_c('div',{staticClass:"mask"},[_c('Header',{attrs:{"title":'登入'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"main text-center"},[_c('button',{on:{"click":_vm.showBanner}},[_vm._v("show banner")]),_vm._v(" "),_c('button',{on:{"click":_vm.showInter}},[_vm._v("show interstitial")]),_vm._v(" "),_c('button',{on:{"click":_vm.showReward}},[_vm._v("show reward")]),_vm._v(" "),_c('div',{staticClass:"block-login"},[_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("其他登入")]),_vm._v(" "),_c('label',[_c('img',{attrs:{"src":__webpack_require__("/4zw"),"alt":"usl錯誤"}}),_vm._v(" "),_c('GoogleLogin',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"params":_vm.params,"onSuccess":_vm.googleLogin}})],1)]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"note text-right mouse",on:{"click":function($event){_vm.showEmailModal = true}}},[_vm._v("\n            忘記密碼?\n          ")]),_vm._v(" "),_c('Button',{staticClass:"btn btn-default btn-next rounded ripple",style:(true),on:{"click":_vm.login}},[_vm._v("確定")])],1)])],1)]),_vm._v(" "),_c('SlotModal',{staticClass:"input-modal",attrs:{"show":_vm.showEmailModal,"okText":"寄送驗證碼","cancelText":"取消"},on:{"ok":_vm.forgetPwd,"cancel":function($event){_vm.showEmailModal = false}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recoveryEmail),expression:"recoveryEmail"}],staticClass:"input",attrs:{"placeholder":"請輸入 email"},domProps:{"value":(_vm.recoveryEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.recoveryEmail=$event.target.value}}})]),_vm._v(" "),_c('SlotModal',{staticClass:"input-modal",attrs:{"show":_vm.showTokenModal,"okText":"確認","cancelText":"取消"},on:{"ok":_vm.verify,"cancel":function($event){_vm.showTokenModal = false}}},[_c('h3',{staticClass:"hint"},[_vm._v("\n      🌟 到信箱裡面收信唷 🌟\n    ")]),_vm._v(" "),_c('h3',{staticClass:"hint"},[_vm._v("🌟 到信箱裡面收信唷 🌟")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tokenInput),expression:"tokenInput"}],staticClass:"input",attrs:{"placeholder":"請輸入驗證碼"},domProps:{"value":(_vm.tokenInput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tokenInput=$event.target.value}}})]),_vm._v(" "),_c('SlotModal',{staticClass:"input-modal",attrs:{"show":_vm.showResetModal,"okText":"確認","cancelText":"取消"},on:{"ok":_vm.reset,"cancel":function($event){_vm.showResetModal = false}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"}],staticClass:"input",attrs:{"type":"password","placeholder":"請輸入 6-8 位新密碼"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwdConfirm),expression:"pwdConfirm"}],staticClass:"input",attrs:{"type":"password","placeholder":"請再次輸入密碼"},domProps:{"value":(_vm.pwdConfirm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwdConfirm=$event.target.value}}})]),_vm._v(" "),_c('Modal',{attrs:{"show":_vm.showModal,"content":_vm.modalContent,"okText":"了解"},on:{"ok":_vm.modalConfirm,"cancel":_vm.modalClose}}),_vm._v(" "),_c('BasicInfor',{attrs:{"show":_vm.showInfor,"content":'請填寫基本資料',"okText":"確定"},on:{"ok":_vm.googleConfirm}})],1)}
var Login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("帳號")]),_vm._v(" "),_c('input',{staticClass:"login-input",attrs:{"id":"accountEmail","placeholder":"請輸入 email"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("密碼")]),_vm._v(" "),_c('input',{staticClass:"login-input",attrs:{"id":"accountPassword","type":"password","placeholder":"請輸入密碼"}})])}]
var Login_esExports = { render: Login_render, staticRenderFns: Login_staticRenderFns }
/* harmony default export */ var login_Login = (Login_esExports);
// CONCATENATED MODULE: ./src/components/login/Login.vue
function Login_injectStyle (ssrContext) {
  __webpack_require__("k1hr")
}
var Login_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Login___vue_template_functional__ = false
/* styles */
var Login___vue_styles__ = Login_injectStyle
/* scopeId */
var Login___vue_scopeId__ = "data-v-1ab9002e"
/* moduleIdentifier (server only) */
var Login___vue_module_identifier__ = null
var Login_Component = Login_normalizeComponent(
  Login,
  login_Login,
  Login___vue_template_functional__,
  Login___vue_styles__,
  Login___vue_scopeId__,
  Login___vue_module_identifier__
)

/* harmony default export */ var components_login_Login = __webpack_exports__["default"] = (Login_Component.exports);


/***/ }),

/***/ "iNQL":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self)["vue-google-login"]={})}(this,(function(t){"use strict";var e,n,i=function(t){return e?Promise.resolve(e):(n||(n=function(t){return new Promise((function(n,i){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{e=window.gapi.auth2.init(Object.assign({},t))}catch(t){i({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}n(e)}))}}))}(t)),n)},o=function(t,e){if(t)return t[e]();return Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},r={load:function(t){return Promise.all([i(t),new Promise((function(t,e){if(!document.getElementById("auth2_script_id")){var n=document.createElement("script");n.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),n.setAttribute("async",!0),n.setAttribute("defer","defer"),n.setAttribute("id","auth2_script_id"),document.head.appendChild(n)}t()}))]).then((function(t){return t[0]}))},signIn:function(){return o(e,"signIn")},signOut:function(){return o(e,"signOut")},isSignedIn:function(){return o(e.isSignedIn,"get")},currentUser:function(){return o(e.currentUser,"get")},grantOfflineAccess:function(){return o(e,"grantOfflineAccess")}},s=0;var u=function(t,e,n,i,o,r,s,u,c,d){"boolean"!=typeof s&&(c=u,u=s,s=!1);var a,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=a):e&&(a=s?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),a)if(l.functional){var f=l.render;l.render=function(t,e){return a.call(e),f(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,a):[a]}return n}({render:function(){var t=this.$createElement,e=this._self._c||t;return this.renderParams&&!this.logoutButton?e("div",{attrs:{id:this.id},on:{click:this.handleClick}}):e("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var t=this,e=this.logoutButton?"signOut":"signIn";r[e]().then((function(e){return t.onSuccess(e)})).catch((function(e){return t.onFailure(e)}))}},mounted:function(){var t=this;r.load(this.params).then((function(){t.renderParams&&!1===t.logoutButton&&window.gapi.signin2.render(t.id,t.renderParams),r.isSignedIn()&&t.onCurrentUser(r.currentUser())})).catch((function(t){console.log(t)}))}},void 0,!1,void 0,void 0,void 0),c={install:function(t,e){t.GoogleAuth=r.load(e)}};t.GoogleLogin=u,t.LoaderPlugin=c,t.default=u,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=vue-google-login.min.js.map


/***/ }),

/***/ "k1hr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mSjr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=13.2ff570fe37a4f7522e02.js.map