"use strict";
//Q44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log(`\nMaing a sandwich with the following items\n`);
    items.forEach(itemOne => console.log(itemOne));
    console.log(`\nEnjoy Your Sandwich!`);
}
//function invoke for three times, with different number of arguments.
sandwich("Cheese", "Butter");
sandwich("Egg", "Chicken", "Mayo");
sandwich("Ketchup", "Tomato", "Bread", "Onion", "Cucumber");
