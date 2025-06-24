const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  console.log(e);
  const elem = e.target; // it is targeted to that particular input field
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}`;
};

const handleFormSubmit = (e) => {
  e.preventDefault(); // if we not use this one , it will automatically redirect to the thankyou.html page but if we add the above one then it will ask the developer to the check the details and if we get access then we will be getting the thankyou.html page
  console.log(e);

  // const username = e.target[0].value;
  // const email = e.target[1].value;
  // const password = e.target[2].value;

  // Above is a not goood way to write because we are accessing the target[0] like that but if someone changes that line of code to somewhere esle then we will not get the correct value that we are fetching , so instead of fetching index-based we will fetch them by using the NAME , so we are writing the below one

  const username2 = e.target.usernameTemp.value;
  const email2 = e.target.baseEmail.value;
  const password2 = e.target.abcdPassword.value;

  if (!email2.endsWith("@lpu.in")) {
    alert("Please use your LPU email id");
  } else {
    // Call the API
    // send the data --> register the student
    // we will write the code when we learn backend
  }
};
