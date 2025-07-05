// ----------------------------------------------

// console.log("Loading the text-formatter JS file");

// const getCapitalizedText = (txt) => {
//   const words = txt.split(" ");
//   const resArr = words.map((elem) => {
//     const fistChar = elem[0];
//     const remainingWord = elem.slice(1);

//     return `${fistChar.toUpperCase()}${remainingWord}`;
//   });

//   return resArr.join(" ");
// };

// const res = getCapitalizedText("hello world i am mohana vamsi perni");
// console.log(res);

// ----------------------------------------------

// console.log("Loading the text-formatter JS file");

// 1. first letter capitalized

// const getCapitalizedText = (txt) => {
//   const words = txt.split(" ");
//   const resArr = words.map((elem) => {
//     const fistChar = elem[0];
//     const remainingWord = elem.slice(1);

//     return `${fistChar.toUpperCase()}${remainingWord}`;
//   });

//   return resArr.join(" ");
// };

// const res1 = getCapitalizedText("hello world i am mohana vamsi perni");
// console.log(res1);

// 2.camelCase

// const getCamelCaseText = (txt) => {
//   const words = txt.trim().split(" ");

//   const resArr = words.map((elem, idx) => {
//     if (idx != 0) {
//       const firstChar = elem[0]?.toUpperCase();
//       const remainingWord = elem.slice(1)?.toLowerCase();

//       return `${firstChar}${remainingWord}`;
//     } else {
//       return elem?.toLowerCase();
//     }
//   });

//   return resArr.join("");
// };

// const res2 = getCamelCaseText("i am gOOD STUDENT");
// console.log(res2);

// const res3 = getCamelCaseText("home page ReSULTS");
// console.log(res3);

// ----------------------------------------------

// console.log("Loading the text-formatter JS file");

// 1. first letter capitalized

console.log("\nYou are running text-formatter\n");

const getCapitalizedText = (txt) => {
  const words = txt.split(" ");
  const resArr = words.map((elem) => {
    if (!elem) return "";

    const fistChar = elem[0];
    const remainingWord = elem.slice(1);

    return `${fistChar.toUpperCase()}${remainingWord}`;
  });

  return resArr.join(" ");
};

const res1 = getCapitalizedText("hello world i am mohana vamsi perni");
console.log(res1);

// 2.camelCase

const getCamelCaseText = (txt) => {
  const words = txt.trim().split(" ");

  const resArr = words.map((elem, idx) => {
    if (idx != 0) {
      const firstChar = elem[0]?.toUpperCase();
      const remainingWord = elem.slice(1)?.toLowerCase();

      return `${firstChar}${remainingWord}`;
    } else {
      return elem?.toLowerCase();
    }
  });

  return resArr.join("");
};

const res2 = getCamelCaseText("i am gOOD STUDENT");
console.log(res2);

const res3 = getCamelCaseText("home page ReSULTS");
console.log(res3);

const userName = "Vamsi Perni";
console.log("userName from TEXT_FORMATTER ", userName);

module.exports = {
  getCapitalizedText: getCapitalizedText,
  getCamelCaseText: getCamelCaseText,
};
