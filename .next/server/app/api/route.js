/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_LENOVO_Desktop_Project_ToDoApp_todo_next_app_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.js */ \"(rsc)/./app/api/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Project\\\\ToDoApp\\\\todo-next-app\\\\app\\\\api\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_LENOVO_Desktop_Project_ToDoApp_todo_next_app_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMRU5PVk8lNUNEZXNrdG9wJTVDUHJvamVjdCU1Q1RvRG9BcHAlNUN0b2RvLW5leHQtYXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNMRU5PVk8lNUNEZXNrdG9wJTVDUHJvamVjdCU1Q1RvRG9BcHAlNUN0b2RvLW5leHQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTEVOT1ZPXFxcXERlc2t0b3BcXFxcUHJvamVjdFxcXFxUb0RvQXBwXFxcXHRvZG8tbmV4dC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxMRU5PVk9cXFxcRGVza3RvcFxcXFxQcm9qZWN0XFxcXFRvRG9BcHBcXFxcdG9kby1uZXh0LWFwcFxcXFxhcHBcXFxcYXBpXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/route.js":
/*!**************************!*\
  !*** ./app/api/route.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/TodoModel */ \"(rsc)/./lib/models/TodoModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst LoadDB = async ()=>{\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n};\nLoadDB();\nasync function GET(request) {\n    const todos = await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        todos: todos\n    });\n}\nasync function POST(request) {\n    const { title, description } = await request.json();\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        title,\n        description\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Created\"\n    });\n}\nasync function DELETE(request) {\n    const mongoId = await request.nextUrl.searchParams.get('mongoId');\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(mongoId);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Deleted\"\n    });\n}\nasync function PUT(request) {\n    const mongoId = await request.nextUrl.searchParams.get('mongoId');\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(mongoId, {\n        $set: {\n            isCompleted: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Completed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDRztBQUNKO0FBRzNDLE1BQU1HLFNBQVM7SUFDWCxNQUFNSCx5REFBU0E7QUFDbkI7QUFFQUc7QUFFTyxlQUFlQyxJQUFJQyxPQUFPO0lBQzdCLE1BQU1DLFFBQVEsTUFBTUwsNkRBQVNBLENBQUNNLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0YsT0FBTUE7SUFBSztBQUN6QztBQUVPLGVBQWVHLEtBQUtKLE9BQU87SUFDOUIsTUFBTSxFQUFDSyxLQUFLLEVBQUNDLFdBQVcsRUFBQyxHQUFHLE1BQU1OLFFBQVFHLElBQUk7SUFDOUMsTUFBTVAsNkRBQVNBLENBQUNXLE1BQU0sQ0FBQztRQUNuQkY7UUFDQUM7SUFDSjtJQUNBLE9BQU9ULHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0ssS0FBSTtJQUFjO0FBQ2hEO0FBRU8sZUFBZUMsT0FBT1QsT0FBTztJQUNoQyxNQUFNVSxVQUFVLE1BQU1WLFFBQVFXLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDdkQsTUFBTWpCLDZEQUFTQSxDQUFDa0IsaUJBQWlCLENBQUNKO0lBQ2xDLE9BQU9iLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0ssS0FBSTtJQUFjO0FBQ2hEO0FBRU8sZUFBZU8sSUFBSWYsT0FBTztJQUM3QixNQUFNVSxVQUFVLE1BQU1WLFFBQVFXLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDdkQsTUFBTWpCLDZEQUFTQSxDQUFDb0IsaUJBQWlCLENBQUNOLFNBQVE7UUFDeENPLE1BQUs7WUFDSEMsYUFBWTtRQUNkO0lBQ0Y7SUFDQSxPQUFPckIscURBQVlBLENBQUNNLElBQUksQ0FBQztRQUFDSyxLQUFJO0lBQWdCO0FBQ2xEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcUHJvamVjdFxcVG9Eb0FwcFxcdG9kby1uZXh0LWFwcFxcYXBwXFxhcGlcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3REQiB9IGZyb20gXCJAL2xpYi9jb25maWcvZGJcIjtcclxuaW1wb3J0IFRvZG9Nb2RlbCBmcm9tIFwiQC9saWIvbW9kZWxzL1RvZG9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcblxyXG5jb25zdCBMb2FkREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBDb25uZWN0REIoKTtcclxufVxyXG5cclxuTG9hZERCKCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgVG9kb01vZGVsLmZpbmQoe30pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHt0b2Rvczp0b2Rvc30pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IHt0aXRsZSxkZXNjcmlwdGlvbn0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGF3YWl0IFRvZG9Nb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttc2c6XCJUb2RvIENyZWF0ZWRcIn0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xyXG4gICAgY29uc3QgbW9uZ29JZCA9IGF3YWl0IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdtb25nb0lkJyk7XHJcbiAgICBhd2FpdCBUb2RvTW9kZWwuZmluZEJ5SWRBbmREZWxldGUobW9uZ29JZCk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21zZzpcIlRvZG8gRGVsZXRlZFwifSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCkge1xyXG4gICAgY29uc3QgbW9uZ29JZCA9IGF3YWl0IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdtb25nb0lkJyk7XHJcbiAgICBhd2FpdCBUb2RvTW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUobW9uZ29JZCx7XHJcbiAgICAgICRzZXQ6e1xyXG4gICAgICAgIGlzQ29tcGxldGVkOnRydWVcclxuICAgICAgfSAgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bXNnOlwiVG9kbyBDb21wbGV0ZWRcIn0pO1xyXG59Il0sIm5hbWVzIjpbIkNvbm5lY3REQiIsIlRvZG9Nb2RlbCIsIk5leHRSZXNwb25zZSIsIkxvYWREQiIsIkdFVCIsInJlcXVlc3QiLCJ0b2RvcyIsImZpbmQiLCJqc29uIiwiUE9TVCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGUiLCJtc2ciLCJERUxFVEUiLCJtb25nb0lkIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsImZpbmRCeUlkQW5kRGVsZXRlIiwiUFVUIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkc2V0IiwiaXNDb21wbGV0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect('mongodb+srv://thisaranialoka7:thisarani11636@cluster0.6o4b0.mongodb.net/todo-app');\n    console.log(\"DB Connected\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxZQUFZO0lBQ3JCLE1BQU1ELHVEQUFnQixDQUFDO0lBQ3ZCRyxRQUFRQyxHQUFHLENBQUM7QUFDaEIsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxMRU5PVk9cXERlc2t0b3BcXFByb2plY3RcXFRvRG9BcHBcXHRvZG8tbmV4dC1hcHBcXGxpYlxcY29uZmlnXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL3RoaXNhcmFuaWFsb2thNzp0aGlzYXJhbmkxMTYzNkBjbHVzdGVyMC42bzRiMC5tb25nb2RiLm5ldC90b2RvLWFwcCcpO1xyXG4gICAgY29uc29sZS5sb2coXCJEQiBDb25uZWN0ZWRcIilcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/TodoModel.js":
/*!*********************************!*\
  !*** ./lib/models/TodoModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    isCompleted: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamp: true\n});\nconst TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1RvZG9Nb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFaEQsTUFBTUMsU0FBUyxJQUFJRixTQUFTRSxNQUFNLENBQUM7SUFDL0JDLE9BQU07UUFDSEMsTUFBS0M7UUFDSkMsVUFBUztJQUNiO0lBQ0FDLGFBQVk7UUFDUkgsTUFBS0M7UUFDTEMsVUFBUztJQUNiO0lBQ0FFLGFBQVk7UUFDVEosTUFBS0s7UUFDTFYsU0FBUTtJQUNYO0FBQ0osR0FBRTtJQUNFVyxXQUFVO0FBQ2Q7QUFFQSxNQUFNQyxZQUFZWCxTQUFTWSxNQUFNLENBQUNDLElBQUksSUFBR2IsU0FBU2MsS0FBSyxDQUFDLFFBQU9aO0FBRS9ELGlFQUFlUyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcUHJvamVjdFxcVG9Eb0FwcFxcdG9kby1uZXh0LWFwcFxcbGliXFxtb2RlbHNcXFRvZG9Nb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGlzQ29tcGxldGVkOntcclxuICAgICAgIHR5cGU6Qm9vbGVhbixcclxuICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgIH1cclxufSx7XHJcbiAgICB0aW1lc3RhbXA6dHJ1ZVxyXG59KVxyXG5cclxuY29uc3QgVG9kb01vZGVsID0gbW9uZ29vc2UubW9kZWxzLnRvZG98fCBtb25nb29zZS5tb2RlbCgndG9kbycsU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Nb2RlbDsiXSwibmFtZXMiOlsiZGVmYXVsdCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJpc0NvbXBsZXRlZCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXAiLCJUb2RvTW9kZWwiLCJtb2RlbHMiLCJ0b2RvIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/TodoModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLENOVO%5CDesktop%5CProject%5CToDoApp%5Ctodo-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();