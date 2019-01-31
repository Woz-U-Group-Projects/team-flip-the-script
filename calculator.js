/*This is a rough draft of what I am wanting to do for the actual budgeting option */

//Addition calculator function
function add(a, b) {
  return a + b;
}
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
/* Candidate for a constructor class?
idk, we'll see how the app comes together
*/

//Income category
var income = [500, 500, 400];
//Household expense category
var living = [300, 50, 150, 50];
//Debt expense category
var debt = [335, 28, 46, 76, 32];
//Experiences expense category
var experiences = [60];
// Transportation expense category
var transportation = [40, 40, 245, 120];
//Wealthbuilding expense category
var wealthbuilding = [200];
//Health expense category
var health = [0];
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//income Total:
const iT = income.reduce(add, 0);
//Expense Living Total:
const elT = living.reduce(add, 0);
//Expense Debt Total:
const edT = debt.reduce(add, 0);
//Expense Experiences total:
const eeT = experiences.reduce(add, 0);
//Expense Transportation total:
const etT = transportation.reduce(add, 0);
//Expense Wealthbuilding total:
const ewT = wealthbuilding.reduce(add, 0);
//Expense Health total:
const ehT = health.reduce(add, 0);
//Expense Grand Total:
const Expense = (elT + edT + edT + eeT + etT + ewT + ehT);


console.log("Total Income sources are " + iT);
console.log("Total Living expenses are " + elT);
console.log("Total Debt expenses are " + edT);
console.log("Total Experiences Expenses are " + eeT);
console.log("Total Transportation Expenses are " + etT);
console.log("Total Wealthbuilding Expenses are " + ewT);
console.log("Total Health Expenses are " + ehT);
console.log("Total Expenses are: " + Expense);
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

var jstoday = new Date();
// console.log("Today's date is " + today + " and the day is " + stringDay );
//So this works, so long as "a" parameter entered is a javascript date format
function readableDate(a){
  var dd = a.getDate();
  var mm = a.getMonth() + 1; //January is 0!
  var yyyy = a.getFullYear();
  var day = a.getDay();//Sunday is 0
  var readableDate;
  var stringDay;
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  readableDate = mm + '/' + dd + '/' + yyyy;
  if (day === 0) {
    stringDay = "Sunday";
  }
  if (day === 1) {
    stringDay = "Monday";
  }
  if (day === 2) {
    stringDay = "Tuesday";
  }
  if (day === 3) {
    stringDay = "Wednesday";
  }
  if (day === 4) {
    stringDay = "Thursday";
  }
  if (day === 5) {
    stringDay = "Friday";
  }
  if (day === 6) {
    stringDay = "Saturday";
  }
  console.log("The date is " + readableDate + ", and the day of the week is " + stringDay);
return stringDay + readableDate;
}
//make this a function with a 
var plusTwoWeeks = new Date(+new Date + 12096e5);
console.log(plusTwoWeeks); //this gives a date two weeks from today in JS format
readableDate(jstoday);
readableDate(plusTwoWeeks);
var d = new Date(2018, 11, 4);
console.log(d);