webpackJsonp([22],{

/***/ "NRA+":
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

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./src/libs/accessories.js
var accessories = __webpack_require__("fHtX");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/DressingRoom.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DressingRoom = ({
  name: 'DressingRoom',
  data: function data() {
    return {
      accessories: accessories["a" /* default */],
      steps: [],
      saveModal: false,
      leaveModal: false,
      activeAccessories: []
    };
  },

  computed: extends_default()({}, Object(vuex_esm["e" /* mapState */])({
    user: 'user'
  }), Object(vuex_esm["c" /* mapGetters */])(['posture'])),
  watch: {},
  created: function created() {
    this.activeAccessories = this.user.accessory.split(',').map(function (val) {
      return parseInt(val, 10);
    });
    this.pushStep();
  },

  methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])(['submitForm']), {
    toggle: function toggle(index) {
      var _this = this;

      this.pushStep();
      if (this.activeAccessories.includes(index)) {
        this.removeAccessory(index);
      } else {
        var part = this.accessories[index].part;
        accessories["a" /* default */].forEach(function (obj, index) {
          if (obj.part === part) _this.removeAccessory(index);
        });
        this.addAccessory(index);
      }
    },
    removeAccessory: function removeAccessory(index) {
      this.activeAccessories = this.activeAccessories.filter(function (e) {
        return e !== index;
      });
    },
    addAccessory: function addAccessory(index) {
      this.activeAccessories.push(index);
    },
    pushStep: function pushStep() {
      this.steps.push(this.activeAccessories);
    },
    popStep: function popStep() {
      if (this.steps.length) this.activeAccessories = this.steps.pop();
    },
    clear: function clear() {
      this.pushStep();
      this.activeAccessories = [];
    },
    save: function save() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.submitForm({
                  accessory: _this2.activeAccessories
                });

              case 2:
                _this2.$router.push('/animalRaising');

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },


    /*
     * Since posture range from 1-5 (bodyShapeIndex)
     * but there is only three types of ainimal body shape, which 1&2 are same, 4&5 are same,
     * thus ainimal image index only range from 1-3 (bodyShapeImageIndex).
     * So a index convert is needed(bodyShapeIndex->bodyShapeImageIndex).
    */
    getAinimalBodyShapeImageIndex: function getAinimalBodyShapeImageIndex() {
      var bodyShapeIndex = this.posture;
      var bodyShapeImageIndex = 1;
      if (bodyShapeIndex === 1 || bodyShapeIndex === 2) {
        bodyShapeImageIndex = 1;
      } else if (bodyShapeIndex === 3) {
        bodyShapeImageIndex = 2;
      } else if (bodyShapeIndex === 4 || bodyShapeIndex === 5) {
        bodyShapeImageIndex = 3;
      }
      return bodyShapeImageIndex;
    }
  })
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f51af13","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/DressingRoom.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{directives:[{name:"screen-height",rawName:"v-screen-height"}],staticClass:"bg"}),_vm._v(" "),_c('div',{directives:[{name:"screen-height",rawName:"v-screen-height"}],staticClass:"main text-center"},[_c('div',{staticClass:"close-btn"},[_c('button',{staticClass:"btn round-icon ripple",on:{"click":function($event){_vm.leaveModal=true}}})]),_vm._v(" "),_c('div',{staticClass:"block-animal"},[_c('img',{staticClass:"animal",attrs:{"src":__webpack_require__("Ij9h")("./animal_" + (_vm.user.animal) + "_" + (_vm.getAinimalBodyShapeImageIndex()) + ".gif")}}),_vm._v(" "),_vm._l((_vm.accessories),function(accessory,index){return (_vm.activeAccessories.includes(index))?_c('img',{key:index,staticClass:"accessory",attrs:{"src":__webpack_require__("E0pE")("./accessory_" + (_vm.user.animal) + "_" + (_vm.getAinimalBodyShapeImageIndex()) + "_" + (index+1) + ".png")}}):_vm._e()}),_vm._v(" "),(_vm.posture == 1)?_c('img',{staticClass:"accessory",attrs:{"src":__webpack_require__("SFEV")("./annoy_" + (_vm.user.animal) + ".gif")}}):_vm._e(),_vm._v(" "),(_vm.posture == 5)?_c('img',{staticClass:"accessory",attrs:{"src":__webpack_require__("crih")("./crown_" + (_vm.user.animal) + ".gif")}}):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"block-accessories"},[_c('div',{staticClass:"btns"},[_c('div',{staticClass:"pull-left"},[_c('Button',{staticClass:"btn btn-tertiary rounded ripple",on:{"click":_vm.popStep}},[_vm._v("上一步")])],1),_vm._v(" "),_c('div',{staticClass:"pull-right"},[_c('Button',{staticClass:"btn btn-tertiary rounded ripple",on:{"click":_vm.clear}},[_vm._v("清空")]),_vm._v(" "),_c('Button',{staticClass:"btn btn-tertiary rounded ripple",on:{"click":function($event){_vm.saveModal=true}}},[_vm._v("保存")])],1)]),_vm._v(" "),_c('div',{staticClass:"desk"},_vm._l((_vm.accessories),function(accessorie,index){return _c('div',{key:index,staticClass:"wrapper",class:{active: _vm.activeAccessories.includes(index)},on:{"click":function($event){return _vm.toggle(index)}}},[_c('div',{staticClass:"image",style:({
              'background-image': 'url('+accessorie.img+')',
              'background-size': accessorie.size,
            })}),_vm._v(" "),_c('div',{staticClass:"label"},[_vm._v(_vm._s(accessorie.label))])])}),0)])]),_vm._v(" "),_c('SlotModal',{attrs:{"show":_vm.saveModal,"isFullScreen":true,"cancelText":"放棄","okText":"保存"},on:{"ok":_vm.save,"cancel":function($event){_vm.saveModal=false}}},[_c('div',[_vm._v("確定要變更外觀嗎?")])]),_vm._v(" "),_c('SlotModal',{attrs:{"show":_vm.leaveModal,"isFullScreen":true,"cancelText":"放棄","okText":"保存"},on:{"ok":_vm.save,"cancel":function($event){return _vm.$router.push('/animalRaising')}}},[_c('div',[_vm._v("你要放棄更改外觀嗎?")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_DressingRoom = (esExports);
// CONCATENATED MODULE: ./src/views/DressingRoom.vue
function injectStyle (ssrContext) {
  __webpack_require__("ga4h")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f51af13"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  DressingRoom,
  views_DressingRoom,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_DressingRoom = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ga4h":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=22.fb364dc7df0d3306e448.js.map