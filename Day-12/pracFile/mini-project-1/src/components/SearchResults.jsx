import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const Limit = 5;

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const { text } = props;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getSearchResults = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${text}&skip=${
        (page - 1) * Limit
      }&limit=${Limit}`
    );
    const data = await response.json();
    // console.log(data.products);
    setResults(data.products);
    setTotalPages(Math.ceil(data.total / Limit));
  };

  console.log(results);

  useEffect(() => {
    const timeOutId = setTimeout(getSearchResults, 450);
    return () => {
      clearInterval(timeOutId);
    };
  }, [page, text]);

  const handlePage = (pageNo) => {
    if (pageNo <= 1) {
      setPage(1);
    } else if (pageNo >= totalPages) {
      setPage(totalPages);
    } else {
      setPage(pageNo);
    }
  };

  console.log(page);

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
      <div className="flex items-center justify-center gap-0.5 mb-3 gap-4">
        <button
          onClick={() => {
            handlePage(page - 1);
          }}
          className="px-2 py-1 bg-blue-600 text-white rounded-md text-sm cursor-pointer"
        >
          Prev
        </button>
        <p>
          {page}/{totalPages}
        </p>
        <button
          onClick={() => {
            handlePage(page + 1);
          }}
          className="px-2 py-1 bg-blue-600 text-white rounded-md text-sm cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { SearchResults };
