// console.log("Hello from JS");
const title = document.getElementById("greetings");

const handleUsername = (e) => {
  console.log(e);
  const elem = e.target;

  console.log(elem.value);
  title.innerText = `
    Hello ${elem.value}  
  `; // obj.value
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);

  const name = e.target[0].value;
  const mail = e.target[3].value;
  const password = e.target[4].value;

  if (!mail.endsWith("@lpu.in")) {
    alert("Enter your LPU mail id");
  } else {
    // controlled by backend
  }
};

// Home button alert manager logic starts here
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  alert("Handled by event");
});
