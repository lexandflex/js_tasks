import { spread } from './spread'

describe('Unpacking arguments', () => {
  const mult = function (firstNum: number, secondNum: number, ThirdNum: number): number {
    return firstNum * secondNum * ThirdNum
  }
  test('should be 112', () => {
    expect((spread(mult, [7, 8, 2]))).toBe(112)
  })
  test('should be NaN', () => {
    expect((spread(mult, [[1, 2], 7, 8, 2]))).toBe(NaN)
  })
})
