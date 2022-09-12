/* 
- Running this code like this will generate a ReferenceError: john is not defined
*/
const names = require('./4-names-variables')

// We can deconstruct the above function this way 👇
// Option 1:
const {firstName} = require('./4-names-variables')
const {lastName} = require('./4-names-variables')

// Importing a function
const sayHi = require('./5-utils')

// Option 2: this works
//sayHi(names.firstName)
//sayHi(names.lastName)

console.log(names)

// This line of Code works
sayHi('Susan')

// This works too remember to use keywords not the data stored in the keyword
sayHi(firstName)
sayHi(lastName)
