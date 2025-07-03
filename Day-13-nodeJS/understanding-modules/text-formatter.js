// commonJs Modules
console.log("--------! Loading text-formmate.js file-----------------");

// First character in the word is capitalized

const getCapitalizedText = (txt) => {
  const words = txt.split(" ");
  const resArr = words.map((elem) => {
    const firstChar = elem[0];
    const remainingWord = elem.slice(1);

    return `${firstChar.toUpperCase()}${remainingWord}`;
  });

  return resArr.join(" ");
};

const res = getCapitalizedText("hello world");
console.log(res);

// camelCase
const getCamelCaseText = (txt) => {
  const words = txt.trim().split(" ");
  const resArr = words.map((elem, idx) => {
    if (idx !== 0) {
      const firstChar = elem[0]?.toUpperCase(); //g
      const remainingWord = elem.slice(1)?.toLowerCase(); //OOD
      return `${firstChar}${remainingWord}`; // `Good`
    } else {
      return elem?.toLowerCase();
    }
  });
  return resArr.join("");
};

const res1 = getCamelCaseText("i am a gOOD student");
console.log(res1);

const res2 = getCamelCaseText("home page results");
console.log(res2);

console.log(
  "------ ! Exporting the exports from text-formatter.js file ---------"
);

const userName = "Vamsi Perni";

module.exports = {
  getCapitalizedText: getCapitalizedText,
  getCamelCaseText: getCamelCaseText,
}; // exporting the two functions to some other file to use those two functions in that file
