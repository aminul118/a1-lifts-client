"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Children } from "@/lib/types/types";

const AosProvider = ({ children }: Children) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <>{children}</>;
};

export default AosProvider;
