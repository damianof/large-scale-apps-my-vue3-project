(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-component-library"] = factory(require("vue"));
	else
		root["my-component-library"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__507__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 507:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__507__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ThemeInfoInterface": function() { return /* reexport */ models_namespaceObject.ThemeInfoInterface; },
  "ThemeSelector": function() { return /* reexport */ ThemeSelector_component; }
});

// NAMESPACE OBJECT: ./src/theme-selector/models/index.ts
var models_namespaceObject = {};
__webpack_require__.r(models_namespaceObject);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/theme-selector/models/index.ts


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(507);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/theme-selector/ThemeSelector.component.vue?vue&type=template&id=40965fa4


const _hoisted_1 = { class: "theme-selector" }
const _hoisted_2 = { class: "theme-radio-group" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ThemeRadio = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ThemeRadio")

  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)("div", _hoisted_1, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", _hoisted_2, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(_ctx.themes, (theme, index) => {
        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_ThemeRadio, {
          key: index,
          themeInfo: theme,
          onClicked: _ctx.changeTheme
        }, null, 8, ["themeInfo", "onClicked"]))
      }), 128))
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue?vue&type=template&id=40965fa4

;// CONCATENATED MODULE: ./src/theme-selector/store-models/LocalStorageKeys.ts
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys.theme = 'theme';
})(LocalStorageKeys || (LocalStorageKeys = {}));

;// CONCATENATED MODULE: ./src/theme-selector/store-models/Actions.model.ts

/**
 * @name ActionsModel
 */
class ActionsModel {
    constructor(store) {
        this.store = store;
    }
    loadThemes(themes) {
        this.store.mutations.loadThemes(themes);
    }
    selectTheme(themeId) {
        if (document.body.className.indexOf('-theme') > 0) {
            document.body.className = document.body.className.replace(/[\w^-]+-theme+/gi, themeId);
        }
        else {
            document.body.classList.add(themeId);
        }
        localStorage.setItem(LocalStorageKeys.theme, themeId);
        this.store.mutations.selectTheme(themeId);
    }
}

;// CONCATENATED MODULE: ./src/theme-selector/store-models/Mutations.model.ts
/**
 * @name MutationsModel
 */
class MutationsModel {
    constructor(state) {
        this.state = state;
    }
    loadThemes(themes) {
        this.state.themes = themes;
    }
    selectTheme(themeId) {
        this.state.themes.forEach(theme => {
            theme.selected = theme.id === themeId;
        });
    }
}

;// CONCATENATED MODULE: ./src/theme-selector/store-models/Store.model.ts


/**
 * @name Store model
 */
class StoreModel {
    constructor(state) {
        this.state = state;
        this.mutations = new MutationsModel(this.state);
        this.actions = new ActionsModel(this);
    }
}

;// CONCATENATED MODULE: ./src/theme-selector/store-models/index.ts






;// CONCATENATED MODULE: ./src/theme-selector/ThemesStore.ts


// drive themes with config
const availableThemes = [];
/**
 * @name themesState (reactive)
 * @description
 * The Themes state instance
 */
const themesState = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
    themes: availableThemes
});
// store
const Store = new StoreModel(themesState);

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/theme-selector/ThemeRadio.component.vue?vue&type=template&id=764bba7e


const ThemeRadio_componentvue_type_template_id_764bba7e_hoisted_1 = { class: "material-icons" }

function ThemeRadio_componentvue_type_template_id_764bba7e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)("label", {
    role: "radio",
    class: _ctx.cssClass
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("i", ThemeRadio_componentvue_type_template_id_764bba7e_hoisted_1, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.themeInfo.icon), 1),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("input", {
      type: "radio",
      class: "icon-button",
      name: "theme",
      value: _ctx.themeInfo.selected,
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 8, ["value"])
  ], 2))
}
;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue?vue&type=template&id=764bba7e

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??clonedRuleSet-80.use[0]!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-80.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/theme-selector/ThemeRadio.component.vue?vue&type=script&lang=ts

/* harmony default export */ var ThemeRadio_componentvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    props: {
        themeInfo: {
            type: Object
        }
    },
    computed: {
        cssClass() {
            const themeInfo = this.$props.themeInfo;
            return `theme-radio ${themeInfo?.id} ${themeInfo?.selected ? 'selected' : ''}`.trim();
        }
    },
    emits: ['clicked'],
    setup(props, { emit }) {
        const onClick = () => {
            emit('clicked', props.themeInfo?.id);
        };
        return {
            onClick
        };
    }
}));

;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue



ThemeRadio_componentvue_type_script_lang_ts.render = ThemeRadio_componentvue_type_template_id_764bba7e_render

/* harmony default export */ var ThemeRadio_component = (ThemeRadio_componentvue_type_script_lang_ts);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??clonedRuleSet-80.use[0]!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-80.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/theme-selector/ThemeSelector.component.vue?vue&type=script&lang=ts




/* harmony default export */ var ThemeSelector_componentvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    components: {
        ThemeRadio: ThemeRadio_component
    },
    props: {
        availableThemes: {
            type: Array,
            default: []
        }
    },
    computed: {
        themes: () => {
            return Store.state.themes;
        }
    },
    emits: ['themeClicked', 'themeChanged'],
    setup(props, { emit }) {
        // handles theme radio click:
        const changeTheme = (themeId) => {
            emit('themeClicked', themeId);
            Store.actions.selectTheme(themeId);
            emit('themeChanged', themeId);
        };
        // on mounted, initialize the themes
        // and make sure we select a theme
        // (from user preference saved in localStorage or default to first theme)
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
            Store.actions.loadThemes(props.availableThemes);
            // for the current theme,
            // try using the last user's preferred theme
            // if available from localStorage
            const userPreferredThemeId = localStorage.getItem(LocalStorageKeys.theme) || '';
            if (userPreferredThemeId.length > 0) {
                // select from user preference saved in localStorage
                changeTheme(userPreferredThemeId);
            }
            else {
                if (props.availableThemes.length > 0) {
                    const selected = props.availableThemes.find(item => item.selected);
                    if (selected) {
                        changeTheme(selected.id);
                    }
                    else {
                        // select the first one
                        changeTheme(props.availableThemes[0].id);
                    }
                }
            }
        });
        return {
            changeTheme
        };
    }
}));

;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue



ThemeSelector_componentvue_type_script_lang_ts.render = render

/* harmony default export */ var ThemeSelector_component = (ThemeSelector_componentvue_type_script_lang_ts);
;// CONCATENATED MODULE: ./src/index.ts




;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});