!function(){
    'use strict';
    eval('var evalVar = 2;')
    console.log("typeof evalVar", typeof evalVar) // undefined
}();


!function(){
    eval('var evalVar = 2;')
    console.log("typeof evalVar", typeof evalVar) // number
}();