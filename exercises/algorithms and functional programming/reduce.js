// Reduce by map
export function reduce (arr, callback, initialValue) {
  if (!Array.isArray(arr)) {
    return new Error(arr + ' is not an array')
  }
  if (typeof callback !== 'function') {
    return new Error(callback + ' is not a function')
  }
  return arr.map((value, index) => {
    initialValue = callback(initialValue, value, index, arr)
    return initialValue
  })[arr.length - 1]
}

// // Reduce by for
// export function reduce2 (arr, callback, initialValue) {
//   const resultArr = []
//   for (let i = 0; i < arr.length; i++) {
//     initialValue = callback(initialValue, arr[i], i, arr)
//     resultArr.push(initialValue)
//   }
//   return resultArr[resultArr.length - 1]
// }

// // Reduce by for in
// export function reduce3 (arr, callback, initialValue) {
//   const resultArr = []
//   for (const key in arr) {
//     initialValue = callback(initialValue, arr[key], key, arr)
//     resultArr.push(initialValue)
//   }
//   return resultArr[resultArr.length - 1]
// }
