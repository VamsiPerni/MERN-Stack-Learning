// -----------------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState([]);

//   const handleAddFunc = (e) => {
//     e.preventDefault();
//     console.log(e);

//     setArr((prev) => {
//       const tempArr = [...prev];
//       tempArr.push([e.target[0].value, e.target.usercity.value]);

//       return tempArr;
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleAddFunc}>
//         <label>Enter Name : </label>
//         <input type="text" name="username" placeholder="name"></input>
//         <label>Enter City : </label>
//         <input type="text" name="usercity" placeholder="city"></input>
//         <input type="submit"></input>
//       </form>

//       <ul>
//         {arr.map((elem) => {
//           return (
//             <div>
//               <h3>{elem[0]}</h3>
//               <p>{elem[1]}</p>
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default App;

// -----------------------------------------------------
// Adding delete function

import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState([]);

  const handleAddFunc = (e) => {
    e.preventDefault();
    console.log(e);

    setArr((prev) => {
      const tempArr = [...prev];
      tempArr.push([e.target[0].value, e.target.usercity.value]);

      return tempArr;
    });
  };

  const handleDelete = (idx) => {
    setArr((prev) => {
      const tempArr = [...prev];
      tempArr.splice(idx, 1);

      return tempArr;
    });
  };

  return (
    <div>
      <form onSubmit={handleAddFunc}>
        <label>Enter Name : </label>
        <input type="text" name="username" placeholder="name"></input>
        <label>Enter City : </label>
        <input type="text" name="usercity" placeholder="city"></input>
        <input type="submit"></input>
      </form>

      <ul>
        {arr.map((elem, idx) => {
          return (
            <div>
              <h3>{elem[0]}</h3>
              <p>{elem[1]}</p>
              <button
                onClick={() => {
                  console.log(idx);
                  handleDelete(idx);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
