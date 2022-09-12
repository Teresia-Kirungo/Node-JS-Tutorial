/* 
GLOBALS - NO WINDOW !!!! because there's no console or DOM
Global variables can be accessed from anywhere

 __dirname - path to current directory(file path)
 __filename - file name
 require - function to use modules(files in JS(CommonJS)are also called modules)
 module - info about current module(file)
 process - info about env where the program is executed


*/

//this gives you the path to where this file is
console.log(__dirname)

// Before:
hello = function() {
  return "Hello World!";
}

// After arrow function
hello = () => {
    return "Hello World!";
  }

const sayHi = function (name) {
    // please NOTE the ` is not the ' 
    console.log(`Hello there ${name}`)
}

// Calls the function and assigns the parameter to be used
sayHi('Terry')
sayHi('Ann')

// This app as it stands when we run it, it will work... Yaaay
// In a bid to have a more easily readable and clear file; we will have the const in one file 4-names.js and the function in 5-utils.js how do you think they will get to work?

console.log(module)