import { zipWith } from './zipWith'

describe('Unpacking arguments', () => {
  test('should be [7, 12]', () => {
    expect(zipWith(Math.max, [1, 12], [7, 8])).toEqual([7, 12])
  })
  test('should be [7, 12]', () => {
    expect(zipWith(Math.max, [1, '12'], [7, 8, 9, 12, 16])).toEqual([7, 12])
  })
  test('should be NaN', () => {
    expect(Array.isArray(zipWith(Math.max, [1, 12], [7, 8]))).toBe(true)
  })
})
