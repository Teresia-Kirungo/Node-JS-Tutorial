// Common JS, every file in node is a module(by default)
// Modules - Encapsulated Code(only share minimum - what we want)

// To import we use rquire; we can use it like that or we can import it into a variable; that's what we are going to do
// use ../ when the variable is two levels up
const names = require('./4-names.js')

console.log(names) //checks for a successful names import

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
