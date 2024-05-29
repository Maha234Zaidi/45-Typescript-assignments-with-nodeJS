"use strict";
//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I Love TypeScript!") {
    console.log(`\nMaking a ${size} t-shirt with printed a message ${message} on it.`);
}
//invoke the function
make_shirt();
//invoke the function now Medium size with the default message
make_shirt("medium");
//invoke the function now Small size with the different message
make_shirt("small", "I Love Coding!");
//invoke the function now XL size with the different message
make_shirt("XL", "I Love JavaScript!");
