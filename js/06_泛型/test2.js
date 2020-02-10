/*
泛型接口
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var UserCRUD = /** @class */ (function () {
    function UserCRUD() {
        this.data = [];
    }
    UserCRUD.prototype.add = function (user) {
        user = __assign(__assign({}, user), { id: Date.now() });
        this.data.push(user);
        console.log('保存user', user.id);
    };
    UserCRUD.prototype.getById = function (id) {
        return this.data.find(function (item) { return item.id === id; });
    };
    return UserCRUD;
}());
var userCRUD = new UserCRUD();
userCRUD.add(new User('tom', 12));
userCRUD.add(new User('tom2', 13));
console.log(userCRUD.data);
