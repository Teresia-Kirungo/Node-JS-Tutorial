// local variable - not accessible
const secret = 'SUPER SECRET'

// global variable - accessible across the whole file - what we are sharing
const firstName = 'Johnte'
const lastName = 'Petero'

// console.log(module) //exports is empty

/* 
- This is how we will share our global varible - how you are making it accessible to everyone; it uses keyword
- You determine which variables to share through including their keyword in the line of code below; for now we are only sharing two variables; firstName and lastName
- we use module.exports = {firstName, lastName} because we are exporting multiple things.
- Supposing we are only exporting one item them it would be module.exports = firstName*/
module.exports = {firstName, lastName}
