// // Date : Date is an object in javascript. 
// // JavaScript stores dates as number of milliseconds since January 01, 1970

// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// console.log(typeof myDate); // Object
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)01
// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM
// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)
// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

// const createdDate = new Date(2024,0,28) // month start from 0
//const createdDate = new Date(2024,0,28,11,4)
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString()); // Date with time 1/28/2024, 11:04:00 AM

//const mycreatedDate = new Date("2024-1-8") 1/8/2024, 12:00:00 AM
const mycreatedDate = new Date("12-04-2024") //12/4/2024, 12:00:00 AM 
//console.log(mycreatedDate.toLocaleString()); 
//console.log(mycreatedDate.getTime()); // change to milisecond

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate.getDate()); // current date
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); // 0 means sunday

// newDate.toLocaleString('default',{
//      weekday: "long",
// })
// console.log(newDate);
  