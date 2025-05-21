import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import SectionBanner from "@/components/ui/SectionBanner";
import genaratorData from "@/lib/constants/genaratorData";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";
import Image from "next/image";

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
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {genaratorData?.map((genarator) => {
          const {
            id,
            product_name,
            image,
            Frequency,
            Power,
            rated_voltage,
            warranty,
          } = genarator;

          return (
            <Card
              data-aos="fade-up"
              key={id}
              className="group block bg-white dark:bg-slate-800 overflow-hidden transition-transform py-0"
            >
              <div className="relative w-full h-60 2xl:h-72 overflow-hidden">
                <Image
                  src={image}
                  alt={product_name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {product_name}
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-white/90">
                  <div className="col-span-2 space-y-2">
                    <div className="text-sm space-y-2">
                      <p>
                        <span className="font-semibold">Frequency: </span>
                        {Frequency}
                      </p>
                      <p>
                        <span className="font-semibold">Power: </span>
                        {Power}
                      </p>
                      <p>
                        <span className="font-semibold">Voltage: </span>
                        {rated_voltage}
                      </p>
                      <p>
                        <span className="font-semibold">Warranty: </span>
                        {warranty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default GenaratorsPage;
