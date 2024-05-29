//Q18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



//making an array of countries og name without alphabetical order
let countriesVisit:string[] = ["Canada", "Europe","Australia","Denmark","British"];

//printing its original order
console.log("it's an original order ==>", countriesVisit);

//Printing array in alphabetical order without modifying the actual list.
console.log("Aphabetical order ==>", [...countriesVisit].sort());

//printing again its original order
console.log("Still it's an original order ==>", countriesVisit);

// Printing array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order ==>", [...countriesVisit].reverse());

//printing again its original order
console.log("it's an original order ==>", countriesVisit);

// print the  reverse of the original array and its order has been changed
console.log("original array reversed ==>" , countriesVisit.reverse());

//print the array to show back to its original order.
console.log("back to its original order ==>" , countriesVisit.reverse());
 
//print the array to show that its alphebtically order now
console.log("Sorted in Aphabetical order ==>", [...countriesVisit].sort());

// we have changed  again the original order now in reverse order again
console.log("original array reversed ==>" , countriesVisit.reverse());





