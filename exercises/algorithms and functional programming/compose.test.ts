import { compose } from './compose'

describe('Functional addition', () => {
  const a = function (x: number): number {
    const y = x * x
    return y
  }
  const b = function (x: number): number {
    const y = x + 5
    return y
  }
  const c = function (x: number): number {
    const y = x / 2
    return y
  }
  test('should be function', () => {
    expect((typeof compose(a, b, c))).toBe('function')
  })
  test('should return 72.25', () => {
    expect(compose(a, b, c)(7)).toBe(72.25)
  })
})
