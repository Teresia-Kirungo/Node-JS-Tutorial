/*
- Path -> Allowa us to handle file paths easily.
- The Path module provides a way of working with directories and file paths.
- It's built in so to use it we 'import' -> require it
*/

// imports our path module
const path = require('path')

// sep	Returns the segment separator specified for the platform
console.log(path.sep);

// Path join method, joins a sequence of platforms using the above specific separator
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

// Supposing I only wanted to access the path for the test.txt; I'll use base. basename()	Returns the last part of a path
const base = path.basename(filePath);
console.log(base)

// resolve() Resolves the specified paths into an absolute path
const absolutePath = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolutePath)