import { uniqueSum } from './uniqueSum'

let check
beforeEach(() => {
  check = [3, 6, 3, 1, 2]
})

describe('Unique values sum', () => {
  test('should be number', () => {
    expect((typeof uniqueSum(check))).toBe('number')
  })
  test('should return 12', () => {
    expect(uniqueSum(check)).toBe(12)
  })
})
