/* The draft scafolding of the suject class */

class Subject {
  constructor() {
    this.name = 'Subject'
  }

  do(something) {}
  act(it) {}
  react(that) {}
  perform(it) {}

  toString() {
    return 'This is a subject.'
  }

  toJSON() {
    let {name} = this
    return {name}
  }
}
