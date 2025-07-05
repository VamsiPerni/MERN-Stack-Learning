// Synchronous , one after another
// Here the readFileSync() method will read the file synchronously i.e. code executions are blocked until the process is completed where the readFile() method will read the file content in a non-blocking asynchronous manner and return the content in a callback function

const fs = require("node:fs");

console.log("---Start\n");

const response1 = fs.readFileSync("./temp.txt", "utf-8");
console.log(response1);

console.log("\nMID");

const response2 = fs.readFileSync("./student.txt", "utf-8");
console.log(response2);

console.log("\nEND------");
