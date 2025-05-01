"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Info, PhoneCall, Settings2, Target } from "lucide-react";
import { ModeToggle } from "./Toggle";
import { ecoSystem, moreProducts } from "@/lib/constants/navMenu";

const ResponsiveNavbar = () => {
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);

  const handleMenuClick = () => {
    setIsProductHover(true); // Keep the MegaMenu open after clicking inside
  };

  return (
    <header className="w-full bg-slate-900 fixed z-50 py-2 top-0">
      <nav className="relative container mx-auto shadow">
        {/* Top bar */}
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" passHref>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-white">Point</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-gray-700 text-[1rem]">
            <li>
              <Link href="/" passHref>
                <div className="flex items-center hover:text-blue-500 gap-2 text-white">
                  <Home className="text-[1.2rem]" />
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  <Info className="text-[1.2rem]" />
                  About
                </div>
              </Link>
            </li>

            {/* Services MegaMenu */}
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
              <Link href="/vision" passHref>
                <div className="flex items-center gap-2 hover:text-blue-500 text-white">
                  <Target className="text-[1.2rem]" />
                  Vison
                </div>
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className=" flex  items-center gap-4">
            <ModeToggle />
            <Button className="" variant="destructive">
              <Link href="/contact" passHref>
                <div className="flex items-center gap-2 text-white">
                  <PhoneCall className="text-[1.2rem]" />
                  Contact
                </div>
              </Link>
            </Button>
            {/* Mobile Hamburger */}
            <CiMenuFries
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="text-[2rem] md:hidden cursor-pointer text-gray-700"
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="text-2xl"
            >
              ✖️
            </button>
          </div>
          <ul className="flex flex-col p-6 gap-4 text-gray-700">
            <li>
              <Link href="/" passHref>
                <div onClick={() => setMobileSidebarOpen(false)}>Home</div>
              </Link>
            </li>

            {/* Products Dropdown Mobile */}
            <li
              onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
              className="cursor-pointer flex justify-between items-center"
            >
              Products
              <IoIosArrowDown
                className={`transition-transform ${
                  isMegaMenuCollapse ? "rotate-180" : ""
                }`}
              />
            </li>

            {/* Sub Items */}
            {isMegaMenuCollapse && (
              <ul className="ml-4 flex flex-col gap-2 text-sm text-gray-600">
                {moreProducts.map((product, idx) => (
                  <li key={idx}>
                    <Link href={product.link} passHref>
                      <div onClick={() => setMobileSidebarOpen(false)}>
                        {product.title}
                      </div>
                    </Link>
                  </li>
                ))}
                {ecoSystem.map((eco, idx) => (
                  <li key={idx}>
                    <Link href={eco.link} passHref>
                      <div onClick={() => setMobileSidebarOpen(false)}>
                        {eco.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <li>
              <Link href="/features" passHref>
                <div onClick={() => setMobileSidebarOpen(false)}>Features</div>
              </Link>
            </li>
            <li>
              <Link href="/support" passHref>
                <div onClick={() => setMobileSidebarOpen(false)}>Support</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Products Mega Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 z-40 ${
            isProductHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1 - More Products */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">
                More Products
              </h3>
              {moreProducts.map((item, idx) => (
                <Link href={item.link} passHref key={idx}>
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

            {/* Column 2 - Ecosystem */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">Ecosystem</h3>
              {ecoSystem.map((item, idx) => (
                <Link href={item.link} passHref key={idx}>
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

export default ResponsiveNavbar;
