import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { productsHoverMenu } from "@/lib/constants/hoverMenu";
import { Card } from "../ui/card";

const OurProducts = () => {
  return (
    <Container>
      <SectionTitle title="Our Products Menu" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {productsHoverMenu?.map((menu, i) => (
          <Card key={i} className="py-0">
            <Link
              href={menu.href}
              className="group block bg-white dark:bg-slate-800 overflow-hidden transition-transform "
            >
              <div className="relative w-full h-60 2xl:h-72 overflow-hidden">
                <Image
                  src={menu.image}
                  alt={`${menu.name} of A1 lifts and enginerring`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-6">
                <h3 className="text-lg font-semibold  group-hover:text-blue-600 transition">
                  {menu.name}
                </h3>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default OurProducts;
