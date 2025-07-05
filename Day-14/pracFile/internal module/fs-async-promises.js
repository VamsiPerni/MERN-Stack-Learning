// ----------------------------------------------------
const fsPromises = require("node:fs/promises");

console.log("Starting of the file\n");

const main = async () => {
  console.log("START INSIDE THE MAIN FUNCTION");

  try {
    const response1 = await fsPromises.readFile("./temp1.txt", "utf-8");
    console.log(response1);
  } catch (err) {
    console.log("Cannot open the file\n", err.message);
  }

  console.log("\nMID OF INSIDE THE {MAIN}FILE");

  try {
    const response2 = await fsPromises.readFile("./student.txt", "utf-8");
    console.log(response2);
  } catch (err) {
    console.log("Error loading the file", err.message);
  }

  console.log("END OF THE MAIN FILE");
};

main();
console.log("MAIN END");
