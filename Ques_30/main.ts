//Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//MAKE A ARRAY
let userNames:string[] = ["Maha","Alishba","Zara","Admin","Sara"];

//Using for of loop on Array
for (let eachUser of userNames){
    if (eachUser === "Admin") {
        console.log(`\nHello ${eachUser},would you like to see a status report?`);
    }else{
        console.log(`\nHello ${eachUser},thank you for logging in again.`);   
    }
};