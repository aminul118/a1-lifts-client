import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  Clock,
  Headphones,
  History,
  ShieldCheck,
  Settings,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    title: "Certified Engineers",
    description:
      "Our team is licensed and trained to deliver high-quality generator services.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Response Time",
    description:
      "We prioritize urgency and provide quick service to reduce downtime.",
    icon: Clock,
  },
  {
    title: "24/7 Support",
    description:
      "Available round-the-clock to assist with any emergency generator issues.",
    icon: Headphones,
  },
  {
    title: "Years of Experience",
    description:
      "Backed by years of hands-on industry expertise in generator systems.",
    icon: History,
  },
  {
    title: "Top Brands & Tech",
    description:
      "We use and install only the most trusted and efficient generator brands.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Power Solutions",
    description:
      "We analyze your needs to design and implement generator systems tailored to your power requirements.",
    icon: Settings,
  },
];

const WhyUsForGenaratorServices = () => {
  return (
    <Container>
      <SectionTitle title="Benifit for choosing us" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features?.map((feature, idx) => (
          <Card data-aos="fade-up" key={idx} className="p-6 ">
            <feature.icon className="text-primary w-16 h-16" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <CardContent className="p-0 text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WhyUsForGenaratorServices;
