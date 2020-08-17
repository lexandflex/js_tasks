import { compose } from './compose'

describe('Functional addition', () => {
  const mult = function (x: number): number {
    const y = x * x
    return y
  }
  const add5 = function (x: number): number {
    const y = x + 5
    return y
  }
  const div2 = function (x: number): number {
    const y = x / 2
    return y
  }
  test('should be function', () => {
    expect((typeof compose(mult, add5, div2))).toBe('function')
  })
  test('should return 72.25', () => {
    expect(compose(mult, add5, div2)(7)).toBe(72.25)
  })
})
