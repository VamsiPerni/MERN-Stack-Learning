const textHelper = require("./text-formatter");

console.log("\nYou are in paragraph-formatter FILE!\n");

function paragraphFormatter(text) {
  const sentences = text.split(".");

  const capitalizedSentences = sentences.map((sentences) => {
    return textHelper.getCapitalizedText(sentences);
  });

  return capitalizedSentences.join(".\n");
}

module.exports = {
  paragraphFormatter: paragraphFormatter,
};
