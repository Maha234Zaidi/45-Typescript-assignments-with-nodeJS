//Q23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



//make two variables
let num1:number = 2;
let num2:number = 4;

//========  these are five true conditions 

//test 1
console.log(`\nIs num1 === 2 ? I predict True.`);
console.log(num1 === 2 ); //true

//test 2
console.log(`\nIs num1 not equals to num2 ? I predict True.`);
console.log(num1 != num2);//true

//test 3
console.log(`\nIs num1 less than to num2 ? I predict True`);
console.log(num1 < num2);//true

//test 4 
console.log(`\nIs num2 greater than to num1 ? I predict True`);
console.log(num2 > num1);//true

//test 5
console.log(`\nIs num2 greater than or equals to to 4 ? I predict True`);
console.log(num2 >= 4);//true

//========= these are five false conditions

// test 1
console.log(`\nIs num1 === num2 ? I predict False.`);
console.log(num1 === num2);//false

// test 2 
console.log(`\nIs num2 less than to num1 ? I predict False.`);
console.log(num2 < num1);//false

// test 3
console.log(`\nIs num1 not equals to num1 ? I predict False.`);
console.log(num1 != num1);//false

// test 4
console.log(`\nIs num1 greater than to num2 ? I predict False`);
console.log(num1 > num2);//false

// test 5
console.log(`\nIs num2 less than to num2 ? I predict False.`);
console.log(num2 < num2);//false









