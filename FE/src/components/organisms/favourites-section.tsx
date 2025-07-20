import ShowSearch from "../molecules/search-bar";
import Heading from "../atoms/headings";
import SavedGrid from "../molecules/movies-list";
import { useFavourites } from "../../hooks/useFavourite";

export default function FavouritesSection() {
  const { savedShows, loading, handleRemoveShow, setSavedShows } =
    useFavourites();

  if (loading) {
    return <div className="text-center py-20">Loading saved shows...</div>;
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col w-full lg:px-28 sm:px-10 px-6 pt-8 lg:justify-between">
        <Heading
          text={"Collect your favourites"}
          className="md:text-3xl text-2xl mb-6 font-bold"
        />
        <ShowSearch savedShows={savedShows} setSavedShows={setSavedShows} />
      </div>
      <div className="h-0.5 bg-gray-300 lg:mx-28 sm:mx-10 mx-6 mb-10" />
      <div className="lg:px-28 sm:px-10 px-6 pb-8">
        <SavedGrid shows={savedShows} onRemove={handleRemoveShow} />
      </div>
    </>
  );
}
