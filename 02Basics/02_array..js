const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,0]
array1.push(array2)
// console.log(array1);
// console.log(array2);

const arrayOne = [1,2,3,4]
const arrayTwo = [5,6,7,8]
const newArray  = arrayOne.concat(arrayTwo) //concat return an array
// console.log(newArray);

const new_one_array = [...arrayOne, ...arrayTwo] // same as concat but can add more than one array
//console.log(new_one_array);

const mixArray = [1,2,3,[4,5],3,[343,334,[34,5],6,7,]]
//console.log(mixArray.flat(Infinity)); // return all sub array element in one array

//console.log(Array.isArray(mixArray)) //true
//console.log(Array.isArray("chaman")) //false
//console.log(Array.from("chaman")) // change in array element

const a=234
const b=34
console.log(Array.of("chaman",a,b)) // [ 'chaman', 234, 34 ]
 
