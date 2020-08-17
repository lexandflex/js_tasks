import { Node, stringify } from './stringify'

describe('Linked list in a row', () => {
  test('Should return 1 -> 2 -> 3 -> null', () => {
    expect(stringify(new Node(1, new Node(2, new Node(3))))).toBe('1 -> 2 -> 3 -> null')
  })
  test('Should return 0 -> 1 -> 4', () => {
    expect(stringify(new Node(0, new Node(1, new Node(4, new Array(9)))))).toBe('0 -> 1 -> 4')
  })
  test('Should return string', () => {
    expect(typeof stringify(new Node(0, new Node(1, new Node(4, new Node(9)))))).toBe('string')
  })
})
