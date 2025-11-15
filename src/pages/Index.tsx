import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BotMarketplace from "@/components/BotMarketplace";
import CustomBotDevelopment from "@/components/CustomBotDevelopment";
import WebsiteServices from "@/components/WebsiteServices";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GeminiChatbot from "@/components/GeminiChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <BotMarketplace />
        <CustomBotDevelopment />
        <WebsiteServices />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <GeminiChatbot />
    </div>
  );
};

export default Index;
