import Parts from "@/components/SpareParts/Parts";
import SectionBanner from "@/components/ui/SectionBanner";

const SpareParts = () => {
  return (
    <div>
      <SectionBanner
        heading="Spare Parts"
        backgroundImagePath="/assets/images/services/elevator-maintenance.png"
        className="text-white"
      />
      <Parts />
    </div>
  );
};

export default SpareParts;
