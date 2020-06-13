// Linked list in a row
export class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

export function stringify (list) {
  if (!(list instanceof Node)) return new Error('Object of the Node class is expected')
  if (list.next === null) return `${list.data} -> ${list.next}`
  return `${list.data} -> ${stringify(list.next)}`
}
