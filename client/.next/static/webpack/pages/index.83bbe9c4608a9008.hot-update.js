"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = (param)=>{\n    let { currentUser } = param;\n    console.log(currentUser);\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are sign in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justin\\\\Desktop\\\\.react\\\\stephen_grinder\\\\microservice_nodejs_reract\\\\tiketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 24\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are not sign in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justin\\\\Desktop\\\\.react\\\\stephen_grinder\\\\microservice_nodejs_reract\\\\tiketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 51\n    }, undefined);\n};\n_c = LandingPage;\nLandingPage.getInitialProps = async (context)=>{\n    // console.log('Landing fucking page');\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    return data;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5QyxNQUFNQyxjQUFjO1FBQUMsRUFBRUMsV0FBVyxFQUFFO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osT0FBT0EsNEJBQWMsOERBQUNHO2tCQUFHOzs7OztrQ0FBdUIsOERBQUNBO2tCQUFHOzs7Ozs7QUFDdEQ7S0FITUo7QUFLTkEsWUFBWUssZUFBZSxHQUFHLE9BQU9DO0lBQ25DLHVDQUF1QztJQUN2QyxNQUFNQyxTQUFTUiw2REFBV0EsQ0FBQ087SUFDM0IsTUFBTSxFQUFFRSxJQUFJLEVBQUUsR0FBRyxNQUFNRCxPQUFPRSxHQUFHLENBQUM7SUFFbEMsT0FBT0Q7QUFDVDtBQUVBLCtEQUFlUixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gIHJldHVybiBjdXJyZW50VXNlciA/IDxoMT5Zb3UgYXJlIHNpZ24gaW48L2gxPiA6IDxoMT5Zb3UgYXJlIG5vdCBzaWduIGluPC9oMT47XHJcbn07XHJcblxyXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdMYW5kaW5nIGZ1Y2tpbmcgcGFnZScpO1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});