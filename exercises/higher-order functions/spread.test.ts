import { spread } from './spread'

describe('Unpacking arguments', () => {
  const b = function (firstNum: number, secondNum: number, ThirdNum: number): number {
    return firstNum * secondNum * ThirdNum
  }
  test('should be 112', () => {
    expect((spread(b, [7, 8, 2]))).toBe(112)
  })
  test('should be NaN', () => {
    expect((spread(b, [[1, 2], 7, 8, 2]))).toBe(NaN)
  })
})
