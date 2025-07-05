// -------------------------------------------

const fs = require("node:fs");

console.log("\nStarting of the {fs-sync-callback} file");

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error when loading this file: ", err.message);
  } else {
    console.log("\ntemp.txt --->> content ", data);
  }
});

console.log("\nMID of the file");

fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error on loading this file", err.message);
  } else {
    console.log("Student.txt --->> ", data);
  }
});

console.log("\nEND OF the file");
