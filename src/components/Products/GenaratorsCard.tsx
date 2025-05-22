import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import genaratorData from "@/lib/constants/genaratorData";
import Image from "next/image";

const GenaratorsCard = ({ category }: { category: string }) => {
  // Find the matching category
  const genaratorCategory = genaratorData.find(
    (item) => item.category === category
  );

  // If not found, return a message
  if (!genaratorCategory) {
    return (
      <Container className="py-10">
        <p className="text-center text-lg text-red-600">
          No data found for category .
        </p>
      </Container>
    );
  }

  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {genaratorCategory.products.map(
        ({
          id,
          product_name,
          image,
          Frequency,
          Power,
          rated_voltage,
          warranty,
        }) => (
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
          </Card>
        )
      )}
    </Container>
  );
};

export default GenaratorsCard;
