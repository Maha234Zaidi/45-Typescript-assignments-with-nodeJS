//Q21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//make a type alias
type bioData = {
    name: string,
    age:number,
    webDeveloper:boolean
}

//create an object and given the data type alias and print an object in the console

let studentData:bioData = {
    name:"Maha Zaidi",
    age:22,
    webDeveloper:true
}
console.log(studentData);




