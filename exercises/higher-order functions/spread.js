// Unpacking arguments
export function spread (callback, arr) {
  if (!Array.isArray(arr)) {
    return new Error(arr + ' is not an array')
  }
  if (typeof callback !== 'function') {
    return new Error(callback + ' is not a function')
  }
  return callback.apply(this, arr)
}
