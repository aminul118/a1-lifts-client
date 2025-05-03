import Image from "next/image";
import Container from "../ui/Container";
import { CheckCircle } from "lucide-react";

const generatorServices = [
  {
    service: "Generator Maintenance & Health Checks",
    image: "/assets/images/services/genarator-service1.jpg",
    details: [
      "Routine maintenance including oil changes, coolant checks, and filter replacements.",
      "Battery inspection and load bank testing for performance assurance.",
      "Real-time diagnostics and performance monitoring services.",
      "Scheduled and emergency servicing to minimize downtime and failures.",
    ],
  },
  {
    service: "Emergency Generator Repair Services",
    image: "/assets/images/services/emergency-generators.jpg",
    details: [
      "24/7 rapid response for unexpected generator failures and breakdowns.",
      "On-site diagnostics with quick resolution to restore power promptly.",
      "Spare parts replacement including fuel systems, batteries, and electrical panels.",
      "Support for all major generator brands and models.",
    ],
  },
  {
    service: "Residential Generator Installation",
    image: "/assets/images/services/Install-generator.jpg",
    details: [
      "Tailored generator installation solutions for homes to ensure uninterrupted power during outages.",
      "Load assessment and system design based on home size and power needs.",
      "Integration with automatic transfer switches (ATS) for seamless power backup.",
      "Compliance with local electrical safety standards and codes.",
    ],
  },
  {
    service: "Commercial & Industrial Generator Setup",
    image: "/assets/images/services/commercial-generators.jpg",
    details: [
      "Heavy-duty generator installation for businesses, factories, hospitals, and office complexes.",
      "Custom sizing and configuration to support critical equipment and operations.",
      "Noise reduction, fuel efficiency, and emission control considerations.",
      "Complete commissioning and safety testing by certified engineers.",
    ],
  },
  {
    service: "Generator Load Management Solutions",
    image: "/assets/images/services/load-management-genarator.jpg",
    details: [
      "Smart load management systems to optimize generator performance.",
      "Automatic load shedding and prioritization for critical systems.",
      "Prevention of generator overload and extended equipment lifespan.",
      "Energy-efficient operation tailored to business and residential needs.",
    ],
  },
  {
    service: "Generator Rental & Temporary Power Solutions",
    image: "/assets/images/services/load-management-genarator.jpg",
    details: [
      "Short-term and long-term generator rental options for events, construction, and emergencies.",
      "Wide range of generator capacities available with full installation support.",
      "Flexible rental plans with 24/7 maintenance and fuel management.",
      "Ideal for backup during grid outages or seasonal high-power demands.",
    ],
  },
];

const ServicesForGenarator = () => {
  return (
    <Container className="grid grid-cols-1  lg:grid-cols-3 gap-6 px-4 md:px-12 py-10">
      {generatorServices.map((service, i) => (
        <div
          data-aos="fade-right"
          key={i}
          className="group block bg-white dark:bg-black overflow-hidden transition-transform"
        >
          <div className="relative w-full h-60 2xl:h-72 overflow-hidden">
            <Image
              src={service.image}
              alt={service.service}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="space-y-2 text-gray-600 dark:text-white/90 p-4">
            {service.details.map((detail, idx) => (
              <div key={idx} className="flex  gap-2">
                <CheckCircle size={20} className="text-blue-600 shrink-0" />
                <p className="leading-snug">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ServicesForGenarator;
