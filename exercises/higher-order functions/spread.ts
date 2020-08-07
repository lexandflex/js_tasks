// Unpacking arguments
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function spread (callback: (...args: any) => any, arr:Array<any>): any {
  return callback.apply(this, arr)
}
