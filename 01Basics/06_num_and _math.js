// const score = 1334
// console.log(score);//1334

// const scorenum = new Number(100)
// console.log(scorenum);   //[Number: 100]
// console.log(scorenum.toFixed(3)); /100.000
// console.log(scorenum.toString());

// const num = 12.2342
// console.log(num.toPrecision(3)); //12.2

// const hundred = 1000000
// console.log(hundred.toLocaleString("en-IN")); //10,00,000



// +++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4)); // absolute change negative to positve not vice versa
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2)); //above value
// console.log(Math.floor(4.9)); //lowest value
// console.log(Math.min(4,5,3,6,2,6));
// console.log(Math.max(4,7,9,56,34));
// console.log((Math.random()*10) +1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min +1)) + min); // value between 10 -20