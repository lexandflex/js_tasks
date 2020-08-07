// Three maximum values sum
export function maxTripletSum (arr: Array<number>): number {
  let copyArr = arr.slice()
  const result = Array.from({ length: 3 }, (value, index) => index + 1)
  result.forEach((value, index) => {
    const maxEl = Math.max.apply(null, copyArr)
    result[index] = maxEl
    copyArr = copyArr.filter(elem => elem !== maxEl)
  })
  return result.reduce((acc, v) => acc + v, 0)
}
