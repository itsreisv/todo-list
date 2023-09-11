/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\n\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ subDays)\n/* harmony export */ });\n/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ \"./node_modules/date-fns/esm/addDays/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name subDays\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the days subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * const result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\nfunction subDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyAmount);\n  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/subDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/add-task.js":
/*!*************************!*\
  !*** ./src/add-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteButton\": () => (/* binding */ deleteButton),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"editButton\": () => (/* binding */ editButton),\n/* harmony export */   \"editConfirm\": () => (/* binding */ editConfirm),\n/* harmony export */   \"sendTask\": () => (/* binding */ sendTask)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\n// Global\nlet defaultProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project('General');\nconsole.log(defaultProject)\n\n\nfunction addTask() {\n  const button = document.querySelector('.task-button');\n  button.addEventListener('click', () => {\n    const taskDiv = document.querySelector('.task-list');\n    const newDiv = document.createElement('div');\n    const title = document.createElement('h3')\n    const name = document.createElement('input')\n    const dueDate = document.createElement('input')\n    const confirmButton = document.createElement('button')\n    title.textContent = 'New Task'\n    newDiv.classList.add('input-modal');\n    confirmButton.classList.add('confirm')\n    confirmButton.textContent = 'Confirm'\n    name.classList.add('name-input')\n    name.setAttribute('type', 'text')\n    name.setAttribute('placeholder', 'Task Name')\n    dueDate.classList.add('date-input')\n    dueDate.setAttribute('type', 'date')\n    newDiv.appendChild(title)\n    newDiv.appendChild(name)\n    newDiv.appendChild(dueDate)\n    newDiv.appendChild(confirmButton)\n    taskDiv.insertBefore(newDiv, taskDiv.childNodes[1]);\n  })\n}\n\nfunction sendTask() {\n  document.addEventListener('click', () => {\n    const target = event.target.closest('.confirm');\n    const name = document.querySelector('.name-input');\n    const date = document.querySelector('.date-input');\n    const modal = document.querySelector('.input-modal')\n    if(target) {\n      let newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(name.value, date.value);\n      defaultProject.tasks.push(newTask)\n      console.log(defaultProject)\n      modal.remove()\n      displayTasks()\n    }\n  })\n}\n\nfunction displayTasks() {\n  //Make it so that the project always displays all of its tasks\n  let taskArray = defaultProject.tasks;\n  const taskList = document.querySelector('.task-list');\n  const newDiv = document.createElement('div');\n  const nameDiv = document.createElement('div');\n  const dateDiv = document.createElement('div');\n  const imgDiv = document.createElement('div');\n  const editBtn = document.createElement('button')\n  const deleteBtn = document.createElement('button')\n  const editImg = document.createElement('img')\n  const deleteImg = document.createElement('img')\n  nameDiv.classList.add('name-div')\n  dateDiv.classList.add('date-div')\n  imgDiv.classList.add('img-div')\n  newDiv.classList.add('tasks')\n  for (let i = 0; i < taskArray.length; i++) {\n    newDiv.setAttribute('id', i)\n  }\n  deleteBtn.classList.add('delete-button')\n  editBtn.classList.add('edit-button')\n  imgDiv.appendChild(editBtn)\n  imgDiv.appendChild(deleteBtn)\n  editBtn.appendChild(editImg)\n  deleteBtn.appendChild(deleteImg)\n  newDiv.appendChild(nameDiv)\n  newDiv.appendChild(dateDiv)\n  newDiv.appendChild(imgDiv)\n  taskList.insertBefore(newDiv, taskList.childNodes[1])\n\n  for (let i = 0; i < taskArray.length; i++) {\n    nameDiv.textContent = taskArray[i].name\n    dateDiv.textContent = taskArray[i].dueDate \n  }\n  editImg.src = '../src/images/edit.svg';\n  deleteImg.src = '../src/images/close.svg';\n}\n\nfunction deleteButton() {\n  document.addEventListener('click', () => {\n    const target = event.target.closest('.delete-button');\n    if (target) {\n      const parentElement = target.parentNode.parentNode;\n      const taskName = parentElement.childNodes[0].textContent;\n      parentElement.remove()\n      defaultProject.deleteTask(taskName)\n      }\n    })\n}\n\nfunction editButton() {\n  document.addEventListener('click', () => {\n    const target = event.target.closest('.edit-button');\n    if (target) {\n      const tasks = target.parentElement.parentElement\n      const oldName = tasks.childNodes[0];\n      const oldDate = tasks.childNodes[1]\n      oldName.textContent = '';\n      oldDate.textContent = '';\n      const newName = document.createElement('input');\n      const newDate = document.createElement('input');\n      const newConfirm = document.createElement('button');\n      newConfirm.classList.add('confirm-edit');\n      newConfirm.textContent = 'Confirm';\n      newName.setAttribute('type', 'text');\n      newDate.setAttribute('type', 'date')\n      newName.setAttribute('placeholder', 'New Task Name')\n      newDate.setAttribute('placeholder', 'New Task Date')\n      newName.classList.add('new-name');\n      newDate.classList.add('new-date')\n      oldName.appendChild(newName);\n      oldDate.appendChild(newDate);\n      oldName.appendChild(newConfirm)\n    }\n  })\n}\n\nfunction editConfirm() {\n  document.addEventListener('click', () => {\n    const target = event.target.closest('.confirm-edit');\n    if (target) {\n      const tasks = target.parentElement.parentElement;\n      const nameInput = document.querySelector('.new-name').value;\n      const dateInput = document.querySelector('.new-date').value;\n      tasks.childNodes[0].textContent = nameInput;\n      tasks.childNodes[1].textContent = dateInput;\n      defaultProject.tasks[tasks.id].setName(nameInput)\n      defaultProject.tasks[tasks.id].setDate(dateInput)\n      console.log(tasks.id)\n      console.log(defaultProject)\n    }\n  })\n}\n\n//# sourceURL=webpack://todo-list/./src/add-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-task */ \"./src/add-task.js\");\n\n\n\n\n\n(0,_add_task__WEBPACK_IMPORTED_MODULE_2__.addTask)();\n(0,_add_task__WEBPACK_IMPORTED_MODULE_2__.sendTask)();\n(0,_add_task__WEBPACK_IMPORTED_MODULE_2__.deleteButton)();\n(0,_add_task__WEBPACK_IMPORTED_MODULE_2__.editButton)();\n(0,_add_task__WEBPACK_IMPORTED_MODULE_2__.editConfirm)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/subDays/index.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setTasks(tasks) {\n    this.tasks = tasks;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  getTask(taskName) {\n    return this.tasks.find((task) => task.getName() ===taskName)\n  }\n\n  contains(taskName) {\n    return this.tasks.some((task) => task.getName() === taskName);\n  }\n\n  addTask(newTask) {\n    if (this.tasks.find((task) => task.getName() === newTask.name))\n    return this.tasks.push(newTask);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.name !== taskName)\n  }\n\n  getTasksToday() {\n    return this.tasks.filter((task) => {\n      const taskDate = new Date(task.getDateFormatted())\n      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskDate))\n    })\n  }\n\n  getTasksThisWeek() {\n    return this.tasks.filter((task) => {\n      const taskDate = new Date(task.getDateFormatted())\n      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskDate), 1))\n    })\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nclass Task {\n  constructor(name,dueDate) {\n    this.name = name;\n    this.dueDate = dueDate;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  getDate() {\n    return this.dueDate;\n  }\n\n  getDateFormatted() {\n    const day = this.dueDate.split('/')[0];\n    const month = this.dueDate.split('/')[1];\n    const year = this.dueDate.split('/')[2];\n    return `${month}/${day}/${year}`;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;