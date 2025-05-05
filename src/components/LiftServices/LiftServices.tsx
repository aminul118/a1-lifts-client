import Image from "next/image";
import Container from "../ui/Container";
import { CheckCircle } from "lucide-react";
import liftServices from "@/lib/constants/liftServices";

const LiftServices = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 py-10">
      {liftServices.map((service, i) => (
        <div
          data-aos="fade-up"
          key={i}
          className="group block bg-white dark:bg-slate-800 overflow-hidden transition-transform"
        >
          <div className="relative w-full h-60 2xl:h-72 overflow-hidden">
            <Image
              src={service.image}
              alt={service.service}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {service.service}
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-white/90">
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex  gap-2">
                  <CheckCircle size={20} className="text-blue-600 shrink-0" />
                  <p className="leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default LiftServices;
