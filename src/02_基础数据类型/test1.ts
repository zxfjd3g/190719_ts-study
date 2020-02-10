/* 
基础数据类型
1. boolean
2. number
3. string
4. null和undefined
5. 数组
6. 元组(Tuple) 
7. 枚举(enum)
8. any
9. void
10. object
*/
(() => {
  // 1. boolean
  let isDone: boolean = false
  isDone = true
  // isDone = 1 // error  不能将类型“1”分配给类型“boolean”。

  // 2. number
  let a1: number = 10
  // a1 = 'abc' // error
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  // 3. string
  let name: string = 'atguigu'
  name = 'xfzhang'
  let age: number = 18
  console.log(`我叫${name}, 今年${age}`)

  // 4. null和undefined
  let u: null = null
  // u = 'abc' // error
  let und: undefined = undefined
  // und = 'abc' // error
  let num: number = undefined  /* null和undefined是所有类型的子类型 */

  // 5. 数组
  let list1: number[] = [1, 3, 5]
  let list2: Array<number> = [1, 3, 5]
  // 6. 元组(Tuple)  
  /* 个数和元素的类型是特定的几个 */
  let t: [number, string]
  t = [2, 'abc']
  // t = ['abc', 2] // error 类型不匹配
  // t = [2, 'abc', 12] // error 个数不匹配

  // 7. 枚举(enum)
  enum Color { // 保存的数据自动从0开始依次递增
    Red,
    Yellow,
    Blue
  }

  let color: Color = Color.Red 
  console.log(color, typeof color)
  // 根据数值读取对应的名称
  // 根据名称取对应保存的数值
  console.log(Color.Yellow, Color[1]) // 1 "Yellow"

  enum Color2 { // 保存特定的数据
    Red,
    Yellow = 3,
    Blue
  }
  console.log(Color2.Red, Color2.Yellow, Color2.Blue)

  // 8. any  
  /* 可以是任意类型的值 */
  let notSure: any = 1
  notSure = 'abc' 
  notSure = true
  notSure = {}

  let list3: any[] = [1, 'abc', true]
  list3[1] = {}

  // 9. void
  /* 代表函数的返回值只能是undefined或者null */
  function fn (): void {
    // 不指定返回值
    // return undefined
    // return null
    // return 2 // error
  }

  // 10. object

  function fn2 (obj: object): object {
    
    return {}
    // return []
    // return () => {}
    // return 3 // error
    // return null
    // return undefined
  }

  fn2({})
  fn2(String)
})()


