import { Card, CardContent } from "@/components/ui/card";
import { Server, ShieldCheck, Settings, Flag } from "lucide-react";
import Container from "../ui/Container";

const steps = [
  {
    icon: <Server size={60} className=" text-orange-500" />,
    title: "Project Processing",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
  },
  {
    icon: <ShieldCheck size={60} className=" text-orange-500" />,
    title: "High Quality Products",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
  },
  {
    icon: <Settings size={60} className=" text-orange-500" />,
    title: "Quality Product Setup",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
  },
  {
    icon: <Flag size={60} className=" text-orange-500" />,
    title: "Project Finished",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
  },
];

const WorkSteps = () => {
  return (
    <Container backgroundColor=" 2xl:h-[800px]">
      <div className="text-center mb-12">
        <h3 className="text-orange-500 uppercase font-medium">Work Process</h3>
        <h2 className="text-3xl font-bold mt-2">Follow 4 Easy Work Steps</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps?.map((step, idx) => (
          <Card key={idx}>
            <CardContent className="py-8 flex flex-col items-center space-y-4">
              {step.icon}
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WorkSteps;
