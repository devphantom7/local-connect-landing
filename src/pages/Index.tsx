import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustSignals from "@/components/TrustSignals";
import PricingPlans from "@/components/PricingPlans";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import CustomerReviews from "@/components/CustomerReviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main>
        <HeroSection />
        <TrustSignals />
        <PricingPlans />
        <WhyChooseUs />
        <ServiceArea />
        <CustomerReviews />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
