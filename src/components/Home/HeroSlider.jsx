"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "@/styles/HeroSlider.css";
import { Button } from "../ui/button";
import heroSliderData from "@/lib/constants/heroSliderData";

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {heroSliderData?.map((item) => (
        <SwiperSlide key={item?.id}>
          <div
            className="relative w-full h-[350px] lg:h-[500px] 2xl:h-[750px] bg-cover bg-center"
            style={{ backgroundImage: `url(${item?.img})` }}
          >
            <div className="absolute inset-0 bg-black/50 bg-opacity-20 flex items-center">
              <div
                className={`w-full max-w-3xl mx-auto flex flex-col justify-center items-center text-center px-4 ${item?.class}`}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-base md:text-lg mb-6 break-words">
                  {item?.description}
                </p>
                <Link href={item?.url}>
                  <Button variant="outline"> {item?.button_text}</Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
