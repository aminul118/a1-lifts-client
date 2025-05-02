import {
  ShieldCheck,
  Wrench,
  AlarmClockCheck,
  Zap,
  Settings2,
  Gauge,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";

const generatorBenefits = [
  {
    icon: ShieldCheck,
    title: "Certified generator installation with safety assurance",
  },
  {
    icon: Wrench,
    title: "Scheduled maintenance for optimal performance",
  },
  {
    icon: AlarmClockCheck,
    title: "24/7 support for emergency breakdowns",
  },
  {
    icon: Zap,
    title: "Stable and uninterrupted power supply",
  },
  {
    icon: Settings2,
    title: "Custom setup based on load requirements",
  },
  {
    icon: Gauge,
    title: "Performance optimization for fuel efficiency",
  },
];

const GeneratorService = () => {
  return (
    <Container>
      <SectionTitle
        title="Generator Installation & Maintenance"
        details="A1 Lifts & Engineering offers reliable generator installation and
        ongoing maintenance services for homes, offices, and industries.
        Whether it's diesel, gas, or hybrid generators, our experienced team
        ensures smooth setup and consistent support to keep your power systems
        running without interruption."
      />

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
        Key Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatorBenefits.map((benefit, index) => (
          <Card key={index}>
            <CardContent>
              <benefit.icon className="text-primary w-16 h-16" />
              <p className="mt-3">{benefit.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default GeneratorService;
