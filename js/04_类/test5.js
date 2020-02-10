/*
readonly 只读属性
*/
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = 'abc';
            this.name = name;
        }
        return Person;
    }());
    var john = new Person('John');
    // john.name = 'peter' // error
    var Person2 = /** @class */ (function () {
        function Person2(name) {
            this.name = name;
        }
        return Person2;
    }());
    var p = new Person2('jack');
    console.log(p.name);
})();
