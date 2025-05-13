"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import certificationImageData from "@/lib/constants/certificationImageData";

const CertificationGallary = () => {
  const [index, setIndex] = useState(-1);

  return (
    <Container>
      <SectionTitle title=" Certifications" />
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {certificationImageData.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setIndex(idx)}
            className="w-full h-[420px] relative overflow-hidden group cursor-pointer "
          >
            {/* Image */}
            <Image
              height={photo.height}
              width={photo.width}
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Hover Text */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-full left-0 z-20 flex items-center justify-center flex-col text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-[1.5rem] font-bold text-white">
                {photo.title}
              </h1>
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-2">
                {photo.description}
              </p>
            </div>

            {/* Bottom Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

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

export default CertificationGallary;
