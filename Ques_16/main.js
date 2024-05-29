"use strict";
//create a guest list array
let guestsList = ["Maha", "Tasbeeha", "Asma", "Rida"];
//making variable for those who can't come at dinner
let dontCome = guestsList[0];
//printing the name og guest who cant come at dinner
console.log(`${dontCome} can't come at the dinner.`);
//add or remve values from guest array
guestsList.splice(0, 1, "Sehrish");
// message print for bigger table
console.log("Good News! We have found a bigger table for the dinner");
//addding a new guest name starting index of the arrray
guestsList.unshift("Bisma");
//adding a new guest name ending index of the array
guestsList.push("Yamna");
//get a middle index of our guest list arrray
let middleGuest = Math.floor(guestsList.length / 2);
// adding a new guest name middle index of the array
guestsList.splice(middleGuest, 0, "Hina");
//print a updated guest list message
console.log("Updated Gues list is here");
//sending an invitation message to our guests
guestsList.forEach(guestOne => console.log(`Hello! ${guestOne} would you like to dinner with me?`));
