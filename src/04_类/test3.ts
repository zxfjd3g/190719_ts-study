/* 
多态: 父类型引用指向子类型对象
*/

(function () {
  class Animal {
    name: string
    
    constructor (name: string) {
      this.name = name
    }
  
    run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  
  }

  class Test {

  }
  
  // class Snake extends Animal, Test { // error 一个类只能有一个父类
  class Snake extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=5) {
      console.log('sliding...')
      super.run(distance)
    }
  }
  
  class Horse extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=50) {
      console.log('dashing...')
      // 调用父类型的一般方法
      super.run(distance)
    }
  
    // 扩展一个新方法
    xxx () {
      console.log('xxx()')
    }
  }

  const sn: Snake = new Snake('sn')
  const ho: Horse = new Horse('ho')

  // 多态: 父类型的引用指向子类型的实例(对象)
  let animal: Animal = new Snake('tom') 
  animal.run()  // 调用的是子类型对象的方法
  animal = new Horse('Jack')
  animal.run() // 调用的是子类型对象的方法

  /* 
  能不能让一个子类型的引用指向父类型实例?  Java中都不允许
  1. 如果子类型扩展了新的方法, 不可以
  2. 如果子类型没有扩展新的方法, 可以
  */
  const sn2: Snake = new Animal('sn2')
  sn2.run()
  
  // const ho2: Horse = new Animal('ho2') // error 



})()