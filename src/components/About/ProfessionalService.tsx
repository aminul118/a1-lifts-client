"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const services = [
  "Tailored Engineering Solutions",
  "24/7 Technical Support",
  "Certified & Experienced Engineers",
];

const ProfessionalService = () => {
  return (
    <Container backgroundColor="2xl:h-[700px]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Services That Elevate Infrastructure
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/90 mb-6">
            At A1 Lifts & Engineering, we offer expert services in lift
            installations, generator systems, and substation maintenance. Our
            team ensures quality, reliability, and long-term performance with
            every project.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-white/90">
            {services.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                ✅ {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Single Floating Image */}
        <motion.div
          {...floatAnimation}
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/assets/images/services/power-distribution.jpg"
            alt="Floating Service"
            fill
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default ProfessionalService;
