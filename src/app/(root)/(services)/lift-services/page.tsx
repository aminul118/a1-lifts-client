import Benifits from "@/components/LiftServices/Benifits";
import LiftServices from "@/components/LiftServices/LiftServices";
import SectionBanner from "@/components/ui/SectionBanner";

const LiftService = () => {
  return (
    <div>
      <SectionBanner
        heading="Lifts Installation & Maintenance"
        backgroundImagePath="/assets/backgrounds/elevetor.webp"
        className="text-white"
      />
      <Benifits />
      <LiftServices />
    </div>
  );
};

export default LiftService;
