"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/eq-results/page",{

/***/ "(app-pages-browser)/./src/app/components/CategoryScores/index.js":
/*!****************************************************!*\
  !*** ./src/app/components/CategoryScores/index.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryScores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/questions */ \"(app-pages-browser)/./src/app/questions.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CategoryScores(param) {\n    let { emotionalResult, selfResult, socialResult, relationshipResult, adaptableResult, totalResult } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [fullEQ, setFullEQ] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setInterval(()=>{\n            setLoading(false);\n        }, 3000);\n    }, []);\n    const finalResult = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const scrollToSection = ()=>{\n        setFullEQ(true);\n        if (finalResult.current) {\n            finalResult.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const cure = (0,_app_questions__WEBPACK_IMPORTED_MODULE_3__.testResults)(Number(emotionalResult), Number(selfResult), Number(socialResult), Number(relationshipResult), Number(adaptableResult), Number(totalResult));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5\",\n        children: loading == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto\",\n            role: \"status\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    className: \" block m-auto w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600\",\n                    viewBox: \"0 0 100 101\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                            fill: \"currentFill\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"sr-only\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        cure.emotionalReturn,\n                        cure.selfReturn,\n                        cure.socialReturn,\n                        cure.relationshipReturn,\n                        cure.adaptableReturn,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: scrollToSection,\n                                className: \"mx-auto d-block py-2 px-8 mt-5 bg-orange-100 border hover:bg-orange-500 \",\n                                children: \"See Full EQ information\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                fullEQ == true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    ref: finalResult,\n                    children: cure.totalReturn\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\components\\\\CategoryScores\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryScores, \"AdiEO2oRG5bmmtw0y4znapyh0JQ=\");\n_c = CategoryScores;\nvar _c;\n$RefreshReg$(_c, \"CategoryScores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXRlZ29yeVNjb3Jlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNxQjtBQUNOO0FBRS9CLFNBQVNLLGVBQWUsS0FPdEM7UUFQc0MsRUFDckNDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLGtCQUFrQixFQUNsQkMsZUFBZSxFQUNmQyxXQUFXLEVBQ1osR0FQc0M7O0lBUXJDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1JjLFlBQVk7WUFDVkgsV0FBVztRQUNiLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxNQUFNSSxjQUFjZCw2Q0FBTUEsQ0FBQztJQUUzQixNQUFNZSxrQkFBa0I7UUFDdEJILFVBQVU7UUFFVixJQUFJRSxZQUFZRSxPQUFPLEVBQUU7WUFDdkJGLFlBQVlFLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7UUFDMUQ7SUFDRjtJQUVBLE1BQU1DLE9BQU9sQiwyREFBV0EsQ0FDdEJtQixPQUFPakIsa0JBQ1BpQixPQUFPaEIsYUFDUGdCLE9BQU9mLGVBQ1BlLE9BQU9kLHFCQUNQYyxPQUFPYixrQkFDUGEsT0FBT1o7SUFHVCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDWmIsV0FBVyxxQkFDViw4REFBQ1k7WUFBSUMsV0FBVTtZQUFTQyxNQUFLOzs4QkFDM0IsOERBQUNDO29CQUNDQyxlQUFZO29CQUNaSCxXQUFVO29CQUNWSSxTQUFRO29CQUNSQyxNQUFLO29CQUNMQyxPQUFNOztzQ0FFTiw4REFBQ0M7NEJBQ0NDLEdBQUU7NEJBQ0ZILE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0U7NEJBQ0NDLEdBQUU7NEJBQ0ZILE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ0k7b0JBQUtULFdBQVU7OEJBQVU7Ozs7Ozs7Ozs7O2lDQUc1Qiw4REFBQ0Q7OzhCQUNDLDhEQUFDQTs7d0JBQ0VGLEtBQUthLGVBQWU7d0JBQ3BCYixLQUFLYyxVQUFVO3dCQUNmZCxLQUFLZSxZQUFZO3dCQUNqQmYsS0FBS2dCLGtCQUFrQjt3QkFDdkJoQixLQUFLaUIsZUFBZTtzQ0FDckIsOERBQUNmOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDZTtnQ0FDQ0MsU0FBU3ZCO2dDQUNUTyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFLSlgsVUFBVSxzQkFDVCw4REFBQ1U7b0JBQUlDLFdBQVU7b0JBQUdpQixLQUFLekI7OEJBQ3BCSyxLQUFLcUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0FwRndCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhdGVnb3J5U2NvcmVzL2luZGV4LmpzPzU4NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0ZXN0UmVzdWx0cyB9IGZyb20gXCJAL2FwcC9xdWVzdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5U2NvcmVzKHtcclxuICBlbW90aW9uYWxSZXN1bHQsXHJcbiAgc2VsZlJlc3VsdCxcclxuICBzb2NpYWxSZXN1bHQsXHJcbiAgcmVsYXRpb25zaGlwUmVzdWx0LFxyXG4gIGFkYXB0YWJsZVJlc3VsdCxcclxuICB0b3RhbFJlc3VsdCxcclxufSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmdWxsRVEsIHNldEZ1bGxFUV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaW5hbFJlc3VsdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0RnVsbEVRKHRydWUpO1xyXG5cclxuICAgIGlmIChmaW5hbFJlc3VsdC5jdXJyZW50KSB7XHJcbiAgICAgIGZpbmFsUmVzdWx0LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjdXJlID0gdGVzdFJlc3VsdHMoXHJcbiAgICBOdW1iZXIoZW1vdGlvbmFsUmVzdWx0KSxcclxuICAgIE51bWJlcihzZWxmUmVzdWx0KSxcclxuICAgIE51bWJlcihzb2NpYWxSZXN1bHQpLFxyXG4gICAgTnVtYmVyKHJlbGF0aW9uc2hpcFJlc3VsdCksXHJcbiAgICBOdW1iZXIoYWRhcHRhYmxlUmVzdWx0KSxcclxuICAgIE51bWJlcih0b3RhbFJlc3VsdClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAge2xvYWRpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0b1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJsb2NrIG0tYXV0byB3LTEwIGgtMTAgdGV4dC1ncmF5LTIwMCBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNjAwIGZpbGwtYmx1ZS02MDBcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRGaWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjdXJlLmVtb3Rpb25hbFJldHVybn1cclxuICAgICAgICAgICAge2N1cmUuc2VsZlJldHVybn1cclxuICAgICAgICAgICAge2N1cmUuc29jaWFsUmV0dXJufVxyXG4gICAgICAgICAgICB7Y3VyZS5yZWxhdGlvbnNoaXBSZXR1cm59XHJcbiAgICAgICAgICAgIHtjdXJlLmFkYXB0YWJsZVJldHVybn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1ibG9jayBweS0yIHB4LTggbXQtNSBiZy1vcmFuZ2UtMTAwIGJvcmRlciBob3ZlcjpiZy1vcmFuZ2UtNTAwIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2VlIEZ1bGwgRVEgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtmdWxsRVEgPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgcmVmPXtmaW5hbFJlc3VsdH0+XHJcbiAgICAgICAgICAgICAge2N1cmUudG90YWxSZXR1cm59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ0ZXN0UmVzdWx0cyIsIkNhdGVnb3J5U2NvcmVzIiwiZW1vdGlvbmFsUmVzdWx0Iiwic2VsZlJlc3VsdCIsInNvY2lhbFJlc3VsdCIsInJlbGF0aW9uc2hpcFJlc3VsdCIsImFkYXB0YWJsZVJlc3VsdCIsInRvdGFsUmVzdWx0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJmdWxsRVEiLCJzZXRGdWxsRVEiLCJzZXRJbnRlcnZhbCIsImZpbmFsUmVzdWx0Iiwic2Nyb2xsVG9TZWN0aW9uIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJjdXJlIiwiTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsInN2ZyIsImFyaWEtaGlkZGVuIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIiwic3BhbiIsImVtb3Rpb25hbFJldHVybiIsInNlbGZSZXR1cm4iLCJzb2NpYWxSZXR1cm4iLCJyZWxhdGlvbnNoaXBSZXR1cm4iLCJhZGFwdGFibGVSZXR1cm4iLCJidXR0b24iLCJvbkNsaWNrIiwicmVmIiwidG90YWxSZXR1cm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CategoryScores/index.js\n"));

/***/ })

});