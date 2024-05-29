//Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar (manufacturer:string,model:string, ...optional:string[]){

   let myCar:any = {
    manufacturer: manufacturer,
    model: model
   }
   
   optional.forEach(option => {
    let [key,value] = option.split(":")
    myCar[key.trim()] = value.trim()
   })

   return myCar
}

let car = createCar("City","Corolla"," Color : Gray")
console.log(car);

