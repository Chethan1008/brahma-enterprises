
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import FeaturedServiceSections from "@/components/FeaturedServiceSections";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <FeaturedServiceSections />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
