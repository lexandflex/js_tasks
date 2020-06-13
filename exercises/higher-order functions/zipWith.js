// ZipWith
export function zipWith (fn, a0, a1) {
  if (!Array.isArray(a0)) {
    return new Error(a0 + ' is not an array')
  }
  if (!Array.isArray(a1)) {
    return new Error(a1 + ' is not an array')
  }
  if (typeof fn !== 'function') {
    return new Error(fn + ' is not a function')
  }
  const smallerLengthArr = a0.length > a1.length ? a1 : a0
  return smallerLengthArr
    .map((value, index) => fn(a0[index], a1[index]))
}
