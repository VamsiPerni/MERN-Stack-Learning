// handling sucess and failure in async call back funtions

const fs = require("node:fs");

console.log("---Start\n");

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error loading file: ", err.message);
  } else {
    console.log("temp.txt -->", data);
  }
});

console.log("\nMID");

fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error loading file: ", err.message);
  } else {
    console.log("student.txt -->", data);
  }
});

console.log("\nEND------");
