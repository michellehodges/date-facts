// In this project, you will use two packages from NPM and make a script that gives you information about the current date and time.
const textColors = require('chalk');
const dateAndTime = require('moment');

let currentDateAndTime = dateAndTime();
console.log(currentDateAndTime);

//formatted dateAndTime
let formattedDateAndTime = dateAndTime().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(`It is ${textColors.blueBright.bold(formattedDateAndTime)}.`);

//day of year
let dayOfYear = dateAndTime().format("DDDo");
console.log(`It is the ${textColors.cyanBright.bold(dayOfYear)} day of the year.`)

//daylight savings time
let daylightSavings = dateAndTime().isDST(currentDateAndTime);

if (daylightSavings === true) {
  console.log("It" + textColors.yellowBright.bold(" is ") + "during daylight savings time.")
} else {
  console.log("It is not during daylight savings time.")
}

//leap year
let leapYear = dateAndTime().isLeapYear(currentDateAndTime);
if (leapYear === true) {
  console.log("It is a leap year!")
} else {
  console.log("It" + textColors.magentaBright.bold(" is not ") + "a leap year.")
}

//seconds into the day
let seconds = parseInt(dateAndTime().format('s'));
let minutes = parseInt(dateAndTime().format('m'));
let hours = parseInt(dateAndTime().format('H'));

let secondsIntoDay = ((hours * 60) * 60) + (minutes * 60) + seconds;

console.log(`It is ${textColors.greenBright.bold(secondsIntoDay)} seconds into the day.`)
