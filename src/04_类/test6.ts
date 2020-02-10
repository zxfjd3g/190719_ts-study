/* 
存取器
*/
(()=>{
  class Person {
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName () {
      return this.firstName + '-' + this.lastName
    }
    set fullName (value) {
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
  const p = new Person()
  console.log(p.fullName) // A-B
  
  p.firstName = 'C'
  p.lastName =  'D'
  console.log(p.fullName) // C-D
  
  p.fullName = 'E-F'
  console.log(p.firstName, p.lastName) // E F

})()