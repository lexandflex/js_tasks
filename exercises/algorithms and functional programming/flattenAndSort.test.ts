import { flattenAndSort } from './flattenAndSort'

describe('Array splitting and sorting', () => {
  test('should be true', () => {
    expect((Array.isArray(flattenAndSort([[5, 1, 8], [3, 6, 3, 1, 2]])))).toBeTruthy()
  })
  test('should return result array', () => {
    const result = [1, 1, 2, 3, 3, 5, 6, 8]
    expect(flattenAndSort([[5, 1, 8], [], [3, 6, 3, 1, 2]])).toEqual(result)
  })
  test('should  return result array', () => {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toEqual(result)
  })
})
