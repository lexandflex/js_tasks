// ZipWith
export function zipWith (fn, a0, a1) {
  return Array
    .from({ length: Math.min(a0.length, a1.length) }, (value, index) => fn(a0[index], a1[index]))
}
