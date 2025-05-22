import ManualDownload from "@/components/common/ManualDownload";
import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "HBAC - A1 Lifts and Engineering",
  description:
    "Explore top-quality generators from A1 Lifts and Engineering. We provide reliable generator installation, servicing, and maintenance solutions for residential and commercial properties in Bangladesh.",
  keywords:
    "generators Bangladesh, generator products Bangladesh, diesel generators, generator installation Bangladesh, generator maintenance, commercial generators Bangladesh, residential generator solutions, A1 Lifts generators, generator servicing Bangladesh, A1 Lifts power products",
  image: "/assets/screenshots/hero.png",
  path: "generators",
});

//>> SEO END

const HbacPage = () => {
  return (
    <div>
      <SectionBanner
        heading="HVAC"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />
      <ManualDownload filePath="/assets/pdf/hvac-manual.pdf" />
      <ProductsCard category="hvac" />
    </div>
  );
};

export default HbacPage;
