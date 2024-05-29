"use strict";
//create a guest list 
let guestsList = ["Maha", "Tasbeeha", "Asma", "Rida"];
//
let dontCome = guestsList[0];
console.log(`${dontCome} can't come at the dinner.`);
guestsList.splice(0, 1, "Sehrish");
guestsList.forEach(guest => console.log(`Hello! ${guest}, would you like to dinner with me?`));
