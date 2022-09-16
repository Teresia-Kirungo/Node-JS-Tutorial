// Common JS, every file in node is a module(by default)
// Modules - Encapsulated Code(only share minimum - what we want)

// To import we use rquire; we can use it like that or we can import it into a variable; that's what we are going to do
// use ../ when the variable is two levels up
const names = require('./4-names')

console.log(names) //checks for a successful names import

const sayHi = require('./5-utils')

console.log(sayHi)

// importing objects in module 6-alternative-flavour.js
const data = require('./6-alternative-flavor')
// successfully imported
console.log(data)

require('./7-mind-grenade')
// Call the function with a set parameter
sayHi('susan')

// Call the function while tapping into the keywords to get the values
sayHi(names.John)
sayHi(names.Peter)
