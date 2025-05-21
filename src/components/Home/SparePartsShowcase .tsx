"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import partsData from "@/lib/constants/partsData";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "../ui/card";

const SparePartsShowcase = () => {
  // Flatten all products from all categories
  const allProducts = partsData.flatMap((category) => category.products);

  return (
    <section className="container mx-auto">
      <SectionTitle title="Spare Parts" />
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
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
            <Card className="rounded-none">
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src={product.product_img}
                  alt={product.product_name}
                  width={300}
                  height={300}
                />
                <p className="text-center font-semibold">
                  {product.product_name}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SparePartsShowcase;
