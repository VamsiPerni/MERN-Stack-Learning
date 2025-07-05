console.log("---------! Loading app.js file------");

const textHelper = require("./text-formatter.js"); // importing
const paraHelper = require("./paragraph-formatter.js"); // import

const resp = textHelper.getCamelCaseText("hello world namsakaram");
console.log("Answer : ", resp);

const userName = "Likhilesh"; // here we are having the same const userName in text.formatter too but it will do the wrapping so it will not get conflict between each other and our both different values get printed
console.log("After Username from text-formatter.js", userName);

const resp2 = paraHelper.formatParagraph(
  `
        The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.
    `
);

console.log("resp2--------->", resp2);
