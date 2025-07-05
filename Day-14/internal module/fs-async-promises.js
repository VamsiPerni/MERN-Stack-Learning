// fs-async promises
const fsPromsies = require("node:fs/promises");

console.log("MAIN-start\n");

const main = async () => {
  console.log("---Start\n");
  // Here we are using the async and await where we are executing the code in the same order .
  // wherever we have written the await keyword there we are sayting to wait until the function is get completed and next steps won't get executed in the main file but it will go oustide of the main function and there are two lines avaiable which is not dependent on await function so they will run first and in the meanwhile , if the this awaiting process will be completed then the main funnction will be displayed in the order but not the other code wirtten outside the main function

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
