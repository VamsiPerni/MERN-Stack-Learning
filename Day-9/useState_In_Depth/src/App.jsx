// -----------------------------------------------
// ----->>>Q-1) Create a search box , and the text is visible upon the entering on the screen

// const App = () => {
//   let searchText = "Arun";

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     searchText = value;
//     console.log(searchText);
//   };
//   // here the return is calling one time when it is runned and it is not running again even when we write something in the input field , so it is not returning and we are not getting the name on the screen
//   return (
//     <div>
//       <input type="text" onKeyUp={handleSearch}></input>
//       <h2>{searchText}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
//  { ANSWERED }:-

// import { useState } from "react";
// // hook ==> function given to us by react

// const App = () => {
//   // let searchText = "Arun";
//   const [monitor, remote] = useState("Hello"); // here un-defined wil be there  if we are not passing any thing and un-defined won't be shown on the screen
//   // const [monitor, remote] = useState("Value before");

//   // const {a,b} = useState , Delhi example helicopter is in delhi and we are controlling through remote
//   // Whenever we need to chagne the value we need to use the {remote}
//   // Whenver we need to see the value or print the value on the screen we need to use {monitor}

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     // searchText = value
//     remote(value);
//     console.log(monitor);
//   };
//   return (
//     <div>
//       <input type="text" onKeyUp={handleSearch}></input>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// ----->>>Q-1) Create count increment , decrement and reset app

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   //  Method - 1 :
//   // const handleClick = () => {
//   //   let count = monitor;
//   //   count++;
//   //   remote(count);
//   // };

//   const handleClick = () => {
//     remote(monitor + 1);
//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   //  Method - 1 :
//   // const handleClick = () => {
//   //   let count = monitor;
//   //   count++;
//   //   remote(count);
//   // };

//   const handleClick = () => {
//     remote(monitor + 1); // It will be noted not done (will do by react not done)
//     remote(monitor + 1); // It will be noted not done (will do by react not done) ,  Whatever we will do the last it will do that only
//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   //  Method - 1 :
//   // const handleClick = () => {
//   //   let count = monitor;
//   //   count++;
//   //   remote(count);
//   // };

//   const handleClick = () => {
//     remote(monitor + 1); // It will be noted down to do this task (React say i will do , it will not do on the spot)
//     remote(monitor + 2); // It will be noted down to do this task (React say i will do , it will not do on the spot)
//     remote(monitor + 1); // It will be noted not done (will do by react not done) ,  Whatever we will do the last it will do that only
//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// To get the rigid of the above drawback we are

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   const handleClick = () => {
//     remote((prev) => {
//       return prev + 1; // it won't change in the main state because there is a function below which react need to be run
//     });
//     remote((prev) => {
//       // Here we will get the prev value not the state value both will be combined and then go the final state when react runs
//       return prev + 1;
//     });

//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// Easier to write the above code function more easier

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   const handleClick = () => {
//     remote((prev) => prev + 1);

//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// Go to insepect -> Application - > under storage click on Local Storage , there is counter-value , whenever we are refreshing the site the count is starting from the start

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);

//   const handleClick = () => {
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value", newValue); //
//       return newValue;
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// In the above example count is starting from the start , we want to continue that count even do when we have refreshed the site , the count need to set from their only

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("counter-value");
//     if (val) {
//       return parseInt(val);
//     } else {
//       return 0;
//     }
//   });

//   const handleClick = () => {
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value", newValue);
//       return newValue;
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// Makking buttons to set Increment , Decrement and Reset

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("counter-value");
//     if (val) {
//       return parseInt(val);
//     } else {
//       return 0;
//     }
//   });

//   const handleIncrement = () => {
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value", newValue);
//       return newValue;
//     });
//   };

//   const handleDecrement = () => {
//     if (monitor > 0) {
//       remote((prev) => {
//         const newValue = prev - 1;
//         localStorage.setItem("counter-value", newValue);
//         return newValue;
//       });
//     } else {
//       alert("Cannot less than 0");
//     }
//   };

//   const handleReset = () => {
//     remote(0);
//     localStorage.setItem("counter-value", 0);
//   };

//   return (
//     <div>
//       <button onClick={handleIncrement}>++</button>
//       <button onClick={handleDecrement}>--</button>
//       <button onClick={handleReset}>Reset</button>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// Question - 3 :-
// here in the below code the text is diplaying under the input box , and in the next example the text is displaying in the box and also when we refresh the page also the values will be constant

// import { useState } from "react";

// const App = () => {
//   const [searchText, setSearchText] = useState(() => {
//     return "Vamsi";
//   });
//   console.log(searchText);

//   const handleSearch = () => {};
//   return (
//     <div>
//       <input type="text" onKeyUp={handleSearch}></input>
//       <h2>{searchText}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
//

// import { useState } from "react";

// const App = () => {
//   const [searchText, setSearchText] = useState(() => {
//     const val = localStorage.getItem("searched Text : ");
//     if (val) {
//       return val;
//     } else {
//       return "Name";
//     }
//   });
//   console.log(searchText);

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     localStorage.setItem("searched Text : ", val);
//     setSearchText(val);
//   };

//   return (
//     <div>
//       <input type="text" value={searchText} onChange={handleSearch}></input>
//       <h2>{searchText}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// Question - 4 :-

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState(["Kiwi", "banana"]);

//   const handleAddFruit = () => {
//     // const val = e.target.value;
//     arr.push("Mango");
//     console.log("Arr : ", arr);
//     setArr(arr);
//   };

//   return (
//     <div>
//       <ul>
//         {arr.map((elem) => {
//           return <li>{elem}</li>;
//         })}
//       </ul>
//       <button onClick={handleAddFruit}>Add Mango</button>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState(["Kiwi", "banana"]);
//   console.log("Array : --> ", arr);

//   const handleAddFruit = () => {
//     const temp = [...arr];
//     temp.push("Mango");
//     console.log("Arr : ", temp);
//     setArr(temp);
//   };

//   return (
//     <div>
//       <ul>
//         {arr.map((elem) => {
//           return <li>{elem}</li>;
//         })}
//       </ul>
//       <button onClick={handleAddFruit}>Add Mango</button>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------
// companies will write like below rather than above

import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState(["Kiwi", "banana"]);
  console.log("Array : --> ", arr);

  const handleAddFruit = () => {
    //   const temp = [...arr];
    //   temp.push("Mango");
    //   console.log("Arr : ", temp);
    //   setArr(temp);
    //
    setArr((prev) => {
      const temp = [...prev];
      temp.push("Mango");
      console.log("temp: ", temp);

      return temp;
    });
  };

  return (
    <div>
      <ul>
        {arr.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>
      <button onClick={handleAddFruit}>Add Mango</button>
    </div>
  );
};

export default App;
