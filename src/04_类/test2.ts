/* 
类的继承
*/
(function () {
  
  // 父类
  class Animal {
    run (distance: number) {
      console.log(`Animal run ${distance}m`)
    }
  }

  // 子类
  class Dog extends Animal {
    // 重写: 重新实现从父类继承的方法
    run (distance: number) {
      console.log(`dog run ${distance}m`)
      // 调用父类型的方法
      super.run(distance)
    }
  }

  const dog = new Dog()
  dog.run(10)


})()