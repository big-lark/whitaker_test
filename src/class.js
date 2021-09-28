class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    return `HI!, ${this.name}`
  }
}

class Student extends Person {
  constructor(name) {
    super(name)
  }

  study() {
    return `${this.name} is studting!`
  }
}

const me = new Student('whitaker')
console.log(me.study())
console.log(me.greet())
