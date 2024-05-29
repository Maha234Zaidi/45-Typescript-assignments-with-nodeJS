// Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//make a array
let favouriteFruits:string[] = ["Mango","Banana","Pomegranate"];

//Using 5 Independent If statements
if(favouriteFruits.includes("Mango")){
    console.log("You really like a Mango!");
}
if(favouriteFruits.includes("Banana")){
    console.log("You really like a Banana!");
}
if(favouriteFruits.includes("Orange")){
    console.log("You really like an Orange!");
}
if(favouriteFruits.includes("Pomegranate")){
    console.log("You really like a Pomegranate!");
}
if(favouriteFruits.includes("Strawberry")){
    console.log("You really like a Strawberry!");
}