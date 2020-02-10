(function () {
    function greeter(person) {
        return 'Hello, ' + person;
    }
    var user = 'Yee';
    console.log(greeter(user));
    // let user2: number = 12
    // console.log(greeter(user2))  // error 类型“number”的参数不能赋给类型“string”的参数。
})();
(function () {
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var user = {
        firstName: 'Yee',
        lastName: 'Huang'
    };
    console.log(greeter(user));
})();
(function () {
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + lastName;
        }
        return User;
    }());
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var user = new User('Yee', 'Huang');
    console.log(greeter(user));
})();
