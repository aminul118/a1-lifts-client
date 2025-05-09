import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";

const LiftsPage = () => {
  return (
    <div>
      <SectionBanner
        heading="Lifts"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ProductsCard category="lift" />
    </div>
  );
};

export default LiftsPage;
