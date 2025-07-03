import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoryList";

const HomePage = () => {
  return (
    <div>
      <Header />

      <main>
        <CategoryList />
      </main>

      <Footer />
    </div>
  );
};

export { HomePage };
