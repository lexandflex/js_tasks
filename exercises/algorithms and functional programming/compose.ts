/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Functional composition
export function compose (...args: Array<(...args: any) => any>) {
  return function (a: any): any {
    return args.reduceRight((acc, func) => func(acc), a)
  }
}
