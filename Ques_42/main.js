"use strict";
//Q42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicianNames = ["Joker", "Gem", "Albert"];
function show_magicians(magicians) {
    magicians.forEach(magician_one => console.log(magician_one));
}
function make_great(magicians) {
    return magicians.map(magician_one => `The Great ${magician_one}.`);
}
let greatMagician = make_great(magicianNames);
show_magicians(greatMagician);
