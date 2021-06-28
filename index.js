const nill = require("fs");

//creating a new file
// nill.writeFileSync("read.txt", "welcome to first file");
// const buffer = nill.readFileSync("read.txt");
// const org_data = buffer.toString();
// console.log(org_data);

// data rename file

nill.renameSync("read.txt", "rename.txt");
