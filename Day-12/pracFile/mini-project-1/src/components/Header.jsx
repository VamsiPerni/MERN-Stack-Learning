import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search`);
  };

  return (
    <header className="flex bg-black p-4 justify-between">
      <div>
        <h1 className="text-amber-300">Shopping Cart</h1>
      </div>

      <div>
        <input className="border-1  border-amber-900 p-1 text-cyan-300" />
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
