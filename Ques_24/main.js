"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let bike = "Yamaha";
console.log("Is bike is equal to 'Yamaha'?.I Predict True");
console.log(bike === 'Yamaha');
console.log("\nIs bike is not equal to 'Yamaha'?.I Predict false");
console.log(bike != "Yamaha");
//Tests using the lower case function
let upperCaseStrawberry = "STRAWBERRY";
console.log("\nIs STRAWBERRY is equal to 'strawberry' after converting to lowercase?");
console.log(upperCaseStrawberry.toLowerCase() === "strawberry");
console.log("\nIs STRAWBERRY is not equal to 'strawberry' after converting to lowercase?");
console.log(upperCaseStrawberry.toLowerCase() != "strawberry");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let one = 1;
let four = 4;
console.log("\nIs one is equal to 1?.I Predict True");
console.log(one === 1);
console.log("\nIs four is not equal to 4?.I Predict False");
console.log(four != 4);
console.log("\nIs four is greater than one?.I Predict True");
console.log(four > one);
console.log("\nIs four is less than one?.I Predict False");
console.log(four < one);
console.log("\nIs one is less than or equal to four?.I Predict True");
console.log(one <= four);
console.log("\nIs one is greater than or equal to four?.I Predict False");
console.log(one >= four);
//Tests using "and" and "or" operators
let nine = 9;
let ten = 10;
console.log("\nIs nine is less than or equal to ten and ten is greater than or equal to nine?.I Predict True");
console.log(nine <= ten && ten >= nine);
console.log("\nIs nine is not equal to ten and ten is less than or equal to nine?.I Predict False");
console.log(nine != ten && ten <= nine);
console.log("\nIs nine greater than ten or nine is less than ten?.I Predict True ");
console.log(nine > ten || nine < ten);
console.log("\nIs nine is not equal to nine or ten is less than nine?.I Predict False ");
console.log(nine != nine || ten < nine);
//Test whether an item is in a array
let gamesOfArray = ["Carrom Board", "Pubg", "Snoker", "Luddo"];
console.log("\nIs Luddo is included in my gameOfArray?.I Predict True");
console.log(gamesOfArray.includes("Luddo"));
//• Test whether an item is not in a array
console.log("\nIs Luddo is not included in my gameOfArray?.I Predict False");
console.log(!gamesOfArray.includes("Luddo"));
