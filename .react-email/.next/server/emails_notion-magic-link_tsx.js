"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_notion-magic-link_tsx";
exports.ids = ["emails_notion-magic-link_tsx"];
exports.modules = {

/***/ "./emails/notion-magic-link.tsx":
/*!**************************************!*\
  !*** ./emails/notion-magic-link.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotionMagicLinkEmail\": () => (/* binding */ NotionMagicLinkEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst NotionMagicLinkEmail = ({ loginCode =\"sparo-ndigo-amurt-secan\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: \"Log in with this magic link\"\n            }, void 0, false, {\n                fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                            style: h1,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: \"https://notion.so\",\n                            target: \"_blank\",\n                            style: {\n                                ...link,\n                                display: \"block\",\n                                marginBottom: \"16px\"\n                            },\n                            children: \"Click here to log in with this magic link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                marginBottom: \"14px\"\n                            },\n                            children: \"Or, copy and paste this temporary login code:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: code,\n                            children: loginCode\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"14px\",\n                                marginBottom: \"16px\"\n                            },\n                            children: \"If you didn't try to login, you can safely ignore this email.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"12px\",\n                                marginBottom: \"38px\"\n                            },\n                            children: \"Hint: You can set a permanent password in Settings & members → My account.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                            src: `${baseUrl}/static/notion-logo.png`,\n                            width: \"32\",\n                            height: \"32\",\n                            alt: \"Notion's Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: footer,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    href: \"https://notion.so\",\n                                    target: \"_blank\",\n                                    style: {\n                                        ...link,\n                                        color: \"#898989\"\n                                    },\n                                    children: \"Notion.so\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, undefined),\n                                \", the all-in-one-workspace\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 11\n                                }, undefined),\n                                \"for your notes, tasks, wikis, and databases.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aliyakhabr/Desktop/PROJECTS/EDM/react-email-starter/.react-email/emails/notion-magic-link.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotionMagicLinkEmail);\nconst main = {\n    backgroundColor: \"#ffffff\"\n};\nconst container = {\n    paddingLeft: \"12px\",\n    paddingRight: \"12px\",\n    margin: \"0 auto\"\n};\nconst h1 = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"24px\",\n    fontWeight: \"bold\",\n    margin: \"40px 0\",\n    padding: \"0\"\n};\nconst link = {\n    color: \"#2754C5\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"14px\",\n    textDecoration: \"underline\"\n};\nconst text = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"14px\",\n    margin: \"24px 0\"\n};\nconst footer = {\n    color: \"#898989\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"12px\",\n    lineHeight: \"22px\",\n    marginTop: \"12px\",\n    marginBottom: \"24px\"\n};\nconst code = {\n    display: \"inline-block\",\n    padding: \"16px 4.5%\",\n    width: \"90.5%\",\n    backgroundColor: \"#f4f4f4\",\n    borderRadius: \"5px\",\n    border: \"1px solid #eee\",\n    color: \"#333\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvbm90aW9uLW1hZ2ljLWxpbmsudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVpQztBQUNGO0FBTS9CLE1BQU1VLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxHQUNsQyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxHQUNuQyxFQUFFO0FBRUMsTUFBTUMsdUJBQXVCLENBQUMsRUFDbkNDLFdBQVksMEJBQXlCLEVBQ1gsaUJBQzFCLDhEQUFDWCx5REFBSUE7OzBCQUNILDhEQUFDRix5REFBSUE7Ozs7OzBCQUNMLDhEQUFDSyw0REFBT0E7MEJBQUM7Ozs7OzswQkFDVCw4REFBQ1AseURBQUlBO2dCQUFDZ0IsT0FBT0M7MEJBQ1gsNEVBQUNoQiw4REFBU0E7b0JBQUNlLE9BQU9FOztzQ0FDaEIsOERBQUNmLDREQUFPQTs0QkFBQ2EsT0FBT0c7c0NBQUk7Ozs7OztzQ0FDcEIsOERBQUNiLHlEQUFJQTs0QkFDSGMsTUFBSzs0QkFDTEMsUUFBTzs0QkFDUEwsT0FBTztnQ0FDTCxHQUFHTSxJQUFJO2dDQUNQQyxTQUFTO2dDQUNUQyxjQUFjOzRCQUNoQjtzQ0FDRDs7Ozs7O3NDQUdELDhEQUFDaEIseURBQUlBOzRCQUFDUSxPQUFPO2dDQUFFLEdBQUdTLElBQUk7Z0NBQUVELGNBQWM7NEJBQU87c0NBQUc7Ozs7OztzQ0FHaEQsOERBQUNFOzRCQUFLVixPQUFPVTtzQ0FBT1g7Ozs7OztzQ0FDcEIsOERBQUNQLHlEQUFJQTs0QkFDSFEsT0FBTztnQ0FDTCxHQUFHUyxJQUFJO2dDQUNQRSxPQUFPO2dDQUNQQyxXQUFXO2dDQUNYSixjQUFjOzRCQUNoQjtzQ0FDRDs7Ozs7O3NDQUdELDhEQUFDaEIseURBQUlBOzRCQUNIUSxPQUFPO2dDQUNMLEdBQUdTLElBQUk7Z0NBQ1BFLE9BQU87Z0NBQ1BDLFdBQVc7Z0NBQ1hKLGNBQWM7NEJBQ2hCO3NDQUNEOzs7Ozs7c0NBSUQsOERBQUNuQix3REFBR0E7NEJBQ0Z3QixLQUFLLENBQUMsRUFBRW5CLFFBQVEsdUJBQXVCLENBQUM7NEJBQ3hDb0IsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsS0FBSTs7Ozs7O3NDQUVOLDhEQUFDeEIseURBQUlBOzRCQUFDUSxPQUFPaUI7OzhDQUNYLDhEQUFDM0IseURBQUlBO29DQUNIYyxNQUFLO29DQUNMQyxRQUFPO29DQUNQTCxPQUFPO3dDQUFFLEdBQUdNLElBQUk7d0NBQUVLLE9BQU87b0NBQVU7OENBQ3BDOzs7Ozs7Z0NBRU07OENBRVAsOERBQUNPOzs7OztnQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBTWQ7QUFFRixpRUFBZXBCLG9CQUFvQkEsRUFBQztBQUVwQyxNQUFNRyxPQUFPO0lBQ1hrQixpQkFBaUI7QUFDbkI7QUFFQSxNQUFNakIsWUFBWTtJQUNoQmtCLGFBQWE7SUFDYkMsY0FBYztJQUNkQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNbkIsS0FBSztJQUNUUSxPQUFPO0lBQ1BZLFlBQ0U7SUFDRkMsVUFBVTtJQUNWQyxZQUFZO0lBQ1pILFFBQVE7SUFDUkksU0FBUztBQUNYO0FBRUEsTUFBTXBCLE9BQU87SUFDWEssT0FBTztJQUNQWSxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkcsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTWxCLE9BQU87SUFDWEUsT0FBTztJQUNQWSxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkYsUUFBUTtBQUNWO0FBRUEsTUFBTUwsU0FBUztJQUNiTixPQUFPO0lBQ1BZLFlBQ0U7SUFDRkMsVUFBVTtJQUNWSSxZQUFZO0lBQ1poQixXQUFXO0lBQ1hKLGNBQWM7QUFDaEI7QUFFQSxNQUFNRSxPQUFPO0lBQ1hILFNBQVM7SUFDVG1CLFNBQVM7SUFDVFosT0FBTztJQUNQSyxpQkFBaUI7SUFDakJVLGNBQWM7SUFDZEMsUUFBUTtJQUNSbkIsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vZW1haWxzL25vdGlvbi1tYWdpYy1saW5rLnRzeD9kNDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRhaW5lcixcbiAgSGVhZCxcbiAgSGVhZGluZyxcbiAgSHRtbCxcbiAgSW1nLFxuICBMaW5rLFxuICBQcmV2aWV3LFxuICBUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBOb3Rpb25NYWdpY0xpbmtFbWFpbFByb3BzIHtcbiAgbG9naW5Db2RlPzogc3RyaW5nO1xufVxuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTFxuICA/IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gXG4gIDogJyc7XG5cbmV4cG9ydCBjb25zdCBOb3Rpb25NYWdpY0xpbmtFbWFpbCA9ICh7XG4gIGxvZ2luQ29kZSA9ICdzcGFyby1uZGlnby1hbXVydC1zZWNhbicsXG59OiBOb3Rpb25NYWdpY0xpbmtFbWFpbFByb3BzKSA9PiAoXG4gIDxIdG1sPlxuICAgIDxIZWFkIC8+XG4gICAgPFByZXZpZXc+TG9nIGluIHdpdGggdGhpcyBtYWdpYyBsaW5rPC9QcmV2aWV3PlxuICAgIDxCb2R5IHN0eWxlPXttYWlufT5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkaW5nIHN0eWxlPXtoMX0+TG9naW48L0hlYWRpbmc+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbm90aW9uLnNvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5saW5rLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDbGljayBoZXJlIHRvIGxvZyBpbiB3aXRoIHRoaXMgbWFnaWMgbGlua1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxUZXh0IHN0eWxlPXt7IC4uLnRleHQsIG1hcmdpbkJvdHRvbTogJzE0cHgnIH19PlxuICAgICAgICAgIE9yLCBjb3B5IGFuZCBwYXN0ZSB0aGlzIHRlbXBvcmFyeSBsb2dpbiBjb2RlOlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxjb2RlIHN0eWxlPXtjb2RlfT57bG9naW5Db2RlfTwvY29kZT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGV4dCxcbiAgICAgICAgICAgIGNvbG9yOiAnI2FiYWJhYicsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcxNHB4JyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBJZiB5b3UgZGlkbiZhcG9zO3QgdHJ5IHRvIGxvZ2luLCB5b3UgY2FuIHNhZmVseSBpZ25vcmUgdGhpcyBlbWFpbC5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50ZXh0LFxuICAgICAgICAgICAgY29sb3I6ICcjYWJhYmFiJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzhweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhpbnQ6IFlvdSBjYW4gc2V0IGEgcGVybWFuZW50IHBhc3N3b3JkIGluIFNldHRpbmdzICYgbWVtYmVycyDihpIgTXlcbiAgICAgICAgICBhY2NvdW50LlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy9ub3Rpb24tbG9nby5wbmdgfVxuICAgICAgICAgIHdpZHRoPVwiMzJcIlxuICAgICAgICAgIGhlaWdodD1cIjMyXCJcbiAgICAgICAgICBhbHQ9XCJOb3Rpb24ncyBMb2dvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgc3R5bGU9e2Zvb3Rlcn0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25vdGlvbi5zb1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4ubGluaywgY29sb3I6ICcjODk4OTg5JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5vdGlvbi5zb1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAsIHRoZSBhbGwtaW4tb25lLXdvcmtzcGFjZVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIGZvciB5b3VyIG5vdGVzLCB0YXNrcywgd2lraXMsIGFuZCBkYXRhYmFzZXMuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm9keT5cbiAgPC9IdG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aW9uTWFnaWNMaW5rRW1haWw7XG5cbmNvbnN0IG1haW4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBwYWRkaW5nTGVmdDogJzEycHgnLFxuICBwYWRkaW5nUmlnaHQ6ICcxMnB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbn07XG5cbmNvbnN0IGgxID0ge1xuICBjb2xvcjogJyMzMzMnLFxuICBmb250RmFtaWx5OlxuICAgIFwiLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlwiLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIG1hcmdpbjogJzQwcHggMCcsXG4gIHBhZGRpbmc6ICcwJyxcbn07XG5cbmNvbnN0IGxpbmsgPSB7XG4gIGNvbG9yOiAnIzI3NTRDNScsXG4gIGZvbnRGYW1pbHk6XG4gICAgXCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbn07XG5cbmNvbnN0IHRleHQgPSB7XG4gIGNvbG9yOiAnIzMzMycsXG4gIGZvbnRGYW1pbHk6XG4gICAgXCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIG1hcmdpbjogJzI0cHggMCcsXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG4gIGNvbG9yOiAnIzg5ODk4OScsXG4gIGZvbnRGYW1pbHk6XG4gICAgXCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgbWFyZ2luVG9wOiAnMTJweCcsXG4gIG1hcmdpbkJvdHRvbTogJzI0cHgnLFxufTtcblxuY29uc3QgY29kZSA9IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBhZGRpbmc6ICcxNnB4IDQuNSUnLFxuICB3aWR0aDogJzkwLjUlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjRmNCcsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgY29sb3I6ICcjMzMzJyxcbn07XG4iXSwibmFtZXMiOlsiQm9keSIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkaW5nIiwiSHRtbCIsIkltZyIsIkxpbmsiLCJQcmV2aWV3IiwiVGV4dCIsIlJlYWN0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiTm90aW9uTWFnaWNMaW5rRW1haWwiLCJsb2dpbkNvZGUiLCJzdHlsZSIsIm1haW4iLCJjb250YWluZXIiLCJoMSIsImhyZWYiLCJ0YXJnZXQiLCJsaW5rIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsInRleHQiLCJjb2RlIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZvb3RlciIsImJyIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./emails/notion-magic-link.tsx\n");

/***/ })

};
;