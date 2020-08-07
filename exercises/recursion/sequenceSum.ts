// Sequence sum
export function sequenceSum (begin: number, end: number, step: number): number {
  if (begin > end) return 0
  if (begin === end) return begin
  return begin + sequenceSum((begin + step), end, step)
}
