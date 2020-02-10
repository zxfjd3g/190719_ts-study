/*
可选参数
默认参数
剩余参数
*/
(function () {
    function buildName(firstName, lastName) {
        if (firstName === void 0) { firstName = 'A'; }
        if (lastName) {
            return firstName + '-' + lastName;
        }
        else {
            return firstName;
        }
    }
    console.log(buildName('C', 'D'));
    console.log(buildName('C'));
    console.log(buildName());
    function info(x) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(x, args);
    }
    info('abc', 'c', 'b', 'a');
})();
