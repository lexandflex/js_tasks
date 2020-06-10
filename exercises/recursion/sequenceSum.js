// Sequence sum
export function sequenceSum (begin, end, step) {
  const checkTypes = isAllArgsNumberType(begin, end, step)
  if (typeof checkTypes === 'object') return checkTypes
  if (begin > end) return 0
  else if (begin === end) return begin
  return begin + sequenceSum((begin += step), end, step)
}
