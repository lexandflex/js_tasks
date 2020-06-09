/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-throw-literal */
/* eslint-disable no-extend-native */
/* eslint-disable curly */
import { isTwoDimensionalArrayConsistOfNumbers, isArrayConsistOfNumbers, isAllArgsNumberType, isAllArgsStringType, isArray } from '../utils/validators'
// --------------Arrays---------------

// Arrays average sum
function sumAverage (arr) {
  const arrayCheck = isTwoDimensionalArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  return Math.floor(
    arr
      .map((val) =>
        val.reduce((acc, v) => acc + v / val.length, 0))
      .reduce((acc, value) => acc + value, 0)
  )
}

// Three maximum values sum
function maxTripletSum (arr) {
  const arrayCheck = isArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  const result = Array(3).fill(0)
  result.map((v, i) => {
    const maxEl = Math.max.apply(null, arr)
    result[i] = maxEl
    arr = arr.filter((value) => value !== maxEl)
  })
  return result.reduce((acc, v) => (acc += v), 0)
}

// Ыorting to the maximum value
function biggest (nums) {
  const arrayCheck = isArray(nums)
  if (typeof arrayCheck === 'object') return arrayCheck
  return nums
    .sort((a, b) => `${b}${a}`
      .localeCompare(`${a}${b}`))
    .join('')
}

// Shear combination
function pattern (amount) {
  const checkTypes = isAllArgsNumberType(amount)
  if (typeof checkTypes === 'object') return checkTypes
  const arr = Array.from({ length: amount }, (v, i) => i + 1)
  const res = arr.map(() => {
    arr.unshift(arr.pop())
    return arr.join('')
  })
  return res.reverse()
}

// Arithmetic sequence-the sum of n elements
function arithmeticSequenceSum (a, r, n) {
  const checkTypes = isAllArgsNumberType(a, r, n)
  if (typeof checkTypes === 'object') return checkTypes
  const arr = new Array(n).fill(0)
  return arr.map((elem, i) => a + r * i)
  // return arr.reduce((acc, elem, i) => acc + a + r * i, 0)
}

// Diagonal matrix sum
function diagonalSum (array) {
  const arrayCheck = isArrayConsistOfNumbers(array)
  if (typeof arrayCheck === 'object') return arrayCheck
  return array.reduce((acc, v, i) => acc + v[i], 0)
}

// -----------------------------------------Strings---------------

// Machine-readable names
function toMachineName (name, separator) {
  const checkTypes = isAllArgsStringType(name, separator)
  if (typeof checkTypes === 'object') return checkTypes
  const firstPoisiotn = +name.split('')[0]
  if (!isNaN(firstPoisiotn))
    name = name.slice(String(firstPoisiotn).length + 1, name.length)
  const re = /[_\W\s*]/
  return name
    .split(re)
    .map((n) => n)
    .join(separator)
    .toLowerCase()
}

// Сurrency format
function formatCurrency (amount) {
  const checkTypes = isAllArgsNumberType(amount)
  if (typeof checkTypes === 'object') return checkTypes
  return (Math.trunc(amount * 100) / 100).toLocaleString()
}

// Alphabetized
function alphabetized (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  const result = text
    .split('')
    .filter(
      (symb) => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z')
    )
  return result
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .join('')
}

// Decode roman numbers
function romanToNumber (number) {
  const checkTypes = isAllArgsStringType(number)
  if (typeof checkTypes === 'object') return checkTypes
  const re = /[^IVXLCDM]/
  if (re.exec(number) !== null) return new Error('Enter a Roman number')
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  return number
    .split('')
    .map((v) => obj[v])
    .reduce((acc, val, i, arr) => acc + (arr[i + 1] > val ? -val : val), 0)
}

// Duplicates counter
function countDuplicates (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  const uniqValues = []
  const repeatValues = []
  text
    .toLowerCase()
    .split('')
    .map((v) => {
      if (!uniqValues.includes(v)) uniqValues.push(v)
      else if (!repeatValues.includes(v)) repeatValues.push(v)
    })
  return repeatValues.length
}

// Replace letters in their positions
function replaceWithAlphPositions (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  return text
    .toLowerCase()
    .split('')
    .filter((symb) => symb >= 'a' && symb <= 'z')
    .map((v) => v.charCodeAt() - 96)
    .join(' ')
}

// -----------Algorithms and functional programming----------------

// Array splitting and sorting
function flattenAndSort (arr) {
  const arrayCheck = isTwoDimensionalArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  return arr
    .reduce((total, amount) => total.concat(amount), [])
    .sort((a, b) => a - b)
}

// Functional addition
function add (n) {
  return function (num) {
    const checkTypes = isAllArgsNumberType(num)
    if (typeof checkTypes === 'object') return checkTypes
    return num + n
  }
}

// Multiply all the elements of the array
function multiplyAll (arr) {
  const arrayCheck = isArray(arr)
  if (typeof arrayCheck === 'object')
    return function () {
      return arrayCheck
    }
  return function (mult) {
    const checkTypes = isAllArgsNumberType(mult)
    if (typeof checkTypes === 'object') return checkTypes
    return arr.map((v) => v * mult)
  }
}

// Unique values sum
function uniqueSum (arr) {
  const arrayCheck = isArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  const uniqueArr = []
  arr.map((v) => {
    if (!uniqueArr.includes(v)) uniqueArr.push(v)
  })
  return uniqueArr.reduce((acc, v) => acc + v, 0)
}

// Reduce
function reduce (arr, callback, initialValue) {
  return arr.map((v, i) => {
    initialValue = callback(initialValue, v, i, arr)
    return initialValue
  })[arr.length - 1]
}

// Functional composition
function f (x) {
  return x + 1
}
function g (x) {
  return x + 2
}
function h (x) {
  return x * 3
}
function compose (...args) {
  return function (a) {
    return args.reduceRight((acc, fn) => fn(acc), a)
  }
}

// ------Higher-order functions--------------

// Unpacking arguments
function spread (callback, arr) {
  return callback.apply(this, arr)
}

// ZipWith
function zipWith (fn, a0, a1) {
  const smallerLengthArr = a0.length > a1.length ? a1 : a0
  return smallerLengthArr
    .map((v, i) => fn(a0[i], a1[i]))
}

// -----------Recursion------------------

// Sequence sum
function sequenceSum (begin, end, step) {
  const checkTypes = isAllArgsNumberType(begin, end, step)
  if (typeof checkTypes === 'object') return checkTypes
  if (begin > end) return 0
  else if (begin === end) return begin
  return begin + sequenceSum((begin += step), end, step)
}

// Linked list in a row
class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

function stringify (list) {
  try {
    if (!(list instanceof Node)) throw 'Object of the Node class is expected'
    if (list.next === null) return `${list.data} -> ${list.next}`
    return `${list.data} -> ${stringify(list.next)}`
  } catch (e) {
    return new Error(e)
  }
}

// -----------Classes and patterns-------------

// Singleton
class Singleton {
  constructor () {
    if (!Singleton.instance) Singleton.instance = this
    return Singleton.instance
  }
}

// String expansion
String.prototype.customUpperCase = function () {
  return this.toUpperCase()
}

// ----------------------Sorting-------------------

// Sorted object list
function sortArr (list, sortBy) {
  const arrayCheck = isArray(list)
  if (typeof arrayCheck === 'object') return arrayCheck
  return list.sort((a, b) => b[sortBy] - a[sortBy])
}
