//Q43: Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianNames:string[] = ["Joker","Gem","Albert"];

function show_magicians(magicians:string[]){
   magicians.forEach(magician_one => console.log(magician_one));   
}

function make_great(magicians:string[]){
    return magicians.map(magician_one => `The Great ${magician_one}.`
    )
}

let copiedMagicianNames: string[] = magicianNames.slice();

let copiedGreatMagicians:string[] = make_great(copiedMagicianNames);

//original array
show_magicians(magicianNames);

//copied
show_magicians(copiedGreatMagicians);
