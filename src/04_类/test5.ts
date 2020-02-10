/* 
readonly 修饰符
*/
(() => {
  class Person {
    readonly name: string = 'abc'
    constructor(name: string) {
      this.name = name
    }
  }
  
  let john = new Person('John')
  // john.name = 'tom' // error
  console.log(john.name)


  class Person2 {
    constructor(readonly name: string) { // 内部自动将接收的name保存为对象的属性
    }
  }
  
  const p = new Person2('jack')
  console.log(p.name)

})() 