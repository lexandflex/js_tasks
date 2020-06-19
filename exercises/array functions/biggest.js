// Sorting to the maximum value
export function biggest (nums) {
  return nums
    .sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`))
    .join('')
}
