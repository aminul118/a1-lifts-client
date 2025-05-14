"use client";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import certificationImageData from "@/lib/constants/certificationImageData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "@/styles/customSwipper.css";

const CertificationGallery = () => {
  const [index, setIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <Container>
      <SectionTitle title="Certifications" />

      {/* Swiper Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 4,
          },
        }}
      >
        {certificationImageData?.map((photo, idx) => (
          <SwiperSlide
            key={idx}
            onClick={() => setIndex(idx)}
            className="w-[300px] h-[420px] relative overflow-hidden group cursor-pointer"
          >
            <Image
              height={photo.height}
              width={photo.width}
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-xl font-bold text-white">{photo.title}</h1>
              <p className="text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {photo.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={certificationImageData.map((slide) => ({
          src: slide.src,
          alt: slide.title,
        }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
      />
    </Container>
  );
};

export default CertificationGallery;
