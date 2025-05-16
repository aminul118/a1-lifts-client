import { Card, CardContent } from "@/components/ui/card";
import { Server, ShieldCheck, Settings, Flag } from "lucide-react";
import Container from "../ui/Container";

const steps = [
  {
    icon: <Server size={60} className="text-orange-500" />,
    title: "Project Planning",
    desc: "We initiate each project with structured planning and detailed analysis.",
  },
  {
    icon: <ShieldCheck size={60} className="text-orange-500" />,
    title: "High-Quality Products",
    desc: "We ensure premium materials and components for long-lasting performance.",
  },
  {
    icon: <Settings size={60} className="text-orange-500" />,
    title: "Professional Setup",
    desc: "Expert technicians handle setup with precision and care.",
  },
  {
    icon: <Flag size={60} className="text-orange-500" />,
    title: "Project Completion",
    desc: "Projects are delivered on time with full client satisfaction.",
  },
];

const WorkSteps = () => {
  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-orange-500 uppercase font-medium">Work Process</h2>
        <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
          Follow 4 Easy Work Steps
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <Card key={idx}>
            <CardContent className="py-8 flex flex-col items-center space-y-4 text-center">
              {step.icon}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-white/80">
                {step.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WorkSteps;
