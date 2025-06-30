const request = window.fetch("https://dummyjson.com/products");
console.log("request : ", request);
console.log("request : ", request);

const parent = document.getElementById("root");

request
  .then((response) => {
    console.log("Result", response);
    const pr2 = response.json();

    pr2.then((data) => {
      console.log("Data", data);

      const { recipes } = data;

      const createUI = () => {
        recipes.forEach((recepie) => {
          const newDiv = document.createElement("div");
          newDiv.className = "card";
          newDiv.innerHTML = `
        <h2>${recepie.name}</h2>
        <img src= "${recepie.image}" alt = "${recepie.name}" width= "200">
        <p id="rating">${recepie.rating}</p>
        <p>${recepie.cuisine}</p>
        <p>${recepie.mealType}</p>
         `;
          parent.append(newDiv);
        });
      };

      createUI();
    });
  })
  .catch((err) => {
    alert("Unable to get products --> ", err.message);
  });
