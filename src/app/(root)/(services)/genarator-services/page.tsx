import ServicesForGenarator from "@/components/GenaratorServices/ServicesForGenarator";
import WhyUsForGenaratorServices from "@/components/GenaratorServices/WhyUsForGenaratorServices";

import SectionBanner from "@/components/ui/SectionBanner";

const GenaratorServices = () => {
  return (
    <div>
      <SectionBanner
        heading="Generator Installation & Maintenance"
        description="Power your property with expert solutions from A1 Lifts & Engineering"
        className="text-white"
        backgroundImagePath="/assets/images/services/genarator-service1.jpg"
      />
      <WhyUsForGenaratorServices />
      <ServicesForGenarator />
    </div>
  );
};

export default GenaratorServices;
