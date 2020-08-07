import { reduce, reduceByFor } from './reduce'

describe('reduce', () => {
  test('should return 120', () => {
    expect(reduce([1, 2, 3, 4, 5], (acc, value) => acc * value, 1)).toBe(120)
  })
  test('should be 15', () => {
    expect(reduceByFor([1, 2, 3, 4, 5], (acc, value) => acc + value, 0)).toBe(15)
  })
  test('should return the same array', () => {
    expect(reduce([['4', '2', '5'], [3, 5, 7]], (acc, value, index) => {
      acc[index] = value
      return acc
    }, [])).toEqual([['4', '2', '5'], [3, 5, 7]])
  })
  test('should return object with array index keys +1 and array values', () => {
    const result = {
      1: 'H',
      2: 'e',
      3: 'l',
      4: 'l',
      5: 'o',
    }
    expect(reduceByFor(['H', 'e', 'l', 'l', 'o'], (acc, value, index) => {
      acc[`${index + 1}`] = value
      return acc
    }, {})).toStrictEqual(result)
  })
})
