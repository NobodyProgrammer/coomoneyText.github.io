webpackJsonp([16],{

/***/ "1ZR4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/tiny-slider.js + 41 modules
var tiny_slider = __webpack_require__("MkO0");

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/tiny-slider.scss
var src_tiny_slider = __webpack_require__("qQE7");
var tiny_slider_default = /*#__PURE__*/__webpack_require__.n(src_tiny_slider);

// EXTERNAL MODULE: ./src/assets/css/slider.scss
var slider = __webpack_require__("xsJ/");
var slider_default = /*#__PURE__*/__webpack_require__.n(slider);

// EXTERNAL MODULE: ./node_modules/timers-browserify/main.js
var main = __webpack_require__("162o");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./src/assets/scripts/animals.js
var animals = __webpack_require__("BBNx");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/friend/pick-friend/PickedFriendProfile.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PickedFriendProfile = ({
  name: 'PickedFriendProfile',
  props: ['user'],
  data: function data() {
    return {
      image: '',
      nickname: '',
      sign: '',
      personalities: ['浪漫', '狂野', '睿智', '活力', '佛系'],
      animals: animals["a" /* animalsMap */],
      showLogoutConfirm: false
    };
  },
  mounted: function mounted() {
    try {
      var obj = this.user;
      this.image = __webpack_require__("EFPb")("./" + obj.gender + '-' + obj.animal + '-' + obj.type + '.svg');
    } catch (e) {} // if not init, router will be pushed to animalRaising when initialized
  },

  computed: {
    personalityScores: function personalityScores() {
      var scores = this.user.personality.split(',').map(function (v) {
        return 100 * Number(v);
      });
      var mean = scores.reduce(function (sum, value) {
        return sum + value;
      }) / scores.length;

      var std = Math.sqrt(scores.reduce(function (sum, value) {
        return sum + Math.pow(value - mean, 2);
      }) / scores.length);
      return scores.map(function (value) {
        return (value - mean) / std * 20 + 50;
      });

      // return scores.map(value => (value-mean)*2.5 + 50)
    }
  },
  methods: {
    typeValue: function typeValue(index) {
      var value = Math.min(Math.max(0, this.personalityScores[index]), 100) + '%';
      return value;
    },
    back: function back() {
      this.$emit('back');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d582edc4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/friend/pick-friend/PickedFriendProfile.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('Header',{attrs:{"title":_vm.user.nickname,"back":false}}),_vm._v(" "),_c('div',{staticClass:"main text-center"},[_c('img',{staticClass:"avatar",attrs:{"src":_vm.image}}),_vm._v(" "),_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.personalities[parseInt(_vm.user.type)-1])+_vm._s(_vm.animals.get(parseInt(_vm.user.animal)).name))]),_vm._v(" "),_c('div',{staticClass:"items"},[_c('div',{staticClass:"item"},[_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("暱稱")]),_vm._v(" "),_c('div',{staticClass:"value"},[_vm._v("\n            "+_vm._s(_vm.user.nickname)+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"key-value-container"},[_c('div',{staticClass:"key"},[_vm._v("簽名")]),_vm._v(" "),_c('div',{staticClass:"value"},[_vm._v("\n            "+_vm._s(_vm.user.sign)+"\n          ")])])])]),_vm._v(" "),_c('div',{staticClass:"personalities"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.user.nickname)+"的性格分析")]),_vm._v(" "),_vm._l((_vm.personalities),function(personality,index){return _c('div',{staticClass:"personality"},[_c('div',{staticClass:"key"},[_vm._v(_vm._s(_vm.personalities[index]))]),_vm._v(" "),_c('div',{staticClass:"bar"},[_c('div',{staticClass:"border",style:({width: '100%'})}),_vm._v(" "),_c('div',{staticClass:"value",style:({width: _vm.typeValue(index)})})])])})],2),_vm._v(" "),_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-tertiary btn-pick",on:{"click":_vm.back}},[_vm._v("\n        返回\n      ")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pick_friend_PickedFriendProfile = (esExports);
// CONCATENATED MODULE: ./src/components/friend/pick-friend/PickedFriendProfile.vue
function injectStyle (ssrContext) {
  __webpack_require__("kBS4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d582edc4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PickedFriendProfile,
  pick_friend_PickedFriendProfile,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var friend_pick_friend_PickedFriendProfile = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/friend/pick-friend/PickFriendResult.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var PickFriendResult_slider = {};

/* harmony default export */ var PickFriendResult = ({
  components: {
    PickedFriendProfile: friend_pick_friend_PickedFriendProfile
  },
  props: ['result'],
  data: function data() {
    return {
      items: [],
      modal: false,
      cardModal: false,
      selectedItem: {},
      modalContent: '已新增至聊天列表!'
    };
  },
  created: function created() {
    var _this = this;

    this.items = this.result;
    if (this.items.length === 0) {
      this.modal = true;
      this.modalContent = '沒有符合的條件!';
      Object(main["setTimeout"])(function () {
        _this.$router.push('/friendPage');
      }, 1000);
    }
  },
  mounted: function mounted() {
    this.renderSlider();
  },

  methods: {
    renderSlider: function renderSlider() {
      PickFriendResult_slider = Object(tiny_slider["a" /* tns */])({
        container: '.slider',
        items: this.items.length === 1 ? 0 : 1,
        slideBy: 'page',
        mouseDrag: true,
        swipeAngle: false,
        edgePadding: 55,
        gutter: 20,
        speed: 400,
        loop: false,
        navPosition: 'bottom'
      });
    },
    skip: function skip() {
      if (this.items.length === 1) {
        this.$router.push('/friendPage');
        return false;
      }
      var index = PickFriendResult_slider.getInfo().navCurrentIndex;
      // document.querySelectorAll('.tns-item')[index].classList.add('remove')
      PickFriendResult_slider.destroy();
      document.querySelectorAll('.item')[index].remove();
      this.items.splice(index, 1);
      this.renderSlider();
    },
    getAvatar: function getAvatar(obj) {
      return __webpack_require__("EFPb")("./" + obj.gender + '-' + obj.animal + '-' + obj.type + '.svg');
    },
    triggerEllipsis: function triggerEllipsis(index) {
      this.cardModal = true;
      this.selectedItem = this.items[index];
      // this.items[index].ellipsis = !this.items[index].ellipsis;
    },
    addFriends: function addFriends() {
      var _this2 = this;

      this.modal = true;
      var index = this.items.length === 1 ? 0 : PickFriendResult_slider.getInfo().navCurrentIndex;
      this.$store.dispatch('addFriends', [this.items[index]]);
      Object(main["setTimeout"])(function () {
        _this2.modal = false;
        _this2.skip();
      }, 1000);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54c686f7","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/friend/pick-friend/PickFriendResult.vue
var PickFriendResult_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":'抽抽'},on:{"back":function($event){return _vm.$router.go(-1)}}}),_vm._v(" "),_c('div',{staticClass:"main text-center"},[_c('div',{staticClass:"block-slider"},[_c('div',{staticClass:"slider"},_vm._l((_vm.items),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"name",on:{"click":function($event){return _vm.triggerEllipsis(index)}}},[_c('div',{staticClass:"label"},[_vm._v("暱稱")]),_vm._v(" "),_c('div',{staticClass:"value"},[_vm._v(_vm._s(item.nickname))])]),_vm._v(" "),_c('div',{staticClass:"name",on:{"click":function($event){return _vm.triggerEllipsis(index)}}},[_c('div',{staticClass:"label"},[_vm._v("契合度")]),_vm._v(" "),_c('div',{staticClass:"value"},[_vm._v(_vm._s(item.matchPoint)+"%")])]),_vm._v(" "),_c('div',{staticClass:"image",on:{"click":function($event){return _vm.triggerEllipsis(index)}}},[_c('img',{attrs:{"src":_vm.getAvatar(item),"alt":""}}),_vm._v(" "),_c('div',{class:{'text': true, 'ellipsis': item.ellipsis}},[_vm._v("簽名:"+_vm._s(item.sign || '無簽名'))])])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"btn-wrapper"},[_c('Button',{staticClass:"btn btn-default btn-pick",on:{"click":function($event){return _vm.skip()}}},[_vm._v("下次再說")]),_vm._v(" "),_c('Button',{staticClass:"btn btn-tertiary btn-pick",on:{"click":_vm.addFriends}},[_vm._v("加入")])],1)]),_vm._v(" "),(_vm.modal)?_c('div',{staticClass:"modal"},[_c('div',{staticClass:"bg"}),_vm._v(" "),_c('div',{staticClass:"wrapper text-center"},[_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.modalContent))])])]):_vm._e(),_vm._v(" "),(_vm.cardModal)?_c('PickedFriendProfile',{attrs:{"user":_vm.selectedItem},on:{"back":function($event){_vm.cardModal=false}}}):_vm._e()],1)}
var PickFriendResult_staticRenderFns = []
var PickFriendResult_esExports = { render: PickFriendResult_render, staticRenderFns: PickFriendResult_staticRenderFns }
/* harmony default export */ var pick_friend_PickFriendResult = (PickFriendResult_esExports);
// CONCATENATED MODULE: ./src/components/friend/pick-friend/PickFriendResult.vue
function PickFriendResult_injectStyle (ssrContext) {
  __webpack_require__("XnQK")
}
var PickFriendResult_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var PickFriendResult___vue_template_functional__ = false
/* styles */
var PickFriendResult___vue_styles__ = PickFriendResult_injectStyle
/* scopeId */
var PickFriendResult___vue_scopeId__ = "data-v-54c686f7"
/* moduleIdentifier (server only) */
var PickFriendResult___vue_module_identifier__ = null
var PickFriendResult_Component = PickFriendResult_normalizeComponent(
  PickFriendResult,
  pick_friend_PickFriendResult,
  PickFriendResult___vue_template_functional__,
  PickFriendResult___vue_styles__,
  PickFriendResult___vue_scopeId__,
  PickFriendResult___vue_module_identifier__
)

/* harmony default export */ var friend_pick_friend_PickFriendResult = __webpack_exports__["default"] = (PickFriendResult_Component.exports);


/***/ }),

/***/ "XnQK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kBS4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=16.eccdb52fed8d7135dd64.js.map