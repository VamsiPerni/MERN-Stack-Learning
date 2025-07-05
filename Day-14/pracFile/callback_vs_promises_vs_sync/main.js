// ----------------------------------------------

// const { saveDataToFile } = require("./file-helper");
// const { cFetch } = require("./network-helper");

// const getRecipe = async () => {
//   try {
//     console.time("getRecipe");

//     const response = await cFetch("https://dummyjson.com/products");
//     const data = await response.json();

//     console.log("total recipes --> ", data.total);
//     saveDataToFile(data, "./recipes.json");

//     console.timeEnd("getRecipe");
//   } catch (err) {
//     console.log(
//       "\nError occured while getting the recipes  --->>",
//       err.message
//     );
//   }
// };

// console.time("GEC");

// getRecipe();

// console.timeEnd("GEC");

// ----------------------------------------------
// in the above we have just implemented and checked the time for the only one recipe and in here in the below now we are checking that how much time it will take to fetch the same {URL} with n number of times and for everytime it is fetching the we are noticing the time whether it is decreasing or increasing the GEC (Global Execution Context) time

const { saveDataToFile } = require("./file-helper");
const { cFetch } = require("./network-helper");

const getRecipe1 = async () => {
  try {
    console.time("getRecipe1");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe1");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe2 = async () => {
  try {
    console.time("getRecipe2");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe2");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe3 = async () => {
  try {
    console.time("getRecipe3");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe3");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe4 = async () => {
  try {
    console.time("getRecipe4");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe4");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe5 = async () => {
  try {
    console.time("getRecipe5");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe5");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe6 = async () => {
  try {
    console.time("getRecipe6");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe6");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe7 = async () => {
  try {
    console.time("getRecipe7");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe7");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe8 = async () => {
  try {
    console.time("getRecipe8");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe8");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

const getRecipe9 = async () => {
  try {
    console.time("getRecipe9");

    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log("total recipes --> ", data.total);
    saveDataToFile(data, "./recipes.json");

    console.timeEnd("getRecipe9");
  } catch (err) {
    console.log(
      "\nError occured while getting the recipes  --->>",
      err.message
    );
  }
};

console.time("GEC");

getRecipe1();
getRecipe2();
getRecipe3();
getRecipe4();
getRecipe5();
getRecipe6();
getRecipe7();
getRecipe8();
getRecipe9();

console.timeEnd("GEC");
