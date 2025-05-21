import ServicesCard from "@/components/common/ServicesCard";
import GenaratorRent from "@/components/GenaratorServices/GenaratorRent";
import WhyUsForGenaratorServices from "@/components/GenaratorServices/WhyUsForGenaratorServices";
import SectionBanner from "@/components/ui/SectionBanner";
import generatorServices from "@/lib/constants/generatorServices";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Generator Installation & Maintenance - A1 Lifts and Engineering",
  description:
    "A1 Lifts and Engineering provides expert generator installation and maintenance services in Bangladesh. Ensure your property has reliable power systems with our tailored solutions for residential and commercial needs.",
  keywords:
    "generator installation Bangladesh, generator maintenance Bangladesh, diesel generator services, generator repair Bangladesh, A1 Lifts generator services, generator supplier Bangladesh, power backup solutions Bangladesh, generator servicing, residential generator installation, commercial generator solutions, A1 Lifts power services",
  image: "/assets/screenshots/hero.png",
  path: "generator-services",
});

//>> SEO END

const GenaratorServices = () => {
  return (
    <div>
      <SectionBanner
        heading="Generator Installation & Maintenance"
        description="Power your property with expert solutions from A1 Lifts & Engineering"
        className="text-white"
        backgroundImagePath="/assets/images/services/genarator-service1.jpg"
      />
      <ServicesCard services={generatorServices} />
      <GenaratorRent />
      <WhyUsForGenaratorServices />
    </div>
  );
};

export default GenaratorServices;
