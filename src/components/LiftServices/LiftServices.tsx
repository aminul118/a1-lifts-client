import Image from "next/image";
import Container from "../ui/Container";

const liftServices = [
  {
    service: "Lifts Installation & Maintenance",
    image: "/assets/images/services/services1.jpg",
    details: ["Elevator setup, repair, and preventive maintenance."],
  },
  {
    service: "Generator Installation & Maintenance",
    image: "/assets/images/services/services2.jpg",
    details: ["Power backup solutions and generator servicing."],
  },
  {
    service: "Substation Installation & Maintenance",
    image: "/assets/images/services/services3.jpg",
    details: ["Substation setup, wiring, and electrical safety compliance."],
  },
];

const LiftServices = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 py-10">
      {liftServices.map((service, i) => (
        <div
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
              {service.details[0]}
            </p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default LiftServices;
