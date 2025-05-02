import Image from "next/image";
import { Wrench, Building2 } from "lucide-react";
import Container from "../ui/Container";

const imageSources = [
  {
    src: "/assets/images/about/lift-service.png",
    alt: "Lift Installation",
  },
  {
    src: "/assets/images/about/genarator-servising.jpg",
    alt: "Generator Maintenance",
  },
  {
    src: "/assets/images/about/substation-installed.jpg",
    alt: "Substation Setup",
  },
  {
    src: "/assets/images/about/lift-button.png",
    alt: "Engineering Team",
  },
];

const features = [
  {
    icon: <Wrench className="text-green-600 w-12 h-12" />,
    label: "Expert Installation & Repairs",
  },
  {
    icon: <Building2 className="text-green-600 w-12 h-12" />,
    label: "Residential & Industrial Services",
  },
];

const AboutCompany = () => {
  return (
    <Container className="grid md:grid-cols-2 gap-12 items-center py-16">
      {/* Diamond Image Grid */}
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center">
        <div className="grid grid-cols-2 gap-1 w-full h-full">
          {imageSources.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div data-aos="fade-left">
        <p className="text-muted-foreground text-sm font-semibold uppercase mb-2">
          About Our Company
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Powering Progress With Engineering Excellence
        </h2>
        <p className="text-blue-600 text-lg font-medium mb-4">
          Reliable Lift, Generator & Substation Solutions — All Under One Roof.
        </p>
        <p className="text-muted-foreground mb-4">
          A1 Lifts & Engineering is a service-first company delivering
          professional installation, maintenance, and sales of lifts,
          generators, and substations. Our team consists of certified
          technicians and experienced engineers who follow industry-leading
          practices to ensure quality and compliance.
        </p>
        <p className="text-muted-foreground mb-6">
          From residential buildings to industrial complexes, we offer custom
          engineering solutions that prioritize safety, efficiency, and
          long-term value. Choose A1 for dependable support and end-to-end
          service excellence.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
