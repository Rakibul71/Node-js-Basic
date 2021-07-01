// const crud = require("fs");
// crud.writeFileSync("bio.text", "My name is rakibul Islam");
// crud.appendFileSync("bio.text", "Iam 24 years old");
// const readData = crud.renameSync("bio.text", "myBio.txt");
// const bufferRead = crud.readFileSync("myBio.txt");
// console.log(readData);
// readData.toString("utf8");
// console.log(bufferRead);
// crud.readFile("myBio.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
// crud.unlink("myBio.txt");

// const fs = require("fs");
// fs.mkdir("rakib", (err) => {
//   console.log("folder created");
// });
const fs = require("fs");
fs.writeFile("./rakib/bio.txt", "I want to be a freelancher", (err) => {
  console.log("success");
});
