"use strict";
(() => {
var exports = {};
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(644);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/components/Blog'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(504);
/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(732);
/* harmony import */ var _src_context_colorContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(101);
/* harmony import */ var _src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(760);









const Work = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "index-left-image-light.js -> " + "../src/components/Work"
        ]
    },
    ssr: false
});
const IndexLeftImageLight = ()=>{
    const { changeColor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_context_colorContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        changeColor("green");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        bodyCls: "light dark-header bgimage",
        light: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Home__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                leftImg: true,
                leftImgSrc: "img/leftimage-light.jpg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_About__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Work, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Contact__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/components/Blog'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexLeftImageLight);


/***/ }),

/***/ 655:
/***/ ((module) => {

module.exports = require("emailjs-com");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 977:
/***/ ((module) => {

module.exports = require("react-moving-text");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,681], () => (__webpack_exec__(277)));
module.exports = __webpack_exports__;

})();