import Image from "next/image";
import { Leaf, Home } from "lucide-react";
import Container from "../ui/Container";

const imageSources = [
  { src: "/assets/image/about/about-1.png", alt: "Solar Workers" },
  { src: "/assets/image/about/about-2.png", alt: "Solar Field" },
  { src: "/assets/image/about/about-3.png", alt: "Solar House" },
  { src: "/assets/image/about/about-4.png", alt: "Solar Panel" },
];

const features = [
  {
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    label: "Solar In Agriculture Farm",
  },
  {
    icon: <Home className="text-green-600 w-6 h-6" />,
    label: "Solar In Residential Areas",
  },
];

const AboutCompany = () => {
  return (
    <Container className="grid md:grid-cols-2 gap-12 items-center py-16">
      {/* Diamond Image Grid */}
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center ">
        <div className="absolute transform rotate-45 grid grid-cols-2  md:w-[360px] md:h-[360px]">
          {imageSources.map((image, index) => (
            <div
              data-aos="fade-right"
              key={index}
              className="overflow-hidden border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover transform -rotate-45"
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
        <h2 className="text-3xl font-bold mb-4">Simplicity & Efficiency</h2>
        <p className="text-blue-600 text-lg font-medium mb-4">
          Experience The Power of The Sun at its Finest.
        </p>
        <p className="text-muted-foreground mb-4">
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power off choice is untrammelled and when nothing
          prevents our being able to do what we like best—every pleasure.
        </p>
        <p className="text-muted-foreground mb-6">
          Perfectly simple and easy to distinguish. In a free hour, when our
          power choice is untrammelled and when nothing prevents, we give best.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-2"
          >
            More About Solartech →
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
