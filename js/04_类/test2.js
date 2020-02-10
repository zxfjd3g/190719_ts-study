var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
类的继承
*/
(function () {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.run = function (distance) {
            console.log("Animal run " + distance + "m");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.cry = function () {
            console.log('wang! wang!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.cry();
    dog.run(100); // 可以调用从父中继承得到的方法
})();
