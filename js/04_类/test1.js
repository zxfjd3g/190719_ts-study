/*
类的基本定义与使用
*/
(function () {
    var Greeter = /** @class */ (function () {
        // 构造方法
        function Greeter(message) {
            this.message = message;
        }
        // 一般方法
        Greeter.prototype.greet = function () {
            return 'Hello ' + this.message;
        };
        return Greeter;
    }());
    // 创建类的实例
    var greeter = new Greeter('world');
    // 调用实例的方法
    console.log(greeter.greet());
})();
