var obj = {}; 
// obj.x = 1 // can delete
Object.defineProperty(obj,'x', {
    configurable: false, // can not delete
    value: 1
});
delete obj.x;
console.log(obj.x);
