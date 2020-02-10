/* 
泛型约束
*/

(() => {
  function fn <T>(t: T): void {
    // console.log(t.length) // error 不确定t有length属性
  }

  interface Lengthwise {
    length: number
  }

  function fn2 <T extends Lengthwise>(t: T): void {
    console.log(t.length)
  }

  console.log(fn2('abc')) // string有length属性
  // console.log(fn2(123))  // error number没有length属性

})()