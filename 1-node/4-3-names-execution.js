/* 
Do you remember the variables we had set aside to be shared in 4-names-variable.js?
- This is how you'll access them; 👇
- Hint: You'll use require...this works like import in python
- In our case below we will assign our "require" to a variable
*/

// Importing the person's name to be used here i.e the nickname, firstname, maiden and surname
const personsName = require('./4-1-names-variables')

// Using the imported names. Here the program taps into the personsName, looks for the value given to the keywords and displays it
console.log(`Your first name is ${personsName.firstname}, maiden name is ${personsName.maiden} and your surname name is ${personsName.surname}`) // surname
console.log(`We both know your friends call you ${personsName.nickname}!\n`) // surname

// Importing the file where the functions are stored
const nameFunction = require('./4-2-names-function')
console.log(`This is where you tap into your name functions! 1st one is the nickname function`)

// Program goes into the nameFunction and looks for a function called nickname, from it we find the function has one argument. We feed the nickname argument from our names file(module) with the value to the keyword nickname
const jinalaUtani = nameFunction.nickname(personsName.nickname);
console.log(jinalaUtani)

// Taps into the namefunction variable into the fullname function, using its arguments; we pass in the parameters of the kids
const majinaKamili = nameFunction.fullname(personsName.firstname, personsName.maiden, personsName.surname);
console.log(majinaKamili)

