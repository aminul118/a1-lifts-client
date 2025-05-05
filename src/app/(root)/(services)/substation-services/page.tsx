import ServicesCard from "@/components/common/ServicesCard";
import SectionBanner from "@/components/ui/SectionBanner";
import substrationServices from "@/lib/constants/substrationServices";

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
