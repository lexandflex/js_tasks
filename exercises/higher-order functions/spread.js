// Unpacking arguments
export function spread (callback, arr) {
  return callback.apply(this, arr)
}
