/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Reduce by map
export function reduce (arr: Array<any>, callback: (...args: any) => any, initialValue: any): any {
  let initVal = initialValue
  return arr.map((value, index) => {
    initVal = callback(initVal, value, index, arr)
    return initVal
  })[arr.length - 1]
}
// Reduce by for
export function reduceByFor (arr: Array<any>, callback: (...args: any) => any, initialValue: any): any {
  const resultArr = []
  let initVal = initialValue
  for (let i = 0; i < arr.length; i += 1) {
    initVal = callback(initVal, arr[i], i, arr)
    resultArr.push(initVal)
  }
  return resultArr[resultArr.length - 1]
}
