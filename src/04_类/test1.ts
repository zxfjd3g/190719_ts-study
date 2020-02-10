/* 
类的基本定义与使用
*/

(function () {

  class Greeter {
    // 声明属性
    message: string

    // 定义构造方法
    constructor (message: string) {
      this.message = message
    }

    // 定义一般方法
    greet () : string {
      return 'Hello ' + this.message
    }
  }

  const greeter = new Greeter('word')
  console.log(greeter.greet())
  
})()