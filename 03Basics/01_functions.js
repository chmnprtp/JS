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

// function justLoggedIn(username="chaman") //when you don't pass any value as arguments
// {
//     return `${username} just logged in`
// }
// console.log(justLoggedIn("rajat"))


// function calculateCartPrice(...num1) //rest operator
// {
//     return num1
// }
// console.log(calculateCartPrice(200,100,200))


// function calculateCartPrice(num1,num2,...num3) //rest operator
// {
//     return num3
// }
// console.log(calculateCartPrice(200,100,200,490))


User = {
    name:"Chaman",
    price: 399
}
function handleObject(anyObject)
{
     console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);
}
//handleObject(User)
// handleObject({
//     username:"rajat",
//     price:45
// })


// cost = mynewArr =[23,45,6,76,23]
// function returnSecondValue(getArray)
// {
//     return getArray[1]
// }
// console.log(returnSecondValue(mynewArr))



function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue([23,45,6,76,23]))