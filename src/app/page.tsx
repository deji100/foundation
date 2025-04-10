import AboutUsSection from "./components/main-page/main-page-about-section";
import MainPageCollageSection from "./components/main-page/main-page-collage-section";
import MainPageContactUsSection from "./components/main-page/main-page-contact-us-section";
import MainPageHero from "./components/main-page/main-page-hero";
import MainPageKeyInitiativesSection from "./components/main-page/main-page-key-initiatives-section";
import MainPageNewsSection from "./components/main-page/main-page-news-section";
import MainPageTestimonial from "./components/main-page/main-page-testimonial-section";

export default function Home() {
  return (
    <>
      <MainPageHero />
      <AboutUsSection />
      <MainPageKeyInitiativesSection />
      <MainPageCollageSection />
      <MainPageContactUsSection />
      <MainPageNewsSection />
      <MainPageTestimonial />
    </>
  );
}
