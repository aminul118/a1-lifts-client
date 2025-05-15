import AboutUs from "@/components/About/AboutUs";
import CertificationGallary from "@/components/About/CertificationGallary";
import MissionVission from "@/components/About/MissionVission";
import OurManagementTeam from "@/components/About/OurManagementTeam";
import ProfessionalService from "@/components/About/ProfessionalService";
import AboutCompany from "@/components/common/AboutCompany";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "About A1 Lifts and Engineering - Leading Lift Company in Bangladesh",
  description:
    "Learn more about A1 Lifts and Engineering — a trusted name in Bangladesh for elevators, escalators, generators, and substations. Discover our mission, vision, leadership team, and commitment to quality service.",
  keywords:
    "about A1 Lifts and Engineering, best lift company in Bangladesh, lift company in Dhaka, lift suppliers in Bangladesh, lift and escalator company, generator company Bangladesh, substation supplier, elevator installation, A1 Lifts mission and vision, A1 Lifts team, engineering company Bangladesh",
  image: "/assets/screenshots/hero.png",
  path: "about",
});

//>> SEO End

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
      <CertificationGallary />
      <ProfessionalService />
      <WhyA1Lifts />
    </>
  );
};

export default AboutPage;
