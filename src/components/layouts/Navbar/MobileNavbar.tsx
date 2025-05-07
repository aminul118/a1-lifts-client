"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { ModeToggle } from "./Toggle";
import { Menu, X } from "lucide-react";
import { ecoSystem, moreProducts } from "@/lib/constants/navMenu";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "auto";
  }, [mobileSidebarOpen]);

  return (
    <header className=" md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 py-2">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/">
          <p className="text-2xl font-semibold text-white">Point</p>
        </Link>

        <Menu
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[2rem] cursor-pointer text-white"
        />
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[260px] h-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button
            variant="destructive"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X />
          </Button>
        </div>
        <ul className="flex flex-col p-6 gap-4 text-gray-700 dark:text-white/80">
          <li>
            <Link href="/" onClick={() => setMobileSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMobileSidebarOpen(false)}>
              About
            </Link>
          </li>

          <li
            onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
            className="cursor-pointer flex justify-between items-center"
          >
            Services
            <IoIosArrowDown
              className={`transition-transform ${
                isMegaMenuCollapse ? "rotate-180" : ""
              }`}
            />
          </li>

          {isMegaMenuCollapse && (
            <ul className="ml-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-white/80 ">
              {moreProducts.map((product, idx) => (
                <li key={idx}>
                  <Link
                    href={product.link}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
              {ecoSystem.map((eco, idx) => (
                <li key={idx}>
                  <Link
                    href={eco.link}
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    {eco.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <li>
            <Link
              href="/spare-parts"
              onClick={() => setMobileSidebarOpen(false)}
            >
              Spare Parts
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMobileSidebarOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <ModeToggle className="text-black dark:text-white" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MobileNavbar;
