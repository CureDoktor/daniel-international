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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Checkout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbartwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbartwo */ \"(app-pages-browser)/./src/app/components/Navbartwo/index.js\");\n/* harmony import */ var _components_CategoryScores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CategoryScores */ \"(app-pages-browser)/./src/app/components/CategoryScores/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./src/app/components/Footer/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n // Add this if it's missing\n\n\n\n\nfunction Checkout() {\n    const testResult = localStorage.getItem(\"finalScoreEQ\");\n    console.log(testResult);\n    var parsedTestResult = \"\";\n    if (testResult) {\n        parsedTestResult = JSON.parse(testResult);\n    }\n    console.log(parsedTestResult);\n    // const {\n    //   emotionalResult,\n    //   selfResult,\n    //   socialResult,\n    //   relationshipResult,\n    //   adaptableResult,\n    //   totalResult,\n    // } = testResults(emotional, self, social, relationship, adaptable, totalScore);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbartwo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto max-w-full md:max-w-[1200px] my-10 p-5 mx-auto py-10 text-black\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nikola\\\\Desktop\\\\NextJS Daniel\\\\src\\\\app\\\\eq-results\\\\page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c = Checkout;\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXEtcmVzdWx0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCLENBQUMsMkJBQTJCO0FBQ1Y7QUFDSTtBQUNVO0FBQ2hCO0FBRTNCLFNBQVNNO0lBQ3RCLE1BQU1DLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztJQUN4Q0MsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLElBQUlLLG1CQUFtQjtJQUV2QixJQUFJTCxZQUFZO1FBQ2RLLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDUDtJQUNoQztJQUVBRyxRQUFRQyxHQUFHLENBQUNDO0lBRVosVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlGQUFpRjtJQUVqRixxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDWiw2REFBU0E7Ozs7OzBCQUNWLDhEQUFDWTtnQkFBSUMsV0FBVTs7Ozs7OzBCQVVmLDhEQUFDWCwwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7S0FyQ3dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2VxLXJlc3VsdHMvcGFnZS5qcz85ZTk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7IC8vIEFkZCB0aGlzIGlmIGl0J3MgbWlzc2luZ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXJ0d28gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFydHdvXCI7XHJcbmltcG9ydCBDYXRlZ29yeVNjb3JlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yeVNjb3Jlc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgY29uc3QgdGVzdFJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluYWxTY29yZUVRXCIpO1xyXG4gIGNvbnNvbGUubG9nKHRlc3RSZXN1bHQpO1xyXG5cclxuICB2YXIgcGFyc2VkVGVzdFJlc3VsdCA9IFwiXCI7XHJcblxyXG4gIGlmICh0ZXN0UmVzdWx0KSB7XHJcbiAgICBwYXJzZWRUZXN0UmVzdWx0ID0gSlNPTi5wYXJzZSh0ZXN0UmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHBhcnNlZFRlc3RSZXN1bHQpO1xyXG5cclxuICAvLyBjb25zdCB7XHJcbiAgLy8gICBlbW90aW9uYWxSZXN1bHQsXHJcbiAgLy8gICBzZWxmUmVzdWx0LFxyXG4gIC8vICAgc29jaWFsUmVzdWx0LFxyXG4gIC8vICAgcmVsYXRpb25zaGlwUmVzdWx0LFxyXG4gIC8vICAgYWRhcHRhYmxlUmVzdWx0LFxyXG4gIC8vICAgdG90YWxSZXN1bHQsXHJcbiAgLy8gfSA9IHRlc3RSZXN1bHRzKGVtb3Rpb25hbCwgc2VsZiwgc29jaWFsLCByZWxhdGlvbnNoaXAsIGFkYXB0YWJsZSwgdG90YWxTY29yZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFydHdvIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG1heC13LWZ1bGwgbWQ6bWF4LXctWzEyMDBweF0gbXktMTAgcC01IG14LWF1dG8gcHktMTAgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgIHsvKiA8Q2F0ZWdvcnlTY29yZXNcclxuICAgICAgICAgIGVtb3Rpb25hbFJlc3VsdD17dGVzdFJlc3VsdC5lbW90aW9uYWxSZXN1bHR9XHJcbiAgICAgICAgICBzZWxmUmVzdWx0PXt0ZXN0UmVzdWx0LnNlbGZSZXN1bHR9XHJcbiAgICAgICAgICBzb2NpYWxSZXN1bHQ9e3Rlc3RSZXN1bHQuc29jaWFsUmVzdWx0fVxyXG4gICAgICAgICAgcmVsYXRpb25zaGlwUmVzdWx0PXt0ZXN0UmVzdWx0LnJlbGF0aW9uc2hpcFJlc3VsdH1cclxuICAgICAgICAgIGFkYXB0YWJsZVJlc3VsdD17dGVzdFJlc3VsdC5hZGFwdGFibGVSZXN1bHR9XHJcbiAgICAgICAgICB0b3RhbFJlc3VsdD17dGVzdFJlc3VsdC50b3RhbFJlc3VsdH1cclxuICAgICAgICAvPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXJ0d28iLCJDYXRlZ29yeVNjb3JlcyIsIkZvb3RlciIsIkNoZWNrb3V0IiwidGVzdFJlc3VsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicGFyc2VkVGVzdFJlc3VsdCIsIkpTT04iLCJwYXJzZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/eq-results/page.js\n"));

/***/ })

});