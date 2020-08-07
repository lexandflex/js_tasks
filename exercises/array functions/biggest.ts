// Sorting to the maximum value
export function biggest (nums: Array<number>): string {
  return nums
    .sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`))
    .join('')
}
