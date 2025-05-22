import GenaratorsCard from "@/components/Products/GenaratorsCard";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/components/ui/Container";
import EngineOverhauling from "@/components/GenaratorServices/EngineOverhauling";

//>> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: "Generators - A1 Lifts and Engineering",
  description:
    "Explore top-quality generators from A1 Lifts and Engineering. We provide reliable generator installation, servicing, and maintenance solutions for residential and commercial properties in Bangladesh.",
  keywords:
    "generators Bangladesh, generator products Bangladesh, diesel generators, generator installation Bangladesh, generator maintenance, commercial generators Bangladesh, residential generator solutions, A1 Lifts generators, generator servicing Bangladesh, A1 Lifts power products",
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
        backgroundImagePath="/assets/backgrounds/genarator.jpg"
      />
      <Container>
        <Tabs defaultValue="industry">
          <TabsList className="max-w-lg">
            <TabsTrigger value="industry">Industry</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="rental">Rental</TabsTrigger>
            <TabsTrigger value="engine-overhauling">
              Engine Overhauling
            </TabsTrigger>
          </TabsList>
          <TabsContent value="industry">
            <GenaratorsCard category="industry" />
          </TabsContent>
          <TabsContent value="residential">
            <GenaratorsCard category="residential" />
          </TabsContent>
          <TabsContent value="rental">
            <GenaratorsCard category="rental" />
          </TabsContent>
          <TabsContent value="engine-overhauling">
            <EngineOverhauling />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default GenaratorsPage;
