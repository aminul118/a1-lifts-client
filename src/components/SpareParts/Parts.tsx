import partsData from "@/lib/constants/partsData";
import Image from "next/image";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";
import { PackageSearch } from "lucide-react";

const Parts = ({ category }: { category: string }) => {
  const categoryData = partsData.find((item) => item.category === category);
  const products = categoryData?.products || [];

  if (products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-96 font-semibold md:text-2xl gap-6">
        <PackageSearch size={80} />
        <p className="text-center"> No products found</p>
      </div>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card data-aos="fade-up" key={product.id}>
            <CardContent>
              <Image
                src={product.product_img}
                alt={product.product_name}
                width={400}
                height={400}
              />
              <p className="text-center font-semibold">
                {product.product_name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Parts;
