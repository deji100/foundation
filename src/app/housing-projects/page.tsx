import InitiativePageIntroductionSection from "../components/housing-projects/initiative-introduction-section";
import Hero from "../components/hero";
import BeautifulVideoSection from "../components/housing-projects/video-component";
import Highlights from "../components/housing-projects/highlight";

const HousingProjectPage = () => {
  return (
    <>
      <Hero title="Key Initiatives" />
      <InitiativePageIntroductionSection />
      <Highlights />
      <BeautifulVideoSection />
    </>
  );
};

export default HousingProjectPage;
