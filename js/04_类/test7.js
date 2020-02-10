/*
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
*/
(function () {
    var Person = /** @class */ (function () {
        function Person() {
            this.name1 = 'A';
        }
        Person.name2 = 'B';
        return Person;
    }());
    console.log(Person.name2);
    console.log(new Person().name1);
})();
