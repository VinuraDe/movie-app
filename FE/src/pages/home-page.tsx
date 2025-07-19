import HomeHeroSection from "../components/molecules/home-hero";
import MovieLibraryIntro from "../components/molecules/intro-section";
import ContactSection from "../components/organisms/contact-section";

function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <MovieLibraryIntro/>
      <ContactSection/>
    </div>
  );
}

export default HomePage;
