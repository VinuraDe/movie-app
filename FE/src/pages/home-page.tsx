import HomeHeroSection from "../components/molecules/home-hero";
import MovieLibraryIntro from "../components/molecules/intro-section";
import ContactSection from "../components/organisms/contact-section";
import FavouritesSection from "../components/organisms/favourites-section";

function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <MovieLibraryIntro />
      <FavouritesSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
