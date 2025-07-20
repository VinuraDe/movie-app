import { X } from "lucide-react";
import Heading from "../atoms/headings";
import type { SavedShow } from "../../utils/interfaces";

type Props = {
  shows: SavedShow[];
  onRemove: (name: string) => void;
};

export default function SavedGrid({ shows, onRemove }: Props) {
  if (shows.length === 0) {
    return (
      <div className="text-center text-zinc-400 py-20 text-lg">
        No saved shows yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shows.map((show, index) => (
        <div key={index} className="relative rounded overflow-hidden shadow-md">
          <button
            className="absolute top-2 right-2 z-10 text-white bg-[#1D1D1DE6] p-3 hover:bg-red-500"
            onClick={() => onRemove(show.name)}
          >
            <X size={25} />
          </button>
          <img
            src={show.image}
            alt={show.name}
            className="w-full min-h-[600px] object-cover"
          />
          <div className="p-7 bg-zinc-800">
            <Heading text={show.name} className="text-xl mb-2 font-normal" />
            <p
              className="text-sm line-clamp-4 font-medium"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
