/* 
接口可以描述函数类型
*/
(() => {
  interface SearchFunc {
    (source: string, subString: string): boolean 
  }

  const mySearch: SearchFunc = (str: string, subStr): boolean => {
    return str.search(subStr) !== -1
  }

  console.log(mySearch('abcd', 'bc'))
})()