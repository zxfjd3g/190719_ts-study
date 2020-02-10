/*
接口可以描述函数类型
*/
(function () {
    var mySearch = function (str, subStr) {
        return str.search(subStr) !== -1;
    };
    console.log(mySearch('abcd', 'bc'));
})();
