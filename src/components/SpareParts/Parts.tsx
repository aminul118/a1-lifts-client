import partsData from "@/lib/constants/partsData";
import Image from "next/image";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";

const Parts = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {partsData.map((parts) => (
          <Card data-aos="fade-up" key={parts.id}>
            <CardContent>
              <Image
                src={parts.product_img}
                alt={parts.product_name}
                width={400}
                height={400}
              />
              <p className="text-center font-semibold">{parts.product_name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Parts;
