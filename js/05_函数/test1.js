/*
定义函数
*/
(function () {
    // 函数声明
    function add(x, y) {
        return x + y;
    }
    // 函数表达式
    var myAdd = function (x, y) {
        return x + y;
    };
})();
(function () {
    // 为函数定义类型
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) {
        return x + y;
    };
    // 完整写法
    var myAdd2 = function (x, y) {
        return x + y;
    };
})();
