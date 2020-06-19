// Reduce by map
export function reduce (arr, callback, initialValue) {
  return arr.map((value, index) => {
    initialValue = callback(initialValue, value, index, arr)
    return initialValue
  })[arr.length - 1]
}

// Reduce by for
export function reduceByFor (arr, callback, initialValue) {
  const resultArr = []
  for (let i = 0; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i], i, arr)
    resultArr.push(initialValue)
  }
  return resultArr[resultArr.length - 1]
}

// Reduce by for in
export function reduceByForIn (arr, callback, initialValue) {
  const resultArr = []
  for (const key in arr) {
    initialValue = callback(initialValue, arr[key], key, arr)
    resultArr.push(initialValue)
  }
  return resultArr[resultArr.length - 1]
}
