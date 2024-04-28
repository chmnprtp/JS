function sayMyName()
{
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

sayMyName //reference
//sayMyName()

// function addTwoNumber(a ,b) //parameters
// {
//     console.log(a+b)
// }
// addTwoNumber(2,3) //arguments


// function addNumber(a ,b) 
// {
//     return a+b
// }
// const result = addNumber(2,4) 
// console.log(result);

// function justLoggedIn(username)
// {
//     return `${username} just logged in`
// }
// console.log(justLoggedIn("Chaman"))

function justLoggedIn(username="chaman") //when you don't pass any value as arguments
{
    return `${username} just logged in`
}
console.log(justLoggedIn("rajat"))