// ZipWith
export function zipWith (fn, a0, a1) {
  const smallerLengthArr = a0.length > a1.length ? a1 : a0
  return smallerLengthArr
    .map((v, i) => fn(a0[i], a1[i]))
}
