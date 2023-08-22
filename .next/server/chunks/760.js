"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

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

/***/ 6760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/context/colorContext.js
var colorContext = __webpack_require__(101);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
;// CONCATENATED MODULE: ./src/useWindowSize.js

function useWindowSize() {
    const isSSR = "undefined" === "undefined";
    const [windowSize, setWindowSize] = external_react_default().useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    });
    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", changeWindowSize);
        return ()=>{
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};

;// CONCATENATED MODULE: ./src/layouts/BackMobile.js

const BackMobile = ({ changeMobileMenu , mobileMenu  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "back-mobile",
        id: "back-mobile",
        onClick: ()=>changeMobileMenu(false),
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa fa-arrow-left"
        })
    });
};
/* harmony default export */ const layouts_BackMobile = (BackMobile);

;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/layouts/Header.js





const menus = [
    {
        icon: "fa fa-home",
        dkMenuName: "Home",
        name: "Home",
        id: "home"
    },
    {
        icon: "fa fa-user",
        dkMenuName: "About",
        name: "About me",
        id: "about"
    },
    {
        icon: "fa fa-briefcase",
        dkMenuName: "Portfolio",
        name: "my Portfolio",
        id: "work"
    },
    {
        icon: "fa fa-envelope-open",
        dkMenuName: "Contact",
        name: "get in touch",
        id: "contact"
    }, 
];
const Header = ({ light  })=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { changeNav , nav , changeMobileMenu , mobileMenu  } = (0,external_react_.useContext)(navContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        let path = window.location.hash, newpath = path.split("#").pop();
        return ()=>{
            changeNav(newpath ? newpath : "home");
        };
    }, []);
    const { width  } = useWindowSize();
    // outside click
    let domNode = src_useClickOutside(()=>{
        setToggle(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        id: "nav",
                        className: "navigation",
                        children: menus.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: nav === menu.id ? "active" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        onClick: ()=>{
                                            changeNav(menu.id);
                                            changeMobileMenu(width < 1025 ? true : false);
                                        },
                                        id: `link-${menu.id}`,
                                        href: `#${menu.id}`,
                                        className: nav === menu.id ? "active" : "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `${menu.icon}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: menu.name
                                            })
                                        ]
                                    })
                                })
                            }, i))
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: domNode,
                className: `cd-stretchy-nav ${toggle ? "nav-is-visible" : ""} ${light ? nav == "home" && "lighter" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "cd-nav-trigger",
                        onClick: ()=>setToggle(!toggle),
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "stretchy-nav",
                        children: menus.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: nav == menu.id ? "active" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `#${menu.id}`,
                                    onClick: ()=>{
                                        changeNav(menu.id);
                                        setToggle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: menu.dkMenuName
                                    })
                                })
                            }, i))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        "aria-hidden": "true",
                        className: "stretchy-nav-bg"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/Switcher.js



const colors = [
    {
        name: "blue",
        colorImg: "img/styleswitcher/blue.png"
    },
    {
        name: "red",
        colorImg: "img/styleswitcher/red.png"
    },
    {
        name: "goldrenrod",
        colorImg: "img/styleswitcher/goldenrod.png"
    },
    {
        name: "magenta",
        colorImg: "img/styleswitcher/magenta.png"
    },
    {
        name: "yellowgreen",
        colorImg: "img/styleswitcher/yellowgreen.png"
    },
    {
        name: "orange",
        colorImg: "img/styleswitcher/orange.png"
    },
    {
        name: "green",
        colorImg: "img/styleswitcher/green.png"
    },
    {
        name: "yellow",
        colorImg: "img/styleswitcher/yellow.png"
    }, 
];
const Switcher = ()=>{
    const { changeColor  } = useContext(ColorContext);
    const { 0: toggle , 1: setToggle  } = useState(false);
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                id: "switcher",
                className: "",
                style: {
                    display: toggle ? "block" : "none"
                },
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ _jsx("h4", {
                            children: "STYLE SWITCHER"
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            children: colors.map((color, i)=>/*#__PURE__*/ _jsx("li", {
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>changeColor(color.name),
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: color.colorImg,
                                            alt: color.name
                                        })
                                    }, i)
                                }, i))
                        }),
                        /*#__PURE__*/ _jsx("br", {}),
                        /*#__PURE__*/ _jsxs("a", {
                            href: "",
                            className: "waves-effect waves-light btn font-weight-600 purchase hoverable",
                            children: [
                                " ",
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        /*#__PURE__*/ _jsx("i", {
                                            className: "fa fa-shopping-cart"
                                        }),
                                        " PURCHASE"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                id: "showSwitcher",
                className: "styleSecondColor",
                onClick: ()=>setToggle(true),
                style: {
                    display: toggle ? "none" : "block"
                },
                children: /*#__PURE__*/ _jsx("i", {
                    className: "fa fa-cog fa-spin"
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Switcher = ((/* unused pure expression or super */ null && (Switcher)));

;// CONCATENATED MODULE: ./src/layouts/Layouts.js









const Layouts = ({ children , bodyCls , extraPage , light  })=>{
    (0,external_react_.useEffect)(()=>{
        document.querySelector("body").classList = bodyCls ? bodyCls : "dark fullscreendark";
    }, []);
    const { changeMobileMenu , mobileMenu  } = (0,external_react_.useContext)(navContext/* default */.Z);
    const { color  } = (0,external_react_.useContext)(colorContext/* default */.Z);
    const { width  } = useWindowSize();
    (0,external_react_.useEffect)(()=>{
        if (width > 1025) {
            changeMobileMenu(false);
        }
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: `css/skins/${color}.css`,
                        rel: "stylesheet"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Rosyid - Personal Portfolio"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page animated",
                style: {
                    animationDuration: "500ms"
                },
                children: [
                    !extraPage && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {
                        light: light
                    }),
                    " ",
                    extraPage ? children : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        id: "main",
                        className: `${width < 1025 ? mobileMenu ? "open" : "" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(layouts_BackMobile, {
                                changeMobileMenu: changeMobileMenu,
                                mobileMenu: mobileMenu
                            }),
                            children
                        ]
                    })
                ]
            }),
            " "
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;