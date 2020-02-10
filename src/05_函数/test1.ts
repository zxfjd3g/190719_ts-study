/* 
定义函数
*/

(() => {
  // 命名函数
  function add(x, y) {
    return x + y
  }

  // 匿名函数
  let myAdd = function(x, y) { 
    return x + y;
  }
})()

;(() => {
  // 命名函数
  function add(x: number, y: number): number {
    return x + y
  }

  // 匿名函数 (存在类型推断)
  let myAdd = function(x: number, y: number): number { 
    return x + y;
  }
  // myAdd = 123 // error

  // 完整写法
  let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number { 
    return x + y;
  }

  console.log(add(1, 2), myAdd(2, 3))
})()