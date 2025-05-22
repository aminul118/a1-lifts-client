import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

const serviceDetails = [
  "Complete disassembly, inspection, and cleaning of generator engine components to restore peak performance.",
  "Replacement or reconditioning of worn-out parts such as pistons, bearings, gaskets, and seals.",
  "Final testing and tuning by certified technicians to ensure optimal efficiency, reliability, and safety.",
];

const EngineOverhauling = () => {
  return (
    <Container>
      <Card className="w-full rounded-2xl p-6 lg:p-10 shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Engine Overhauling
            </h2>

            <ul className="space-y-3 text-base lg:text-lg">
              {serviceDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-green-600" size={40} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/assets/images/services/engine-overhauling.png"
              alt="Engine Overhauling"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default EngineOverhauling;
