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

  return resArr.join(" "); // before we have divided the whole one string into words so now we are again joining that words to combine like as string and pass to the resultant array
};

const res = getCapitalizedText("hello world");
console.log(res);

// camelCase printing
const getCamelCaseText = (txt) => {
  const words = txt.trim().split(" ");
  const resArr = words.map((elem, idx) => {
    if (idx !== 0) {
      const firstChar = elem[0]?.toUpperCase(); //g  // here ?. is operator is added because before doing that operation it will check whether the character exists or not and whether it is null or undefined like that
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

// here we are exproting this text-formatter page to the paragraph-formatter page to use the {camelCase function} , capitalized function
const userName = "Vamsi Perni"; // here we are testing wrapping example by using the same name variable in the paragraph-fromatter but there will be no error (why do we expect error because , we are exporting the function from this file to the paragraph-formatter file and when we use these function in that file this file will be re-renders so we are expecting that there are two same const named variables so we expect the error over there but we will not get any error because {Wrapping } be done so it will not cause any error)

module.exports = {
  getCapitalizedText: getCapitalizedText,
  getCamelCaseText: getCamelCaseText,
}; // exporting the two functions to some other file to use those two functions in that file
