/* 
内置对象
1. ECMAScript 的内置对象
    Boolean
    Number
    String
    Date
    RegExp
    Error
2. BOM 和 DOM 的内置对象
    Window
    Document
    HTMLElement
    DocumentFragment
    Event
    NodeList
*/
(() => {
  /* 
  1. ECMAScript 的内置对象
    Boolean
    Number
    String
    Date
    RegExp
    Error
  */
  let b: Boolean = new Boolean(true)
  b = false
  let b2: boolean = true
  // b2 = new Boolean(false) // error

  let n: Number = new Number(4)
  n = 4

  let s: String = new String('abc')
  s = 'abc'

  let date: Date = new Date()
  // date = Date.now() // error

  let reg: RegExp = /^1\d10$/
  // reg = '/^1\d10$/' // error

  let error: Error = new Error('出错了')
  // error = {} // error

  /* 
  2. BOM 和 DOM 的内置对象
    Window
    Document
    HTMLElement
    DocumentFragment
    Event
    NodeList
  */
  const div: HTMLElement = document.getElementById('test')
  const divs: NodeList = document.querySelectorAll('div')
  div.addEventListener('click', function (event: MouseEvent) {
    console.log(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
  

})()