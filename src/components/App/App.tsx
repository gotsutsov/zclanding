import { useEffect } from "react";

import { initYandexMetrika } from "../../analytics/yandexMetrika";
import Header from "../Header";
import Main from "../Main";
import HeroSection from "../Section/HeroSection";
import ProductSection from "../Section/ProductSection";
import MissionSection from "../Section/MissionSection";
import RelevanceSection from "../Section/RelevanceSection";
import AudienceSection from "../Section/AudienceSection";
import BenefitsSection from "../Section/BenefitsSection";
import AvailabilitySection from "../Section/AvailabilitySection";
import ReviewsSection from "../Section/ReviewsSection";
import Footer from "../Footer";
import ScrollToTopButton from "../ScrollToTopButton";

export default function App() {
  useEffect(() => {
    initYandexMetrika();
  }, []);

  // useEffect(() => {
  //   if (window.location.hash) {
  //     window.history.replaceState(null, "", window.location.pathname);
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <ProductSection />
        <MissionSection />
        <RelevanceSection />
        <AudienceSection />
        <BenefitsSection />
        <AvailabilitySection />
        <ReviewsSection />
      </Main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
