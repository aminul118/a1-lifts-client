import ServicesCard from "@/components/common/ServicesCard";
import Benifits from "@/components/LiftServices/Benifits";
import SectionBanner from "@/components/ui/SectionBanner";
import liftServices from "@/lib/constants/liftServices";

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
