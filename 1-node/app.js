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
