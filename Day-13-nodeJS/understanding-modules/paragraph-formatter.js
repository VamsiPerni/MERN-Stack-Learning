// we need to use the methods which are there in the text-formmatter file so we are importing the tex-formatter file into this file by using the require method which is provided by nodeJs

const textHelper = require("./text-formatter.js");

function formatParagraph(text) {
  const sentences = text.split(".");
  const capitalizedSentences = sentences.map((sentence) => {
    return textHelper.getCapitalizedText(sentence);
  });
  return capitalizedSentences.join(".\n");
}

module.exports = {
  formatParagraph,
};
