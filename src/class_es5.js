// prototype ES 5
// Person 함수 선언
function Person(name) {
  this.name = name
}
// Person -> greet 생성
Person.prototype.greet = function greet() {
  return `hi, ${this.name}!`
}
// Student 함수 선언
function Student(name) {
  this.__proto__.constructor(name)
}
// Student -> study 생성
Student.prototype.study = function study() {
  return `${this.name} is studing`
}
// Object 재설정
Object.setPrototypeOf(Student.prototype, Person.prototype)
// 인스턴스 생성(Student 클래스 사용)
const me = new Student('whitaker')
console.log(me.greet())
console.log(me.study())
console.log(me instanceof Student)
console.log(me instanceof Person)

const anotherPerson = new Person('Foo')
console.log(anotherPerson instanceof Student)
console.log(anotherPerson instanceof Person)

console.log([] instanceof Array, [] instanceof Object)
