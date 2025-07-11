import { useState } from "react";

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);

  const [fruits] = useState([
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
  ]);

  return (
    <div>
      {fruits.map((elem, idx) => {
        if (editIndex === idx) {
          return <h2>Hello</h2>;
        } else {
          return (
            <div key={idx} style={{ backgroundColor: elem.color }}>
              <h3>{elem.name}</h3>
              <h4>{elem.color}</h4>
              <h3>Rs. {elem.price}</h3>
              <button
                onClick={() => {
                  setEditIndex(idx);
                }}
              >
                Edit
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default App;
