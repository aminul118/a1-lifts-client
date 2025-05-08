import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { servicesHoverMenu } from "@/lib/constants/hoverMenu";

const OurServices = () => {
  return (
    <Container backgroundColor="2xl:h-[800px]">
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {servicesHoverMenu?.map((menu, i) => (
          <Link
            href={menu.href}
            key={i}
            className="group block bg-white dark:bg-slate-800 overflow-hidden transition-transform "
          >
            <div className="relative w-full h-60 2xl:h-72 overflow-hidden">
              <Image
                src={menu.image}
                alt={menu.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-6">
              <p className="text-lg font-semibold  group-hover:text-blue-600 transition">
                {menu.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default OurServices;
