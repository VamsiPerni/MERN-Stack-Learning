import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ViewPage } from "./pages/ViewPage";
import { SearchPage } from "./pages/SearchPage";
import { PageNotFound } from "./pages/PageNotFound";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleSearchText = (val) => {
    setText(val);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage text={text} handleSearchText={handleSearchText} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage text={text} handleSearchText={handleSearchText} />
          }
        />
        <Route
          path="/:productId/view"
          element={<ViewPage text={text} handleSearchText={handleSearchText} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
