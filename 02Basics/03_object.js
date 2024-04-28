//Singelton

//Object literals

const mySymbol = Symbol("key")

User = {
    name : "chaman",
    age : 26,
    [mySymbol] : "mykey",
    "my" : "hi"
}

// console.log(User.name);
// console.log(User["my"]);
// console.log(User["age"]);
// console.log(User[mySymbol]);

User.age = 35;  //change the object key age value 
//Object.freeze(User) // after freeze cant change the value
User.age = 99;
//console.log(User);

User.greeting = function()
{
    console.log("hi this is object function");
}

// console.log(User.greeting);  //[Function (anonymous)]
// User.greeting()             // hi this is object function


User.greetingTwo = function()
{
    console.log(`This is object key . ${this.age}`);
}

User.greetingTwo()