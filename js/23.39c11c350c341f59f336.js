webpackJsonp([23],{

/***/ "qmPe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/assets/scripts/animals.js
var animals = __webpack_require__("BBNx");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/friend/pick-friend/PickFriendByCode.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PickFriendByCode = ({
  name: 'PickFriendByCode',
  data: function data() {
    return {
      modal: false,
      modalContent: '活動代碼不存在歐，請再輸入一次！',
      number: 3,
      gender: 'any',
      type: 'any',
      animal: 'any',
      animals: animals["b" /* default */],
      activityCode: '' // activity code in input field
    };
  },

  computed: {
    allset: function allset() {
      return Boolean(this.number && this.animal && this.gender && this.type);
    }
  },
  methods: {
    modalConfirm: function modalConfirm() {
      this.modal = false;
    },
    isActivityCodeValid: function isActivityCodeValid() {
      this.activityCode = this.activityCode.toLowerCase().replace(/\s*/g, ''); // transfer code to lowercase and delete space
      if (this.activityCode === 'somnus') {
        return true;
      } else {
        return false;
      }
    },
    submit: function submit() {
      var _this = this;

      if (!this.allset) {
        this.modal = true;
        this.modalContent = '請先選擇你的條件喔~';
        return;
      }
      if (!this.isActivityCodeValid()) {
        this.modal = true;
        this.modalContent = '活動代碼不存在歐，請再輸入一次！';
      } else {
        this.$store.dispatch('pickFriendByCode', {
          gender: this.gender,
          activityCode: this.activityCode
        }).then(function (result) {
          _this.$router.push({
            name: 'PickFriendResult',
            params: {
              result: result
            }
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5a340a12","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/friend/pick-friend/PickFriendByCode.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'Somnus 耶舞特別企劃'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"main text-left"},[_vm._v("\n    輸入 \"somnus\" 就可以配對到耶舞的人囉！\n    "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"select-item"},[_vm._v("\n      我想要抽\n      "),_c('div',{staticClass:"style-select gender-select"},[_vm._m(0),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.gender=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("性別")]),_vm._v(" "),_c('option',{attrs:{"value":"male"}},[_vm._v("男生")]),_vm._v(" "),_c('option',{attrs:{"value":"female"}},[_vm._v("女生")]),_vm._v(" "),_c('option',{attrs:{"value":"any"}},[_vm._v("任何性別")])])])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activityCode),expression:"activityCode"},{name:"focus",rawName:"v-focus"}],ref:"input",attrs:{"id":"input","placeholder":"請輸入本次活動代碼"},domProps:{"value":(_vm.activityCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activityCode=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-tertiary btn-pick",on:{"click":_vm.submit}},[_vm._v("\n        　　開始配對　　\n      ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-offline-activity"},[_c('Button',{staticClass:"btn btn-pick",on:{"click":function($event){return _vm.$router.push('/pickFriend');}}},[_vm._v("\n        返回一般抽卡功能\n      ")])],1)]),_vm._v(" "),_c('Modal',{attrs:{"show":_vm.modal,"content":_vm.modalContent,"okText":"了解"},on:{"ok":_vm.modalConfirm}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pick_friend_PickFriendByCode = (esExports);
// CONCATENATED MODULE: ./src/components/friend/pick-friend/PickFriendByCode.vue
function injectStyle (ssrContext) {
  __webpack_require__("qroV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a340a12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PickFriendByCode,
  pick_friend_PickFriendByCode,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var friend_pick_friend_PickFriendByCode = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qroV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=23.39c11c350c341f59f336.js.map