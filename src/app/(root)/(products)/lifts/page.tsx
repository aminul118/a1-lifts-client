import ProductsCard from "@/components/Products/ProductCard";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccessoriesCard from "@/components/Products/AccessoriesCard";
import LiftVideo from "@/components/Home/LiftVideo";
import ManualDownload from "@/components/common/ManualDownload";

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
      <LiftVideo />
      <div className="py-8 lg:py-14 xl:py-16 2xl:py-24 px-1">
        <Tabs defaultValue="lift">
          {/* Tab lists */}
          <TabsList className="max-w-lg">
            <TabsTrigger value="lift">All</TabsTrigger>
            <TabsTrigger value="residence">Residence</TabsTrigger>
            <TabsTrigger value="hospital">Hospital</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
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
          <TabsContent value="accessories">
            <AccessoriesCard
              className="h-[120px] object-cover bg-white"
              category="celling"
              grid="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6 gap-6"
            />
            <AccessoriesCard
              className="h-[200px] lg:h-[300px] 2xl:h-[440px]  object-cover bg-white"
              category="landing-door"
              grid="grid grid-cols-2 lg:grid-cols-4 gap-6"
            />
          </TabsContent>
          <TabsContent value="manual">
            <ManualDownload filePath="/assets/pdf/Cabin_design_Webstar.pdf" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default LiftsPage;
