import { uniqueSum } from './uniqueSum'

let testArr
beforeEach(() => {
  testArr = [3, 6, 3, 1, 2]
})

describe('Unique values sum', () => {
  test('should be number', () => {
    expect((typeof uniqueSum(testArr))).toBe('number')
  })
  test('should return 12', () => {
    expect(uniqueSum(testArr)).toBe(12)
  })
})
