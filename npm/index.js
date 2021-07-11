// const chalk = require("chalk");
// var validator = require("validator");
// // const log = console.log;
// console.log(chalk.blue.inverse("Hello world!"));
// const res = validator.isEmail("foo@bar.com");
// console.log(res);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("hello from the other side");
// });
// server.listen(8000, "127.0.0.1");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("THIS IS home part");
//   } else if (req.url == "/about") {
//     res.end("THIS IS about part");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("404 not found");
//   }
// });
// server.listen(8000, "127.0.0.1");

// convert object data to json data

const objectData = {
  name: "rakib",
  age: "24",
  box: "fox",
};

const jsonData = JSON.stringify(objectData);
console.log(jsonData);
