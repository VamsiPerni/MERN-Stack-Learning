// fs-async promises
const fsPromsies = require("node:fs/promises");

console.log("MAIN-start\n");

const main = async () => {
  console.log("---Start\n");

  try {
    const response1 = await fsPromsies.readFile("./temp1.txt", "utf-8");
    console.log(response1);
  } catch (err) {
    console.log("Cannot open temp.txt file\n", err.message);
  }

  console.log("\nMID");

  try {
    const response2 = await fsPromsies.readFile("./student.txt", "utf-8");
    console.log(response2);
  } catch {
    console.log("Cannot open sudent.txt file\n", err.message);
  }

  console.log("\nEND------");
};

main();
console.log("MAIN END\n");
