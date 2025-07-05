// ----------------------------------------------
// Here we are storing the data into the file , if the file is not created then it will create the file and store the data that we have send in the arguments and the {writeFileSync} will be working same as the readFileSync (synchronous mode)

// const fs = require("node:fs");

// const saveDataToFile = (data, pathOfFile) => {
//   const text = JSON.stringify(data, null, 4);

//   fs.writeFileSync(pathOfFile, text, "utf-8");
// };

// saveDataToFile(
//   {
//     Name: "Vamsi",
//     city: "Chirala",
//     Age: 21,
//     Course: "CSE",
//   },
//   "./tempStore.txt"
// );

// ----------------------------------------------

// const fs = require("node:fs");

// const saveDataToFile = (data, pathOfFile) => {
//   const text = JSON.stringify(data, null, 4);

//   fs.writeFileSync(pathOfFile, text, "utf-8");
// };

// saveDataToFile(
//   {
//     Name: "Vamsi",
//     city: "Chirala",
//     Age: 21,
//     Course: "CSE",
//   },
//   "./tempStore.txt"
// );

// In the above step , We have scene how to store the data using {writeFileSync} method now we will be storing the data using the promises(where it will be the async mode)

// const fsPromises = require("node:fs/promises");

// const saveDataToFile = async (data, pathOfFile) => {
//   const text = JSON.stringify(data, null, 4);
//   await fsPromises.writeFile(pathOfFile, text, "utf-8");
// };

// saveDataToFile(
//   {
//     Name: "Vamsi",
//     city: "Chirala",
//     Age: 21,
//     Course: "CSE",
//   },
//   "./tempStoreByPromises.txt"
// );

// ----------------------------------------------

// const fs = require("node:fs");

// const saveDataToFile = (data, pathOfFile) => {
//   const text = JSON.stringify(data, null, 4);

//   fs.writeFileSync(pathOfFile, text, "utf-8");
// };

// saveDataToFile(
//   {
//     Name: "Vamsi",
//     city: "Chirala",
//     Age: 21,
//     Course: "CSE",
//   },
//   "./tempStore.txt"
// );

const fsPromises = require("node:fs/promises");

const saveDataToFile = async (data, pathOfFile) => {
  const text = JSON.stringify(data, null, 4);
  await fsPromises.writeFile(pathOfFile, text, "utf-8");
};

// Till now it is written in the main file and now we are changing the name to the file-hepler because for the next question the above code will be usefull and we are exporting form there and we will use this code in the main.js by imorting it

module.exports = {
  saveDataToFile: saveDataToFile,
};
