//Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//MAKE A VARIABLE
let alienColor:string = "green";

//USING IF OR ELSE-IF STATEMENTS FOR THE MULTIPLE CONDITIONS
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}

else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}

else if (alienColor === "red") {
    console.log("The player earned 15 points.");
}

//VERSION TWO 2

let alienColor2:string = "yellow";

if (alienColor2 === "green") {
    console.log("The player earned 5 points.");
}

else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points.");
}

else if (alienColor2 === "red") {
     console.log("The player earned 15 points.");
}

//VERSION THREE 3

let alienColor3:string = "red";

if (alienColor3 === "green") {
    console.log("The player earned 5 points.");
}

else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points.");
}

else if (alienColor3 === "red") {
     console.log("The player earned 15 points.");
}