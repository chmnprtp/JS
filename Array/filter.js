The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.



const arr = [1,2,3,4,5]

let result = arr.filter(myfunction);


function myfunction(num)
{
    return num <3;
}

console.log(result);
