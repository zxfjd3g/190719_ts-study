/*
泛型:
    指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
*/
(function () {
    /*
    不使用泛型
    问题: 不知道数组元素的确切类型, 编码没有提示
    */
    function createArray(value, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(value);
        }
        return arr;
    }
    var arr1 = createArray(11, 3);
    var arr2 = createArray('aa', 3);
    console.log(arr1[0].toFixed(), arr2[0].split(''));
    /*
    函数泛型
    */
    function createArray2(value, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(value);
        }
        return arr;
    }
    var arr3 = createArray2(11, 3);
    console.log(arr3[0].toFixed());
    // console.log(arr3[0].length) // error
    var arr4 = createArray2('aa', 3);
    console.log(arr4[0].split(''));
    // console.log(arr4[0].toFixed()) // error
    /* 多个泛型参数的函数 */
    function swap(a, b) {
        return [a, b];
    }
    var result = swap('abc', 123);
    console.log(result[0].length, result[1].toFixed());
})();
