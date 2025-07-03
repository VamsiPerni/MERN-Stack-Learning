import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <Header />

      <main>
        <p>Search results for:</p>
        <SearchResults />
      </main>

      <Footer />
    </div>
  );
};

export { SearchPage };
