"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/app/home/page.jsx":
/*!*******************************!*\
  !*** ./src/app/home/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserWalkListPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_walk_info_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/walk_info_card */ \"(app-pages-browser)/./src/app/components/walk_info_card.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth */ \"(app-pages-browser)/./src/app/utils/auth.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // useRouterをインポート\n // checkAuth 関数をインポート\nfunction UserWalkListPage() {\n    _s();\n    const [walks, setWalks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // useRouterを初期化\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // ログイン状態をチェック\n        setTimeout(()=>{\n            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__.checkAuth)().then((data)=>{\n                if (data.error) {\n                    router.push(\"/login\"); // ログインしていない場合はログインページにリダイレクト\n                }\n            });\n        }, 500); // 500ms待機\n        // ログインしている場合のみデータを取得\n        fetch(\"\".concat(\"http://127.0.0.1:5000\", \"/api/all_user_walks\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            credentials: \"include\"\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return response.json();\n        }).then((data)=>setWalks(data)).catch((error)=>console.error(\"Error fetching user walks:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full bg-green-100 py-4 text-center text-green-700 font-bold text-lg\",\n                children: \"わん-Chance-アイドル\"\n            }, void 0, false, {\n                fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 overflow-y-auto w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center px-4 pt-4 pb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold mb-4\",\n                            children: \"わんちゃんに会う予定\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        walks.length > 0 ? walks.map((walk, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_walk_info_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                date: walk.date,\n                                time: \"\".concat(walk.time_start, \"〜\").concat(walk.time_end),\n                                location: walk.location,\n                                dogs: walk.dogs,\n                                walkId: walk.walk_id\n                            }, index, false, {\n                                fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"該当する結果が見つかりません。\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suzukiyuya/Documents/tech0/step3-2/one_chance_idol/frontend/src/app/home/page.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(UserWalkListPage, \"kXEL2RR5piAE9LuZ6n+LDYMKH5Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = UserWalkListPage;\nvar _c;\n$RefreshReg$(_c, \"UserWalkListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3RCO0FBQzJCO0FBQ1osQ0FBQyxrQkFBa0I7QUFDckIsQ0FBQyxxQkFBcUI7QUFFakQsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1TLFNBQVNMLDBEQUFTQSxJQUFJLGdCQUFnQjtJQUU1Q0gsZ0RBQVNBLENBQUM7UUFDUixjQUFjO1FBQ2RTLFdBQVc7WUFDVEwsc0RBQVNBLEdBQUdNLElBQUksQ0FBQyxDQUFDQztnQkFDaEIsSUFBSUEsS0FBS0MsS0FBSyxFQUFFO29CQUNkSixPQUFPSyxJQUFJLENBQUMsV0FBVyw2QkFBNkI7Z0JBQ3REO1lBQ0Y7UUFDRixHQUFHLE1BQU0sVUFBVTtRQUVuQixxQkFBcUI7UUFDckJDLE1BQU0sR0FBNEIsT0FBekJDLHVCQUF3QixFQUFDLHdCQUFzQjtZQUN0REcsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxhQUFhO1FBQ2YsR0FDR1YsSUFBSSxDQUFDLENBQUNXO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE9BQU9GLFNBQVNHLElBQUk7UUFDdEIsR0FDQ2QsSUFBSSxDQUFDLENBQUNDLE9BQVNKLFNBQVNJLE9BQ3hCYyxLQUFLLENBQUMsQ0FBQ2IsUUFBVWMsUUFBUWQsS0FBSyxDQUFDLDhCQUE4QkE7SUFDbEUsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBT0QsV0FBVTswQkFBd0U7Ozs7OzswQkFLMUYsOERBQUNFO2dCQUFLRixXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUF5Qjs7Ozs7O3dCQUd0Q3RCLE1BQU0wQixNQUFNLEdBQUcsSUFDZDFCLE1BQU0yQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNqQyxrRUFBWUE7Z0NBRVhrQyxNQUFNRixLQUFLRSxJQUFJO2dDQUNmQyxNQUFNLEdBQXNCSCxPQUFuQkEsS0FBS0ksVUFBVSxFQUFDLEtBQWlCLE9BQWRKLEtBQUtLLFFBQVE7Z0NBQ3pDQyxVQUFVTixLQUFLTSxRQUFRO2dDQUN2QkMsTUFBTVAsS0FBS08sSUFBSTtnQ0FDZkMsUUFBUVIsS0FBS1MsT0FBTzsrQkFMZlI7Ozs7c0RBU1QsOERBQUNTOzRCQUFFaEIsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBaEV3QnZCOztRQUVQRixzREFBU0E7OztLQUZGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvcGFnZS5qc3g/MTRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgV2Fsa0luZm9DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3dhbGtfaW5mb19jYXJkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7IC8vIHVzZVJvdXRlcuOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjsgLy8gY2hlY2tBdXRoIOmWouaVsOOCkuOCpOODs+ODneODvOODiFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyV2Fsa0xpc3RQYWdlKCkge1xuICBjb25zdCBbd2Fsa3MsIHNldFdhbGtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIHVzZVJvdXRlcuOCkuWIneacn+WMllxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g44Ot44Kw44Kk44Oz54q25oWL44KS44OB44Kn44OD44KvXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja0F1dGgoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7IC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+ODreOCsOOCpOODs+ODmuODvOOCuOOBq+ODquODgOOCpOODrOOCr+ODiFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCA1MDApOyAvLyA1MDBtc+W+heapn1xuXG4gICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL5aC05ZCI44Gu44G/44OH44O844K/44KS5Y+W5b6XXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX0VORFBPSU5UfS9hcGkvYWxsX3VzZXJfd2Fsa3NgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgLy8g44K744OD44K344On44Oz44KS5ZCr44KB44KLXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFdhbGtzKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgd2Fsa3M6XCIsIGVycm9yKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctd2hpdGVcIj5cbiAgICAgIHsvKiDjg5jjg4Pjg4Djg7wgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmVlbi0xMDAgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTcwMCBmb250LWJvbGQgdGV4dC1sZ1wiPlxuICAgICAgICDjgo/jgpMtQ2hhbmNlLeOCouOCpOODieODq1xuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiDjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4QgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTQgcHQtNCBwYi04XCI+XG4gICAgICAgICAgey8qIOOCv+OCpOODiOODqyAqL31cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItNFwiPuOCj+OCk+OBoeOCg+OCk+OBq+S8muOBhuS6iOWumjwvaDI+XG5cbiAgICAgICAgICB7LyogV2Fsa0luZm9DYXJk44KS6KGo56S6ICovfVxuICAgICAgICAgIHt3YWxrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgd2Fsa3MubWFwKCh3YWxrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8V2Fsa0luZm9DYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBkYXRlPXt3YWxrLmRhdGV9XG4gICAgICAgICAgICAgICAgdGltZT17YCR7d2Fsay50aW1lX3N0YXJ0feOAnCR7d2Fsay50aW1lX2VuZH1gfSAvLyDmmYLplpPjgpLooajnpLpcbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17d2Fsay5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICBkb2dzPXt3YWxrLmRvZ3N9XG4gICAgICAgICAgICAgICAgd2Fsa0lkPXt3YWxrLndhbGtfaWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+6Kmy5b2T44GZ44KL57WQ5p6c44GM6KaL44Gk44GL44KK44G+44Gb44KT44CCPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiV2Fsa0luZm9DYXJkIiwidXNlUm91dGVyIiwiY2hlY2tBdXRoIiwiVXNlcldhbGtMaXN0UGFnZSIsIndhbGtzIiwic2V0V2Fsa3MiLCJyb3V0ZXIiLCJzZXRUaW1lb3V0IiwidGhlbiIsImRhdGEiLCJlcnJvciIsInB1c2giLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfRU5EUE9JTlQiLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibWFpbiIsImgyIiwibGVuZ3RoIiwibWFwIiwid2FsayIsImluZGV4IiwiZGF0ZSIsInRpbWUiLCJ0aW1lX3N0YXJ0IiwidGltZV9lbmQiLCJsb2NhdGlvbiIsImRvZ3MiLCJ3YWxrSWQiLCJ3YWxrX2lkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.jsx\n"));

/***/ })

});