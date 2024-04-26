// Difference Between text file and js file is that js has predefine keyword

//console.log(accountEmail)     // Cannot access 'accountEmail' before initialization
//console.log(accountID)        // Cannot access 'accountEmail' before initialization
console.log(accountPassword)    // due to hoisting result will be undefined
const accountID = 1;
let accountEmail = "chmnprtp@gmail.com" // let have block scope {....}
var accountPassword = "12345" // var have function scope or global scope
accountCity = "Sirsaganj" // result as undefined because not let, var,const defined
let accountState;


//accountID = 2;    //Not allowed const can't be changed
accountEmail = "chaman@gmail.com"
var accountPassword = 123; // var can be re-declared
accountCity = "Agra"

/*
    Prefer not to use var
*/
console.table([accountEmail,accountPassword,accountCity,accountState]);





/*
Scope:
Variables declared with var have function scope or global scope, meaning they are visible throughout the function in which they are declared or globally if declared outside of any function.
Variables declared with let have block scope, meaning they are only accessible within the block ({ ... }) in which they are defined. Blocks can be within functions, loops, conditional statements, or any code enclosed by curly braces.

Hoisting:
Variables declared with var are hoisted to the top of their function or global scope. This means you can access and use a var variable before it's declared, but its value will be undefined.
Variables declared with let are hoisted as well, but they are not initialized until the code execution reaches their declaration. Accessing a let variable before its declaration results in a ReferenceError.

Re-Declaration:
Variables declared with var can be re-declared within the same scope without any errors. This behavior can sometimes lead to unexpected results and bugs.
Variables declared with let cannot be re-declared within the same block scope. Attempting to do so will result in a SyntaxError.

Temporal Dead Zone (TDZ):
Variables declared with let and const are subject to the Temporal Dead Zone (TDZ). This means that they cannot be accessed before their declaration within their lexical scope. Accessing them before declaration results in a ReferenceError.

Global Object Property:
Variables declared with var become properties of the global object (window in browsers, global in Node.js) if declared in the global scope.
Variables declared with let do not become properties of the global object, even if declared in the global scope.
*/