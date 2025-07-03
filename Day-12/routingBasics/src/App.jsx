import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
