/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法
*/
(() => {
  abstract class Animal {

    abstract cry ()
  
    run () {
      console.log('run()')
    }
  }
  
  class Dog extends Animal {
    cry () {
      console.log(' Dog cry()')
    }
  }
  
  // new Animal()  // 抽象类不能直接创建实例

  const dog = new Dog()
  dog.cry()
  dog.run()
})()