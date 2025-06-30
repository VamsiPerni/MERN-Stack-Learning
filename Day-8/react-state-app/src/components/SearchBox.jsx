// function -->> component
// arguments --> props
// react functions -->> hooks
// re-run the component --> re-rendering

// re-rendering -->> re-run the function
// componenet is re-rendered only when the {state change }OR {props change}
// state variables are given to us by react
// if the value of the state variable change -->> state of the component has changed

// const SearchBox = () => {
//   let searchText = "Perni";
//   const handleSearch = (e) => {
//     console.log(e);
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <h2 id="greeting">{searchText}</h2>
//       <input type="text" onKeyUp={handleSearch}></input>
//     </div>
//   );
// };

// export { SearchBox };

// -----------------------------------------------

import { useState } from "react";

const SearchBox = () => {
  //   let searchText = "Perni";
  const [monitor, remote] = useState(); // destructuring in array

  const handleSearch = (e) => {
    remote(e.target.value); // Noted!
    console.log(monitor);
  };

  return (
    <div>
      <h2 id="greeting">{monitor}</h2>
      <input type="text" onKeyUp={handleSearch}></input>
    </div>
  );
};

export { SearchBox };
