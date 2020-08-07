import './customUpperCase'

describe('String expansion', () => {
  test('should be toUpperCase', () => {
    expect('str123'.customUpperCase()).toBe('STR123')
  })
  test('should be equal', () => {
    expect(''.customUpperCase()).toBe('')
  })
})
