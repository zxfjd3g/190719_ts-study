/* 
联合类型（Union Types）表示取值可以为多种类型中的一种。
*/
(() => {
  // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  function toString2(x: number | string): string {
    return x.toString()
  }
  console.log(toString2(3), toString2('abc'))
  // console.log(toString2(true)) // error

  // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
  /* function getLength (x: number | string): number {
    // return x.length  // Number是没有length属性
    if (x.length) {  // error number类型是是没有这个属性的
      return x.length
    } else {
      return x.toString().length
    }
  } */
})()
