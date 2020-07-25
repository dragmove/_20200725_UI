/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("../img/favicon.ico?54f962cf123bc57ac8520b4da28d1d03");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/img/favicon.ico
var favicon = __webpack_require__(0);

// EXTERNAL MODULE: ./src/styles/input-form.scss
var input_form = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/TextAreaWithSave.ts
var TextAreaWithSave = /** @class */ (function () {
    function TextAreaWithSave(props) {
        this.isDisabled = false;
        this.isReadonly = false;
        this.formEle = null;
        this.ele = null;
        this.saveBtn = null;
        this.charNumEle = null;
        this.maxCharNum = 9999;
        this.defaultValue = '';
        var _ = this;
        _.formEle = props.formEle;
        _.ele = props.ele;
        _.saveBtn = props.saveBtn;
        _.clickSaveBtnCallback = props.clickSaveBtnCallback;
        _.maxCharNum = props.maxCharNum;
        _.charNumEle = document.querySelector('.form__char-num');
        _.defaultValue = '';
        return _;
    }
    TextAreaWithSave.prototype.init = function () {
        var _a, _b, _c;
        var _ = this;
        _.defaultValue = ((_a = _.ele) === null || _a === void 0 ? void 0 : _a.value) || '';
        (_b = _.ele) === null || _b === void 0 ? void 0 : _b.addEventListener('input', function (evt) {
            var _a;
            var str = this.value;
            // limit max number of characters that user input.
            if (str.length > _.maxCharNum) {
                evt.preventDefault();
                _.setValue(str.substr(0, _.maxCharNum));
            }
            // update states
            _.updateCharNum();
            _.updateState(((_a = _.ele) === null || _a === void 0 ? void 0 : _a.value) || '');
        });
        if (_.clickSaveBtnCallback)
            (_c = _.saveBtn) === null || _c === void 0 ? void 0 : _c.addEventListener('click', _.clickSaveBtnCallback);
        _.updateCharNum();
        return _;
    };
    // public
    TextAreaWithSave.prototype.setDisabled = function (flag) {
        var _ = this;
        if (flag) {
            if (_.ele)
                _.ele.disabled = true;
            _.isDisabled = true;
        }
        else {
            if (_.ele)
                _.ele.disabled = false;
            _.isDisabled = false;
        }
        return _;
    };
    TextAreaWithSave.prototype.setReadOnly = function (flag) {
        var _ = this;
        if (flag) {
            if (_.ele)
                _.ele.readOnly = true;
            _.isReadonly = true;
        }
        else {
            if (_.ele)
                _.ele.readOnly = false;
            _.isReadonly = false;
        }
        return _;
    };
    // getter
    TextAreaWithSave.prototype.getValue = function () {
        return this.ele ? this.ele.value : '';
    };
    // setter
    TextAreaWithSave.prototype.setValue = function (str) {
        if (this.ele)
            this.ele.value = str;
        return this;
    };
    // protected methods
    TextAreaWithSave.prototype.updateState = function (value) {
        var _ = this, formEle = _.formEle;
        if (_.defaultValue === value) {
            formEle === null || formEle === void 0 ? void 0 : formEle.classList.remove('form--changed');
            formEle === null || formEle === void 0 ? void 0 : formEle.classList.add('form--default');
        }
        else {
            formEle === null || formEle === void 0 ? void 0 : formEle.classList.remove('form--default');
            formEle === null || formEle === void 0 ? void 0 : formEle.classList.add('form--changed');
        }
        return _;
    };
    TextAreaWithSave.prototype.updateCharNum = function () {
        var _a;
        var _ = this;
        if (_.charNumEle) {
            var charNum = _.maxCharNum - (((_a = _.ele) === null || _a === void 0 ? void 0 : _a.value.length) || 0);
            _.charNumEle.innerText = "" + charNum;
        }
        return _;
    };
    return TextAreaWithSave;
}());


// CONCATENATED MODULE: ./src/input-form.ts



(function () {
    'use strict';
    function init() {
        console.log('[input-form] init()');
        var textArea = new TextAreaWithSave({
            formEle: document.getElementById('form-message'),
            ele: document.getElementById('form-message__textarea'),
            saveBtn: document.querySelector('.form__btn-save'),
            clickSaveBtnCallback: function (evt) {
                evt.preventDefault();
                // TODO: Need to implement additional features.
                window.alert("You clicked save button. value : " + textArea.getValue());
            },
            maxCharNum: 100,
        }).init();
        var toggleDisabledBtn = document.querySelector('.btn-toggle-disabled');
        toggleDisabledBtn === null || toggleDisabledBtn === void 0 ? void 0 : toggleDisabledBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            if (textArea.isDisabled) {
                textArea.setDisabled(false);
            }
            else {
                textArea.setDisabled(true);
            }
        });
        var toggleReadonlyBtn = document.querySelector('.btn-toggle-readonly');
        toggleReadonlyBtn === null || toggleReadonlyBtn === void 0 ? void 0 : toggleReadonlyBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            if (textArea.isReadonly) {
                textArea.setReadOnly(false);
            }
            else {
                textArea.setReadOnly(true);
            }
        });
    }
    init();
})();


/***/ })
/******/ ]);