import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const generatorServices = [
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
];

const ServicesForGenarator = () => {
  return (
    <Container>
      <SectionTitle title="Genarator Services" />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 px-4 md:px-12 py-10">
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
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.service}
              </h3>
              <p className="text-gray-600 dark:text-white/90">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesForGenarator;
