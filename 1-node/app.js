/*
os means Operating system
os	Provides information about the computer operation system.
OS Module - allows us to interact with the OS and server.
This is a built in module so we don't need to install anything
- also note we will not be using the ./ we'll just go in with os
*/

const os = require('os')

// info about the current user
const currentUser = os.userInfo()
console.log(currentUser)

/* 
- this method uses the built-in module uptime 
- uptime()	Returns the uptime of the operating system, in seconds
*/
console.log(`The system uptime is ${os.uptime} seconds.`)

// 