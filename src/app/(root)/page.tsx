import OurServices from "@/components/common/OurServices";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import ContactCards from "@/components/Home/ContactCards";
import FAQ from "@/components/Home/FAQ";
import HeroSlider from "@/components/Home/HeroSlider";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <OurServices />
      <ContactCards />
      <WhyA1Lifts />
      <FAQ />
    </>
  );
};

export default HomePage;
