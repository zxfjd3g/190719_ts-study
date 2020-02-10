/*
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/
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
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " run " + distance + "m");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            var _this = _super.call(this, name) // 调用父类型构造方法
             || this;
            _this.age = 12; // 只能在当前类内部可见, 不能在类外部可见(访问)
            _this.sex = '女';
            return _this;
        }
        Snake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('sliding... ', this.age);
            _super.prototype.run.call(this, distance); // 调用父类型方法
        };
        return Snake;
    }(Animal));
    var RedSnake = /** @class */ (function (_super) {
        __extends(RedSnake, _super);
        function RedSnake(name) {
            return _super.call(this, name) || this;
        }
        RedSnake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 45; }
            console.log('RedSnake dashing...');
            console.log(this.sex); // 可以访问父类型中protected属性
            // console.log(this.age) // 不可以访问父类型中private属性
            _super.prototype.run.call(this, distance); // 调用父类型方法
        };
        return RedSnake;
    }(Snake));
    // console.log(new Snake('xxx').age) // error 属性“age”为私有属性，只能在类“Snake”中访问。
})();
