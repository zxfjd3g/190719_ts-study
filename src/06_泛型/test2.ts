/* 
泛型接口
*/
(() => {

  // 定义一个CRUD操作的泛型接口
  interface BaseCRUD<T> {

    data: T[] //保存内部所有数据对象的数组

    add: (t: T) => number // 添加一个新的数据对象 返回数据对象的id

    getById: (id: number) => T // 根据id查询对应的数据对象
  }

  /* 定义一个数据类型 */
  class User {
    id?: number
    name: string
    age: number

    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  // 定义操作User数据的实现类
  class UserCRUD implements BaseCRUD<User> {
    data: User[] = [] 

    /* 
    添加一个新的数据对象 返回数据对象的id
    */
    add (user: User): number {
      const id = Date.now()
      user.id = id
      this.data.push(user)

      return id
    } 

    /* 
    根据id查询对应的数据对象
    */
    getById (id: number): User {
      return this.data.find(user => user.id===id)
    }
  }

  // 测试
  const userCRUD = new UserCRUD()
  const id1 = userCRUD.add(new User('tom', 12))
  const id2 = userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data, userCRUD.getById(id1), userCRUD.getById(1))
})()