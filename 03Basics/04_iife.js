// immediately invoked function Expressions
// to solve the problem of global scope pollution

(function iife(){
    //named iife
    console.log("one")
})(); // end with semicolon then only you can execute more than two iife

(
    () => {console.log("two")}
)();

(
    (name) => {console.log(name)}
)("chaman");