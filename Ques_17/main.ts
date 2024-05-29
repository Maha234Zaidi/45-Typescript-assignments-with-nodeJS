//Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



//create a guest list array
let guestsList:string[] = ["Maha","Tasbeeha","Asma","Rida"];

//making variable for those who can't come at dinner
let dontCome = guestsList[0];

//printing the name og guest who cant come at dinner
console.log(`${dontCome} can't come at the dinner.`);

//add or remve values from guest array
guestsList.splice(0,1,"Sehrish");

// message print for bigger table
console.log("Good News! We have found a bigger table for the dinner");

//addding a new guest name starting index of the arrray
guestsList.unshift("Bisma");

//adding a new guest name ending index of the array
guestsList.push("Yamna");

//get a middle index of our guest list arrray
let middleGuest = Math.floor(guestsList.length / 2);

// adding a new guest name middle index of the array
guestsList.splice(middleGuest,0,"Hina");

//print a updated guest list message
console.log("Updated Gues list is here");

//sending an invitation message to our guests
guestsList.forEach(guestOne => console.log(`Hello! ${guestOne} would you like to dinner with me?`));

//informed that only two guests invited for the dinner
console.log("Unfortunately! New dinner table won't arrive on time, so i can only invite two guest for the dinner with me.");

//removing element one by one and tell them that you are not invited for the dinner due to little space.
while(guestsList.length > 2){
    let removedGuestOneByOne = guestsList.pop();
    console.log(`${removedGuestOneByOne} Sorry! I cannot invite you for the dinner.`);
}
//printing a invitatioon msg for two guests who are still invited for the dinner
console.log(`Invitation for the last two guests.`);
guestsList.forEach(lastGuest => console.log(`${lastGuest} You are still invited for the dinner with me.`));

//removing last two names of guests at the list of array.
guestsList.pop();
guestsList.pop();

//printing an empty list
console.log("Empty list is here:" , guestsList);




