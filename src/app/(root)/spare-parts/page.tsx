import Parts from "@/components/SpareParts/Parts";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Spare Parts - A1 Lifts and Engineering",
  description:
    "Explore high-quality spare parts for lifts, escalators, and generators from A1 Lifts and Engineering. We provide a wide range of reliable replacement parts for residential and commercial needs in Bangladesh.",
  keywords:
    "spare parts Bangladesh, lift spare parts, elevator spare parts, generator spare parts, A1 Lifts spare parts, escalator spare parts, replacement parts Bangladesh, A1 Lifts products, elevator parts Bangladesh, lift maintenance parts",
  image: "/assets/screenshots/hero.png",
  path: "spare-parts",
});

//>> SEO End

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
