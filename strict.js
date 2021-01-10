'use strict'; 

// function foo() {
//     'use strict';
//     with ({x:1}){ // SyntaxError: Strict mode code may not include a with statement
//         console.log("x is ", x)
//     }
// }

!function(a){ // \\!function() 立即执行函数 https://blog.csdn.net/qq_23853743/article/details/106757787
    arguments[0] = 100;
    console.log(a) // 严格模式 1，非严格模式 100
}(1);


// 严格模式的区别
// 1、不允许使用 with
// 2、不允许未声明的变量被赋值
// 3、arguments 变为参数的静态副本
// 4、delete 参数、函数名报错
// 5、delete 不可配置的属性报错
// 6、对象字面量重复属性名报错
// 7、禁止八进制字面量
// 8、eval, arguments 变为关键字，不能作为变量、函数名
// 9、eval 独立作用域

