import ServicesCard from "@/components/common/ServicesCard";
import Benifits from "@/components/LiftServices/Benifits";
import SectionBanner from "@/components/ui/SectionBanner";
import liftServices from "@/lib/constants/liftServices";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Lift Installation & Maintenance | A1 Lifts and Engineering",
  description:
    "A1 Lifts and Engineering provides expert lift installation and maintenance services in Bangladesh. We specialize in residential and commercial lifts, ensuring reliable vertical transport solutions for every need.",
  keywords: [
    "lift installation Bangladesh",
    "lift maintenance Bangladesh",
    "elevator installation",
    "elevator maintenance Bangladesh",
    "A1 Lifts elevator services",
    "residential lift installation",
    "commercial lift installation",
    "elevator servicing",
    "A1 Lifts lift services",
    "vertical transport solutions Bangladesh",
    "hospital lift installation",
  ],
  image: "/assets/seo/hero.png",
  path: "lift-services",
});

//>> SEO END

const LiftService = () => {
  return (
    <div>
      <SectionBanner
        heading="Lifts Installation & Maintenance"
        backgroundImagePath="/assets/backgrounds/elevetor.webp"
        className="text-white"
      />
      <ServicesCard services={liftServices} />
      <Benifits />
    </div>
  );
};

export default LiftService;
