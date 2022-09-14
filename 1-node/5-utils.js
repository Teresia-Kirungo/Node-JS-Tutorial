const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}


// Exporting the function, please notice we did not use {} because we are exporting only one function, if we would be exporting more than one we would use the {}
module.exports = sayHi