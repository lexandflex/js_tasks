import { Singleton } from './singleton'

describe('Singleton', () => {
  const singleton1 = new Singleton()
  const singleton2 = new Singleton()
  test('should be equal', () => {
    expect(singleton1 === singleton2).toBe(true)
  })
  singleton1.name = 'Singleton'
  test('should be equal', () => {
    expect(singleton2.name).toBe('Singleton')
  })
})
