const os = require("os");
// console.log(os.arch());
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
