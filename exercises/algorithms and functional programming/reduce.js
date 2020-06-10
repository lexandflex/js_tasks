// Reduce
export function reduce (arr, callback, initialValue) {
  return arr.map((v, i) => {
    initialValue = callback(initialValue, v, i, arr)
    return initialValue
  })[arr.length - 1]
}
