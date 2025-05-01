"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Home, Info, PhoneCall, Settings2, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Toggle";
import { ecoSystem, moreProducts } from "@/lib/constants/navMenu";

const DesktopNavbar = () => {
  const [isProductHover, setIsProductHover] = useState(false);

  const handleMenuClick = () => {
    setIsProductHover(true);
  };

  return (
    <header className="hidden md:block w-full bg-slate-900 fixed z-50 py-2 top-0 ">
      <nav className="relative container mx-auto shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" passHref>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-white">Point</p>
            </div>
          </Link>

          <ul className="flex items-center gap-6 text-[1rem]">
            <li>
              <Link href="/">
                <div className="flex items-center hover:text-blue-500 gap-2 text-white">
                  <Home className="text-[1.2rem]" />
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  <Info className="text-[1.2rem]" />
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
                <Settings2 className="text-[1.2rem]" />
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
                  <Target className="text-[1.2rem]" />
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
                  <PhoneCall className="text-[1.2rem]" />
                  Contact
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mega Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 z-40 ${
            isProductHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">
                More Products
              </h3>
              {moreProducts.map((item, idx) => (
                <Link href={item.link} key={idx}>
                  <div
                    onClick={handleMenuClick}
                    className="flex gap-4 items-start group"
                  >
                    {item.icon}
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                      <span className="text-orange-400 mt-2 flex items-center gap-1 text-sm">
                        Call to action
                        <MdOutlineArrowRightAlt className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">Ecosystem</h3>
              {ecoSystem.map((item, idx) => (
                <Link href={item.link} key={idx}>
                  <div
                    onClick={handleMenuClick}
                    className="flex gap-3 items-start"
                  >
                    {item.icon}
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;
