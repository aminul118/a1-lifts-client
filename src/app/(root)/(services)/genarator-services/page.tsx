import ServicesCard from "@/components/common/ServicesCard";
import WhyUsForGenaratorServices from "@/components/GenaratorServices/WhyUsForGenaratorServices";
import SectionBanner from "@/components/ui/SectionBanner";
import generatorServices from "@/lib/constants/generatorServices";

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
      <WhyUsForGenaratorServices />
    </div>
  );
};

export default GenaratorServices;
