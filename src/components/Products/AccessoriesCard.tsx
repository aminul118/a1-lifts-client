import liftAccessories from "@/lib/constants/liftAccessories";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type Accessories = {
  category: string;
  className: string;
  grid?: string;
};

const AccessoriesCard = ({ category, className, grid }: Accessories) => {
  const accessories = liftAccessories.filter(
    (product) => product.category === category
  );
  console.log(accessories);
  return (
    <Container>
      <p className="capitalize text-center py-6 text-2xl font-semibold">
        {category}
      </p>
      <div className={grid}>
        {accessories.map((product, i) => (
          <Card key={i} className="p-0">
            <CardContent className="p-0">
              <Image
                src={product.product_img}
                alt={product.model}
                height={200}
                width={400}
                className={className}
              />
              <p className="text-center py-2">{product.model}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AccessoriesCard;
