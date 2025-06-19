// -----------------Array iteration methods-----------------------------------------

const arr = ["cat", "dog", "elephant", "tiger"];

// -->> For loop Methods  :-

// Method - 1
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Method - 2
// for (let i in arr) {
//   console.log(arr[i]);
// }

// Method-3

const myFun = () => {
  return "Hello";
};

arr.forEach(() => {
  console.log(myFun()); // Will log "Hello" for each item
});

// --->> The below example will load the whole function because we have just calling { fun } instead of { fun() } in

// const fun = () => {
//   return "Hello";
// }

// arr.forEach(() => {
//   console.log(fun);
// })
