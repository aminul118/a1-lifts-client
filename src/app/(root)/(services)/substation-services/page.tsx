import ServicesCard from "@/components/common/ServicesCard";
import SectionBanner from "@/components/ui/SectionBanner";
import substrationServices from "@/lib/constants/substrationServices";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Substation Services & Maintenance | A1 Lifts and Engineering",
  description:
    "A1 Lifts and Engineering offers expert substation services and maintenance in Bangladesh. We provide reliable power solutions for residential, commercial, and industrial properties.",
  keywords: [
    "substation services Bangladesh",
    "substation maintenance Bangladesh",
    "electrical substation solutions",
    "substation installation Bangladesh",
    "power substation maintenance",
    "substation servicing Bangladesh",
    "energy solutions Bangladesh",
    "electrical system maintenance",
    "A1 Lifts substation services",
    "A1 Lifts power solutions",
  ],
  image: "/assets/seo/hero.png",
  path: "substation-services",
});

//>> SEO END

const SubstationServicesPage = () => {
  return (
    <div>
      <SectionBanner
        heading="Substation Services & Maintenance"
        description="Power your property with expert solutions from A1 Lifts & Engineering"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ServicesCard services={substrationServices} />
    </div>
  );
};

export default SubstationServicesPage;
