import OurServices from "@/components/common/OurServices";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import ContactCards from "@/components/Home/ContactCards";
import FAQ from "@/components/Home/FAQ";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductShowcase from "@/components/Home/ProductShowcase";
import ServicesSection from "@/components/Home/ServicesSection";
import WorkSteps from "@/components/Home/WorkSteps";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <OurServices />
      <ProductShowcase />
      <ServicesSection />
      <WhyA1Lifts />
      <WorkSteps />
      <FAQ />
      <ContactCards />
    </>
  );
};

export default HomePage;
