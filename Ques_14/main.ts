//Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let invitationToFriends:string[] = ["Asma","Hina","Sehrish","Tasbeeha"];

// one way //
invitationToFriends.forEach(invitation =>{
    console.log(`Dear ${invitation}, would you like to join me for dinner?`);
});

// 2 way //

// console.log(`Dear ${invitationToFriends [0]}, would you like to join me for dinner?`);
// console.log(`Dear ${invitationToFriends [1]}, would you like to join me for dinner?`);
// console.log(`Dear ${invitationToFriends [2]}, would you like to join me for dinner?`);
// console.log(`Dear ${invitationToFriends [3]}, would you like to join me for dinner?`);

 