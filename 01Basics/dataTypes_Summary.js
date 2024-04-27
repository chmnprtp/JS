//JavaScript is a dynamically typed language. you can assign values of any type to 
//variables without explicitly declaring the variable's type.


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// const id = Symbol('123')
// const userId = Symbol('123')
// console.log(id === userId); // false value is same but result is different due to Symbol


// const bigNumber = 1245238953828573n// put n at the end to make bigInt

const flower = ['red','greeen','yellow']

const myobj = {
    name: "Chaman",
    age: 26
}

const myfun = function()
{
    console.log("hi chham");
}

console.log(typeof flower);
console.log(typeof myobj);
console.log(typeof myfun);