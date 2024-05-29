"use strict";
//MAKE A ARRAY
let userNames = ["Maha", "Alishba", "Zara", "Admin", "Sara"];
//eomoves all element from my array now my array is empty
userNames = [];
// if statemnet for checking length of my array is empty?
if (userNames.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    //Id array is not empty use for of loop on array
    for (let eachUser of userNames) {
        if (eachUser === "Admin") {
            console.log(`\nHello ${eachUser},would you like to see a status report?`);
        }
        else {
            console.log(`\nHello ${eachUser},thank you for logging in again.`);
        }
    }
    ;
}
