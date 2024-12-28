// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const OutsideTemp = null 
// let userEmail;

// const Id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(Id === anotherId);


// const bigNumber = 2342454234341435345n


// // reference data types (non primitive)

// Array , Object ,Functions 

// const heros = ["shaktiman","nagraj","doga"];// ye hai array
// const hero = {
//     name: "Hero",
//     age: 30,
//     power: "super strength"
// };

// const myfunction = function () {    
//     console.log("Hello world");
// }
// console.log(typeof bignNmber ,typeof OutsideTemp ,typeof myfunction
    
//     ,typeof heros); // undefined object function object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) // jo bhi variable declare kiya hai usaka aap ko "copy" milta hai 
// , Heap (Non-primitive) // yaha se milta hai origional "reference"


let myYoutubename = "hiteshchaudhary.com";


let anothername = myYoutubename 
anothername = "chaiaurcode"
// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    Email : "user@hiteshchaudhary.com",
    upi: "user@ybl",
}
let userTwo = userOne

userTwo.Email = "userTwo@hiteshchaudhary.com"
console.log(userTwo.Email);
console.log(userOne.Email);
