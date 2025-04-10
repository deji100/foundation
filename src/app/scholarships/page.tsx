import InitiativePageIntroductionSection from "../components/scholarships/initiative-introduction-section";
import Hero from "../components/hero";
import Highlights from "../components/scholarships/highlight";
import BeautifulVideoSection from "../components/scholarships/video-component";

const ScholarshipsProjectPage = () => {
  return (
    <>
      <Hero title="Key Initiatives" />
      <InitiativePageIntroductionSection />
      <Highlights />
      <BeautifulVideoSection />
    </>
  );
};

export default ScholarshipsProjectPage;
