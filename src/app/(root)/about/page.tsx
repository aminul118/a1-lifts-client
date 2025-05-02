import AboutCompany from "@/components/common/AboutCompany";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import SectionBanner from "@/components/ui/SectionBanner";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <SectionBanner
        heading="About Us"
        description="A1 Lifts & Engineering is a leading provider of vertical transport and energy solutions. We specialize in the supply, installation, and servicing of lifts, generators, and substations across industries."
        backgroundImagePath="/assets/backgrounds/building-3.png"
      />
      <AboutCompany />
      <WhyA1Lifts />
    </div>
  );
};

export default AboutPage;
