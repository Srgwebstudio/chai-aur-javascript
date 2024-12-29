// Dates 

// Create a new Date object for the current date and time
let myDate = new Date();

// Uncomment the following lines to see different date and time formats
// console.log(myDate.toString()); // Full date and time string
// console.log(myDate.toDateString()); // Date string
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.toLocaleDateString()); // Local date string
// console.log(myDate.toJSON()); // JSON format
// console.log(myDate.toLocaleTimeString()); // Local time string
// console.log(typeof myDate); // Type of myDate

// Examples of creating specific dates
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 05:03 AM
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023
// console.log(myCreatedDate.toLocaleString()); // Local date and time string

// Get the current timestamp
let myTimeStamps = Date.now();

// Uncomment the following lines to see timestamp values
// console.log(myTimeStamps); // Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Timestamp of myCreatedDate
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// Create a new Date object for the current date and time
let newDate = new Date();
console.log(newDate.toLocaleDateString()); // Local date string
console.log(newDate.getMonth()); // Month (0-11)
console.log(newDate.getDay()); // Day of the week (0-6)

// Example of using template literals
console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`);

newDate.toLocaleString('default', {
    weekday: "long",
})
