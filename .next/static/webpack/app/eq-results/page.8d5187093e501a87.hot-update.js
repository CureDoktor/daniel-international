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

/***/ "(app-pages-browser)/./src/app/eq-results/page.js":
/*!************************************!*\
  !*** ./src/app/eq-results/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Checkout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbartwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbartwo */ \"(app-pages-browser)/./src/app/components/Navbartwo/index.js\");\n/* harmony import */ var _components_CategoryScores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CategoryScores */ \"(app-pages-browser)/./src/app/components/CategoryScores/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./src/app/components/Footer/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Add this if it's missing\n\n\n\n\nfunction Checkout() {\n    _s();\n    const [parsedTestResult, setParsedTest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const testResult = localStorage.getItem(\"finalScoreEQ\");\n        if (testResult) {\n            parsedTest = JSON.parse(testResult);\n        }\n        setParsedTest(parsedTest);\n    }, []);\n    // const {\n    //   emotionalResult,\n    //   selfResult,\n    //   socialResult,\n    //   relationshipResult,\n    //   adaptableResult,\n    //   totalResult,\n    // } = testResults(emotional, self, social, relationship, adaptable, totalScore);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbartwo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto  max-w-full md:max-w-[1200px] my-10 p-5 mx-auto py-24 text-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryScores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    emotionalResult: parsedTestResult.emotional,\n                    selfResult: parsedTestResult.self,\n                    socialResult: parsedTestResult.social,\n                    relationshipResult: parsedTestResult.relationship,\n                    adaptableResult: parsedTestResult.adaptable,\n                    totalResult: parsedTestResult.totalScore\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Checkout, \"nRh6GrdRrDtqmFMlHh62O9ILdIk=\");\n_c = Checkout;\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXEtcmVzdWx0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQixDQUFDLDJCQUEyQjtBQUNWO0FBQ0k7QUFDVTtBQUNoQjtBQUUzQixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDLElBQUlGLFlBQVk7WUFDZEcsYUFBYUMsS0FBS0MsS0FBSyxDQUFDTDtRQUMxQjtRQUVBRCxjQUFjSTtJQUNoQixHQUFHLEVBQUU7SUFFTCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUZBQWlGO0lBRWpGLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNaLDZEQUFTQTs7Ozs7MEJBQ1YsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDWixrRUFBY0E7b0JBQ2JhLGlCQUFpQlYsaUJBQWlCVyxTQUFTO29CQUMzQ0MsWUFBWVosaUJBQWlCYSxJQUFJO29CQUNqQ0MsY0FBY2QsaUJBQWlCZSxNQUFNO29CQUNyQ0Msb0JBQW9CaEIsaUJBQWlCaUIsWUFBWTtvQkFDakRDLGlCQUFpQmxCLGlCQUFpQm1CLFNBQVM7b0JBQzNDQyxhQUFhcEIsaUJBQWlCcUIsVUFBVTs7Ozs7Ozs7Ozs7MEJBRzVDLDhEQUFDdkIsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBcEN3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9lcS1yZXN1bHRzL3BhZ2UuanM/OWU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiOyAvLyBBZGQgdGhpcyBpZiBpdCdzIG1pc3NpbmdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFydHdvIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhcnR3b1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTY29yZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlTY29yZXNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIGNvbnN0IFtwYXJzZWRUZXN0UmVzdWx0LCBzZXRQYXJzZWRUZXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0UmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaW5hbFNjb3JlRVFcIik7XHJcbiAgICBpZiAodGVzdFJlc3VsdCkge1xyXG4gICAgICBwYXJzZWRUZXN0ID0gSlNPTi5wYXJzZSh0ZXN0UmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJzZWRUZXN0KHBhcnNlZFRlc3QpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gY29uc3Qge1xyXG4gIC8vICAgZW1vdGlvbmFsUmVzdWx0LFxyXG4gIC8vICAgc2VsZlJlc3VsdCxcclxuICAvLyAgIHNvY2lhbFJlc3VsdCxcclxuICAvLyAgIHJlbGF0aW9uc2hpcFJlc3VsdCxcclxuICAvLyAgIGFkYXB0YWJsZVJlc3VsdCxcclxuICAvLyAgIHRvdGFsUmVzdWx0LFxyXG4gIC8vIH0gPSB0ZXN0UmVzdWx0cyhlbW90aW9uYWwsIHNlbGYsIHNvY2lhbCwgcmVsYXRpb25zaGlwLCBhZGFwdGFibGUsIHRvdGFsU2NvcmUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhcnR3byAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgbWF4LXctZnVsbCBtZDptYXgtdy1bMTIwMHB4XSBteS0xMCBwLTUgbXgtYXV0byBweS0yNCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgPENhdGVnb3J5U2NvcmVzXHJcbiAgICAgICAgICBlbW90aW9uYWxSZXN1bHQ9e3BhcnNlZFRlc3RSZXN1bHQuZW1vdGlvbmFsfVxyXG4gICAgICAgICAgc2VsZlJlc3VsdD17cGFyc2VkVGVzdFJlc3VsdC5zZWxmfVxyXG4gICAgICAgICAgc29jaWFsUmVzdWx0PXtwYXJzZWRUZXN0UmVzdWx0LnNvY2lhbH1cclxuICAgICAgICAgIHJlbGF0aW9uc2hpcFJlc3VsdD17cGFyc2VkVGVzdFJlc3VsdC5yZWxhdGlvbnNoaXB9XHJcbiAgICAgICAgICBhZGFwdGFibGVSZXN1bHQ9e3BhcnNlZFRlc3RSZXN1bHQuYWRhcHRhYmxlfVxyXG4gICAgICAgICAgdG90YWxSZXN1bHQ9e3BhcnNlZFRlc3RSZXN1bHQudG90YWxTY29yZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhcnR3byIsIkNhdGVnb3J5U2NvcmVzIiwiRm9vdGVyIiwiQ2hlY2tvdXQiLCJwYXJzZWRUZXN0UmVzdWx0Iiwic2V0UGFyc2VkVGVzdCIsInRlc3RSZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VkVGVzdCIsIkpTT04iLCJwYXJzZSIsImRpdiIsImNsYXNzTmFtZSIsImVtb3Rpb25hbFJlc3VsdCIsImVtb3Rpb25hbCIsInNlbGZSZXN1bHQiLCJzZWxmIiwic29jaWFsUmVzdWx0Iiwic29jaWFsIiwicmVsYXRpb25zaGlwUmVzdWx0IiwicmVsYXRpb25zaGlwIiwiYWRhcHRhYmxlUmVzdWx0IiwiYWRhcHRhYmxlIiwidG90YWxSZXN1bHQiLCJ0b3RhbFNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/eq-results/page.js\n"));

/***/ })

});