// ------------------------------

// Getting the ( div ) element by Id
const parent = document.getElementById("root");

// Creating {h1} tag inside the div and modifying according to the wish
const title1 = document.createElement("h1");
title1.innerText = "Hello from DOM1";
title1.style.color = "brown";
title1.style.textDecorationColor = "";

// finally appending the created {h1} tag/element into the div tag
parent.append(title1);

const title2 = document.createElement("h1");
title2.innerText = "Hello from DOM2";

parent.append(title2);

// -----------Practice

const divPrac1 = document.getElementById("prac1");

const h2 = document.createElement("h3");

h2.innerText = "Practice - 1";
h2.style.color = "skyblue";

divPrac1.append(h2);
