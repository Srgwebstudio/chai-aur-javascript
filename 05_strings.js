const name = "shivam"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Shivam-sg')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

// const newString = gameName.substring(0,4) 
// console.log(newString);

// const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "   shivam   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://shivam%20.com"

console.log(url.replace('%20','-'));
 
console.log(url.includes('shivam'))
console.log(gameName.split('-'));


