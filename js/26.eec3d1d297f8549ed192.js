webpackJsonp([26],{

/***/ "cEc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/assets/scripts/animals.js
var animals = __webpack_require__("BBNx");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/friend/pick-friend/PickFriend.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PickFriend = ({
  name: 'Pick',
  data: function data() {
    return {
      modal: false,
      modalContent: '今天的抽抽額度已用完，<br>請明天再來吧!',
      limit: 0,
      days: 0,
      number: 3,
      gender: 'any',
      type: 'any',
      animal: 'any',
      animals: animals["b" /* default */]
    };
  },

  computed: {
    allset: function allset() {
      return Boolean(this.number && this.animal && this.gender && this.type);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('checkLimit').then(function (data) {
      _this.days = data['days'];
      _this.limit = 3 - data['limit'];
    });
  },

  methods: {
    modalConfirm: function modalConfirm() {
      this.modal = false;
      if (this.limit <= 0 || this.days === 0) {
        this.$router.push('/friendPage');
      }
    },
    submit: function submit() {
      var _this2 = this;

      if (!this.allset) {
        this.modal = true;
        this.modalContent = '請先選擇你的條件喔~';
        return;
      }
      if (this.days === 0) {
        this.modal = true;
        this.modalContent = '連續兩天登入，才有機會認識新朋友唷！';
      } else if (this.limit <= 0) {
        this.limit = 0;
        this.modal = true;
        this.modalContent = '今天的抽抽額度已用完，<br>請明天再來吧!';
      } else {
        this.$store.dispatch('pick', {
          number: this.number,
          gender: this.gender,
          type: this.type,
          animal: this.animal
        }).then(function (result) {
          _this2.$router.push({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-34125ce4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/friend/pick-friend/PickFriend.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'抽抽'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"main text-left"},[_c('div',{staticClass:"select-item"},[_vm._v("\n      我想要抽\n      "),_c('div',{staticClass:"style-select number-select"},[_vm._m(0),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.number),expression:"number"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.number=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0","disabled":"","selected":""}},[_vm._v("數量")]),_vm._v(" "),_vm._l((_vm.limit),function(n){return _c('option',{domProps:{"value":n}},[_vm._v(_vm._s(n))])})],2)]),_vm._v("\n      隻\n    ")]),_vm._v(" "),_c('div',{staticClass:"select-item"},[_c('div',{staticClass:"style-select gender-select"},[_vm._m(1),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.gender=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("性別")]),_vm._v(" "),_c('option',{attrs:{"value":"male"}},[_vm._v("男生")]),_vm._v(" "),_c('option',{attrs:{"value":"female"}},[_vm._v("女生")]),_vm._v(" "),_c('option',{attrs:{"value":"any"}},[_vm._v("任何性別")])])])]),_vm._v(" "),_c('div',{staticClass:"select-item"},[_c('div',{staticClass:"style-select type-select"},[_vm._m(2),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("個性")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("浪漫")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("狂野")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("睿智")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("活力")]),_vm._v(" "),_c('option',{attrs:{"value":"5"}},[_vm._v("佛系")]),_vm._v(" "),_c('option',{attrs:{"value":"any"}},[_vm._v("任何個性")])])])]),_vm._v(" "),_c('div',{staticClass:"select-item"},[_c('div',{staticClass:"style-select animal-select"},[_vm._m(3),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.animal),expression:"animal"}],attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.animal=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("動物")]),_vm._v(" "),_vm._l((_vm.animals),function(a){return _c('option',{key:a.id,domProps:{"value":a.id}},[_vm._v(_vm._s(a.name))])}),_vm._v(" "),_c('option',{attrs:{"value":"any"}},[_vm._v("任何動物")])],2)])]),_vm._v(" "),_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-tertiary btn-pick",on:{"click":_vm.submit}},[_vm._v("\n        　　開始抽卡　　\n      ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-add-by-email"},[_c('Button',{staticClass:"btn btn-pick",on:{"click":function($event){return _vm.$router.push('/pickFriendByEmail');}}},[_vm._v("\n        進入實體活動配對\n      ")])],1)]),_vm._v(" "),_c('Modal',{attrs:{"show":_vm.modal,"content":_vm.modalContent,"okText":"了解"},on:{"ok":_vm.modalConfirm}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bg"},[_c('img',{attrs:{"src":__webpack_require__("rix4"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pick_friend_PickFriend = (esExports);
// CONCATENATED MODULE: ./src/components/friend/pick-friend/PickFriend.vue
function injectStyle (ssrContext) {
  __webpack_require__("xNZ/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34125ce4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PickFriend,
  pick_friend_PickFriend,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var friend_pick_friend_PickFriend = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xNZ/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=26.eec3d1d297f8549ed192.js.map