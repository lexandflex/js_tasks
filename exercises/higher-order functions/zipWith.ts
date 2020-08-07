// ZipWith
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function zipWith (fn: (...args: any) => any, a0: Array<any>, a1: Array<any>): Array<any> {
  return Array
    .from({ length: Math.min(a0.length, a1.length) }, (value, index) => fn(a0[index], a1[index]))
}
