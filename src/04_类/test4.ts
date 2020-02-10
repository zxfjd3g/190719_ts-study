/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/

(function () {
  class Animal {
    public name: string
    
    public constructor (name: string) {
      this.name = name
    }
  
    public run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  }

  // class Snake extends Animal, Test { // error 一个类只能有一个父类
  class Snake extends Animal {
    private age: number = 10
    protected sex: string = '雄性'
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=5) {
      console.log('sliding...', this.age, this.sex)
      super.run(distance)
    }
  }

  class RedSnake extends Snake {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=10) {
      console.log('RedSnake sliding...')
      // console.log(this.age) // error age是private的
      console.log(this.sex) // 可以看到 sex是protected的
      super.run(distance)
    }
  }

  new Animal('an').run() // run是公开的, 所有可见
  // new Snake('sn').age // error age是private的
  // new Snake('sn').sex // error age是protected的

})()