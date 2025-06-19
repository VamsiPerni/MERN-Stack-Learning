// const arr = ["tata","Mahindra","Vamsi","Perni"];
// console.log(arr);

// // READ
// // 1.
// const comp = arr[1];
// console.log(comp);

// // 2. ----------de-structuring in arrays
// const [a,b,c] = arr;
// console.log(b,c);

//-----------------------

// const arr = ["tata","Mahindra","Vamsi","Perni"];
// arr[10] = "Honda";

// console.log(arr); // (11) ['tata', 'Mahindra', 'Vamsi', 'Perni', empty × 6, 'Honda']
// in the above line we are getting empty*6 because we are directly storig it in 10th and those empties are known as HOLES , so to get regid of those we need to use methods

// --------------->> Array Methods

// -------->>

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// console.log(arr);

// console.log(arr.length); // it shows the length of the array

// arr.push("Honda"); // pushes the element at last
// console.log(arr);

// arr.pop(); // deletes the last element from the array
// console.log(arr);

// arr.shift(); // deletes the first element from the array
// console.log(arr);

// arr.unshift("Honda"); // adds the element at the start
// console.log(arr);

// console.log(arr.at(1)); // showes the element at mentioned index number

// --------->>

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// console.log(arr);

// arr.splice(1,2,"kia","byd","honda");  // it will remomve from first element till 2nd elemets and add the remaining 3 elements
// console.log(arr);

// arr.splice(1,1);  // removing the single element
// console.log(arr); //

// arr.splice(1, 0, "Tesla"); // adding element at index-1 without removing any element
// console.log(arr);

//-------------------Searching Methods-------------------------------------------

// --------->>

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// // find the index of the element which is equal to "suzuki"
// console.log(arr.indexOf("suzuki"));

// --------->>

// const arr = [
//   { name: "Likhilesh", city: "Delhi" },
//   { name: "Vamsi", city: "AndhraPradesh" },
// ];

// find the index of the element whose name is "Vamsi" & city is "AndhraPradesh"

// console.log(arr.indexOf({ name: "Vamsi", city: "AndhraPradesh" }));
// console.log(arr.indexOf({ name: "Likhilesh", city: "Andhra" })); // output :- -1
// console.log(arr.indexOf({ name: "Likhilesh", city: "Delhi" })); // output :- -1 /// why ? due to equality comparisons

// ------------------------>>

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// console.log(arr.indexOf("ab")); // 0
// console.log(arr.lastIndexOf("ab")); // 3

// ------------------------>>

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// // Here in the below example , ab is present in the array but it is in zero-index , in programmig language zero means false and it is showing as absent which is wrong accroding to us
// if (arr.indexOf("ab")){
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

// // Here in the below example , vam is not present in the array but we are getting true and printing as Present because n number of negative or positive numbers are calculated as true in any programming language except zero , here when we check indexOf("vam") we will get -1 still it pass like as true
// if (arr.indexOf("vam")){
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

// ------------------------>>
// More clear example of the above example

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// if(arr.indexOf("ab") === -1){   // Equality Comparisons
//     console.log("Present")
// }
// else
// {
//     console.log("Absent");
// }

// if (arr.indexOf("lik") === -1) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// ------------------------>>
// Overcoming the above dis-advantage by using { includes() } method

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// if(arr.includes("ab"))
// {
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }

// if(arr.includes("vam"))
// {
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }

// ------------*Not undertand*------------>>

// const myFun = (a,b,c,d) => {
//     // console.log("a",a,"b",b,"c",c,"d",d);
//     console.log("🟡 : a, b, c, d:", a, b, c, d);
//     if(a == "xy") return true;
//     else return false;
// }

// const arr = ["ab", "xy", "mn", "ab", "pq"];
// const ans = arr.find(myFun);
// console.log("Element",ans);

// -------sir code --Not Understand --------------->>

// const myFunc = (a, b, c, d) => {
//     console.log("🟡 : a, b, c, d:", a, b, c, d);
//     if (a == "mn") return true;
//     else return false;
// };

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// const elem = arr.find(myFunc);
// console.log("🟡 : elem:", elem);

// ------------------------>>

// // Example 1 -:
// if({name : "Raj"} == {name:"Raj"})
// {
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// // Example 2 :-
// const per1 = {name : "Raj"}
// if(per1 == per1)
//     console.log("True");
// else
//     console.log("False");

// // Example -3 :-
// const p1 = {name : "Raj"};
// const p2 = {...p1};
// if(p1 == p2)
//     console.log("True");
// else
//     console.log("False");

// // Example - 4 :- //even when do we have take the empty curly brackets also , it will allocate to the two different address so it will be false

// if({} == {})
//     console.log("True");
// else
//     console.log("False");

// ------------------------Call backs------>>

// const arr = [
//     {name: "Likhilesh" , city: "Delhi"},
//      {name: "Vamsi" , city: "AndhraPradesh"},
// ];

// const myFunc = (a) =>{
//     if(a.name === "Vamsi") return true;
//     return false;
// };

// const ans = arr.find(myFunc);  // returns array
// // const ans = arr.findIndex(myFunc);  // returns index
// console.log(ans);

//-------------------------------------------------------------------------------
// ---->> MAP method :-
// If we use find then it return the true value , if we want the customized return then we need to use map i think so (not properly clear)

// Example :-

// const arr = [
//   { name: "Likhilesh", city: "Delhi", score: 33 },
//   { name: "Vamsi", city: "AndhraPradesh", score: 24 },
// ];

// const myFunc = (elem) => {
//   if (elem.score < 25) {
//     return "yes";
//   } else return "no";
// };

// const resArr = arr.map(myFunc);
// console.log("resArr : ", resArr);

// ---------------->>>

// To add the extra column into the arr by de-structuring it and we need to use the { map } method instead of find to add the one more column
const arr = [
  { name: "Likhilesh", city: "Delhi", score: 33 },
  { name: "Vamsi", city: "AndhraPradesh", score: 24 },
];

const myFunc = (elem) => {
  if (elem.score < 25) {
    return { ...elem, remark: "fail" };
  } else return { ...elem, remark: "pass" };
};

const resArr = arr.map(myFunc);
console.log("resArr : ", resArr);
