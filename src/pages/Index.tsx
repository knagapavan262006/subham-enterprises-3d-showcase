import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import DreamHomeSection from "@/components/DreamHomeSection";
import InteriorSection from "@/components/InteriorSection";
import FunctionSection from "@/components/FunctionSection";
import OtherServicesSection from "@/components/OtherServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <DreamHomeSection />
      <InteriorSection />
      <FunctionSection />
      <OtherServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
