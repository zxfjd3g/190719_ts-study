/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口

*/
(function () {
  // 鸣笛的接口
  interface Alarm {
    alert(): any
  }
  // 灯的接口
  interface Light {
    lightOn (): void
    lightOff (): void
  }

  /* 定义一个类, 实现一个接口 */
  class Car implements Alarm {
    alert(): any {
      console.log('Car alert()')
    }
  }

  /* 定义一个类, 实现多个接口 */
  class Car2 implements Alarm, Light {
    alert(): any {
      console.log('Car2 alert()')
    }

    lightOn (): void {
      console.log('Car2 lightOn()')
    }
    lightOff (): void {
      console.log('Car2 lightOff()')
    }
  }

  new Car().alert()
  const car2 = new Car2()
  car2.alert()
  car2.lightOn()
  car2.lightOff()

  /* 一个接口继承于多个接口 */
  interface LightableAlarm extends Alarm, Light {

  }

  class Car3 implements LightableAlarm {
    alert(): any {
      console.log('Car3 alert()')
    }

    lightOn (): void {
      console.log('Car3 lightOn()')
    }
    
    lightOff (): void {
      console.log('Car3 lightOff()')
    }
  }

  const car3 = new Car3()
  car3.alert()
  car3.lightOn()
  car3.lightOff()

})()

