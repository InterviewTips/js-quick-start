var a = [1, 2, 3]

// 没有块级作用域
for (var i = 0; i < a.length; i++) {
    console.log('a' + i, 'is', a[i]);
}

console.log('i is', i)// 3

//函数作用域
function Foo() {
    var b = 1;
    console.log('b is', b);
}

console.log('outer b is', b);  // undefined