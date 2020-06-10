// Functional composition
export function compose (...args) {
  return function (a) {
    return args.reduceRight((acc, fn) => fn(acc), a)
  }
}
