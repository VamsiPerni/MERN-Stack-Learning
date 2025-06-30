// --------------------------------------------
//  Question-1

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState("Hello ! , Search for something");

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     remote(val);
//     console.log(val);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleSearch}></input>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------
//  Question-2

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("counter-value");
//     if (val) return val;
//     else return 0;
//   });

//   const handleIncre = () => {
//     let count = monitor;
//     count++;
//     remote(count);
//     localStorage.setItem("counter-value", count);
//   };

//   const handleDecre = () => {
//     if (monitor > 0) {
//       let count = monitor;
//       count--;
//       remote(count);
//       localStorage.setItem("counter-value", count);
//     } else {
//       alert("Count must greater than 0!");
//     }
//   };

//   const handleReset = () => {
//     remote(0);
//     localStorage.setItem("counter-value", 0);
//   };

//   return (
//     <div>
//       <button onClick={handleIncre}>++</button>
//       <button onClick={handleDecre}>--</button>
//       <button onClick={handleReset}>Reset</button>

//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------
//  Question-3

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("search-text");
//     if (val) {
//       return val;
//     } else {
//       return "Name";
//     }
//   });

//   const searchText = (e) => {
//     const val = e.target.value;
//     localStorage.setItem("search-text", val);
//     remote(val);
//   };

//   return (
//     <div>
//       <input type="text" value={monitor} onChange={searchText}></input>
//       <h2>{monitor}</h2>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------
//  Question-4 (It will not showcase on the scrren bacause we are changing in the same array)

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState(["Kiwi", "Banana"]);

//   const addMango = () => {
//     const temp = [...arr];
//     temp.push("Mango");
//     console.log(temp);
//     setArr(temp);
//   };

//   return (
//     <div>
//       <ul>
//         {arr.map((elem) => {
//           return <li>{elem}</li>;
//         })}
//       </ul>
//       <button onClick={addMango}>Add Mango</button>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState(["Kiwi", "Banana"]);

//   const addMango = () => {
//     //   const temp = [...arr];
//     //   temp.push("Mango");
//     //   console.log("Arr : ", temp);
//     //   setArr(temp);
//     //

//     setArr((prev) => {
//       const temp = [...prev];
//       temp.push("Mango");

//       return temp;
//     });
//   };

//   return (
//     <div>
//       <ul>
//         {arr.map((elem) => {
//           return <li>{elem}</li>;
//         })}
//       </ul>
//       <button onClick={addMango}>Add Mango</button>
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------
//  Question-5

// import { useState } from "react";

// const App = () => {
//   const [arr, setArr] = useState([]); // need to specify the array in useState([])

//   const handleAddFunc = (e) => {
//     e.preventDefault();
//     setArr((prev) => {
//       const tempArr = [...prev];

//       let name = e.target.username.value;
//       let city = e.target.usercity.value;

//       tempArr.push([name, city]);

//       return tempArr;
//     });
//   };

//   const handleDelete = (idx) => {
//     setArr((prev) => {
//       const tempArr = [...prev];
//       tempArr.splice(idx, 1);

//       return tempArr;
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleAddFunc}>
//         <label>Enter Name: </label>
//         <input type="text" placeholder="name" name="username"></input>
//         <label>Enter City : </label>
//         <input type="text" placeholder="city" name="usercity"></input>
//         <input type="submit"></input>
//       </form>

//       <div>
//         {arr.map((elem) => {
//           return (
//             <div>
//               <h2>{elem[0]}</h2>
//               <p>{elem[1]}</p>
//               <button
//                 onClick={(idx) => {
//                   handleDelete(idx);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------
//  Question-6

// import { useState } from "react";

// const App = () => {
//   const [editIndex, setEditIndex] = useState(-1);

//   const [fruits] = useState([
//     {
//       name: "Kiwi",
//       color: "green",
//       price: 600,
//     },
//     {
//       name: "Banana",
//       color: "yellow",
//       price: 40,
//     },
//     {
//       name: "Apple",
//       color: "red",
//       price: 200,
//     },
//     {
//       name: "Mango",
//       color: "yellow",
//       price: 150,
//     },
//   ]);

//   return (
//     <div>
//       {fruits.map((elem, idx) => {
//         if (editIndex === idx) {
//           return <h2>Hello</h2>;
//         } else {
//           return (
//             <div key={idx} style={{ backgroundColor: elem.color }}>
//               <h3>{elem.name}</h3>
//               <h4>{elem.color}</h4>
//               <h3>Rs. {elem.price}</h3>
//               <button
//                 onClick={() => {
//                   setEditIndex(idx);
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const FRUITS = [
  {
    name: "Kiwi",
    color: "green",
    price: 600,
  },
  {
    name: "Banana",
    color: "yellow",
    price: 40,
  },
  {
    name: "Apple",
    color: "red",
    price: 200,
  },
  {
    name: "Mango",
    color: "yellow",
    price: 150,
  },
];

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [fruits, setFruits] = useState(FRUITS);

  const handleSubmit = (e, idx) => {
    e.preventDefault();
    setFruits((prev) => {
      const temp = [...prev];
      temp[idx].name = e.target.fruitName.value;
      return temp;
    });
    setEditIndex(-1);
  };

  return (
    <div>
      {fruits.map((elem, idx) => {
        return (
          <div>
            {editIndex !== idx ? (
              <div>
                <h4>{elem.name}</h4>
                <h4>{elem.color}</h4>
                <h4>{elem.price}</h4>
                <button
                  onClick={() => {
                    setEditIndex(idx);
                  }}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e, idx);
                  }}
                  onReset={() => setEditIndex(-1)}
                >
                  <input type="text" name="fruitName" />
                  <button>Update</button>
                  <button type="reset">Cancel</button>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;

// {idx === editIndex ? <input type="text" /> : <h1>{elem}</h1>}
