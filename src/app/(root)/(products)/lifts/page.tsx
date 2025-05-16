import ProductsCard from "@/components/Products/ProductCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <>
      <SectionBanner
        heading="Lifts"
        className="text-white"
        backgroundImagePath="/assets/backgrounds/electrical-substation.jpeg"
      />

      <div className="py-8 lg:py-14 xl:py-16 2xl:py-24">
        <Tabs defaultValue="lift">
          {/* Tab lists */}
          <TabsList className="max-w-lg ">
            <TabsTrigger value="lift">All</TabsTrigger>
            <TabsTrigger value="residence">Residence</TabsTrigger>
            <TabsTrigger value="hospital">Hospital</TabsTrigger>
          </TabsList>
          {/* Content */}
          <TabsContent value="lift">
            {/* All Lifts */}
            <ProductsCard category="lift" />
          </TabsContent>
          <TabsContent value="residence">
            {/* Passenger Lifts */}
            <ProductsCard category="lift" subcategory="residence" />
          </TabsContent>
          <TabsContent value="hospital">
            <ProductsCard category="lift" subcategory="hospital" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default LiftsPage;
