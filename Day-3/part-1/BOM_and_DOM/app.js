// console.log("window",window);
// console.dir(window.document);
// console.dir(document.children[0].children[1].children[0]);

// -----------------------------------------------------------------
// 1.document.getElement_s_By_TagName --> (iterable) (HTML Collection)

// const headings = document.getElementsByTagName("h3");
// console.log("headings:", headings);

// -----------------------------------------------------------------

// const header = document.getElementsByTagName("header");
// console.log("headings:", header); // we wil get empty array because there is no header in our html page

// ----->> We are accessing the html page using the javascript and overwriting the h3 tags by using the index (starts with 0-based index from the starting of the html page whereever the tags started)

// const headings = document.getElementsByTagName("h3");
// console.log("headings:", headings);

// headings[1].innerText = "Hello , Vamsi";
// headings[2].innerText = "Hello , Perni";

// --------->> Practice

// const h5 = document.getElementsByTagName("h5");
// h5[0].innerText = "Ok! Practice";

// -----------------------------------------------------------------
// 2.document.getElement_s_ByClassName --> [] (iterable)

// const elements = document.getElementsByClassName("text-brown");
// console.log("elements : ", elements);

// elements[0].style.color = "brown";
// elements[1].style.color = "brown";

// -----------------------------------------------------------------
// 3.document.getElementById --> element or null

// const h5 = document.getElementById("practice");
// h5.innerText = "Changed by using getElementById";

// -----------------------------------------------------------------
// 4.document.querySelectorAll --> [] (NODE list) // all gives the all elements

// --------> Selects by tag name
// const titles = document.querySelectorAll("h5");  // It selects all the h5 tags from the html page
// console.log("titles : ", titles);

// --------> Select by class name
// const textBrownElements = document.querySelectorAll(".text-brown"); // class access (.)
// console.log("textBrownElements : ", textBrownElements);

// --------> Select by Id
// const textParas = document.querySelectorAll("#text-1"); // (#) is ID
// console.log("textParas : ", textParas);

// ------------->> Practice

// const h5 = document.querySelectorAll("h5");
// console.log("All h5 tags : ", h5);

// -----------------------------------------------------------------
// 5.document.querySelector --> [] (element or NULL) // it will gives the first elements only

// --------> Selects by tag name
const title = document.querySelector("h3");
console.log("title : ", title);

// --------> Selects by class name
// const textBrownElement = document.querySelector(".text-brown"); // class access (.)
// console.log("textBrownElement : ", textBrownElement);

// --------> Selects by id name
// const textPara = document.querySelector("#text-1"); // (#) is ID
// console.log("textPara : ", textPara);

// const textPara2 = document.querySelector("#text-2"); // (#) is ID
// console.log("textPara2", textPara2);
