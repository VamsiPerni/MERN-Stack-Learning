// Synchronous , one after another

const fs = require("node:fs");

console.log("---Start\n");

const response1 = fs.readFileSync("./temp.txt", "utf-8");
console.log(response1);

console.log("\nMID");

const response2 = fs.readFileSync("./student.txt", "utf-8");
console.log(response2);

console.log("\nEND------");
