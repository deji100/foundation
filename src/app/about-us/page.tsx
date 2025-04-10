import AboutPageIntroductionSection from "../components/about-page/about-page-introduction-section";
import AboutPageMissionVisionSection from "../components/about-page/about-page-mission-vision-section";
import AboutPageTeamSection from "../components/about-page/about-page-team-section";
import Hero from "../components/hero";

const AboutPage = () => {
  return (
    <>
      <Hero title="About Us" />
      <AboutPageIntroductionSection />
      <AboutPageMissionVisionSection />
      <AboutPageTeamSection />
    </>
  );
};

export default AboutPage;
