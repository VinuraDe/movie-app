import { Search } from "lucide-react";
import { useShowSearch } from "../../hooks/useShowSearch";
import type { SavedShow } from "../../utils/interfaces";

type ShowSearchProps = {
  savedShows: SavedShow[];
  setSavedShows: React.Dispatch<React.SetStateAction<SavedShow[]>>;
};

export default function ShowSearch({
  savedShows,
  setSavedShows,
}: ShowSearchProps) {
  const { query, setQuery, results, showDropdown, handleAddShow, loading } =
    useShowSearch({
      savedShows,
      setSavedShows,
    });

  return (
    <div className="relative mb-6">
      <div className="relative w-full sm:max-w-[400px] sm:min-w-[400px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
        <input
          type="text"
          placeholder="Search title and add to grid"
          className="w-full pl-10 pr-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading && (
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin sm:max-w-[400px]" />
      )}
      {showDropdown && !loading && results.length === 0 && (
        <div className="absolute w-full bg-zinc-800 border border-zinc-700 rounded mt-1 z-10 px-4 py-2 text-center text-gray-300 sm:max-w-[400px]">
          No shows found
        </div>
      )}
      {showDropdown && !loading && results.length > 0 && (
        <ul className="absolute w-full bg-zinc-800 border border-zinc-700 rounded mt-1 z-10 max-h-64 overflow-y-auto sm:max-w-[400px]">
          {results.map((item, index) => {
            const show = item.show;
            return (
              <li
                key={index}
                className="flex items-center gap-4 px-4 py-2 hover:bg-zinc-700 cursor-pointer"
                onClick={() => handleAddShow(show)}
              >
                {show.image?.medium && (
                  <img
                    src={show.image.medium}
                    alt={show.name}
                    className="w-10 h-14 object-cover rounded"
                  />
                )}
                <span>{show.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
