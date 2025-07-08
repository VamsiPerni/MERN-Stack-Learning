import { useNavigate } from "react-router";

const Header = (props) => {
  const navigate = useNavigate();
  const { text, handleSearchText } = props;

  const handleSearch = () => {
    navigate(`/search/?text=${text}`);
  };

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <header className="flex bg-black p-4 justify-between">
      <div className="mb-0.5">
        <h1 onClick={handleClick} className="text-amber-300">
          Shopping Cart
        </h1>
      </div>

      <div>
        <input
          className="border-1  border-amber-900 p-1 text-cyan-300"
          onChange={(e) => {
            handleSearchText(e.target.value);
          }}
          value={text}
        />
        <button
          className="border-1  border-amber-900 p-1 text-cyan-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div>
        <div className="h-8 w-8 rounded-full bg-purple-700"></div>
      </div>
    </header>
  );
};

export { Header };
