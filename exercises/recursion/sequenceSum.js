import { isAllArgsNumberType } from '../../utils/validators'

// Sequence sum
export function sequenceSum (begin, end, step) {
  if (isAllArgsNumberType(begin, end, step)) {
    if (begin > end) return 0
    else if (begin === end) return begin
    return begin + sequenceSum((begin += step), end, step)
  } else return new Error('All args should be a number type')
}
