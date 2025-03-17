import Header from "../Header";
import HeroSection from "../Section/HeroSection";
import ProductSection from "../Section/ProductSection";
import MissionSection from "../Section/MissionSection";
import RelevanceSection from "../Section/RelevanceSection";
import AudienceSection from "../Section/AudienceSection";
import BenefitsSection from "../Section/BenefitsSection";
import AvailabilitySection from "../Section/AvailabilitySection";
import ReviewsSection from "../Section/ReviewsSection";
import Footer from "../Footer";

import "./app.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <MissionSection />
        <RelevanceSection />
        <AudienceSection />
        <BenefitsSection />
        <AvailabilitySection />
        <ReviewsSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
