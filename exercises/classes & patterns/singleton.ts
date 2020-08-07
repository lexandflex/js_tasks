// Singleton
export class Singleton {
  static instance: Singleton

  name: string

  constructor () {
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
}
