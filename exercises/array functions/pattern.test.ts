import { pattern } from './pattern'

describe('Sum of the 3 biggest nums', () => {
  test('should return result array', () => {
    const result = ['12345', '23451', '34512', '45123', '51234']
    expect(pattern(5)).toEqual(result)
  })
  test('length should be 3', () => {
    expect(pattern(3).length).toBe(3)
  })
  test('should be an array', () => {
    expect(Array.isArray(pattern(3))).toBe(true)
  })
})
