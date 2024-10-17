/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/GaugeChart.vue?vue&type=template&id=66e52b49&scoped=true
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{style:(_vm.chartContainerStyle)},[_c('div',{staticClass:"relative",attrs:{"id":"chartContainer"}},[_c('svg',{attrs:{"id":"gaugeChart","viewBox":"-22 -15 250 120"}},[_c('defs',[_c('filter',{attrs:{"id":"dropShadow","x":"-50%","y":"-50%","width":"200%","height":"200%"}},[_c('feDropShadow',{attrs:{"dx":"2","dy":"2","stdDeviation":"2","flood-color":"rgba(0, 0, 0, 0.2)"}})],1)]),_c('path',{attrs:{"id":"gaugeBackground","d":_vm.describeArc(100, 100, 75, _vm.startAngle, _vm.endAngle),"fill":"none","stroke":"#E0E0E0","stroke-width":"14","filter":"url(#dropShadow)"}}),_c('g',{attrs:{"id":"gaugeSegments"}},_vm._l((_vm.segments),function(segment,index){return _c('path',{key:index,staticClass:"gauge-segment",attrs:{"d":segment.d,"stroke":index < _vm.segmentsToShow ? 'green' : '#CCCCCC',"fill":"none","stroke-width":"18"}})}),0),_c('polygon',{staticClass:"gauge-pointer",attrs:{"points":_vm.pointerPoints,"fill":"green"}}),_c('text',{attrs:{"x":"100","y":"70","text-anchor":"middle","font-family":"Space Grotesk","font-weight":"bold","font-size":"20","fill":"green"}},[_vm._v(" "+_vm._s(_vm.value)+"x ")]),_c('text',{attrs:{"x":"-12","y":"100","text-anchor":"middle","fill":"#000000","font-size":"14"}},[_vm._v(_vm._s(_vm.minValue))]),_c('text',{attrs:{"x":"100","y":"-3","text-anchor":"middle","fill":"#000000","font-size":"14"}},[_vm._v(_vm._s(_vm.midValue))]),_c('text',{attrs:{"x":"214","y":"100","text-anchor":"middle","fill":"#000000","font-size":"14"}},[_vm._v(_vm._s(_vm.maxValue))]),_c('text',{attrs:{"x":"100","y":"90","text-anchor":"middle","font-size":"14"}},[_vm._v(_vm._s(_vm.innerLabel))])])])])
}
var staticRenderFns = []


;// ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/GaugeChart.vue?vue&type=script&lang=js

/* harmony default export */ const GaugeChartvue_type_script_lang_js = ({
  name: 'GaugeChart',
  props: {
    value: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    midValue: {
      type: Number,
      default: 75,
    },
    maxValue: {
      type: Number,
      default: 150,
    },
    startAngle: {
      type: Number,
      default: 0,
    },
    endAngle: {
      type: Number,
      default: 180,
    },
    chartWidth: {
      type: Number,
      default: 200,
    },
    innerLabel: {
      type: String,
      default: 'Value',
    }
  },
  data() {
    return {
      segments: [],
    };
  },
  computed: {
    segmentsToShow() {
      return Math.floor((this.value / this.maxValue) * 80); // Adjust based on maxValue
    },
    pointerPoints() {
      const pointerAngle = this.calculatePointerAngle(this.value);
      const pointerPos = this.polarToCartesian(100, 100, 83, pointerAngle);
      const pointerBase1 = this.polarToCartesian(100, 100, 70, pointerAngle + 4);
      const pointerBase2 = this.polarToCartesian(100, 100, 70, pointerAngle - 4);
      return `${pointerPos.x},${pointerPos.y} ${pointerBase1.x},${pointerBase1.y} ${pointerBase2.x},${pointerBase2.y}`;
    },
    chartContainerStyle() {
      return {
        width: this.chartWidth+'px',
      };
    },
  },
  methods: {
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      let angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    },
    describeArc(x, y, radius, startAngle, endAngle) {
      let start = this.polarToCartesian(x, y, radius, endAngle);
      let end = this.polarToCartesian(x, y, radius, startAngle);
      let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      let d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
      return d;
    },
    createGaugeSegments() {
      const segmentCount = 80; // Total number of segments
      const maxAngle = this.endAngle - this.startAngle; // Total angle for segments
      const segmentGap = 1; // Gap between segments in degrees
      const segmentWidth = (maxAngle - segmentGap * (segmentCount - 1)) / segmentCount;
      const segmentRadius = 92;

      this.segments = []; // Clear previous segments

      for (let i = 0; i < segmentCount; i++) {
        let startAngle = this.startAngle + i * (segmentWidth + segmentGap);
        let endAngle = startAngle + segmentWidth;
        this.segments.push({
          d: this.describeArc(100, 100, segmentRadius, startAngle, endAngle),
        });
      }
    },
    calculatePointerAngle(value) {
      // Calculate the angle for the pointer based on value and angles
      const range = this.endAngle - this.startAngle;
      const normalizedValue = Math.min(Math.max(value, this.minValue), this.maxValue); // Clamp value between min and max
      return this.startAngle + ((normalizedValue - this.minValue) / (this.maxValue - this.minValue)) * range;
    },
    updateGauge() {
      this.createGaugeSegments(); // Recalculate segments when value changes
    },
  },
  mounted() {
    this.createGaugeSegments(); // Initialize gauge segments
  },
  watch: {
    value() {
      this.updateGauge();
    },
    minValue() {
      this.updateGauge();
    },
    midValue() {
      this.updateGauge();
    },
    maxValue() {
      this.updateGauge();
    },
    startAngle() {
      this.updateGauge();
    },
    endAngle() {
      this.updateGauge();
    },
  },
});

;// ./src/GaugeChart.vue?vue&type=script&lang=js
 /* harmony default export */ const src_GaugeChartvue_type_script_lang_js = (GaugeChartvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/GaugeChart.vue?vue&type=style&index=0&id=66e52b49&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/GaugeChart.vue?vue&type=style&index=0&id=66e52b49&prod&scoped=true&lang=css

;// ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// ./src/GaugeChart.vue



;


/* normalize component */

var component = normalizeComponent(
  src_GaugeChartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "66e52b49",
  null
  
)

/* harmony default export */ const GaugeChart = (component.exports);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (GaugeChart);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=vue-gauge-chart.common.js.map