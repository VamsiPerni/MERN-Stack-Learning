import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const getSearchResults = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(data.products);
    setResults(data.products);
  };

  //   console.log(results);

  useEffect(() => {
    getSearchResults();
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
