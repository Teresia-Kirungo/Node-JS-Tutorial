// Modules in Node
//
// Every file in Node is a module(by default)
// Codes are usually spilt into modules to make them clear and easily accessible


const john = 'John'
const peter = 'Peter'

// Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.

// The below function can be written like this WITHOUT the arrow function
const sayHello = function(name) {
    // please NOTE the ` is not the ' 
    console.log(`This an function without an arrow function ${name}.`)
  }

// An example of a similar function USING THE ARROW FUNCTION
const sayHi = (name) => {
    // please NOTE the ` is not the ' 
    console.log(`This an function with an arrow function ${name}.`)
  }

// Call the function
sayHi('Susan')
sayHi(john)
sayHi(peter)