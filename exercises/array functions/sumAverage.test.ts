import { sumAverage } from './sumAverage'

describe('Arrays average sum', () => {
  test('should return 7', () => {
    expect(sumAverage([[3, 2, 6, 8, 2, 3], [3, 9, 12, -7, 0]])).toBe(7)
  })
  test('should be 3', () => {
    expect(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]])).toBe(3)
  })
  test('', () => {
    expect(typeof sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]])).toEqual('number')
  })
})
