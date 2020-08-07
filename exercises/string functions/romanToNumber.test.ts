import { romanToNumber } from './romanToNumber'

describe('Decode roman numbers', () => {
  test('should return NaN', () => {
    expect(romanToNumber('VVVV1')).toBeNaN()
  })
  test('should return 1517', () => {
    expect(romanToNumber('MDXVII')).toBe(1517)
  })
  test('should return 1509', () => {
    expect(romanToNumber('MDIX')).toBe(1509)
  })
  test('should be number', () => {
    expect(typeof romanToNumber('Hello')).toEqual('number')
  })
})
