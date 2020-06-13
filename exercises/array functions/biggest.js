// Sorting to the maximum value
import { isArrayConsistOfNumbers } from '../../utils/validators'
export function biggest (nums) {
  if (isArrayConsistOfNumbers(nums)) {
    return nums
      .sort((a, b) => `${b}${a}`
        .localeCompare(`${a}${b}`))
      .join('')
  } else return new Error('Array should consist of numbers')
}
