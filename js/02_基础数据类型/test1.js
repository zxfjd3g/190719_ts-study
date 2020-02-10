/*
基础数据类型
1. boolean
2. number
3. string
4. null和undefined
5. 数组
6. 元组(Tuple)
7. 枚举(enum)
8. any
9. void
10. object
*/
(function () {
    // 1. boolean
    var isDone = false;
    isDone = true;
    // isDone = 1 // error  不能将类型“1”分配给类型“boolean”。
    // 2. number
    var a1 = 10;
    // a1 = 'abc' // error
    var a2 = 10; // 二进制
    var a3 = 10; // 八进制
    var a4 = 0xa; // 十六进制
    // 3. string
    var name = 'atguigu';
    name = 'xfzhang';
    var age = 18;
    console.log("\u6211\u53EB" + name + ", \u4ECA\u5E74" + age);
    // 4. null和undefined
    var u = null;
    // u = 'abc' // error
    var und = undefined;
    // und = 'abc' // error
    var num = undefined; /* null和undefined是所有类型的子类型 */
    // 5. 数组
    var list1 = [1, 3, 5];
    var list2 = [1, 3, 5];
    // 6. 元组(Tuple)  
    /* 个数和元素的类型是特定的几个 */
    var t;
    t = [2, 'abc'];
    // t = ['abc', 2] // error 类型不匹配
    // t = [2, 'abc', 12] // error 个数不匹配
    // 7. 枚举(enum)
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Yellow"] = 1] = "Yellow";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var color = Color.Red;
    console.log(color, typeof color);
    // 根据数值读取对应的名称
    // 根据名称取对应保存的数值
    console.log(Color.Yellow, Color[1]); // 1 "Yellow"
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 0] = "Red";
        Color2[Color2["Yellow"] = 3] = "Yellow";
        Color2[Color2["Blue"] = 4] = "Blue";
    })(Color2 || (Color2 = {}));
    console.log(Color2.Red, Color2.Yellow, Color2.Blue);
    // 8. any  
    /* 可以是任意类型的值 */
    var notSure = 1;
    notSure = 'abc';
    notSure = true;
    notSure = {};
    var list3 = [1, 'abc', true];
    list3[1] = {};
    // 9. void
    /* 代表函数的返回值只能是undefined或者null */
    function fn() {
        // 不指定返回值
        // return undefined
        // return null
        // return 2 // error
    }
    // 10. object
    function fn2(obj) {
        return {};
        // return []
        // return () => {}
        // return 3 // error
        // return null
        // return undefined
    }
    fn2({});
    fn2(String);
})();
