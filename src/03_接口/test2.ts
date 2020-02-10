/* 
接口可以描述函数类型
*/
(() => {
  
  /* 定义一个函数接口 */
  interface SearchFun {
    (sourceStr: string, str: string): boolean 
  }

  const search: SearchFun = (sourceS: string, s: string): boolean => {
    return sourceS.indexOf(s)!==-1
  }

  console.log(search('abcd', 'bc'), search('abcd', 'cb'))

})()