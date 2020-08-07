import { multiplyAll } from './multiplyAll'

describe('Functional addition', () => {
  test('should be function', () => {
    expect((typeof multiplyAll([3, 7, 8]))).toBe('function')
  })
  test('should return result array', () => {
    const result = [2, 4, 6]
    expect(multiplyAll([1, 2, 3])(2)).toEqual(result)
  })
})
