import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Lifts - A1 Lifts and Engineering ",
  description:
    "Explore a wide range of high-quality lifts from A1 Lifts and Engineering. We offer lift installation, maintenance, and servicing solutions for both residential and commercial properties in Bangladesh.",
  keywords:
    "lifts Bangladesh, elevators Bangladesh, lift installation Bangladesh, elevator servicing, commercial lifts Bangladesh, residential lift solutions, A1 Lifts elevator products, lift maintenance Bangladesh, A1 Lifts lifts, vertical transport solutions Bangladesh",
  image: "/assets/screenshots/hero.png",
  path: "lifts",
});

//>> SEO END

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
