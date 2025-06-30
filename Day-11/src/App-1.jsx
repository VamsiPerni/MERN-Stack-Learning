// -------------------------------------------------
// Verbos way of doing it

// const App = () => {
//   const getData = () => {
//     const response = fetch("https://dummyjson.com/users");

//     response
//       .then((resp) => {
//         // console.log("Success : ", resp);
//         const pr2 = resp.json();
//         return pr2;
//       })
//       .catch((err) => {
//         console.log("Error : ", err);
//       })
//       .then((data) => {
//         console.log("Data : ", data);
//       });
//   };

//   getData();

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// };

// export default App;

// -------------------------------------------------
// async await is just a wrapper on then() catch()
// The below code simulates then function(above example) (insted of writing then , we can write like as below)

// const App = () => {
//   console.log("--START---");

//   const getData = async () => {
//     console.log("Inside getData");
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log("data --->> ", data);
//   };

//   console.log("---Before getData call ---");

//   getData();

//   console.log("getData called");

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// };

// export default App;

// -------------------------------------------------
// Instead of more callback like before , we are using the different approach
// useEffec is a control (same like as base conditions in the function)

// import {useState} from 'react';

// const App = () => {
//   const [usersList, serUsersList] = useState([]); // [{} , {} , {}]
//   console.log("--START---");

//   const getData = async () => {
//     console.log("Inside getData");
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log("data --->> ", data);
//     const { users } = data;
//   };

//   console.log("---Before getData call ---");

//   // getData();  // here we will not call the getData() function because it will run 0 times or infinite times

//   console.log("getData called");

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// };

// export default App;

// -------------------------------------------------
// Using useEffect funtion now

import { useEffect, useState } from "react";

const App = () => {
  const [usersList, setUsersList] = useState([]); // [{} , {} , {}]
  console.log("--START---");

  const getData = async () => {
    console.log("Inside getData");
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log("data --->> ", data);
    const { users } = data;
    setUsersList(users);
    // setUsersList(() => {
    //     return users;
    // }); // noted!!
  };

  console.log("---Before getData call ---");

  // getData();  // here we will not call the getData() function because it will run 0 times or infinite times
  // I want to call this getData only on "initial render"

  console.log("getData called");

  useEffect(() => {
    getData();
  }, []); // this is called after "return" function
  // empty dependency array
  //    --> callback function will be called only once (on FIRST render / initial render)

  return (
    <div>
      <h1>Hello</h1>
      {usersList.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.firstName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
