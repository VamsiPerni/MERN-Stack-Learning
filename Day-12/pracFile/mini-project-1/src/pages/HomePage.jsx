import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoryList";

const HomePage = (props) => {
  const { text, handleSearchText } = props;

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />

      <main className="mt-2.5 mb-2.5 ">
        <CategoryList />
      </main>

      <Footer />
    </div>
  );
};

export { HomePage };
