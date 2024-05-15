//local modules
const { a, add } = require("./local-1.js");
const { a: a2, add: add2 } = require("./local-2.js");
const path = require("path")

console.log(add(2, 3), a);
console.log(add2(2, 3, 4), a2);


// node js built in modules

console.log(path.join('/D:/Tanvir\Works/Programming/Javascript/programming hero/PH Level2/NodeJS/', 'local-1.js'));


