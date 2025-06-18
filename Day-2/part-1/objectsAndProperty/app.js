//-------------------------------------------------

// const cse018Name = "Vamsi";
// const cse018Adress = "AndhraPradesh,AP";
// const cse018BloodGroup = "O-";

// const cse410Name = "Perni";
// const cse410Adress = "AndhraPradesh,AP";
// const cse410BloodGroup = "O-";

// const cse420Name = "Mohana";
// const cse420Adress = "AndhraPradesh,AP";
// const cse420BloodGroup = "O-";

// Instead of doing like above , we will use objects which is below

// const cse018 = {
//   name: "Vamsi",
//   address: "AndhraPradesh,AP",
//   blood: "Un-Known",
// };
// console.log(cse018);

// // READ the value of property
// const studentName = cse018.name;
// console.log(studentName);

// // Update the value of property
// cse018.blood = "A+";
// console.log(cse018.blood);

// // Add a key-value pair
// cse018.college = "LPU";
// console.log(cse018.college);

// // delete a key-value pair
// delete cse018.address;
// console.log("Details of student cse018 : ", cse018);

//-----------------------------------------------------------

// const person = {
//   name: "Vamsi",
//   height: 177, // CM
//   weight: 78, // KG
//   college: "LPU",
//   rollnumber: 12209410,
//   getBMI: function () {
//     console.log("Height: ", this.height, "Weight: ", this.weight); // we cannot use this function , if we have declared the arrow assigment function instead of normal function
//     const bmi = this.weight / this.height ** 2;
//     //  console.log("BMI : ",bmi); // instead of this we can use below
//     console.log(`BMI for ${this.name} is ${bmi}`);

//     if (bmi < 20) {
//       console.log("YOu are underweight");
//     } else if (bmi < 25) {
//       console.log("YOu are underweight");
//     } else if (bmi < 30) {
//       console.log("YOu are underweight");
//     } else {
//       console.log("YOu are underweight");
//     }
//   },
// };

// console.log(person);
// person.getBMI();

// person.weight = 100;
// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("allKeys:", allKeys);

// const allValues = Object.values(person);
// console.log("allValues:", allValues);

// const allEntries = Object.entries(person);
// console.log("allValues:", allEntries);

// -------------------------------------Dynamic Value Access---------------------------------------------------

// -->> Most used and important topic in React........

// const person = {
//   name: "Vamsi",
//   height: 177, // CM
//   weight: 78, // KG
//   college: "LPU",
//   rollnumber: 12209410,
// };

// READ
// const rno = person.rollnumber;
// console.log(rno);

// Method-1 to access
// const clg = person.college;
// console.log("College Name : ", clg);

// Method-2 to access
// const clg = person["college"];
// console.log("College Name : ",clg);

// Method-3 to access (Dynamically)

// Instead of writing the code as , rollnumber , name , height to access it everytime we are creating it dynamically to ask us the prompt and when we entered the prompt key which one we need to have then we will get the value as output on the console , if we enetered the wrong key then we will get the answer as un-defined

// const whichKey = prompt("What value do you want?");
// console.log("Whichkey : ", whichKey);

// const clg = person[whichKey];
// console.log("College Name : ", clg);

//------------------------Shallow Copy

// const person1 = {
//   name: "Vamsi",
//   height: 177, // CM
//   weight: 78, // KG
//   college: "LPU",
//   rollnumber: 12209410,
// };

// const person2 = person1;

// person1.name = "Mohan";
// person2.name = "Raj";

// -->Dis-advantage of shallow copy

// console.log("person1", person1);
// console.log("person2", person2);

//---------------Smart Copy (or we can call any name) using Spread Operator
// ...(spread operator , removes the outermost layer)

// const person1 = {
//   name: "Vamsi",
//   height: 177, // CM
//   weight: 78, // KG
//   college: "LPU",
//   rollnumber: 12209410,
//   marks: {
//     maths: 45,
//     physics: 42,
//   },
// };

// const person2 = { ...person1 };
// person2.name = "Rajesh"; // It covers the dis-advantage of Shallow-copy
// console.log("Person-2 : ", person2);

// ---->> Dis-advantage of smart copy
// person2.marks.maths = 15;
// console.log("Person-1 : ", person1);

//-------------------De-Structruing

// const { name } = person1;
// console.log("Name : ", name);

// const { weight, height } = person1;
// console.log("Weight: ", weight, "Height: ", height);

// const p1 = {}; // It will show us .......
