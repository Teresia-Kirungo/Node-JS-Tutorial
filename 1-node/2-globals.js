// Modules in Node
//
// CommonJS - Every file in Node is a module(by default)
// Modules - Encapsulated Code (only share minimum)
// Global variables are accessible from anywhere in your application
// Codes are usually spilt into modules to make them clear and easily accessible


const john = 'John'
const peter = 'Peter'

// Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.

// The function below can be written like this WITHOUT the arrow function
const sayHello = function(name) {
    // please NOTE the ` is not the ' 
    console.log(`This an function without an arrow function ${name}.`)
  }

// An example of a similar function USING THE ARROW FUNCTION
const sayHi = (name) => {
    // please NOTE the ` is not the ' 
    console.log(`This an function with an arrow function ${name}.`)
  }

// Calls the function by passing a parameter
sayHi('Susan')

// Calls the function using the variables that we had initiated
sayHi(john)
sayHi(peter)