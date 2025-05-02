import OurServices from "@/components/common/OurServices";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import FAQ from "@/components/Home/FAQ";
import HeroSlider from "@/components/Home/HeroSlider";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <OurServices />
      <WhyA1Lifts />
      <FAQ />
    </>
  );
};

export default HomePage;
