/* 
Do you remember the variables we had set aside to be shared in 4-names-variable.js?
- This is how you'll access them; 👇
- Hint: You'll use require...this works like import in python
- In our case below we will assign our "require" to a variable
*/
const names = require('./4-names-variables')

// Importing a function
const sayHi = require('./5-utils')

// This logs this 👉 { firstName: 'Johnte', lastName: 'Petero' } it's fetching the data from our firstName and lastName varibales in the module(file) 4-names-variable.js
console.log(names)
console.log(module)

sayHi('Susan')
sayHi(john)
sayHi(peter)
