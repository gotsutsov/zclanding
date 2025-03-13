import Header from "./components/header/header";

import ProductSection from "./components/Section/ProductSection";
import MissionSection from "./components/Section/MissionSection";
import RelevanceSection from "./components/Section/RelevanceSection";
import AudienceSection from "./components/Section/AudienceSection";
import BenefitsSection from "./components/Section/BenefitsSection";
import AvailabilitySection from "./components/Section/AvailabilitySection";
import ReviewsSection from "./components/Section/ReviewsSection";

import Footer from "./components/footer/footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <ProductSection />
        <MissionSection />
        <RelevanceSection />
        <AudienceSection />
        <BenefitsSection />
        <AvailabilitySection />
        <ReviewsSection />
      </main>

      <Footer />
    </>
  );
}
