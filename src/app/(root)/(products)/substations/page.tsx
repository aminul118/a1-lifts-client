import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";

const SubstationsPage = () => {
  return (
    <div>
      <SectionBanner
        heading="Substrations"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ProductsCard category="substration" />
    </div>
  );
};

export default SubstationsPage;
