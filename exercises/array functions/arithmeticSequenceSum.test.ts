import { arithmeticSequenceSum } from './arithmeticSequenceSum'

describe('Arithmetic sequence-the sum of n elements', () => {
  test('Should return 40', () => {
    expect(arithmeticSequenceSum(2, 3, 5)).toBe(40)
  })
  test('Should return 0', () => {
    expect(arithmeticSequenceSum(2, 3, -3)).toBe(0)
  })
  test('Should return -40', () => {
    expect(arithmeticSequenceSum(-2, -3, 5)).toBe(-40)
  })
  test('Should return number', () => {
    expect(typeof arithmeticSequenceSum(-2, -3, 5)).toBe('number')
  })
})
