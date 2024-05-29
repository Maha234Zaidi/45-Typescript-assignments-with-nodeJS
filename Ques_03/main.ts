//Q3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "Maha";
// all small letters
console.log(personName.toLowerCase());
// all capital letters
console.log(personName.toUpperCase());
//first capital letter
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());






