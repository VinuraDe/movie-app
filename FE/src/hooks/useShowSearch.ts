import { useState, useEffect } from "react";
import { saveShow, searchShows } from "../api/movies-api";
import type { SavedShow, ShowResult } from "../utils/interfaces";

type UseShowSearchProps = {
  savedShows: SavedShow[];
  setSavedShows: React.Dispatch<React.SetStateAction<SavedShow[]>>;
};

export function useShowSearch({
  savedShows,
  setSavedShows,
}: UseShowSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ShowResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.trim()) {
        setLoading(true);
        try {
          const data = await searchShows(query);
          setResults(data);
          setShowDropdown(true);
        } catch (error) {
          console.error(error);
          setResults([]);
          setShowDropdown(false);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setShowDropdown(false);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleAddShow = async (show: ShowResult["show"]) => {
    const newShow: SavedShow = {
      name: show.name,
      summary: show.summary,
      image: show.image?.medium || "",
    };

    if (!savedShows.some((s) => s.name === newShow.name)) {
      const updated = [...savedShows, newShow];
      setSavedShows(updated);

      try {
        await saveShow(newShow);
      } catch (err) {
        console.error("Failed to save show:", err);
      }
    }

    setQuery("");
    setShowDropdown(false);
  };

  return {
    query,
    setQuery,
    results,
    showDropdown,
    handleAddShow,
    loading,
  };
}

