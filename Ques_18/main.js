"use strict";
//making an array of countries og name without alphabetical order
let countriesVisit = ["Canada", "Europe", "Australia", "Denmark", "British"];
//printing its original order
console.log("it's an original order ==>", countriesVisit);
//Printing array in alphabetical order without modifying the actual list.
console.log("Aphabetical order ==>", [...countriesVisit].sort());
//printing again its original order
console.log("Still it's an original order ==>", countriesVisit);
// Printing array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order ==>", [...countriesVisit].reverse());
//printing again its original order
console.log("it's an original order ==>", countriesVisit);
// print the  reverse of the original array and its order has been changed
console.log("original array reversed ==>", countriesVisit.reverse());
//print the array to show back to its original order.
console.log("back to its original order ==>", countriesVisit.reverse());
//print the array to show that its alphebtically order now
console.log("Sorted in Aphabetical order ==>", [...countriesVisit].sort());
// we have changed  again the original order now in reverse order again
console.log("original array reversed ==>", countriesVisit.reverse());
