let a = 10
var b = 20
const c = 30

if(true)
{
    let d = 10
    var e = 20
    const f = 30
// console.log(a);
// console.log(b);
// console.log(c); 
}

// console.log(a);
// console.log(b);
// console.log(c);

//console.log(d); // cant acces outside scope
//console.log(e);
//console.log(f); //// cant acces outside scope




function one ()
{
    const firstName = "chaman"
    function Two()
    {
        const lastName = "Pratap"
        //console.log(firstName);
    }
    //console.log(firstName);
    Two()
   // console.log(lastName); // cant acces outside scope
}
//console.log(firstName); //cant acces here
//console.log(lastName); // cant access here
one()
//Two()// cant call from here


if(true)
{
    const firstName = "chaman"
    if(true)
    {
        last = "Pratap1"
        // console.log(firstName);
        // console.log(last);
    }
    // console.log(firstName);
    // console.log(last);
}


console.log(One(2)) // can be acces here hoisting
function One(num)
{
    return num +1
}



//console.log(addtwo(2)). // cant acces hoisting
const addtwo = function addTwo(num)
{
    return num+2
}