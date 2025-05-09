import productsData from "@/lib/constants/products";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/Container";
import Image from "next/image";

const ProductsCard = ({ category }: { category: string }) => {
  const products = productsData
    .filter((item) => item.title === category.toLowerCase())
    .flatMap((item) => item.products);
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <Card key={i}>
          <CardContent>
            <Image
              src={product.product_img}
              alt={product.product_name}
              height={400}
              width={400}
            />
            <p className="text-center">{product.product_name}</p>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
export default ProductsCard;
