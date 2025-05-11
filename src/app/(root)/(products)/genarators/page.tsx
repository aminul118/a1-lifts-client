import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Generators",
  description:
    "Explore top-quality generators from A1 Lifts and Engineering. We provide reliable generator installation, servicing, and maintenance solutions for residential and commercial properties in Bangladesh.",
  keywords: [
    "generators Bangladesh",
    "generator products Bangladesh",
    "diesel generators",
    "generator installation Bangladesh",
    "generator maintenance",
    "commercial generators Bangladesh",
    "residential generator solutions",
    "A1 Lifts generators",
    "generator servicing Bangladesh",
    "A1 Lifts power products",
  ],
  image: "/assets/screenshots/hero.png",
  path: "generators",
});

//>> SEO END

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
