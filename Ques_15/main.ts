//Q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.



//create a guest list array
let guestsList = ["Maha","Tasbeeha","Asma","Rida"];

//making variable for those who can't come at dinner
let dontCome = guestsList[0];

//printing the name og guest who cant come at dinner
console.log(`${dontCome} can't come at the dinner.`);

//add or remve values from guest array
guestsList.splice(0,1,"Sehrish");

//printing a invitation msg with all names
guestsList.forEach(guest => console.log(`Hello! ${guest}, would you like to dinner with me?`));