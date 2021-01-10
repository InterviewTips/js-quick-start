function Foo(){};
Foo.prototype.x = 1;
var obj = new Foo();
console.log("obj.x is ", obj.x);
console.log("obj hasOwnProperty ", obj.hasOwnProperty('x'))
console.log("obj proto hasOwnProperty ", obj.__proto__.hasOwnProperty('x'))