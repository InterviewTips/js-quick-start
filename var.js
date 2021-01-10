function foo() {
    var a = b = 1; // b 会创建为全局变量
    console.log('inner a, b', a, b)
}

foo();
console.log('outer b, typeof b', b, typeof b) // number
console.log('outer a, typeof a', a, typeof a) // undefined

