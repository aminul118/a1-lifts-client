"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Toggle";
import Image from "next/image";
import hoverMenu from "@/lib/constants/hoverMenu";

const DesktopNavbar = () => {
  const [isProductHover, setIsProductHover] = useState(false);

  return (
    <header className="hidden md:block w-full bg-slate-800 fixed z-50 py-2 top-0 ">
      <nav className="relative container mx-auto">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" passHref>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-white">A1 Lifts</p>
            </div>
          </Link>

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
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white">
                Services
                <IoIosArrowUp
                  className={`transition-transform ${
                    isProductHover && "rotate-180"
                  }`}
                />
              </div>
            </li>
            <li>
              <Link href="/vision">
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  Vision
                </div>
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="destructive">
              <Link href="/contact">
                <div className="flex items-center gap-2 text-white">
                  Contact
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mega Menu */}
        <div
          className={`absolute top-full left-0 w-full backdrop-blur-md transition-all duration-300 z-40 ${
            isProductHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-10">
            {hoverMenu?.map((menu, i) => (
              <Link
                href={menu.href}
                key={i}
                className="group block bg-slate-950 shadow-md rounded-xl overflow-hidden transition-transform hover:shadow-xl"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={menu.name}
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
