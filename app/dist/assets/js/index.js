/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/assets/js/main.js":
/*!***********************************!*\
  !*** ./app/src/assets/js/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_hamburguerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/hamburguerMenu.js */ "./app/src/assets/js/models/hamburguerMenu.js");


const $menu = document.querySelector("[data-element-id='menu']");
const $menuHamburguerButton = document.querySelector("[data-element-id='menuHamburguerIcon']");

new _models_hamburguerMenu_js__WEBPACK_IMPORTED_MODULE_0__.Menu($menu, $menuHamburguerButton);

/***/ }),

/***/ "./app/src/assets/js/models/hamburguerMenu.js":
/*!****************************************************!*\
  !*** ./app/src/assets/js/models/hamburguerMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor($menu, $hamburguerMenuButton) {
        this.$menu = $menu;
        this.$menuHamburguerButton = $hamburguerMenuButton;

        this.toggleMenu();
        this.closeMenuWhenClickOutside();
        this.changeMenuWhenWindowShrinks();
    }

    toggleMenu() {
        this.$menuHamburguerButton.addEventListener("click", () => {
            this.$menu.classList.toggle("menu-is-active");
        });
    }

    closeMenuWhenClickOutside() {
        window.addEventListener("click", event => {
            if (!event.composedPath().includes(this.$menu)) {
                this.$menu.classList.remove("menu-is-active");
            }
        });
    }

    changeMenuWhenWindowShrinks() {
        // Fix the bug when screen changes size with icon open or closed
        document.body.onresize = () => {
            const clientWindowTarget = 1024;
            if (document.body.clientWidth >= clientWindowTarget - 17) {
                this.$menu.classList.remove("menu-is-active");
            }
        }
    }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/src/assets/css/index.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/src/assets/css/index.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/Close.svg */ "./app/src/assets/images/icons/Close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Sheet Music.svg */ "./app/src/assets/images/Sheet Music.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Sing Course.png */ "./app/src/assets/images/Sing Course.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Children's Musicalization Course.png */ "./app/src/assets/images/Children's Musicalization Course.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Choir Conductor Course.png */ "./app/src/assets/images/Choir Conductor Course.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Presentations Course.png */ "./app/src/assets/images/Presentations Course.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/Arrow Left.svg */ "./app/src/assets/images/icons/Arrow Left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/Arrow Right.svg */ "./app/src/assets/images/icons/Arrow Right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/********** VENDORS **********/ /* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n/* Document\r\n   ========================================================================== */\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\nbutton,\r\n[type=button],\r\n[type=reset],\r\n[type=submit] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\nbutton::-moz-focus-inner,\r\n[type=button]::-moz-focus-inner,\r\n[type=reset]::-moz-focus-inner,\r\n[type=submit]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\nbutton:-moz-focusring,\r\n[type=button]:-moz-focusring,\r\n[type=reset]:-moz-focusring,\r\n[type=submit]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n[type=checkbox],\r\n[type=radio] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n[type=number]::-webkit-inner-spin-button,\r\n[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n[type=search] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n/********** IMPORTS **********/\r\n/**\r\n    Name: \"Dancing Script\";\r\n    URL: https://fonts.google.com/specimen/Dancing+Script;\r\n    Purpose: Titles;\r\n    Weigths:\r\n        * 700 - Bold;\r\n*/\r\n/**\r\n    Name: \"Inter\";\r\n    URL: https://fonts.google.com/specimen/Inter;\r\n    Purpose: Default texts;\r\n    Weigths:\r\n        * 400 - Regular;\r\n*/\r\n/********** ABSTRACTS **********/\r\n/********** PAGE CONFIGURATIONS **********/\r\n/********** COLORS **********/\r\n/********** BACKGROUNDS **********/\r\n/********** BORDERS **********/\r\n/********** SHADOWS **********/\r\n/********** TEXTS **********/\r\n/********** FONTS **********/\r\n/* ========== BASIC LAYOUTS ==========*/\r\n/* STANDARD  CONTENT WIDTH */\r\n/* STANDARD BOTTOM MARGIN OF SEPARATION */\r\n/* ========== PAGE SECTIONS ==========*/\r\n/* CONTENT BOX OF COURSE */\r\n/* ========== BASIC COMPONENTS ==========*/\r\n/* ========== ACESSIBILITY LAYOUT ==========*/\r\n/* ACESSIBILITY */\r\n/*========== AUXILIARY CLASSES ==========*/\r\n/* VISIBILITY */\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n/********** BASE **********/\r\nhtml,\r\nbody {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(hsl(42deg, 100%, 67%), hsl(43deg, 100%, 50%));\r\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* TITLES */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Dancing Script\", Arial, Helvetica, cursive;\r\n}\r\n\r\nh1 {\r\n  font-size: 3rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nh5 {\r\n  font-size: 1rem;\r\n}\r\n\r\nh6 {\r\n  font-size: 0.5rem;\r\n}\r\n\r\np,\r\nblockquote {\r\n  line-height: 1.25;\r\n}\r\n\r\n/* FORMS */\r\nfieldset {\r\n  padding: 0;\r\n}\r\n\r\n/* LINKS */\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/* OTHERS */\r\nhr {\r\n  border: 1px solid hsl(0deg, 0%, 0%);\r\n}\r\n\r\n/* RESPONSIVE LAYOUTS */\r\n/* TABLET */\r\n@media screen and (min-width: 540px) {\r\n  html,\r\n  body {\r\n    font-size: 20px;\r\n  }\r\n}\r\n/* DESKTOP */\r\n@media screen and (min-width: 1024px) {\r\n  html,\r\n  body {\r\n    font-size: 24px;\r\n  }\r\n}\r\n/********** COMPONENTS **********/\r\n/********** LAYOUT **********/\r\n.menu {\r\n  background-color: transparent;\r\n  width: 75px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-bottom-left-radius: 2px;\r\n  box-shadow: none;\r\n  z-index: 2;\r\n}\r\n.menu__hamburguer-icon {\r\n  width: 40px;\r\n  height: 40px;\r\n  align-self: flex-end;\r\n  margin: 1rem;\r\n  cursor: pointer;\r\n}\r\n.menu__navigation-menu {\r\n  height: 0;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n.menu__navigation-menu__item:not(:last-child) {\r\n  border-bottom: 1px solid hsla(0deg, 0%, 100%, 0.239);\r\n}\r\n.menu__navigation-menu__item__link {\r\n  display: block;\r\n  padding: 1.5rem 2rem;\r\n  color: hsl(0deg, 0%, 9%);\r\n}\r\n.menu__navigation-menu__item__link--disabled {\r\n  cursor: default;\r\n  opacity: 0.2;\r\n  pointer-events: none;\r\n}\r\n.menu__navigation-menu__item__link:not(.menu__navigation-menu__link--disabled):hover {\r\n  background-color: hsl(214deg, 56%, 58%);\r\n  color: hsl(0deg, 0%, 100%);\r\n  transition: background-color 0.5s;\r\n}\r\n.menu.menu-is-active {\r\n  background-color: hsl(202deg, 100%, 71%);\r\n  width: auto;\r\n  box-shadow: -2px 2px 4px hsla(0deg, 0%, 0%, 0.8);\r\n}\r\n.menu.menu-is-active .menu__hamburguer-icon {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.menu.menu-is-active .menu__navigation-menu {\r\n  height: auto;\r\n}\r\n\r\n/* RESPONSIVE LAYOUTS */\r\n/* DESKTOP */\r\n@media screen and (min-width: 1024px) {\r\n  .menu {\r\n    background-color: hsl(202deg, 100%, 71%);\r\n    width: 100%;\r\n    height: auto;\r\n    box-shadow: -2px 2px 4px hsla(0deg, 0%, 0%, 0.8);\r\n  }\r\n  .menu__hamburguer-icon {\r\n    display: none;\r\n  }\r\n  .menu__navigation-menu {\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    text-align: center;\r\n  }\r\n  .menu__navigation-menu__item:not(:last-child) {\r\n    border-bottom: none;\r\n  }\r\n  .menu__navigation-menu__item:last-child {\r\n    margin-right: 1rem;\r\n  }\r\n  .menu__navigation-menu__item__link {\r\n    padding: 1rem;\r\n  }\r\n  .menu__navigation-menu__item__link:hover {\r\n    background-color: hsl(214deg, 56%, 58%);\r\n    border-radius: 5px;\r\n    color: hsl(0deg, 0%, 100%);\r\n  }\r\n}\r\n/* INTRODUCTION */\r\n.header__introduction {\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-bottom: 6rem;\r\n  margin-top: 5rem;\r\n}\r\n@media screen and (min-width: 540px) {\r\n  .header__introduction {\r\n    width: 60%;\r\n  }\r\n}\r\n.header__introduction__title {\r\n  text-align: center;\r\n}\r\n.header__introduction__description {\r\n  text-align: justify;\r\n}\r\n\r\n/* BASIC CONTACT WITH: (NAME, EMAIL, MESSAGE) */\r\n/* HTML TEMPLATE *\r\n<section class=\"basic-contact\">\r\n    <h2 class=\"basic-contact__title\">FORM_TITLE</h2>\r\n    <p class=\"basic-contact__description\">FORM_DESCRIPTION</p>\r\n\r\n    <form>\r\n        <fieldset>\r\n            <legend class=\"basic-contact__legend\">FORM_LEGEND</legend>\r\n\r\n            <div class=\"basic-contact__fields\">\r\n                <div>\r\n                    <label class=\"basic-contact__fields__label\" for=\"basic-contact__fullName\">Nome Completo</label>\r\n                    <input class=\"basic-contact__fields__input\" id=\"basic-contact__fullName\" type=\"text\" name=\"name\" placeholder=\"Digite seu nome completo\" required>\r\n                </div>\r\n\r\n                <div>\r\n                    <label class=\"basic-contact__fields__label\" for=\"basic-contact__email\">E-mail</label>\r\n                    <input class=\"basic-contact__fields__input\" id=\"basic-contact__email\" type=\"email\" name=\"email\" placeholder=\"seuemail@gmail.com\" required>\r\n                </div>\r\n\r\n                <div class=\"basic-contact__fields__message-field\">\r\n                    <label class=\"basic-contact__fields__label\" for=\"basic-contact__message\">Mensagem</label>\r\n                    <textarea class=\"basic-contact__fields__input basic-contact__fields__message-input\" id=\"basic-contact__message\" name=\"message\" placeholder=\"Digite sua mensagem\" rows=\"5\" required></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"basic-contact--align-send-button\"> <input class=\"basic-contact__send-button\" type=\"submit\" value=\"Enviar E-mail\"> </div>\r\n        </fieldset>\r\n    </form>\r\n</section>\r\n*/\r\n.basic-contact {\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-bottom: 6rem;\r\n}\r\n@media screen and (min-width: 540px) {\r\n  .basic-contact {\r\n    width: 60%;\r\n  }\r\n}\r\n.basic-contact__title {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n.basic-contact__description {\r\n  margin-bottom: 1rem;\r\n  text-align: justify;\r\n}\r\n.basic-contact__legend {\r\n  width: 1px;\r\n  height: 1px;\r\n  position: absolute;\r\n  color: transparent;\r\n  overflow: hidden;\r\n}\r\n.basic-contact__fields {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.basic-contact__fields__label {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.875rem;\r\n}\r\n.basic-contact__fields__input {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: 1px solid hsl(227deg, 81%, 59%);\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  font-size: 0.75rem;\r\n}\r\n.basic-contact__fields__input:focus {\r\n  border: 1px solid hsl(202deg, 100%, 71%);\r\n  outline: none;\r\n}\r\n.basic-contact__fields__message-input {\r\n  resize: vertical;\r\n}\r\n.basic-contact--align-send-button {\r\n  margin-top: 0.5rem;\r\n  text-align: center;\r\n}\r\n.basic-contact__send-button {\r\n  background-color: hsl(209deg, 100%, 70%);\r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 1rem 1.5rem;\r\n  color: hsl(0deg, 0%, 100%);\r\n  cursor: pointer;\r\n  transition: background-color 0.1s;\r\n  padding: 1rem 1.5rem;\r\n}\r\n.basic-contact__send-button:hover {\r\n  background-color: hsl(214deg, 56%, 58%);\r\n}\r\n.basic-contact__send-button--disabled {\r\n  background-color: hsl(0deg, 0%, 64%);\r\n  cursor: not-allowed;\r\n}\r\n.basic-contact__send-button--disabled:hover {\r\n  background-color: hsl(0deg, 0%, 64%);\r\n}\r\n\r\n/* RESPONSIVE LAYOUTS */\r\n/* TABLET */\r\n@media screen and (min-width: 540px) {\r\n  /* CONTACT */\r\n  .basic-contact__fields {\r\n    display: grid;\r\n    grid-template-rows: auto;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .basic-contact__fields__message-field {\r\n    grid-column: 1/-1;\r\n  }\r\n}\r\n/* DESKTOP */\r\n@media screen and (min-width: 1024px) {\r\n  /* CONTACT */\r\n  .basic-contact__fields__input {\r\n    padding: 0.75rem;\r\n  }\r\n  .basic-contact__fields__message-input {\r\n    height: 250px;\r\n  }\r\n}\r\n.footer {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n@media screen and (min-width: 540px) {\r\n  .footer {\r\n    width: 60%;\r\n  }\r\n}\r\n.footer__title {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n.footer__nav__list {\r\n  margin: 0.5rem auto 1rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 0.5rem;\r\n}\r\n.footer__nav__list__link {\r\n  display: flex;\r\n  align-items: center;\r\n  color: hsl(0deg, 0%, 0%);\r\n}\r\n.footer__nav__list__link__icon {\r\n  width: calc(35px - 1%);\r\n  height: calc(35px - 1%);\r\n  margin-right: 0.5rem;\r\n}\r\n.footer__nav__list__link__text {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* RESPONSIVE LAYOUTS */\r\n/* TABLET */\r\n@media screen and (min-width: 540px) {\r\n  .footer__nav {\r\n    margin-top: 1.2rem;\r\n  }\r\n  .footer__nav__list__link__icon {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n/* DESKTOP */\r\n@media screen and (min-width: 1024px) {\r\n  .footer__nav__list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 20px;\r\n    flex-wrap: nowrap;\r\n  }\r\n}\r\n/* COURSE INFORMMATION */\r\n.course-information {\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-bottom: 6rem;\r\n  margin-top: 2rem;\r\n}\r\n@media screen and (min-width: 540px) {\r\n  .course-information {\r\n    width: 60%;\r\n  }\r\n}\r\n.course-information__item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.course-information__item:not(:last-child) {\r\n  margin-bottom: 1rem;\r\n}\r\n.course-information__item__icon {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n.course-information__item__description {\r\n  margin-left: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n/* COURSES */\r\n.courses {\r\n  margin-bottom: 6rem;\r\n  text-align: center;\r\n  /* SWIPER */\r\n}\r\n.courses__title {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n.courses__swiper {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  height: calc(20vw + 200px);\r\n}\r\n.courses__swiper__wrapper {\r\n  height: 100%;\r\n  /* SLIDE */\r\n}\r\n.courses__swiper__wrapper__slide {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.courses__swiper__wrapper__slide__background {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 60%;\r\n  height: 75%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  border-radius: 10px;\r\n  padding: 2rem;\r\n  box-sizing: border-box;\r\n  color: hsl(0deg, 0%, 100%);\r\n  text-align: center;\r\n  box-shadow: 0px 0px 5px 3px hsl(0deg, 0%, 0%);\r\n  /* IMAGE FOR EACH COURSE */\r\n  /* TITLE CARD */\r\n}\r\n.courses__swiper__wrapper__slide__background--sing {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-position: 50%;\r\n}\r\n.courses__swiper__wrapper__slide__background--children {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n.courses__swiper__wrapper__slide__background--choir {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-position: 75%;\r\n}\r\n.courses__swiper__wrapper__slide__background--presentation {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n.courses__swiper__wrapper__slide__background__title {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 2.5rem;\r\n  text-shadow: 1px 1px 2px hsl(0deg, 0%, 100%);\r\n}\r\n.courses__swiper__wrapper__slide__background__description {\r\n  font-size: 1rem;\r\n}\r\n.courses__swiper__button {\r\n  background-color: hsl(0deg, 0%, 100%);\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 50%;\r\n}\r\n.courses__swiper__button::after {\r\n  font-size: 1rem;\r\n}\r\n.courses__swiper__button--prev {\r\n  left: 5%;\r\n}\r\n.courses__swiper__button--prev::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n  width: 28px;\r\n  height: 31px;\r\n}\r\n.courses__swiper__button--next {\r\n  right: 5%;\r\n}\r\n.courses__swiper__button--next::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n  width: 28px;\r\n  height: 31px;\r\n}\r\n.courses__acess-course {\r\n  background-color: hsl(209deg, 100%, 70%);\r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 1rem 1.5rem;\r\n  color: hsl(0deg, 0%, 100%);\r\n  cursor: pointer;\r\n  transition: background-color 0.1s;\r\n  display: inline-block;\r\n  margin-top: 1rem;\r\n}\r\n.courses__acess-course:hover {\r\n  background-color: hsl(214deg, 56%, 58%);\r\n}\r\n\r\n/* CONTACT */\r\n.basic-contact__pop-ups {\r\n  width: 50%;\r\n  max-width: 250px;\r\n  position: fixed;\r\n  top: 1rem;\r\n  left: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n  transform: translateX(-50%);\r\n  z-index: 2;\r\n}\r\n.basic-contact__pop-ups__pop-up {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  -moz-column-gap: 1rem;\r\n       column-gap: 1rem;\r\n  border-radius: 10px;\r\n  padding: 0.75rem;\r\n  font-size: 0.9rem;\r\n  transition: all 1s;\r\n  /* JAVASCRIPT STYLES */\r\n}\r\n.basic-contact__pop-ups__pop-up--success {\r\n  background-color: hsl(115deg, 70%, 42%);\r\n}\r\n.basic-contact__pop-ups__pop-up--fail {\r\n  background-color: hsl(0deg, 100%, 46%);\r\n  color: hsl(0deg, 0%, 100%);\r\n}\r\n.basic-contact__pop-ups__pop-up--invisible {\r\n  opacity: 0;\r\n}\r\n.basic-contact__pop-ups__pop-up--visible {\r\n  opacity: 1;\r\n}\r\n\r\n/* RESPONSIVE LAYOUTS */\r\n/* SMALL CELLPHONES */\r\n@media screen and (max-width: 340px) {\r\n  /* COURSES */\r\n  .courses__swiper__wrapper__slide__background__title {\r\n    font-size: 2rem;\r\n  }\r\n  .courses__swiper__wrapper__slide__background__description {\r\n    font-size: 0.75rem;\r\n  }\r\n}\r\n/* TABLET */\r\n@media screen and (min-width: 540px) {\r\n  /* COURSE INFORMMATION */\r\n  .course-information {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .course-information__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n  }\r\n  .course-information__item:not(:last-child) {\r\n    margin-bottom: 0;\r\n  }\r\n  .course-information__item__icon {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  .course-information__item__description {\r\n    width: 90%;\r\n    flex-grow: 1;\r\n    margin-left: 0;\r\n    text-align: center;\r\n  }\r\n  /* COURSES */\r\n  .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: auto 8px !important;\r\n  }\r\n}\r\n/* DESKTOP */\r\n@media screen and (min-width: 1024px) {\r\n  /* HEADER */\r\n  .header {\r\n    margin-top: 6rem;\r\n    /* INTRODUCTION */\r\n  }\r\n  .header__introduction__description {\r\n    text-align: center;\r\n  }\r\n  /* COURSE INFORMMATION */\r\n  .course-information__item {\r\n    width: 25%;\r\n  }\r\n  .course-information__item__icon {\r\n    width: 75px;\r\n    height: 75px;\r\n  }\r\n  /* COURSES */\r\n  .swiper-pagination-bullet {\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: auto 10px !important;\r\n  }\r\n  /* CONTACT */\r\n  .basic-contact__pop-ups {\r\n    top: 4rem;\r\n    left: unset;\r\n    right: 1rem;\r\n    transform: unset;\r\n  }\r\n}\r\n/* EXTRA DESKTOP */\r\n@media screen and (min-width: 1440px) {\r\n  /* COURSES */\r\n  .courses__swiper__wrapper__slide__background__title {\r\n    font-size: 4.5rem;\r\n  }\r\n  .swiper-pagination-bullet {\r\n    width: 16px;\r\n    height: 16px;\r\n    margin: auto 12px !important;\r\n  }\r\n}/*# sourceMappingURL=index.css.map */", "",{"version":3,"sources":["webpack://./app/src/assets/sass/_main.scss","webpack://./app/src/assets/sass/vendors/_reset.scss","webpack://./app/src/assets/css/index.css","webpack://./app/src/assets/sass/vendors/_normalize.scss","webpack://./app/src/assets/sass/vendors/_fonts.scss","webpack://./app/src/assets/sass/abstracts/_variables.scss","webpack://./app/src/assets/sass/abstracts/_mixins.scss","webpack://./app/src/assets/sass/abstracts/_generic-classes.scss","webpack://./app/src/assets/sass/base/_elements-style.scss","webpack://./app/src/assets/sass/layout/_menu.scss","webpack://./app/src/assets/sass/layout/_introduction.scss","webpack://./app/src/assets/sass/layout/_forms.scss","webpack://./app/src/assets/sass/layout/_footer.scss","webpack://./app/src/assets/sass/pages/index.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./app/src/assets/css/index.css":
/*!**************************************!*\
  !*** ./app/src/assets/css/index.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./app/src/assets/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./app/src/assets/images/Children's Musicalization Course.png":
/*!********************************************************************!*\
  !*** ./app/src/assets/images/Children's Musicalization Course.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e9610216e3b70a1e9ff.png";

/***/ }),

/***/ "./app/src/assets/images/Choir Conductor Course.png":
/*!**********************************************************!*\
  !*** ./app/src/assets/images/Choir Conductor Course.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea1292069dc48bfbae91.png";

/***/ }),

/***/ "./app/src/assets/images/Presentations Course.png":
/*!********************************************************!*\
  !*** ./app/src/assets/images/Presentations Course.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2194ec684281fefd9d3b.png";

/***/ }),

/***/ "./app/src/assets/images/Sheet Music.svg":
/*!***********************************************!*\
  !*** ./app/src/assets/images/Sheet Music.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dbc81eefff697862c1b.svg";

/***/ }),

/***/ "./app/src/assets/images/Sing Course.png":
/*!***********************************************!*\
  !*** ./app/src/assets/images/Sing Course.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c44ef115912b661def0.png";

/***/ }),

/***/ "./app/src/assets/images/icons/Arrow Left.svg":
/*!****************************************************!*\
  !*** ./app/src/assets/images/icons/Arrow Left.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fb770f824e9439cc264.svg";

/***/ }),

/***/ "./app/src/assets/images/icons/Arrow Right.svg":
/*!*****************************************************!*\
  !*** ./app/src/assets/images/icons/Arrow Right.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "388cf4bda70526106959.svg";

/***/ }),

/***/ "./app/src/assets/images/icons/Close.svg":
/*!***********************************************!*\
  !*** ./app/src/assets/images/icons/Close.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a131aeee51dbde7c25c0.svg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./app/src/assets/js/pages/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/index.css */ "./app/src/assets/css/index.css");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ "./app/src/assets/js/main.js");




(function() {
    /* ACCESS COURSE BUTTON *
     * 
     * GOAL:
     * Change the "src" attribute value according the active slide of the pages
     * 
     * STRATEGY:
     * Get the Bullets Pagination, and get the bullet with class "swiper-pagination-bullet-active", and according the index, set the "href" of the link with the value of the array of courses
     * To do this, the MutationObserver is used to listening the changes in the "swiper-pagination" element
     */
    {
        const coursesLink = [
            "./pages/courses/sing-course",
            "./pages/courses/choral-course",
            "./pages/courses/children-musicalization-course",
            "./pages/who-i-am",
        ];

        const $carouselBullets = document.querySelector("[data-element-id='swiper-paginator']");
     
        const $accessCourseButton = document.querySelector("[data-element-id='acess-course-button']");
        const mutationObserver = new MutationObserver(() => {
            $carouselBullets.childNodes.forEach((bullet, index) => {
                if(bullet.classList.contains("swiper-pagination-bullet-active")) {
                    $accessCourseButton.href = `${coursesLink[index]}.html`;
                }
            });
        });
        
        mutationObserver.observe($carouselBullets, {
            attributeFilter: ["class"],
            subtree: true
        });
    }

    // SWIPER CONFIGURATIONS
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    /* CONTACT FORM SUBMIT *
     * 
     * GOAL:
     * Send a E-mail with the values of the field on the form and show a pop-up message to the use
     * 
     * STRATEGY:
     * Make a fetch with a POST method and show a pop-up message based in the returned response promisse
     */
    {
        const $contactForm = document.querySelector("[data-element-id='basic-contact-form']");
        $contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const $sendButton = document.querySelector("[data-element-id='basic-contact-form__sendButton']");
            $sendButton.classList.add("basic-contact__send-button--disabled");
            $sendButton.setAttribute("disabled", true);

            // Inputs
            const $nameInput = document.querySelector("[data-element-id='basic-contactNameInput']");
            const $emailInput = document.querySelector("[data-element-id='basic-contactEmailInput']");
            const $messageInput = document.querySelector("[data-element-id='basic-contactMessageInput']");

            // keilagruviracerqueira9602@gmail.com
            // claushmartins@gmail.com
            fetch("https://formsubmit.co/ajax/claushmartins@gmail.com", {
                method: "POST",
                
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    "Nome": $nameInput.value,
                    "E-mail": $emailInput.value,
                    "Mensagem": $messageInput.value,

                    /* FORMSUBMIT CONFIGURATION */
                    "_subject": "TITULO DO EMAIL",
                    "_template": "table"
                })
            })
                .then(response => {
                    const $popUp = response.ok ? createSuccessPopUp(true) : createSuccessPopUp(false);

                    const $popups = document.querySelector("[data-element-id='basic-contact-pop-ups']");
                    $popups.appendChild($popUp);
                    
                    $sendButton.classList.remove("basic-contact__send-button--disabled");
                    $sendButton.removeAttribute("disabled");

                    $popUp.classList.replace("basic-contact__pop-ups__pop-up--invisible", "basic-contact__pop-ups__pop-up--visible");

                    deletePopUp($popUp);
                })
                .catch((error) => console.log(error));
        });

        function createSuccessPopUp(isSuccess) {
            const popUp = document.createElement("div");
            popUp.classList.add("basic-contact__pop-ups__pop-up");
            
            if(isSuccess) {
                popUp.classList.add("basic-contact__pop-ups__pop-up--success", "basic-contact__pop-ups__pop-up--invisible");
                
                popUp.innerHTML = `
                    <img src="assets/images/icons/Correct.svg" alt="">
                    <p>E-mail enviado com sucesso!</p>
                `;
            } else {
                popUp.classList.add("basic-contact__pop-ups__pop-up--fail");

                popUp.innerHTML = `
                    <img src="assets/images/icons/Incorrect.svg" alt="">
                    <p>Ocorreu um erro ao enviar o E-mail</p>
                `;
            }

            return popUp;
        }

        function deletePopUp(popUp) {
            setTimeout(function() {
                popUp.classList.replace("basic-contact__pop-ups__pop-up--visible", "basic-contact__pop-ups__pop-up--invisible");
            }, 3000);

            setTimeout(function() {
                popUp.remove();
            }, 4000);
        }
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssV0FBVyxXQUFXLE1BQU0sWUFBWSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUsscUJBQXFCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxxQkFBcUIsb0JBQW9CLHFCQUFxQixPQUFPLFFBQVEsS0FBSyxLQUFLLHFCQUFxQixvQkFBb0IsT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsS0FBSyxLQUFLLHFCQUFxQixxQkFBcUIsV0FBVyxxQkFBcUIsT0FBTyxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU8sUUFBUSxLQUFLLE9BQU8scUJBQXFCLG9CQUFvQixPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sT0FBTyxLQUFLLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIsb0JBQW9CLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxXQUFXLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxRQUFRLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxRQUFRLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sVUFBVSxLQUFLLEtBQUsscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLG9CQUFvQixxQkFBcUIsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLHFCQUFxQixvQkFBb0IsT0FBTyxPQUFPLEtBQUssTUFBTSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUsscUJBQXFCLHFCQUFxQixPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxxQkFBcUIsb0JBQW9CLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sWUFBWSxVQUFVLEtBQUssVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxVQUFVLEtBQUssV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLGNBQWMsUUFBUSxXQUFXLFVBQVUsYUFBYSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFdBQVcsT0FBTyxXQUFXLEtBQUssV0FBVyxPQUFPLFlBQVksVUFBVSxLQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxZQUFZLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssYUFBYSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsYUFBYSxrQ0FBa0MsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLFlBQVksT0FBTyxPQUFPLFlBQVksU0FBUyxhQUFhLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxTQUFTLGFBQWEsVUFBVSxLQUFLLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLGFBQWEsS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsWUFBWSxLQUFLLFlBQVksWUFBWSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsWUFBWSxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLFFBQVEsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxRQUFRLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFX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YWNrOi8va2VpbGEtd2Vic2l0ZS8uL2FwcC9zcmMvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS8uL2FwcC9zcmMvYXNzZXRzL2pzL21vZGVscy9oYW1idXJndWVyTWVudS5qcyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vYXBwL3NyYy9hc3NldHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS8uL2FwcC9zcmMvYXNzZXRzL2Nzcy9pbmRleC5jc3M/Y2E2MyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tlaWxhLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tlaWxhLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tlaWxhLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tlaWxhLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rZWlsYS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tlaWxhLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2VpbGEtd2Vic2l0ZS8uL2FwcC9zcmMvYXNzZXRzL2pzL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9tb2RlbHMvaGFtYnVyZ3Vlck1lbnUuanNcIjtcclxuXHJcbmNvbnN0ICRtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J21lbnUnXVwiKTtcclxuY29uc3QgJG1lbnVIYW1idXJndWVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J21lbnVIYW1idXJndWVySWNvbiddXCIpO1xyXG5cclxubmV3IE1lbnUoJG1lbnUsICRtZW51SGFtYnVyZ3VlckJ1dHRvbik7IiwiZXhwb3J0IGNsYXNzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoJG1lbnUsICRoYW1idXJndWVyTWVudUJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuJG1lbnUgPSAkbWVudTtcclxuICAgICAgICB0aGlzLiRtZW51SGFtYnVyZ3VlckJ1dHRvbiA9ICRoYW1idXJndWVyTWVudUJ1dHRvbjtcclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1lbnVXaGVuQ2xpY2tPdXRzaWRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNZW51V2hlbldpbmRvd1Nocmlua3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIHRoaXMuJG1lbnVIYW1idXJndWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWVudVdoZW5DbGlja091dHNpZGUoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy4kbWVudSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTWVudVdoZW5XaW5kb3dTaHJpbmtzKCkge1xyXG4gICAgICAgIC8vIEZpeCB0aGUgYnVnIHdoZW4gc2NyZWVuIGNoYW5nZXMgc2l6ZSB3aXRoIGljb24gb3BlbiBvciBjbG9zZWRcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnRXaW5kb3dUYXJnZXQgPSAxMDI0O1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBjbGllbnRXaW5kb3dUYXJnZXQgLSAxNykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1pcy1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ljb25zL0Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9TaGVldCBNdXNpYy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvU2luZyBDb3Vyc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0NoaWxkcmVuJ3MgTXVzaWNhbGl6YXRpb24gQ291cnNlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9DaG9pciBDb25kdWN0b3IgQ291cnNlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9QcmVzZW50YXRpb25zIENvdXJzZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaWNvbnMvQXJyb3cgTGVmdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaWNvbnMvQXJyb3cgUmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqIFZFTkRPUlMgKioqKioqKioqKi8gLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKi9cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICogYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcbmltZyB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICovXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHsgLyogMSAqL1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHsgLyogMSAqL1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPWJ1dHRvbl0sXFxyXFxuW3R5cGU9cmVzZXRdLFxcclxcblt0eXBlPXN1Ym1pdF0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAqL1xcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcbmxlZ2VuZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5bdHlwZT1jaGVja2JveF0sXFxyXFxuW3R5cGU9cmFkaW9dIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblt0eXBlPXNlYXJjaF0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gKi9cXHJcXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKiogSU1QT1JUUyAqKioqKioqKioqL1xcclxcbi8qKlxcclxcbiAgICBOYW1lOiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiO1xcclxcbiAgICBVUkw6IGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9EYW5jaW5nK1NjcmlwdDtcXHJcXG4gICAgUHVycG9zZTogVGl0bGVzO1xcclxcbiAgICBXZWlndGhzOlxcclxcbiAgICAgICAgKiA3MDAgLSBCb2xkO1xcclxcbiovXFxyXFxuLyoqXFxyXFxuICAgIE5hbWU6IFxcXCJJbnRlclxcXCI7XFxyXFxuICAgIFVSTDogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL0ludGVyO1xcclxcbiAgICBQdXJwb3NlOiBEZWZhdWx0IHRleHRzO1xcclxcbiAgICBXZWlndGhzOlxcclxcbiAgICAgICAgKiA0MDAgLSBSZWd1bGFyO1xcclxcbiovXFxyXFxuLyoqKioqKioqKiogQUJTVFJBQ1RTICoqKioqKioqKiovXFxyXFxuLyoqKioqKioqKiogUEFHRSBDT05GSUdVUkFUSU9OUyAqKioqKioqKioqL1xcclxcbi8qKioqKioqKioqIENPTE9SUyAqKioqKioqKioqL1xcclxcbi8qKioqKioqKioqIEJBQ0tHUk9VTkRTICoqKioqKioqKiovXFxyXFxuLyoqKioqKioqKiogQk9SREVSUyAqKioqKioqKioqL1xcclxcbi8qKioqKioqKioqIFNIQURPV1MgKioqKioqKioqKi9cXHJcXG4vKioqKioqKioqKiBURVhUUyAqKioqKioqKioqL1xcclxcbi8qKioqKioqKioqIEZPTlRTICoqKioqKioqKiovXFxyXFxuLyogPT09PT09PT09PSBCQVNJQyBMQVlPVVRTID09PT09PT09PT0qL1xcclxcbi8qIFNUQU5EQVJEICBDT05URU5UIFdJRFRIICovXFxyXFxuLyogU1RBTkRBUkQgQk9UVE9NIE1BUkdJTiBPRiBTRVBBUkFUSU9OICovXFxyXFxuLyogPT09PT09PT09PSBQQUdFIFNFQ1RJT05TID09PT09PT09PT0qL1xcclxcbi8qIENPTlRFTlQgQk9YIE9GIENPVVJTRSAqL1xcclxcbi8qID09PT09PT09PT0gQkFTSUMgQ09NUE9ORU5UUyA9PT09PT09PT09Ki9cXHJcXG4vKiA9PT09PT09PT09IEFDRVNTSUJJTElUWSBMQVlPVVQgPT09PT09PT09PSovXFxyXFxuLyogQUNFU1NJQklMSVRZICovXFxyXFxuLyo9PT09PT09PT09IEFVWElMSUFSWSBDTEFTU0VTID09PT09PT09PT0qL1xcclxcbi8qIFZJU0lCSUxJVFkgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKiogQkFTRSAqKioqKioqKioqL1xcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGhzbCg0MmRlZywgMTAwJSwgNjclKSwgaHNsKDQzZGVnLCAxMDAlLCA1MCUpKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUSVRMRVMgKi9cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgQXJpYWwsIEhlbHZldGljYSwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNiB7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCxcXHJcXG5ibG9ja3F1b3RlIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT1JNUyAqL1xcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIExJTktTICovXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIE9USEVSUyAqL1xcclxcbmhyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwZGVnLCAwJSwgMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSRVNQT05TSVZFIExBWU9VVFMgKi9cXHJcXG4vKiBUQUJMRVQgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xcclxcbiAgaHRtbCxcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIERFU0tUT1AgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIGh0bWwsXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKioqKioqKioqKiBDT01QT05FTlRTICoqKioqKioqKiovXFxyXFxuLyoqKioqKioqKiogTEFZT1VUICoqKioqKioqKiovXFxyXFxuLm1lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLm1lbnVfX2hhbWJ1cmd1ZXItaWNvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubWVudV9fbmF2aWdhdGlvbi1tZW51IHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5tZW51X19uYXZpZ2F0aW9uLW1lbnVfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsYSgwZGVnLCAwJSwgMTAwJSwgMC4yMzkpO1xcclxcbn1cXHJcXG4ubWVudV9fbmF2aWdhdGlvbi1tZW51X19pdGVtX19saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxyXFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCA5JSk7XFxyXFxufVxcclxcbi5tZW51X19uYXZpZ2F0aW9uLW1lbnVfX2l0ZW1fX2xpbmstLWRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ubWVudV9fbmF2aWdhdGlvbi1tZW51X19pdGVtX19saW5rOm5vdCgubWVudV9fbmF2aWdhdGlvbi1tZW51X19saW5rLS1kaXNhYmxlZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxNGRlZywgNTYlLCA1OCUpO1xcclxcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTAwJSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxyXFxufVxcclxcbi5tZW51Lm1lbnUtaXMtYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDJkZWcsIDEwMCUsIDcxJSk7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDRweCBoc2xhKDBkZWcsIDAlLCAwJSwgMC44KTtcXHJcXG59XFxyXFxuLm1lbnUubWVudS1pcy1hY3RpdmUgLm1lbnVfX2hhbWJ1cmd1ZXItaWNvbiB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG4ubWVudS5tZW51LWlzLWFjdGl2ZSAubWVudV9fbmF2aWdhdGlvbi1tZW51IHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogUkVTUE9OU0lWRSBMQVlPVVRTICovXFxyXFxuLyogREVTS1RPUCAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLm1lbnUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAyZGVnLCAxMDAlLCA3MSUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCA0cHggaHNsYSgwZGVnLCAwJSwgMCUsIDAuOCk7XFxyXFxuICB9XFxyXFxuICAubWVudV9faGFtYnVyZ3Vlci1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5tZW51X19uYXZpZ2F0aW9uLW1lbnUge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm1lbnVfX25hdmlnYXRpb24tbWVudV9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5tZW51X19uYXZpZ2F0aW9uLW1lbnVfX2l0ZW06bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5tZW51X19uYXZpZ2F0aW9uLW1lbnVfX2l0ZW1fX2xpbmsge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLm1lbnVfX25hdmlnYXRpb24tbWVudV9faXRlbV9fbGluazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTRkZWcsIDU2JSwgNTglKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogSU5UUk9EVUNUSU9OICovXFxyXFxuLmhlYWRlcl9faW50cm9kdWN0aW9uIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcXHJcXG4gIC5oZWFkZXJfX2ludHJvZHVjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXJfX2ludHJvZHVjdGlvbl9fdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX19pbnRyb2R1Y3Rpb25fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi8qIEJBU0lDIENPTlRBQ1QgV0lUSDogKE5BTUUsIEVNQUlMLCBNRVNTQUdFKSAqL1xcclxcbi8qIEhUTUwgVEVNUExBVEUgKlxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJiYXNpYy1jb250YWN0XFxcIj5cXHJcXG4gICAgPGgyIGNsYXNzPVxcXCJiYXNpYy1jb250YWN0X190aXRsZVxcXCI+Rk9STV9USVRMRTwvaDI+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJiYXNpYy1jb250YWN0X19kZXNjcmlwdGlvblxcXCI+Rk9STV9ERVNDUklQVElPTjwvcD5cXHJcXG5cXHJcXG4gICAgPGZvcm0+XFxyXFxuICAgICAgICA8ZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzcz1cXFwiYmFzaWMtY29udGFjdF9fbGVnZW5kXFxcIj5GT1JNX0xFR0VORDwvbGVnZW5kPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhc2ljLWNvbnRhY3RfX2ZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJhc2ljLWNvbnRhY3RfX2ZpZWxkc19fbGFiZWxcXFwiIGZvcj1cXFwiYmFzaWMtY29udGFjdF9fZnVsbE5hbWVcXFwiPk5vbWUgQ29tcGxldG88L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJiYXNpYy1jb250YWN0X19maWVsZHNfX2lucHV0XFxcIiBpZD1cXFwiYmFzaWMtY29udGFjdF9fZnVsbE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJEaWdpdGUgc2V1IG5vbWUgY29tcGxldG9cXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiYmFzaWMtY29udGFjdF9fZmllbGRzX19sYWJlbFxcXCIgZm9yPVxcXCJiYXNpYy1jb250YWN0X19lbWFpbFxcXCI+RS1tYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiYmFzaWMtY29udGFjdF9fZmllbGRzX19pbnB1dFxcXCIgaWQ9XFxcImJhc2ljLWNvbnRhY3RfX2VtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJzZXVlbWFpbEBnbWFpbC5jb21cXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFzaWMtY29udGFjdF9fZmllbGRzX19tZXNzYWdlLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiYmFzaWMtY29udGFjdF9fZmllbGRzX19sYWJlbFxcXCIgZm9yPVxcXCJiYXNpYy1jb250YWN0X19tZXNzYWdlXFxcIj5NZW5zYWdlbTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImJhc2ljLWNvbnRhY3RfX2ZpZWxkc19faW5wdXQgYmFzaWMtY29udGFjdF9fZmllbGRzX19tZXNzYWdlLWlucHV0XFxcIiBpZD1cXFwiYmFzaWMtY29udGFjdF9fbWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkRpZ2l0ZSBzdWEgbWVuc2FnZW1cXFwiIHJvd3M9XFxcIjVcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhc2ljLWNvbnRhY3QtLWFsaWduLXNlbmQtYnV0dG9uXFxcIj4gPGlucHV0IGNsYXNzPVxcXCJiYXNpYy1jb250YWN0X19zZW5kLWJ1dHRvblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiRW52aWFyIEUtbWFpbFxcXCI+IDwvZGl2PlxcclxcbiAgICAgICAgPC9maWVsZHNldD5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvc2VjdGlvbj5cXHJcXG4qL1xcclxcbi5iYXNpYy1jb250YWN0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xcclxcbiAgLmJhc2ljLWNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fbGVnZW5kIHtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5iYXNpYy1jb250YWN0X19maWVsZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5iYXNpYy1jb250YWN0X19maWVsZHNfX2xhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX2ZpZWxkc19faW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIyN2RlZywgODElLCA1OSUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fZmllbGRzX19pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjAyZGVnLCAxMDAlLCA3MSUpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX2ZpZWxkc19fbWVzc2FnZS1pbnB1dCB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdC0tYWxpZ24tc2VuZC1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fc2VuZC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOWRlZywgMTAwJSwgNzAlKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcclxcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTAwJSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX3NlbmQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTRkZWcsIDU2JSwgNTglKTtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX3NlbmQtYnV0dG9uLS1kaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDY0JSk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fc2VuZC1idXR0b24tLWRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgNjQlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUkVTUE9OU0lWRSBMQVlPVVRTICovXFxyXFxuLyogVEFCTEVUICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcXHJcXG4gIC8qIENPTlRBQ1QgKi9cXHJcXG4gIC5iYXNpYy1jb250YWN0X19maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuICAuYmFzaWMtY29udGFjdF9fZmllbGRzX19tZXNzYWdlLWZpZWxkIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIERFU0tUT1AgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC8qIENPTlRBQ1QgKi9cXHJcXG4gIC5iYXNpYy1jb250YWN0X19maWVsZHNfX2lucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5iYXNpYy1jb250YWN0X19maWVsZHNfX21lc3NhZ2UtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvb3Rlcl9fdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbmF2X19saXN0IHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5mb290ZXJfX25hdl9fbGlzdF9fbGluayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDAlKTtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbmF2X19saXN0X19saW5rX19pY29uIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDM1cHggLSAxJSk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMzVweCAtIDElKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG4uZm9vdGVyX19uYXZfX2xpc3RfX2xpbmtfX3RleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFJFU1BPTlNJVkUgTEFZT1VUUyAqL1xcclxcbi8qIFRBQkxFVCAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XFxyXFxuICAuZm9vdGVyX19uYXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuICAuZm9vdGVyX19uYXZfX2xpc3RfX2xpbmtfX2ljb24ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiBERVNLVE9QICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuZm9vdGVyX19uYXZfX2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiBDT1VSU0UgSU5GT1JNTUFUSU9OICovXFxyXFxuLmNvdXJzZS1pbmZvcm1hdGlvbiB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XFxyXFxuICAuY291cnNlLWluZm9ybWF0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNvdXJzZS1pbmZvcm1hdGlvbl9faXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY291cnNlLWluZm9ybWF0aW9uX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuLmNvdXJzZS1pbmZvcm1hdGlvbl9faXRlbV9faWNvbiB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuLmNvdXJzZS1pbmZvcm1hdGlvbl9faXRlbV9fZGVzY3JpcHRpb24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT1VSU0VTICovXFxyXFxuLmNvdXJzZXMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC8qIFNXSVBFUiAqL1xcclxcbn1cXHJcXG4uY291cnNlc19fdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDIwdncgKyAyMDBweCk7XFxyXFxufVxcclxcbi5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyogU0xJREUgKi9cXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fd3JhcHBlcl9fc2xpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fd3JhcHBlcl9fc2xpZGVfX2JhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA3NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTAwJSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggaHNsKDBkZWcsIDAlLCAwJSk7XFxyXFxuICAvKiBJTUFHRSBGT1IgRUFDSCBDT1VSU0UgKi9cXHJcXG4gIC8qIFRJVExFIENBUkQgKi9cXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fd3JhcHBlcl9fc2xpZGVfX2JhY2tncm91bmQtLXNpbmcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fd3JhcHBlcl9fc2xpZGVfX2JhY2tncm91bmQtLWNoaWxkcmVuIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcbi5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXJfX3NsaWRlX19iYWNrZ3JvdW5kLS1jaG9pciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzUlO1xcclxcbn1cXHJcXG4uY291cnNlc19fc3dpcGVyX193cmFwcGVyX19zbGlkZV9fYmFja2dyb3VuZC0tcHJlc2VudGF0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxufVxcclxcbi5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXJfX3NsaWRlX19iYWNrZ3JvdW5kX190aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBoc2woMGRlZywgMCUsIDEwMCUpO1xcclxcbn1cXHJcXG4uY291cnNlc19fc3dpcGVyX193cmFwcGVyX19zbGlkZV9fYmFja2dyb3VuZF9fZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uY291cnNlc19fc3dpcGVyX19idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCAxMDAlKTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4uY291cnNlc19fc3dpcGVyX19idXR0b246OmFmdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fYnV0dG9uLS1wcmV2IHtcXHJcXG4gIGxlZnQ6IDUlO1xcclxcbn1cXHJcXG4uY291cnNlc19fc3dpcGVyX19idXR0b24tLXByZXY6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMzFweDtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fYnV0dG9uLS1uZXh0IHtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuLmNvdXJzZXNfX3N3aXBlcl9fYnV0dG9uLS1uZXh0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDMxcHg7XFxyXFxufVxcclxcbi5jb3Vyc2VzX19hY2Vzcy1jb3Vyc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOWRlZywgMTAwJSwgNzAlKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcclxcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTAwJSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG4uY291cnNlc19fYWNlc3MtY291cnNlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTRkZWcsIDU2JSwgNTglKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09OVEFDVCAqL1xcclxcbi5iYXNpYy1jb250YWN0X19wb3AtdXBzIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAxcmVtO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX3BvcC11cHNfX3BvcC11cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC1tb3otY29sdW1uLWdhcDogMXJlbTtcXHJcXG4gICAgICAgY29sdW1uLWdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAvKiBKQVZBU0NSSVBUIFNUWUxFUyAqL1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fcG9wLXVwc19fcG9wLXVwLS1zdWNjZXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMTVkZWcsIDcwJSwgNDIlKTtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX3BvcC11cHNfX3BvcC11cC0tZmFpbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMTAwJSwgNDYlKTtcXHJcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDEwMCUpO1xcclxcbn1cXHJcXG4uYmFzaWMtY29udGFjdF9fcG9wLXVwc19fcG9wLXVwLS1pbnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmJhc2ljLWNvbnRhY3RfX3BvcC11cHNfX3BvcC11cC0tdmlzaWJsZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSRVNQT05TSVZFIExBWU9VVFMgKi9cXHJcXG4vKiBTTUFMTCBDRUxMUEhPTkVTICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcXHJcXG4gIC8qIENPVVJTRVMgKi9cXHJcXG4gIC5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXJfX3NsaWRlX19iYWNrZ3JvdW5kX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXJfX3NsaWRlX19iYWNrZ3JvdW5kX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogVEFCTEVUICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcXHJcXG4gIC8qIENPVVJTRSBJTkZPUk1NQVRJT04gKi9cXHJcXG4gIC5jb3Vyc2UtaW5mb3JtYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuICAuY291cnNlLWluZm9ybWF0aW9uX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuICAuY291cnNlLWluZm9ybWF0aW9uX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgLmNvdXJzZS1pbmZvcm1hdGlvbl9faXRlbV9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAuY291cnNlLWluZm9ybWF0aW9uX19pdGVtX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC8qIENPVVJTRVMgKi9cXHJcXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcclxcbiAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICBtYXJnaW46IGF1dG8gOHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIERFU0tUT1AgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC8qIEhFQURFUiAqL1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxyXFxuICAgIC8qIElOVFJPRFVDVElPTiAqL1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcl9faW50cm9kdWN0aW9uX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC8qIENPVVJTRSBJTkZPUk1NQVRJT04gKi9cXHJcXG4gIC5jb3Vyc2UtaW5mb3JtYXRpb25fX2l0ZW0ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgfVxcclxcbiAgLmNvdXJzZS1pbmZvcm1hdGlvbl9faXRlbV9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICB9XFxyXFxuICAvKiBDT1VSU0VTICovXFxyXFxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDEwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC8qIENPTlRBQ1QgKi9cXHJcXG4gIC5iYXNpYy1jb250YWN0X19wb3AtdXBzIHtcXHJcXG4gICAgdG9wOiA0cmVtO1xcclxcbiAgICBsZWZ0OiB1bnNldDtcXHJcXG4gICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogdW5zZXQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIEVYVFJBIERFU0tUT1AgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcXHJcXG4gIC8qIENPVVJTRVMgKi9cXHJcXG4gIC5jb3Vyc2VzX19zd2lwZXJfX3dyYXBwZXJfX3NsaWRlX19iYWNrZ3JvdW5kX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgfVxcclxcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0byAxMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hcHAvc3JjL2Fzc2V0cy9zYXNzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXNzZXRzL3Nhc3MvdmVuZG9ycy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvY3NzL2luZGV4LmNzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvc2Fzcy92ZW5kb3JzL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvc2Fzcy92ZW5kb3JzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9hcHAvc3JjL2Fzc2V0cy9zYXNzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXNzZXRzL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvc2Fzcy9hYnN0cmFjdHMvX2dlbmVyaWMtY2xhc3Nlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9hcHAvc3JjL2Fzc2V0cy9zYXNzL2Jhc2UvX2VsZW1lbnRzLXN0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXNzZXRzL3Nhc3MvbGF5b3V0L19tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXNzZXRzL3Nhc3MvbGF5b3V0L19pbnRyb2R1Y3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvc2Fzcy9sYXlvdXQvX2Zvcm1zLnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXNzZXRzL3Nhc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vYXBwL3NyYy9hc3NldHMvc2Fzcy9wYWdlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUFBLEVBQUE7OztDQUFBO0FDS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDRUQ7O0FEQUEsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FDR0Q7O0FEREE7RUFDQyxjQUFBO0FDSUQ7O0FERkE7RUFDQyxnQkFBQTtBQ0tEOztBREhBO0VBQ0MsWUFBQTtBQ01EOztBREpBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDT0Q7O0FETEE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDUUQ7O0FDdERBLDJFQUFBO0FBRUE7K0VBQUE7QUFHQTs7O0VBQUE7QUFLQztFQUNHLGlCQUFBLEVBQUEsTUFBQTtFQUNBLDhCQUFBLEVBQUEsTUFBQTtBRHNESjs7QUNuREU7K0VBQUE7QUFHQTs7RUFBQTtBQUlBO0VBQ0UsU0FBQTtB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IixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vLi4vY3NzL2luZGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWFpbi5qc1wiO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgLyogQUNDRVNTIENPVVJTRSBCVVRUT04gKlxyXG4gICAgICogXHJcbiAgICAgKiBHT0FMOlxyXG4gICAgICogQ2hhbmdlIHRoZSBcInNyY1wiIGF0dHJpYnV0ZSB2YWx1ZSBhY2NvcmRpbmcgdGhlIGFjdGl2ZSBzbGlkZSBvZiB0aGUgcGFnZXNcclxuICAgICAqIFxyXG4gICAgICogU1RSQVRFR1k6XHJcbiAgICAgKiBHZXQgdGhlIEJ1bGxldHMgUGFnaW5hdGlvbiwgYW5kIGdldCB0aGUgYnVsbGV0IHdpdGggY2xhc3MgXCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCIsIGFuZCBhY2NvcmRpbmcgdGhlIGluZGV4LCBzZXQgdGhlIFwiaHJlZlwiIG9mIHRoZSBsaW5rIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBhcnJheSBvZiBjb3Vyc2VzXHJcbiAgICAgKiBUbyBkbyB0aGlzLCB0aGUgTXV0YXRpb25PYnNlcnZlciBpcyB1c2VkIHRvIGxpc3RlbmluZyB0aGUgY2hhbmdlcyBpbiB0aGUgXCJzd2lwZXItcGFnaW5hdGlvblwiIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZXNMaW5rID0gW1xyXG4gICAgICAgICAgICBcIi4vcGFnZXMvY291cnNlcy9zaW5nLWNvdXJzZVwiLFxyXG4gICAgICAgICAgICBcIi4vcGFnZXMvY291cnNlcy9jaG9yYWwtY291cnNlXCIsXHJcbiAgICAgICAgICAgIFwiLi9wYWdlcy9jb3Vyc2VzL2NoaWxkcmVuLW11c2ljYWxpemF0aW9uLWNvdXJzZVwiLFxyXG4gICAgICAgICAgICBcIi4vcGFnZXMvd2hvLWktYW1cIixcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCAkY2Fyb3VzZWxCdWxsZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J3N3aXBlci1wYWdpbmF0b3InXVwiKTtcclxuICAgICBcclxuICAgICAgICBjb25zdCAkYWNjZXNzQ291cnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J2FjZXNzLWNvdXJzZS1idXR0b24nXVwiKTtcclxuICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWxCdWxsZXRzLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnVsbGV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYnVsbGV0LmNsYXNzTGlzdC5jb250YWlucyhcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYWNjZXNzQ291cnNlQnV0dG9uLmhyZWYgPSBgJHtjb3Vyc2VzTGlua1tpbmRleF19Lmh0bWxgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoJGNhcm91c2VsQnVsbGV0cywge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU1dJUEVSIENPTkZJR1VSQVRJT05TXHJcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgXHJcbiAgICAgICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG4gICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogQ09OVEFDVCBGT1JNIFNVQk1JVCAqXHJcbiAgICAgKiBcclxuICAgICAqIEdPQUw6XHJcbiAgICAgKiBTZW5kIGEgRS1tYWlsIHdpdGggdGhlIHZhbHVlcyBvZiB0aGUgZmllbGQgb24gdGhlIGZvcm0gYW5kIHNob3cgYSBwb3AtdXAgbWVzc2FnZSB0byB0aGUgdXNlXHJcbiAgICAgKiBcclxuICAgICAqIFNUUkFURUdZOlxyXG4gICAgICogTWFrZSBhIGZldGNoIHdpdGggYSBQT1NUIG1ldGhvZCBhbmQgc2hvdyBhIHBvcC11cCBtZXNzYWdlIGJhc2VkIGluIHRoZSByZXR1cm5lZCByZXNwb25zZSBwcm9taXNzZVxyXG4gICAgICovXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J2Jhc2ljLWNvbnRhY3QtZm9ybSddXCIpO1xyXG4gICAgICAgICRjb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJHNlbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWxlbWVudC1pZD0nYmFzaWMtY29udGFjdC1mb3JtX19zZW5kQnV0dG9uJ11cIik7XHJcbiAgICAgICAgICAgICRzZW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiYXNpYy1jb250YWN0X19zZW5kLWJ1dHRvbi0tZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICRzZW5kQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5wdXRzXHJcbiAgICAgICAgICAgIGNvbnN0ICRuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWxlbWVudC1pZD0nYmFzaWMtY29udGFjdE5hbWVJbnB1dCddXCIpO1xyXG4gICAgICAgICAgICBjb25zdCAkZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lbGVtZW50LWlkPSdiYXNpYy1jb250YWN0RW1haWxJbnB1dCddXCIpO1xyXG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVsZW1lbnQtaWQ9J2Jhc2ljLWNvbnRhY3RNZXNzYWdlSW5wdXQnXVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtlaWxhZ3J1dmlyYWNlcnF1ZWlyYTk2MDJAZ21haWwuY29tXHJcbiAgICAgICAgICAgIC8vIGNsYXVzaG1hcnRpbnNAZ21haWwuY29tXHJcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2FqYXgvY2xhdXNobWFydGluc0BnbWFpbC5jb21cIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJOb21lXCI6ICRuYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFLW1haWxcIjogJGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZW5zYWdlbVwiOiAkbWVzc2FnZUlucHV0LnZhbHVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBGT1JNU1VCTUlUIENPTkZJR1VSQVRJT04gKi9cclxuICAgICAgICAgICAgICAgICAgICBcIl9zdWJqZWN0XCI6IFwiVElUVUxPIERPIEVNQUlMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfdGVtcGxhdGVcIjogXCJ0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwb3BVcCA9IHJlc3BvbnNlLm9rID8gY3JlYXRlU3VjY2Vzc1BvcFVwKHRydWUpIDogY3JlYXRlU3VjY2Vzc1BvcFVwKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lbGVtZW50LWlkPSdiYXNpYy1jb250YWN0LXBvcC11cHMnXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkcG9wdXBzLmFwcGVuZENoaWxkKCRwb3BVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHNlbmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJhc2ljLWNvbnRhY3RfX3NlbmQtYnV0dG9uLS1kaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2VuZEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHBvcFVwLmNsYXNzTGlzdC5yZXBsYWNlKFwiYmFzaWMtY29udGFjdF9fcG9wLXVwc19fcG9wLXVwLS1pbnZpc2libGVcIiwgXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXAtLXZpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBvcFVwKCRwb3BVcCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3VjY2Vzc1BvcFVwKGlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXAtLXN1Y2Nlc3NcIiwgXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXAtLWludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9wVXAuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9Db3JyZWN0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkUtbWFpbCBlbnZpYWRvIGNvbSBzdWNlc3NvITwvcD5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKFwiYmFzaWMtY29udGFjdF9fcG9wLXVwc19fcG9wLXVwLS1mYWlsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvcFVwLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvSW5jb3JyZWN0LnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk9jb3JyZXUgdW0gZXJybyBhbyBlbnZpYXIgbyBFLW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9wVXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkZWxldGVQb3BVcChwb3BVcCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnJlcGxhY2UoXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXAtLXZpc2libGVcIiwgXCJiYXNpYy1jb250YWN0X19wb3AtdXBzX19wb3AtdXAtLWludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcG9wVXAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=