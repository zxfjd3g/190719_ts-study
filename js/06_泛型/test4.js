/*
泛型约束
*/
(function () {
    // 没有泛型约束
    function fn(x) {
        // console.log(x.length)  // error
    }
    // 指定泛型约束
    function fn2(x) {
        console.log(x.length);
    }
    fn2('abc');
    // fn2(123) // error
})();
