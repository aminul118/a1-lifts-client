import AboutUs from "@/components/About/AboutUs";
import MissionVission from "@/components/About/MissionVission";
import OurManagementTeam from "@/components/About/OurManagementTeam";
import ProfessionalService from "@/components/About/ProfessionalService";
import AboutCompany from "@/components/common/AboutCompany";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import SectionBanner from "@/components/ui/SectionBanner";

const AboutPage = () => {
  return (
    <>
      <SectionBanner
        heading="About Us"
        description="A1 Lifts & Engineering is a leading provider of vertical transport and energy solutions. We specialize in the supply, installation, and servicing of lifts, generators, and substations across industries."
        backgroundImagePath="/assets/backgrounds/building-3.png"
        className="text-white"
      />
      <AboutCompany />
      <AboutUs />
      <MissionVission />
      <OurManagementTeam />
      <ProfessionalService />
      <WhyA1Lifts />
    </>
  );
};

export default AboutPage;
