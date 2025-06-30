// console.log("Hello form JS!");

// const rootId = document.getElementById("root");
// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// const li2 = document.createElement("li");

// li1.innerText = "Item 1";
// li2.innerText = "Item 2";

// ul.append(li1);
// ul.append(li2);

// rootId.append(ul);

// -------------------------------------------------------------------
// In javascript , in the above code we are directly interacting with the DOM but we do not want that , so we need react to interact with the DOM so we need to write the code like below

// const item1 = React.createElement("li", {}, "Item1");
// console.log("item 1 : ", item1);

// const item2 = React.createElement("li", {}, "Item2");

// const list = React.createElement("ul", {}, [item1, item2]);

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(list);

// -------------------------------------------------------------------

const Card = (
  <ul>
    <li>Item 1 </li>
    <li>Iterm 2</li>
  </ul>
);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(Card);
