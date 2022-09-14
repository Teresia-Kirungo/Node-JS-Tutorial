// local(private) - not to be shared
const secret = 'SUPER SECRET'

// global(share)
// const keyword = value
const John = 'john'
const Peter = 'peter'

//c onsole.log(module) // shows us that the exports is an object {} and its empty

// we are xeporting an object and inside these object there two things we are exporting john and peter - using their keyword
module.exports = {John, Peter}