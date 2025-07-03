import { useSearchParams } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResults";
import { useEffect } from "react";

const SearchPage = (props) => {
  const [serachParams, setSearchParams] = useSearchParams();
  const { text, handleSearchText } = props;

  // Intital render
  useEffect(() => {
    const searchTextFromURL = serachParams.get("text");
    if (searchTextFromURL) {
      handleSearchText(searchTextFromURL);
    }
  }, []);

  // re-render when text changes
  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("text", text);
      return prev;
    });
  }, [text]);

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />

      <main>
        <p>Search results for:</p>
        <SearchResults text={text} />
      </main>

      <Footer />
    </div>
  );
};

export { SearchPage };
