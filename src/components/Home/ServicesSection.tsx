import Image from "next/image";
import Container from "../ui/Container";
import services from "@/lib/constants/services";

const ServicesSection = () => {
  return (
    <Container backgroundColor=" 2xl:h-[1000px] ">
      <div className="text-center mb-12">
        <p className="text-gray-400 uppercase text-sm font-semibold tracking-wide">
          Our Services
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
          Quality With Dedication
        </h2>
        <div className="h-1 w-16 bg-green-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-500 dark:text-white/90 max-w-3xl mx-auto mt-4">
          Solartech redefines your relationship with energy. Save money.
          Minimize your carbon footprint. Take control of your power costs
          today!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-800 shadow-md overflow-hidden transition-shadow hover:shadow-lg rounded-md"
          >
            <div className="relative h-52 2xl:h-96 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-white/90 w-full px-4 py-3">
                <div className={`${service.iconBg} p-2 rounded-full`}>
                  {service.icon}
                </div>
                <h3 className="text-blue-900 font-bold text-lg">
                  {service.title}
                </h3>
              </div>
            </div>
            <div className="px-5 py-6">
              <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
