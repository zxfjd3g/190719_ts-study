/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */

(() => {
  function getLength (x: number | string): number {
    // return x.length  // Number是没有length属性
    if ((<string>x).length) {  // error number类型是是没有这个属性的
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength('abc'), getLength(1234))
})()
