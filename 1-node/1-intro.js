/* The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.

The following rules hold true for a variable declared using the const keyword −
1) Constants cannot be reassigned a value.
2) A constant cannot be re-declared.
3) A constant requires an initializer. This means constants must be initialized during its declaration.
4) The value assigned to a const variable is mutable.
*/
const amount = 12 //variables in JS

if (amount < 10) {
    console.log("small number")
} 
else{
    console.log("large number")
}
/* The console.log() method writes/prints/displays (logs) a message to the console. It's useful for testing purposes. */

// please NOTE this ` is not a ' or ""
// ` this is called a template string
console.log(`Hello World! This is my first node app!`)
console.log(__dirname)


