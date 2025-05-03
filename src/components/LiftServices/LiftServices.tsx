import Image from "next/image";
import Container from "../ui/Container";
import { CheckCircle } from "lucide-react";

const liftServices = [
  {
    service: "Lifts Installation & Maintenance",
    image: "/assets/images/services/elevetor-installation.jpg",
    details: [
      "Elevator installation for residential, commercial, and industrial buildings.",
      "Routine and preventive maintenance services.",
      "Emergency breakdown support and quick repair services.",
    ],
  },
  {
    service: "Lift Modernization",
    image: "/assets/images/services/lift-modernization.jpg",
    details: [
      "Upgrade outdated lift systems with new technology.",
      "Enhance lift performance, safety, and energy efficiency.",
      "Customized modernization plans to fit client needs.",
    ],
  },
  {
    service: "Lift Repair & Troubleshooting",
    image: "/assets/images/services/services1.jpg",
    details: [
      "Expert diagnostics and repair of all elevator brands.",
      "Replacement of faulty components and quick fixes.",
      "Emergency lift rescue and troubleshooting services.",
    ],
  },
  {
    service: "Lift Inspection & Safety Audit",
    image: "/assets/images/services/lift-safety.png",
    details: [
      "Regular inspection to ensure safety and compliance.",
      "Certified audits following local authority standards.",
      "Detailed reporting and recommendations for improvements.",
    ],
  },
  {
    service: "Customized Lift Solutions",
    image: "/assets/images/services/elevator.jpg",
    details: [
      "Design and installation of customized elevators.",
      "Tailored to fit unique architectural requirements.",
      "Luxury and high-capacity lift system options.",
    ],
  },
  {
    service: "Annual Maintenance Contracts (AMC)",
    image: "/assets/images/services/elevator-maintenance.png",
    details: [
      "Comprehensive AMC packages for continuous support.",
      "Priority servicing and spare parts coverage.",
      "Cost-effective maintenance with scheduled checkups.",
    ],
  },
];

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
