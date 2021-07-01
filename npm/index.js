// const chalk = require("chalk");
// var validator = require("validator");
// // const log = console.log;
// console.log(chalk.blue.inverse("Hello world!"));
// const res = validator.isEmail("foo@bar.com");
// console.log(res);

const http = require("http");
const server = http.createServer((req, res) => {
  req.end("hello from the other side");
});
server.listen(8000, "127.0.0.1");
