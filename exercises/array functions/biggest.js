import { isArray } from '../../utils/validators'

// Sorting to the maximum value
export function biggest (nums) {
  const arrayCheck = isArray(nums)
  if (typeof arrayCheck === 'object') return arrayCheck
  return nums
    .sort((a, b) => `${b}${a}`
      .localeCompare(`${a}${b}`))
    .join('')
}
