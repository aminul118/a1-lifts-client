import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import FAQ from "@/components/Home/FAQ";
import HeroSlider from "@/components/Home/HeroSlider";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSlider />
      <WhyA1Lifts />
      <FAQ />
    </div>
  );
};

export default HomePage;
