import InitiativesPageIntroductionSection from "../components/youth-empowerment/initiative-introduction-section";
import Hero from "../components/hero";
import Highlights from "../components/youth-empowerment/highlight";
import BeautifulVideoSection from "../components/youth-empowerment/video-component";

const YouthEmpowermentPage = () => {
  return (
    <>
      <Hero title="Key Initiatives" />
      <InitiativesPageIntroductionSection />
      <Highlights />
      <BeautifulVideoSection />
    </>
  );
};

export default YouthEmpowermentPage;
