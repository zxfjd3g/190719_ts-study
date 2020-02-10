/*
存取器
*/
(function () {
    var Person = /** @class */ (function () {
        function Person() {
            this.firstName = 'A';
            this.lastName = 'B';
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this.firstName + '-' + this.lastName;
            },
            set: function (value) {
                var names = value.split('-');
                this.firstName = names[0];
                this.lastName = names[1];
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person();
    console.log(p.fullName);
    p.firstName = 'C';
    p.lastName = 'D';
    console.log(p.fullName);
    p.fullName = 'E-F';
    console.log(p.firstName, p.lastName);
})();
