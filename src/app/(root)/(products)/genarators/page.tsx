import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";

const GenaratorsPage = () => {
  return (
    <div>
      <SectionBanner
        heading="Genarators"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ProductsCard category="genarator" />
    </div>
  );
};

export default GenaratorsPage;
