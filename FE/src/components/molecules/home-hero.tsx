import { HeroImage } from "../../assets";

function HomeHeroSection() {
  return (
    <div className="bg-[#0F0F0F] w-full max-h-[620px] overflow-hidden">
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full transition-transform duration-500 min-h-[370px] sm:min-h-[460px] md:min-h-[620px] object-cover  "
      />
    </div>
  );
}

export default HomeHeroSection;
