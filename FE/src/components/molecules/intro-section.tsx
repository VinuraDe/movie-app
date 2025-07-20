import React from "react";
import Heading from "../atoms/headings";
import Paragraph from "../atoms/text";
import { paragraphTexts } from "../../constants";

const MovieLibraryIntro: React.FC = () => {
  return (
    <div className="bg-black px-6 sm:px-10 py-16 lg:px-28">
      <Heading
        text="MOVIE LIBRARY"
        className="md:text-5xl text-4xl font-bold"
      />
      <div className="mt-6 space-y-3 max-w-xl">
        {paragraphTexts.map((text, idx) => (
          <Paragraph key={idx} text={text} className="text-lg text-[#B7B7B7]" />
        ))}
      </div>
    </div>
  );
};

export default MovieLibraryIntro;
