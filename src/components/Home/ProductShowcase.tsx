"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import partsData from "@/lib/constants/partsData";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "../ui/card";

const ProductShowcase = () => {
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
        {partsData?.map((data, i) => (
          <SwiperSlide key={i}>
            <Card className="rounded-none">
              <CardContent>
                <Image
                  src={data?.product_img}
                  alt={data?.product_name}
                  width={400}
                  height={400}
                />
                <p className="text-center font-semibold">
                  {data?.product_name}
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
