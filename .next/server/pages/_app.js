"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/colorContext.js
var colorContext = __webpack_require__(101);
;// CONCATENATED MODULE: ./src/context/colorState.js



const type = {
    COLOR: "NAV"
};
const navReducer = (state, action)=>{
    switch(action.type){
        case type.COLOR:
            return {
                ...state,
                color: action.payload
            };
        default:
            return state;
    }
};
const ColorState = (props)=>{
    const initialState = {
        color: "yellow"
    };
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(navReducer, initialState);
    const changeColor = (value)=>{
        dispatch({
            type: type.COLOR,
            payload: value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(colorContext/* default.Provider */.Z.Provider, {
        value: {
            changeColor: changeColor,
            color: state.color
        },
        children: props.children
    });
};
/* harmony default export */ const colorState = (ColorState);

// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
;// CONCATENATED MODULE: ./src/context/navState.js



const navState_type = {
    NAV: "NAV",
    MOBILE_MENU: "MOBILE_MENU"
};
const navState_navReducer = (state, action)=>{
    switch(action.type){
        case navState_type.NAV:
            return {
                ...state,
                nav: action.payload
            };
        case navState_type.MOBILE_MENU:
            return {
                ...state,
                mobileMenu: action.payload
            };
        default:
            return state;
    }
};
const NavState = (props)=>{
    const initialState = {
        nav: "home",
        mobileMenu: false
    };
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(navState_navReducer, initialState);
    const changeNav = (value)=>{
        dispatch({
            type: navState_type.NAV,
            payload: value
        });
    };
    const changeMobileMenu = (value)=>{
        console.log(value);
        dispatch({
            type: navState_type.MOBILE_MENU,
            payload: value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(navContext/* default.Provider */.Z.Provider, {
        value: {
            changeNav: changeNav,
            nav: state.nav,
            mobileMenu: state.mobileMenu,
            changeMobileMenu: changeMobileMenu
        },
        children: props.children
    });
};
/* harmony default export */ const navState = (NavState);

;// CONCATENATED MODULE: ./src/layouts/PreLoader.js


const PreLoader = ()=>{
    const { 0: loaded , 1: setLoaded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoaded(true);
        }, 2000);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `preloader ${loaded ? "loaded" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "preloader-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Muhammad"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "progress-line-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "progress-line"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Rosyid Ridho"
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_PreLoader = (PreLoader); // loaded

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: "css/bootstrap.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: "css/jquery.animatedheadline.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: "css/font-awesome.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: "css/style.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/styleswitcher.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Istanbul - Personal Portfolio"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navState, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(colorState, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layouts_PreLoader, {})
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ColorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorContext);


/***/ }),

/***/ 6333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(336));
module.exports = __webpack_exports__;

})();