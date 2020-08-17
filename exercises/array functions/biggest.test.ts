import { biggest } from './biggest'

describe('Sorting to the maximum value', () => {
  test('Should return 532', () => {
    expect(biggest([2, 3, 5])).toEqual('532')
  })
  test('Should be string', () => {
    expect(typeof biggest([2, 3, 367])).toBe('string')
  })
  test('Should return 36732', () => {
    expect(biggest([2, 3, 367, 9, 0.05])).toBe('9367320.05')
  })
  test('Should return 321', () => {
    expect(biggest([1, 2, 3])).toBe('321')
  })
  test('Should return 9534330', () => {
    expect(biggest([3, 30, 34, 5, 9])).toBe('9534330')
  })
})
