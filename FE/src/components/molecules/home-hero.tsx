import { HeroImage } from "../../assets";

function HomeHeroSection() {
  return (
    <div className="bg-[#0F0F0F] w-full max-h-[620px] ">
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full md:max-h-[620px] max-h-[370px] sm:max-h-[460px] sm:object-cover "
      />
    </div>
  );
}

export default HomeHeroSection;
