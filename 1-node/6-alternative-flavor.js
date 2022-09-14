// This is an array
const items = ['item1', 'item2'];

// There are two ways to export the item above: Option 1 we learned abot this in 4, and 5 series
module.exports = items

// Option 2: This is called export on the go
module.exports.items = ['items1', 'items2']

// This is an object
const person = {
    name: 'bob'
}

// Exporting the above object, on the go while assigning it to a variable
module.exports.singlePerson = person

// It can also be written this way
module.exports.person = {
    name: 'bob'
}