// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.




const arr = [1,2,3,4,5]

let result = arr.map(myfunction);


function myfunction(num)
{
    return num *2
}

console.log(result);
