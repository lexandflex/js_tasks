// Functional composition
export function compose (...args) {
  return function (a) {
    return args.reduceRight((acc, func) => func(acc), a)
  }
}
