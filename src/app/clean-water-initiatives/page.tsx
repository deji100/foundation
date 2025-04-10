import Highlights from "../components/clean-water-initiatives/highlight";
import InitiativePageIntroductionSection from "../components/clean-water-initiatives/initiative-introduction-section";
import BeautifulVideoSection from "../components/clean-water-initiatives/video-component";
import Hero from "../components/hero";

const CleanWaterInitiativesPage = () => {
  return (
    <>
      <Hero title="Key Initiatives" />
      <InitiativePageIntroductionSection />
      <Highlights />
      <BeautifulVideoSection />
    </>
  );
};

export default CleanWaterInitiativesPage;
