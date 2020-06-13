import { isAllArgsFunctions } from '../../utils/validators'

// Functional composition
export function compose (...args) {
  if (isAllArgsFunctions(...args)) {
    return function (a) {
      return args.reduceRight((acc, func) => func(acc), a)
    }
  } else {
    return function () {
      return new Error('All args must be functions')
    }
  }
}
