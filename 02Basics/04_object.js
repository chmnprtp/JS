
const tinderUser ={}

tinderUser.id = 101
tinderUser.name = "chaman"
tinderUser.email ="chmn@go.com"

// console.log(tinderUser);


const regularName = {
    email : "chmnprtp@gmail.com",
    fullName : {
        userName : {
            firstName : "chaman",
            lastName : "Pratap"
        }
    }
}

// console.log(regularName.fullName);                  //{ userName: { firstName: 'chaman', lastName: 'Pratap' } }
// console.log(regularName.fullName.userName);         //{ firstName: 'chaman', lastName: 'Pratap' }
// console.log(regularName.fullName.userName.lastName);//Pratap


const obj1 = {1:'1', 2:'2'}
const obj2 = {1:'1', 2:'2'}
const obj3 = {obj1,obj2}
//console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2) //combine object
//console.log(obj4);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);

const users = [
    {
        id: "chmn",
        email:"chmn@g.com"
    },
    {
        id: "chmn",
        email:"chmn@g.com"
    }
]
//console.log(users[1].email);

//console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //get all keys of object
// console.log(Object.values(tinderUser));  //get all value of object
// console.log(Object.entries(tinderUser));  //[ [ 'id', 101 ], [ 'name', 'chaman' ], [ 'email', 'chmn@go.com' ] ]
// console.log(tinderUser.hasOwnProperty("email")); //true


// **********************************************Object Destructruing********************
const course = {
    courseName: "Js",
    coursePrice: "233",
    courseInstructor :"chaman"
}
const {courseInstructor : instructor } = course // object de-structure
//console.log(instructor); //chaman




// ****************API DATA*************************************
//in object and in form of array
// {
//     courseName: "Js",
//     coursePrice: "233",
//     courseInstructor :"chaman"
// }
// }


// [
//     {},
//     {},
//     {}

// ]

