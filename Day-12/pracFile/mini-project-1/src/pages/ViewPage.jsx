import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ViewPage = (props) => {
  const { text, handleSearchText } = props;
  const params = useParams();
  const { productId } = params;
  const [data, setData] = useState();

  const getSingleProductData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    const intervalID = setTimeout(getSingleProductData, 400);
    return () => clearInterval(intervalID);
  }, [productId]);

  console.log(data);

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main>
        <div>Okay</div>
      </main>
      <Footer />
    </div>
  );
};

export { ViewPage };
