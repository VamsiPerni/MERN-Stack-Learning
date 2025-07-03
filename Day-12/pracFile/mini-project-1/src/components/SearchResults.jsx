import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const { text } = props;

  const getSearchResults = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${text}`
    );
    const data = await response.json();
    // console.log(data.products);
    setResults(data.products);
  };

  console.log(results);

  useEffect(() => {
    const timeOutId = setTimeout(getSearchResults, 450);
    return () => {
      clearInterval(timeOutId);
    };
  }, []);

  return (
    <div>
      <div className="">
        {results.map((elem) => {
          return (
            <ProductResultCard
              key={elem.id}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              rating={elem.rating}
              thumbnail={elem.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export { SearchResults };
