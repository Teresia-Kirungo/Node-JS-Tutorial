const nickname = function (name) {
    // please NOTE the ` is not the ' 
    console.log(`Hello ${name}?`)
}

const fullname = function (firstname, maidenname, surname) {
    // please NOTE the ` is not the ' 
    console.log(`My fullname is ${firstname} ${maidenname} ${surname}.`)
}
// This is how you do an export(export a function) when dealing with a function

// we are exporting these two functions
module.exports = {nickname, fullname}
