import productsData, { Product, SubCategory } from "@/lib/constants/products";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/Container";
import Image from "next/image";

type Props = {
  category?: string;
  subcategory?: string;
};

const isSubCategoryArray = (
  items: Product[] | SubCategory[]
): items is SubCategory[] => {
  return (items as SubCategory[])[0]?.products !== undefined;
};

const ProductsCard = ({ category, subcategory }: Props) => {
  if (!category) {
    return <p className="text-center">Please select a category.</p>;
  }

  const matchedCategory = productsData.find(
    (item) => item.title.toLowerCase() === category.toLowerCase()
  );

  if (!matchedCategory) {
    return (
      <p className="text-center">No products found for category: {category}</p>
    );
  }

  const products = matchedCategory.products;

  if (isSubCategoryArray(products)) {
    // Category has subcategories

    if (subcategory) {
      // Show products only from the selected subcategory
      const matchedSub = products.find(
        (sub) => sub.title.toLowerCase() === subcategory.toLowerCase()
      );

      if (!matchedSub) {
        return (
          <p className="text-center">
            No products found in {category} &gt; {subcategory}
          </p>
        );
      }

      return (
        <Container>
          {/* <SectionTitle title={subcategory} /> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {matchedSub.products.map((product, i) => (
              <Card key={i} className="p-0">
                <CardContent className="p-0">
                  <Image
                    src={product.product_img}
                    alt={product.product_name}
                    height={400}
                    width={400}
                    className="h-[180px] lg:h-[400px] 2xl:h-[500px] object-cover"
                  />
                  <p className="text-center py-2">{product.product_name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      );
    }

    // Show all products from all subcategories (merged into one list)
    const allProducts: Product[] = products.flatMap((sub) => sub.products);

    return (
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product, i) => (
          <Card key={i} className="p-0">
            <CardContent className="p-0">
              <Image
                src={product.product_img}
                alt={product.product_name}
                height={400}
                width={400}
                className="h-[180px] lg:h-[400px] 2xl:h-[500px] object-cover"
              />
              <p className="text-center py-2">{product.product_name}</p>
            </CardContent>
          </Card>
        ))}
      </Container>
    );
  }

  // Flat product array (no subcategories)
  return (
    <Container className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {(products as Product[]).map((product, i) => (
        <Card key={i} className="p-0">
          <CardContent className="p-0">
            <Image
              src={product.product_img}
              alt={product.product_name}
              height={400}
              width={400}
              className="h-[180px] lg:h-[400px] 2xl:h-[500px] object-cover"
            />
            <p className="text-center py-2">{product.product_name}</p>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ProductsCard;
