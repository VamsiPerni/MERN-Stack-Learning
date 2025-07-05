// --------------------------------

const fs = require("node:fs");

console.log("\nStarting of the {fs-sync} file");

const response1 = fs.readFileSync("./temp.txt", "utf-8");
console.log(response1);

console.log("Mid of the file\n");

const response2 = fs.readFileSync("./student.txt", "utf-8");
console.log(response2);

console.log("\nEND of the file ");
