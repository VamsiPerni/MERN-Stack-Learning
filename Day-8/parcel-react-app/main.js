import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("Vamsi Perni");
  return (
    <div>
      <h1>Hello from React APP!</h1>
    </div>
  );
};

reactRoot.render(<App />);
