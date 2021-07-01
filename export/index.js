// const no = require("./export");
// console.log(no.add(7, 5));
// console.log(no.sub(7, 5));

// this is the another and best away
const { add, sub } = require("./export");
console.log(add(7, 5));
console.log(sub(7, 5));
