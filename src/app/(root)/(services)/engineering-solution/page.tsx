import ServicesCard from "@/components/common/ServicesCard";
import SectionBanner from "@/components/ui/SectionBanner";
import engineeringServices from "@/lib/constants/engineeringServices";

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
