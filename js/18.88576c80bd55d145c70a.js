webpackJsonp([18],{

/***/ "84zv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/mixins/PushNotification.js
var PushNotification = __webpack_require__("XGyJ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/login/sign-up/AllowNotification.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var AllowNotification = ({
  name: 'AllowNotification',
  mixins: [PushNotification["a" /* default */], PushNotification["a" /* default */]],
  data: function data() {
    return {};
  },

  methods: {
    regSubscription: function regSubscription() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var router;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                router = _this.$router;

                _this.registerSubscription(_this.$store.state.user);
                _this.askPermission().then(function (val) {
                  router.push({ name: 'AnimalRaisingTutorial' });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a7fd0b8","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/login/sign-up/AllowNotification.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"bg"},[_c('div',{staticClass:"mask"},[_c('div',{staticClass:"main text-left"},[_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-tertiary btn-pick rounded ripple",on:{"click":function($event){return _vm.regSubscription()}}},[_vm._v("\n            　　知道了 　\n          ")])],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sign_up_AllowNotification = (esExports);
// CONCATENATED MODULE: ./src/components/login/sign-up/AllowNotification.vue
function injectStyle (ssrContext) {
  __webpack_require__("Wu7m")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a7fd0b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AllowNotification,
  sign_up_AllowNotification,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var login_sign_up_AllowNotification = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Wu7m":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XGyJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    registerSubscription: function registerSubscription(user) {
      var store = this.$store;
      window.FirebasePlugin.getToken(function (token) {
        console.log("Got FCM token: " + token + " For user: " + user.id);
        var subscriptionInfo = token;
        var method = 'android_fcm';
        store.dispatch('subscription', { user: user, subscriptionInfo: subscriptionInfo, method: method });
      });
    },
    unregisterSubscription: function unregisterSubscription() {
      window.FirebasePlugin.unregister();
      console.log("Unregistered");
    },
    askPermission: function askPermission() {
      var store = this.$store;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        window.FirebasePlugin.grantPermission(function (hasPermission) {
          console.log("Permission is " + (hasPermission ? "granted" : "denied"));
          window.FirebasePlugin.getToken(function (token) {
            var subscriptionInfo = token;
            store.dispatch('setAskedNotification', { info: subscriptionInfo }).then(function () {
              resolve(0);
            });
          });
        }, function (error) {
          console.log(error);
          window.FirebasePlugin.getToken(function (token) {
            var subscriptionInfo = token;
            store.dispatch('setAskedNotification', { info: subscriptionInfo }).then(function () {
              resolve(0);
            });
          });
        });
      });
    },
    checkAskedPermission: function checkAskedPermission() {
      var store = this.$store;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        window.FirebasePlugin.getToken(function (token) {
          var subscriptionInfo = token;
          store.dispatch('checkAskedNotification', { info: subscriptionInfo }).then(function (status) {
            if (status === 1) {
              resolve(1);
            } else if (status === 0) {
              resolve(0);
            } else {
              console.log('not found');
              resolve(-1);
            }
          });
        });
      });
    }
  }
});

/***/ })

});
//# sourceMappingURL=18.88576c80bd55d145c70a.js.map