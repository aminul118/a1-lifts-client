import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Substations - A1 Lifts and Engineering",
  description:
    "Discover reliable and high-quality substation solutions from A1 Lifts and Engineering. We offer installation, maintenance, and servicing of substations for both residential and commercial properties in Bangladesh.",
  keywords:
    "substations Bangladesh, substation installation Bangladesh, electrical substation services, substation maintenance, A1 Lifts substation solutions, industrial substation services, power system solutions Bangladesh, substation servicing Bangladesh, substation products Bangladesh, A1 Lifts power solutions",
  image: "/assets/screenshots/hero.png",
  path: "substations",
});

//>> SEO END

const SubstationsPage = () => {
  return (
    <div>
      <SectionBanner
        heading="Substations"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ProductsCard category="substration" />
    </div>
  );
};

export default SubstationsPage;
