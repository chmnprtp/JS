//Shallow copy - share same reference point
// Deep copy - donot share same reference point

const array1 = [1,2,3,5,6,8]
const arry2 = ['a','b','c','d']

const arry3 = new Array(1,2,3,4,5)
// console.log(arry3);

array1.push(0) // add at end
//console.log(array1);
array1.pop() // whithout value remove last value
//console.log(array1);

array1.unshift(9) //add at beg
// console.log(array1);

array1.shift() //remove at beg
//console.log(array1);

// console.log(array1.includes(5));
// console.log(array1.indexOf(4)); // -1 beacause not present in array

const newarr = array1.join() // array change to string
// console.log(array1);
// console.log(newarr);


// Slice , splice

const arrayOne = ['a','b','c','d']
const newslice =  arrayOne.slice(2,3) // start = 0 means first and last = 3 which not included 
//console.log(newslice);

const arrayTwo = ['a','b','c','d']
const removesplice =  arrayTwo.splice(2,3, 'x','y') // start = 0 means first and 3 means index 3 which is included
//console.log(removesplice); // 
//console.log(arrayTwo); // [ 'x', 'y', 'c', 'd' ] means it take reference of array


