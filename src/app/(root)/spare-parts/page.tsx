import Parts from "@/components/SpareParts/Parts";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/components/ui/Container";

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
      <Container>
        <Tabs defaultValue="lifts">
          <TabsList className="max-w-lg">
            <TabsTrigger value="lifts">Lifts</TabsTrigger>
            <TabsTrigger value="genarators">Genarator</TabsTrigger>
            <TabsTrigger value="substations">Substation</TabsTrigger>
            <TabsTrigger value="hvacs">HVAC</TabsTrigger>
          </TabsList>
          <TabsContent value="lifts">
            <Parts category="lift" />
          </TabsContent>
          <TabsContent value="genarators">
            <Parts category="genarators" />
          </TabsContent>
          <TabsContent value="substations">
            <Parts category="substations" />
          </TabsContent>
          <TabsContent value="hvacs">
            <Parts category="hvacs" />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default SpareParts;
