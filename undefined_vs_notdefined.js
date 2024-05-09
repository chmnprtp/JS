// 1. Undefined is like a placeholder till a variable is not assigned a value.
// 2. undefined !== not defined
// 3. JS- weakly typed language since it doesn't depend on data type declarations.

// 1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

// 2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

// 3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

// 4.Remember undefined !== not defined.


// 1)It explains the "undefined" keyword in JavaScript and its role in indicating the absence of a value or the uninitialized state of a variable.
// 2)The concept of a variable being "not defined" is explored, which refers to a situation where a variable has not been declared or is not accessible in the current scope.
// 3)The video discusses scenarios where variables are implicitly assigned "undefined" due to hoisting or other factors.
// 4)It might delve into the difference between "undefined" and "null" in JavaScript and when to use each of these values.
// 5)The content provides examples and code demonstrations to illustrate the differences and proper usage of "undefined" and "not defined."
// 6)The video also addresses common programming mistakes or misconceptions related to these concepts.
// 7)It highlights the importance of understanding the differences between "undefined" and "not defined" to write clean and bug-free JavaScript code.


var a;
console.log(a)

if(a===undefined)
    {
        console.log("a is undefined");
    }
else{
    console.log("a is not undefined");
}


a = undefined; // bad thing to do in js