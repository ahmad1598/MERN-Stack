const path = require('path')
// we dont need to use npm install path becuase it is already include it in Node

console.log(__filename); // it will give us the entire path of the file name
//Base file name
console.log(path.basename(__filename)); // it will give us only the base file name. in here we will get path_demo.js
//Directory name
console.log(path.dirname(__filename)); // we will get only directory of the file

// File extension 
console.log(path.extname(__filename)); // we will get the extension of our file name

//Create path object
console.log(path.parse(__filename)); // it will create a object include of all the info for our filename such as dirrectory, base, ext and name and 
//because it is an object we can access to any property of it

