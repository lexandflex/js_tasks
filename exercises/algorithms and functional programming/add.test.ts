import { add } from './add'

describe('Functional addition', () => {
  test('should be function', () => {
    expect((typeof add(5))).toBe('function')
  })
  test('should return 12', () => {
    expect(add(5)(7)).toBe(12)
  })
})
