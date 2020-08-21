webpackJsonp([24],{

/***/ "7JUC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/components/common/Spinner.vue + 2 modules
var Spinner = __webpack_require__("prFi");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/ChatPage.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ChatPage = ({
  name: 'Chatroom',
  props: {
    targetId: String
  },
  components: {
    Spinner: Spinner["a" /* default */]
  },
  data: function data() {
    return {
      targetUser: {
        nickname: ''
      },
      isLoading: true,
      isDisplayMenu: false,
      canLoadMessage: false,
      inputMessage: '',
      modal: {
        isDisplay: false,
        okText: '',
        cancelText: '',
        content: '',
        handler: function handler() {}
      },
      unsubscribe: null
    };
  },
  computed: extends_default()({}, Object(vuex_esm["e" /* mapState */])('chat', {
    chatrooms: 'chatrooms'
  }), Object(vuex_esm["e" /* mapState */])({
    user: 'user'
  }), {
    chatroom: function chatroom() {
      console.log(this.chatrooms[this.targetId]);
      return this.chatrooms[this.targetId];
    },
    targetUserAvatar: function targetUserAvatar() {
      if (!this.targetUser) {
        return '';
      }
      return __webpack_require__("EFPb")("./" + this.targetUser.gender + '-' + this.targetUser.animal + '-' + this.targetUser.type + '.svg');
    }
  }),
  beforeMount: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this = this;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.isLoading = true;
              _context2.prev = 1;
              _context2.next = 4;
              return this.getUserInfo(this.targetId);

            case 4:
              this.targetUser = _context2.sent;
              _context2.next = 7;
              return this.loadHistoryMessage(this.targetId);

            case 7:
              this.canLoadMessage = _context2.sent;
              _context2.next = 10;
              return this.setRead(this.targetUser.gid);

            case 10:
              this.unsubscribe = this.$store.subscribe(function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(mutation) {
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(mutation.type === 'chat/newRemoteMessage')) {
                            _context.next = 3;
                            break;
                          }

                          _context.next = 3;
                          return _this.setRead(_this.targetUser.gid);

                        case 3:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](1);

              console.log(_context2.t0);
              // return to previous page
              this.$router.go(-1);

            case 17:
              this.isLoading = false;

            case 18:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 13]]);
    }));

    function beforeMount() {
      return _ref.apply(this, arguments);
    }

    return beforeMount;
  }(),
  methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])(['deleteFriend', 'getUserInfo']), Object(vuex_esm["b" /* mapActions */])('chat', ['sendMessage', 'loadHistoryMessage', 'setRead']), {
    loadHistoryHandler: function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.canLoadMessage) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                this.isLoading = true;
                _context3.prev = 3;
                _context3.next = 6;
                return this.loadHistoryMessage(this.targetId);

              case 6:
                this.canLoadMessage = _context3.sent;
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](3);

                console.log(_context3.t0);
                this.displayModal('error');

              case 13:
                this.isLoading = false;

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 9]]);
      }));

      function loadHistoryHandler() {
        return _ref3.apply(this, arguments);
      }

      return loadHistoryHandler;
    }(),
    isShowAvatar: function isShowAvatar(index) {
      return index === 0 || this.chatroom[index - 1].from !== this.chatroom[index].from;
    },
    displayModal: function displayModal(type) {
      var _this2 = this;

      console.log(type);
      this.isDisplayMenu = false;
      switch (type) {
        case 'delete':
          this.modal = extends_default()({}, this.modal, {
            isDisplay: true,
            okText: '確定',
            cancelText: '取消',
            content: '確定要刪除好友嗎？',
            handler: this.deleteFriendHandler
          });
          break;
        case 'report':
          this.modal = extends_default()({}, this.modal, {
            isDisplay: true,
            okText: '確定',
            content: '請輸入檢舉原因<br/><input style="margin-top: 18px;"/>',
            handler: this.reportHandler
          });
          break;
        case 'report-success':
          this.modal = extends_default()({}, this.modal, {
            isDisplay: true,
            okText: '確定',
            content: '已檢舉通報，系統將會進行審查！',
            handler: function handler() {
              _this2.modal.isDisplay = false;
            }
          });
          break;
        case 'error':
          this.modal = extends_default()({}, this.modal, {
            isDisplay: true,
            okText: 'OK',
            cancelText: '',
            content: '目前無法送出您的訊息<br>請稍後再試',
            handler: function handler() {
              _this2.modal.isDisplay = false;
            }
          });
          break;
        default:
          this.modal = extends_default()({}, this.modal, {
            display: true,
            okText: 'OK',
            cancelText: '',
            content: '伺服器出現了未知的問題<br>請稍後再試',
            handler: function handler() {
              return _this2.modal.isDisplay = false;
            }
          });
      }
    },
    closeNotification: function closeNotification() {
      // TODO: call close notification api to close notification
    },
    deleteFriendHandler: function () {
      var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // call delete friends action
                this.deleteFriend({
                  targetId: this.targetUser.id,
                  userId: this.user.id,
                  targetName: this.targetId,
                  userName: this.user.gid
                });
                this.modal.isDisplay = false;
                // return to previous page
                this.$router.go(-1);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteFriendHandler() {
        return _ref4.apply(this, arguments);
      }

      return deleteFriendHandler;
    }(),
    reportHandler: function reportHandler() {
      this.displayModal('report-success');
      // TODO: call the API endpoint to block friend
    },
    sendMessageHandler: function () {
      var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (this.inputMessage.length) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt('return');

              case 3:
                // trim the length of input message to 400 
                this.inputMessage = this.inputMessage.substring(0, 400);
                this.sendMessage({
                  message: this.inputMessage,
                  to: this.targetId
                });
                this.inputMessage = '';
                // focus the input after user send message
                this.$refs.input.focus();
                _context5.next = 13;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](0);

                console.log(_context5.t0);
                this.displayModal('error');

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function sendMessageHandler() {
        return _ref5.apply(this, arguments);
      }

      return sendMessageHandler;
    }()
  }),
  beforeDestroy: function beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-491b4326","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/ChatPage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":_vm.targetUser.nickname},on:{"back":function($event){return _vm.$router.go(-1)}}},[_c('div',{attrs:{"slot":"right-top"},slot:"right-top"},[_c('button',{staticClass:"btn rounded ripple header-menu-icon",on:{"click":function($event){_vm.isDisplayMenu = !_vm.isDisplayMenu}}}),_vm._v(" "),_c('transition',{attrs:{"name":"slide-top-fade-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDisplayMenu),expression:"isDisplayMenu"}],staticClass:"chat-control-menu"},[_c('button',{staticClass:"btn ripple",on:{"click":function($event){return _vm.displayModal('delete')}}},[_c('i'),_vm._v("刪除好友")]),_vm._v(" "),_c('button',{staticClass:"btn ripple",on:{"click":function($event){return _vm.displayModal('report')}}},[_c('i'),_vm._v("檢舉對方")])])])],1)]),_vm._v(" "),_c('Spinner',{attrs:{"isSpining":_vm.isLoading}},[_c('transition-group',{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:({ always: true, smooth: false, scrollHandler: _vm.loadHistoryHandler }),expression:"{ always: true, smooth: false, scrollHandler: loadHistoryHandler }"}],ref:"messageContainer",staticClass:"chat-messsage-list",attrs:{"tag":"div","name":"chat-message-transition"}},[(_vm.chatroom.length === 0)?_c('div',{key:"system-message-content-container",staticClass:"systen-messsage-content-container"},[_c('i'),_vm._v(" "),_c('span',[_vm._v("快和新朋友聊聊吧！")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.chatroom),function(message,index){return _c('div',{key:("chatroom-message-" + index),class:{ 'chat-avatar-message': _vm.isShowAvatar(index) }},[(_vm.isShowAvatar(index) && message.from !== _vm.user.gid)?_c('div',{staticClass:"chat-message-avatar-container"},[_c('img',{attrs:{"src":_vm.targetUserAvatar}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"chat-message-content-container"},[_c('span',{class:{
            'user-message': message.from === _vm.user.gid,
            'target-user-message': message.from !== _vm.user.gid,
            'target-user-message-correction': message.from !== _vm.user.gid && !_vm.isShowAvatar(index) }},[_vm._v(" "+_vm._s(message.message)+" ")])])])})],2)],1),_vm._v(" "),_c('div',{staticClass:"chat-input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputMessage),expression:"inputMessage"}],ref:"input",domProps:{"value":(_vm.inputMessage)},on:{"focus":function($event){_vm.$refs.messageContainer.scrollTop = _vm.$refs.messageContainer.scrollHeight},"input":function($event){if($event.target.composing){ return; }_vm.inputMessage=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"ripple",on:{"click":_vm.sendMessageHandler}})]),_vm._v(" "),_c('SlotModal',{attrs:{"show":_vm.modal.isDisplay,"okText":_vm.modal.okText,"cancelText":_vm.modal.cancelText},on:{"ok":_vm.modal.handler,"cancel":function($event){_vm.modal.isDisplay = false}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.modal.content)}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_ChatPage = (esExports);
// CONCATENATED MODULE: ./src/views/ChatPage.vue
function injectStyle (ssrContext) {
  __webpack_require__("h2eV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-491b4326"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ChatPage,
  views_ChatPage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_ChatPage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "h2eV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=24.38815ea532caf633affd.js.map