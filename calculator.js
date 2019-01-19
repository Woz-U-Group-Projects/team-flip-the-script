/*This is a rough draft of what I am wanting to do for the actual budgeting option */

//Addition calculator function
function add(a, b) {
  return a + b;
}
/*
// Arrow function test: Won't work for what I want it to; 
// I need to be able to use the results elsewhere, and I 
// need it to be compatible with other browsers. It works
// as an example of how arrow functions work! I may need
// this later, so I'm keeping it commented out for now.
const add1 = (a,b) => {
    a + b
    console.log(a+b);
};
add1(1, 2);
*/
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
var iT = income.reduce(add, 0);
//Expense Living Total:
var elT = living.reduce(add, 0);
//Expense Debt Total:
var edT = debt.reduce(add, 0);
//Expense Experiences total:
var eeT = experiences.reduce(add, 0);
//Expense Transportation total:
var etT = transportation.reduce(add, 0);
//Expense Wealthbuilding total:
var ewT = wealthbuilding.reduce(add, 0);
//Expense Health total:
var ehT = health.reduce(add, 0);
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
