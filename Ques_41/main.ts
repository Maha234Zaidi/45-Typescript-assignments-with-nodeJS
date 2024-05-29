//Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames:string[] = ["Joker","Gem","Albert"];
function show_magicians(magicianNames:string[]){
   magicianNames.forEach(magician_one => console.log(magician_one));   
}
show_magicians(magicianNames)