"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Toggle";
import Image from "next/image";
import {
  productsHoverMenu,
  servicesHoverMenu,
} from "@/lib/constants/hoverMenu";
import Logo from "./Logo";

const DesktopNavbar = () => {
  const [isServicesHover, setisServicesHover] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);

  return (
    <header className="hidden md:block w-full bg-slate-800 fixed z-50 py-2 top-0 ">
      <nav className="relative container mx-auto">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Logo size={50} />

          <ul className="flex items-center gap-6 lg:gap-10 text-[1rem]">
            <li>
              <Link href="/">
                <div className="flex items-center hover:text-blue-500 gap-2 text-white">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  About
                </div>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsProductHover(true)}
              onMouseLeave={() => setIsProductHover(false)}
            >
              <Link href="/products">
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white">
                  Products
                  <IoIosArrowUp
                    className={`transition-transform ${
                      isProductHover && "rotate-180"
                    }`}
                  />
                </div>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setisServicesHover(true)}
              onMouseLeave={() => setisServicesHover(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white">
                Services
                <IoIosArrowUp
                  className={`transition-transform ${
                    isServicesHover && "rotate-180"
                  }`}
                />
              </div>
            </li>
            <li>
              <Link href="/spare-parts">
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  Spare Parts
                </div>
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <ModeToggle />

            <Link href="/contact">
              <Button variant="outline">Contact</Button>
            </Link>
          </div>
        </div>

        {/* Mega Menu for Products*/}
        <div
          className={`absolute top-full left-0 w-full backdrop-blur-md transition-all duration-300 z-40 ${
            isProductHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 2xl:gap-10">
            {productsHoverMenu?.map((menu, i) => (
              <Link
                href={menu.href}
                key={i}
                className="group block bg-slate-800 shadow-md rounded-xl overflow-hidden transition-transform hover:shadow-xl"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 bg-slate-900"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-white group-hover:text-blue-600 transition">
                    {menu.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mega Menu for services*/}
        <div
          className={`absolute top-full left-0 w-full backdrop-blur-md transition-all duration-300 z-40 ${
            isServicesHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setisServicesHover(true)}
          onMouseLeave={() => setisServicesHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-10">
            {servicesHoverMenu?.map((menu, i) => (
              <Link
                href={menu.href}
                key={i}
                className="group block bg-slate-800 shadow-md rounded-xl overflow-hidden transition-transform hover:shadow-xl"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={`${menu.name} of A1 lifts and engineering`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-white group-hover:text-blue-600 transition">
                    {menu.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;
