import { useEffect, useState } from "react";
import { fetchSavedShows, deleteShow } from "../api/movies-api";
import type { SavedShow } from "../utils/interfaces";

export function useFavourites() {
  const [savedShows, setSavedShows] = useState<SavedShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadShows() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSavedShows();
        setSavedShows(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch saved shows");
      } finally {
        setLoading(false);
      }
    }
    loadShows();
  }, []);

  const handleRemoveShow = async (name: string) => {
    try {
      await deleteShow(name);
      setSavedShows((prev) => prev.filter((s) => s.name !== name));
    } catch (err) {
      console.error(err);
      setError("Failed to remove the show");
    }
  };

  return { savedShows, loading, error, handleRemoveShow, setSavedShows };
}
