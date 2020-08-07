import { Singleton } from './singleton'

describe('Singleton', () => {
  const o1 = new Singleton()
  const o2 = new Singleton()
  test('should be equal', () => {
    expect(o1 === o2).toBe(true)
  })
  o1.name = 'Singleton'
  test('should be equal', () => {
    expect(o2.name).toBe('Singleton')
  })
})
