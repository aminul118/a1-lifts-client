import ServicesCard from "@/components/common/ServicesCard";
import SectionBanner from "@/components/ui/SectionBanner";
import engineeringServices from "@/lib/constants/engineeringServices";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Engineering Solutions | A1 Lifts and Engineering Bangladesh",
  description:
    "Explore expert engineering solutions by A1 Lifts and Engineering in Bangladesh. We provide top-tier services for electrical substations, generators, and other power systems for residential and commercial projects.",
  keywords: [
    "engineering solutions Bangladesh",
    "electrical substation service",
    "generator installation Bangladesh",
    "power system services",
    "A1 Lifts engineering services",
    "substation company in Bangladesh",
    "diesel generator supplier",
    "commercial electrical engineering",
    "generator maintenance",
    "A1 Lifts power solutions",
  ],
  image: "/assets/seo/hero.png",
  path: "engineering-solution",
});

//>> SEO END

const EnginerringSolution = () => {
  return (
    <div>
      <SectionBanner
        heading="Engineering Solution"
        description="Power your property with expert solutions from A1 Lifts & Engineering"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ServicesCard services={engineeringServices} />
    </div>
  );
};

export default EnginerringSolution;
