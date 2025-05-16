"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "../ui/card";
import productsData, { Product, SubCategory } from "@/lib/constants/products";
import { useEffect, useState } from "react";

// Type guard to check if array is SubCategory[]
const isSubCategoryArray = (
  products: Product[] | SubCategory[]
): products is SubCategory[] => {
  return (products as SubCategory[])[0]?.products !== undefined;
};

const ProductShowcase = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  // Flatten all products from all categories, including subcategories
  const allProducts: (Product & { type: string })[] = productsData.flatMap(
    (category) => {
      if (isSubCategoryArray(category.products)) {
        // category.products is SubCategory[]
        return category.products.flatMap((sub) =>
          sub.products.map((product) => ({
            ...product,
            type: `${category.title} > ${sub.title}`,
          }))
        );
      } else {
        // category.products is Product[]
        return category.products.map((product) => ({
          ...product,
          type: category.title,
        }));
      }
    }
  );

  return (
    <section className="container mx-auto">
      <SectionTitle title="Products Showcase" />
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {allProducts.map((product, i) => (
          <SwiperSlide key={i}>
            <Card className="rounded-none pt-0">
              <CardContent className="flex flex-col items-center p-0">
                <Image
                  src={product.product_img}
                  alt={product.product_name}
                  width={300}
                  height={300}
                  className="h-[180px] lg:h-[400px] 2xl:h-[500px] object-cover"
                />
                <p className="text-center font-semibold mt-4">
                  {product.product_name}
                </p>
                <p className="text-center text-sm text-gray-500 capitalize">
                  {product.type}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductShowcase;
