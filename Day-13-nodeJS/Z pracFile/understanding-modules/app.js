//------------------------------------------

// console.log("\nYou are in APP JS\n");

// const textHelper = require("./text-formatter");
// const paragraphHelper = require("./paragraph-formatter");

// const res1 = textHelper.getCamelCaseText("\nhello world namaskaram");
// console.log(res1);

// const res2 = paragraphHelper.paragraphFormatter(`
//     The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread.These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.
//     `);
// console.log(res2);

// const userName = "Likhilesh";
// console.log("User name from APP ", userName);

//------------------------------------------

console.log("\nYou are in APP JS\n");

const textHelper = require("./text-formatter");
const paragraphHelper = require("./paragraph-formatter");

const res1 = textHelper.getCamelCaseText("\nhello world namaskaram");
console.log(res1);

const userName = "Likhilesh";
console.log("User name from APP ", userName);

const res2 = paragraphHelper.paragraphFormatter(`
    The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread.These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.
    `);
console.log(res2);
