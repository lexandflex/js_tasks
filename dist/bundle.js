/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./exercises/tasks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./exercises/tasks.js":
/*!****************************!*\
  !*** ./exercises/tasks.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validators */ \"./utils/validators.js\");\n/* eslint-disable no-tabs */\r\n/* eslint-disable no-mixed-spaces-and-tabs */\r\n/* eslint-disable no-throw-literal */\r\n/* eslint-disable no-extend-native */\r\n/* eslint-disable curly */\r\n\r\n// --------------Arrays---------------\r\n\r\n// Arrays average sum\r\nfunction sumAverage (arr) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isTwoDimensionalArrayConsistOfNumbers\"])(arr)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  return Math.floor(\r\n    arr\r\n      .map((val) =>\r\n        val.reduce((acc, v) => acc + v / val.length, 0))\r\n      .reduce((acc, value) => acc + value, 0)\r\n  )\r\n}\r\n\r\n// Three maximum values sum\r\nfunction maxTripletSum (arr) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArrayConsistOfNumbers\"])(arr)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  const result = Array(3).fill(0)\r\n  result.map((v, i) => {\r\n    const maxEl = Math.max.apply(null, arr)\r\n    result[i] = maxEl\r\n    arr = arr.filter((value) => value !== maxEl)\r\n  })\r\n  return result.reduce((acc, v) => (acc += v), 0)\r\n}\r\n\r\n// Ыorting to the maximum value\r\nfunction biggest (nums) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(nums)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  return nums\r\n    .sort((a, b) => `${b}${a}`\r\n      .localeCompare(`${a}${b}`))\r\n    .join('')\r\n}\r\n\r\n// Shear combination\r\nfunction pattern (amount) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(amount)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const arr = Array.from({ length: amount }, (v, i) => i + 1)\r\n  const res = arr.map(() => {\r\n    arr.unshift(arr.pop())\r\n    return arr.join('')\r\n  })\r\n  return res.reverse()\r\n}\r\n\r\n// Arithmetic sequence-the sum of n elements\r\nfunction arithmeticSequenceSum (a, r, n) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(a, r, n)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const arr = new Array(n).fill(0)\r\n  return arr.map((elem, i) => a + r * i)\r\n  // return arr.reduce((acc, elem, i) => acc + a + r * i, 0)\r\n}\r\n\r\n// Diagonal matrix sum\r\nfunction diagonalSum (array) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArrayConsistOfNumbers\"])(array)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  return array.reduce((acc, v, i) => acc + v[i], 0)\r\n}\r\n\r\n// -----------------------------------------Strings---------------\r\n\r\n// Machine-readable names\r\nfunction toMachineName (name, separator) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsStringType\"])(name, separator)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const firstPoisiotn = +name.split('')[0]\r\n  if (!isNaN(firstPoisiotn))\r\n    name = name.slice(String(firstPoisiotn).length + 1, name.length)\r\n  const re = /[_\\W\\s*]/\r\n  return name\r\n    .split(re)\r\n    .map((n) => n)\r\n    .join(separator)\r\n    .toLowerCase()\r\n}\r\n\r\n// Сurrency format\r\nfunction formatCurrency (amount) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(amount)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  return (Math.trunc(amount * 100) / 100).toLocaleString()\r\n}\r\n\r\n// Alphabetized\r\nfunction alphabetized (text) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsStringType\"])(text)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const result = text\r\n    .split('')\r\n    .filter(\r\n      (symb) => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z')\r\n    )\r\n  return result\r\n    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))\r\n    .join('')\r\n}\r\n\r\n// Decode roman numbers\r\nfunction romanToNumber (number) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsStringType\"])(number)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const re = /[^IVXLCDM]/\r\n  if (re.exec(number) !== null) return new Error('Enter a Roman number')\r\n  const obj = {\r\n    I: 1,\r\n    V: 5,\r\n    X: 10,\r\n    L: 50,\r\n    C: 100,\r\n    D: 500,\r\n    M: 1000\r\n  }\r\n  return number\r\n    .split('')\r\n    .map((v) => obj[v])\r\n    .reduce((acc, val, i, arr) => acc + (arr[i + 1] > val ? -val : val), 0)\r\n}\r\n\r\n// Duplicates counter\r\nfunction countDuplicates (text) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsStringType\"])(text)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  const uniqValues = []\r\n  const repeatValues = []\r\n  text\r\n    .toLowerCase()\r\n    .split('')\r\n    .map((v) => {\r\n      if (!uniqValues.includes(v)) uniqValues.push(v)\r\n      else if (!repeatValues.includes(v)) repeatValues.push(v)\r\n    })\r\n  return repeatValues.length\r\n}\r\n\r\n// Replace letters in their positions\r\nfunction replaceWithAlphPositions (text) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsStringType\"])(text)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  return text\r\n    .toLowerCase()\r\n    .split('')\r\n    .filter((symb) => symb >= 'a' && symb <= 'z')\r\n    .map((v) => v.charCodeAt() - 96)\r\n    .join(' ')\r\n}\r\n\r\n// -----------Algorithms and functional programming----------------\r\n\r\n// Array splitting and sorting\r\nfunction flattenAndSort (arr) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isTwoDimensionalArrayConsistOfNumbers\"])(arr)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  return arr\r\n    .reduce((total, amount) => total.concat(amount), [])\r\n    .sort((a, b) => a - b)\r\n}\r\n\r\n// Functional addition\r\nfunction add (n) {\r\n  return function (num) {\r\n    const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(num)\r\n    if (typeof checkTypes === 'object') return checkTypes\r\n    return num + n\r\n  }\r\n}\r\n\r\n// Multiply all the elements of the array\r\nfunction multiplyAll (arr) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(arr)\r\n  if (typeof arrayCheck === 'object')\r\n    return function () {\r\n      return arrayCheck\r\n    }\r\n  return function (mult) {\r\n    const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(mult)\r\n    if (typeof checkTypes === 'object') return checkTypes\r\n    return arr.map((v) => v * mult)\r\n  }\r\n}\r\n\r\n// Unique values sum\r\nfunction uniqueSum (arr) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArrayConsistOfNumbers\"])(arr)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  const uniqueArr = []\r\n  arr.map((v) => {\r\n    if (!uniqueArr.includes(v)) uniqueArr.push(v)\r\n  })\r\n  return uniqueArr.reduce((acc, v) => acc + v, 0)\r\n}\r\n\r\n// Reduce\r\nfunction reduce (arr, callback, initialValue) {\r\n  return arr.map((v, i) => {\r\n    initialValue = callback(initialValue, v, i, arr)\r\n    return initialValue\r\n  })[arr.length - 1]\r\n}\r\n\r\n// Functional composition\r\nfunction f (x) {\r\n  return x + 1\r\n}\r\nfunction g (x) {\r\n  return x + 2\r\n}\r\nfunction h (x) {\r\n  return x * 3\r\n}\r\nfunction compose (...args) {\r\n  return function (a) {\r\n    return args.reduceRight((acc, fn) => fn(acc), a)\r\n  }\r\n}\r\n\r\n// ------Higher-order functions--------------\r\n\r\n// Unpacking arguments\r\nfunction spread (callback, arr) {\r\n  return callback.apply(this, arr)\r\n}\r\n\r\n// ZipWith\r\nfunction zipWith (fn, a0, a1) {\r\n  const smallerLengthArr = a0.length > a1.length ? a1 : a0\r\n  return smallerLengthArr\r\n    .map((v, i) => fn(a0[i], a1[i]))\r\n}\r\n\r\n// -----------Recursion------------------\r\n\r\n// Sequence sum\r\nfunction sequenceSum (begin, end, step) {\r\n  const checkTypes = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isAllArgsNumberType\"])(begin, end, step)\r\n  if (typeof checkTypes === 'object') return checkTypes\r\n  if (begin > end) return 0\r\n  else if (begin === end) return begin\r\n  return begin + sequenceSum((begin += step), end, step)\r\n}\r\n\r\n// Linked list in a row\r\nclass Node {\r\n  constructor (data, next = null) {\r\n    this.data = data\r\n    this.next = next\r\n  }\r\n}\r\n\r\nfunction stringify (list) {\r\n  try {\r\n    if (!(list instanceof Node)) throw 'Object of the Node class is expected'\r\n    if (list.next === null) return `${list.data} -> ${list.next}`\r\n    return `${list.data} -> ${stringify(list.next)}`\r\n  } catch (e) {\r\n    return new Error(e)\r\n  }\r\n}\r\n\r\n// -----------Classes and patterns-------------\r\n\r\n// Singleton\r\nclass Singleton {\r\n  constructor () {\r\n    if (!Singleton.instance) Singleton.instance = this\r\n    return Singleton.instance\r\n  }\r\n}\r\n\r\n// String expansion\r\nString.prototype.customUpperCase = function () {\r\n  return this.toUpperCase()\r\n}\r\n\r\n// ----------------------Sorting-------------------\r\n\r\n// Sorted object list\r\nfunction sortArr (list, sortBy) {\r\n  const arrayCheck = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(list)\r\n  if (typeof arrayCheck === 'object') return arrayCheck\r\n  return list.sort((a, b) => b[sortBy] - a[sortBy])\r\n}\r\n\n\n//# sourceURL=webpack:///./exercises/tasks.js?");

/***/ }),

/***/ "./utils/validators.js":
/*!*****************************!*\
  !*** ./utils/validators.js ***!
  \*****************************/
/*! exports provided: isTwoDimensionalArrayConsistOfNumbers, isArrayConsistOfNumbers, isAllArgsNumberType, isAllArgsStringType, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTwoDimensionalArrayConsistOfNumbers\", function() { return isTwoDimensionalArrayConsistOfNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayConsistOfNumbers\", function() { return isArrayConsistOfNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAllArgsNumberType\", function() { return isAllArgsNumberType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAllArgsStringType\", function() { return isAllArgsStringType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* eslint-disable no-throw-literal */\r\n\r\nfunction isTwoDimensionalArrayConsistOfNumbers (arr) {\r\n  try {\r\n    if (!Array.isArray(arr)) throw 'Array is expected'\r\n    arr.map((v) => {\r\n      if (!Array.isArray(v)) throw 'The array must consist of arrays'\r\n      if (v.some((v) => typeof v !== 'number')) { throw 'Nested arrays must consist of numbers' }\r\n    })\r\n  } catch (e) {\r\n    return new Error(e)\r\n  }\r\n}\r\n\r\nfunction isArrayConsistOfNumbers (arr) {\r\n  try {\r\n    if (!Array.isArray(arr)) throw 'Array is expected'\r\n    arr.map((v) => {\r\n      if (typeof v !== 'number') throw 'The array must consist of numbers'\r\n    })\r\n  } catch (e) {\r\n    return new Error(e)\r\n  }\r\n}\r\n\r\nfunction isAllArgsNumberType (...args) {\r\n  try {\r\n    if (args.some((v) => typeof v !== 'number')) { throw 'Incorrect data type: number is expected ' }\r\n  } catch (e) {\r\n    return new Error(e)\r\n  }\r\n}\r\n\r\nfunction isAllArgsStringType (...args) {\r\n  try {\r\n    if (args.some((v) => typeof v !== 'string')) { throw 'Incorrect data type: string is expected ' }\r\n  } catch (e) {\r\n    return new Error(e)\r\n  }\r\n}\r\n\r\nfunction isArray (arr) {\r\n  if (!Array.isArray(arr)) return new Error('Array is expected')\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./utils/validators.js?");

/***/ })

/******/ });