// this works in object not in functions
const user = {
    username: "chaman",
    price : 999,
    welcome : function()
    {
       // console.log(` ${this.username},welcome to website `);
        //console.log(this);
    }
}
// console.log(user.welcome());
// user.username = "rajat"
// console.log(user.welcome());
// console.log(this);


// function arrFun()
// {
//     const user = "Chaman"
//     console.log(this.user);  // undefined
// }
// arrFun()

// const arrVar = function()
// {
//     const user = "chaman"
//     console.log(this.user); // undefined
// }
// arrVar()


//  const arrrowFun = () =>{
//      const user =" chamn"
//         console.log(this.user); // undefined
//         console.log(this); // {}
//  }
//  arrrowFun()


//-----------------------------------------------------------

// const addFun = (num1, num2) =>  // Normal arrow function
// {
//     return num1+num2
// }
//const addFun = (num1, num2) => num1+num2 // Implicit return
//const addFun = (num1, num2) => (num1+num2) // Implicit return
//const addFun = (num1, num2) => ({username:"chaman"}) // username:"chaman
const addFun = (num1, num2) => {{username:"chaman"}} //  undefined


console.log(addFun(2,3))