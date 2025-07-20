import ShowSearch from "../molecules/search-bar";
import Heading from "../atoms/headings";
import SavedGrid from "../molecules/movies-list";
import { useFavourites } from "../../hooks/useFavourite";

export default function FavouritesSection() {
  const { savedShows, loading, error, handleRemoveShow, setSavedShows } =
    useFavourites();

  if (loading) {
    return <div className="text-center py-20">Loading saved shows...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-20">{error}</div>;
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col w-full lg:px-28 sm:px-10 px-6 py-8 lg:justify-between">
        <Heading
          text={"Collect your favourites"}
          className="md:text-3xl text-2xl mb-6 font-bold"
        />
        <ShowSearch savedShows={savedShows} setSavedShows={setSavedShows} />
      </div>
      <div className="lg:px-28 sm:px-10 px-6 pb-8">
        <SavedGrid shows={savedShows} onRemove={handleRemoveShow} />
      </div>
    </>
  );
}
