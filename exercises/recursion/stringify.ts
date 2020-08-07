// Linked list in a row
export class Node {
  data: number

  next: Node

  constructor (data: number, next = null) {
    this.data = data
    this.next = next
  }
}

export function stringify (list: Node): string {
  if (list.next === null) return `${list.data} -> ${list.next}`
  if (!(list.next instanceof Node)) return `${list.data}`
  return `${list.data} -> ${stringify(list.next)}`
}
