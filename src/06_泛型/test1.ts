/* 
泛型:
    指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
*/

(() => {
  /* 
  需求: 下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组 
  */
  /* 不用泛型实现 */
  function createArray(count: number, value: any): any[] {
    const arr: any[] = []

    for (let index = 0; index < count; index++) {
      arr.push(value)
    }

    return arr
  }

  const arr1 = createArray(3, 'aa')
  const arr2 = createArray(3, 44.44)
  console.log(arr1[0].split(''), arr2[0].toFixed(1))  // 问题1: 方法不提示
  // console.log(arr2[0].split(''), arr1[0].toFixed(1))  // 问题2: 运行会报错, 但编码过程中不提示


  /* 使用泛型实现 */
  function createArray2 <T>(count: number, value: T): T[] {
    const arr: T[] = []

    for (let index = 0; index < count; index++) {
      arr.push(value)
    }

    return arr
  }

  // 使用函数时指定泛型的具体类型
  const arr3 = createArray2<string>(3, 'aa')
  const arr4 = createArray2<number>(3, 44.44)
  console.log(arr3[0].split(''), arr4[0].toFixed(1)) // 好处1: 有完整语法提示
  // console.log(arr4[0].split(''), arr3[0].toFixed(1)) // error 好处2: 使用没有语法会直接报错 


  /* 给函数指定多个泛型参数 */
  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }
  const result = swap<string, number>('abc', 123)
  console.log(result[0].split(''), result[1].toFixed())

})()