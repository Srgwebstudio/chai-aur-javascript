// let score = "32abc"; ***

// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score); 
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// IF "null" then ..... ***
// let score = null;

// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score); 
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 0

// IF "undefined" then..... ***
// let score = undefined;

// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score); 
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// IF boolean value then..... ***
// let score = true/false;

// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score); 
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 1 // true 
// console.log(valueInNumber); // 0 // false


// IF string then..... ***
// let score = "string";

// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score); // conversion to number 
// console.log(typeof valueInNumber); // number - because of above line of code 
// console.log(valueInNumber); // NaN 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// // let isLoggedIn = 1
// let isLoggedIn = "string"

// let booleanIsLoggedIn = Boolean(isLoggedIn) // convertion to boolean
// console.log(booleanIsLoggedIn); // 1 - true & 0 - false
// "" - false & "string" - true


// 1 => true; 0 => false;
// "" => false
// "Shivam" => true

let someNumber = 33

let stringNumber = String(someNumber) // convertion to string
console.log(stringNumber); 
console.log(typeof stringNumber);


// ***************************** Operations ******************************

let value = 3
let negValue = -value
console.log(negValue); // print => "-3"


// Basics Maths operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);

let stri1 = "hello"
let stri2 = " world"
let str3 =  stri1 + stri2
console.log(str3);

console.log("1" + 2);// output => 12
console.log("1" + "2");// output => 12
console.log("1" + 2 + 2);// output => 122
console.log(1 + 2 + "2");// output => 32
console.log((3 + 4) * 5 % 3);


console.log(true);// output => true 
console.log(+true);// output => 1 // koi sense hai isaat ka
console.log(+"");// output => 0 // koi sense hai isaat ka

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // output => 101  
++gameCounter; // output => 101
console.log(gameCounter);
