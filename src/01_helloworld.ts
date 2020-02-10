(function () {
  function greeter (person: string): string {
    return 'Hello, ' + person
  }
  
  let user: string = 'Yee'
  console.log(greeter(user))

  // let user2: number = 12
  // console.log(greeter(user2))  // error 类型“number”的参数不能赋给类型“string”的参数。
})()

;(function () {
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person): string {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = {
    firstName: 'Yee',
    lastName: 'Huang'
  }
  
  console.log(greeter(user))
})();

(function (){
  class User {
    // 声明属性
    fullName: string
    firstName: string
    lastName: string
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = new User('Yee', 'Huang')
  
  console.log(greeter(user))
})()