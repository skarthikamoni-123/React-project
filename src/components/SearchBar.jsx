import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
      <Search size={20} className="text-gray-500" />
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none px-2 w-full"/>
    </div>
  );
}

export default SearchBar;