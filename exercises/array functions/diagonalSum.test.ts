import { diagonalSum } from './diagonalSum'

describe('Diagonal matrix sum', () => {
  test('Should return 15', () => {
    const array = [
      [5, 9, 1, 0],
      [8, 7, 2, 3],
      [1, 4, 1, 9],
      [2, 3, 8, 2],
    ]
    expect(diagonalSum(array)).toBe(15)
  })
  test('Should return 0', () => {
    const array = [
      [5, 9, 1, 0],
      [8, -30, 2, 3],
      [1, 4, 1, 9],
      [2, 3, 8, 2, 8],
    ]
    expect(diagonalSum(array)).toBe(-22)
  })
  test('Should return NaN', () => {
    const array = [
      [],
    ]
    expect(diagonalSum(array)).toBeNaN()
  })
  test('Should return number', () => {
    const array = [
      [],
    ]
    expect(typeof diagonalSum(array)).toBe('number')
  })
})
