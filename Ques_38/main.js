"use strict";
//Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`\n${city} is in ${country}.`);
}
//function invoke for 1st time
describe_city("Karachi");
//function invoke for 2nd time
describe_city("Peshawer");
//function invoke for 3rd time
describe_city("Tokyo", "Japan");
