import React from "react";
import { Target, Eye } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";

const MissionVission = () => {
  return (
    <Container backgroundColor="lg:h-[600px]">
      <SectionTitle
        title="Our Mission & Vision"
        details=" Driving innovation, safety, and sustainability in engineering
            solutions across lifts, generators, and substations."
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <Card data-aos="fade-right ">
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-blue-600 w-8 h-8" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              To deliver top-notch lift, generator, and substation installation
              and maintenance services with expert precision, affordable plans,
              and a strong focus on safety and customer satisfaction.
            </p>
          </CardContent>
        </Card>
        {/* Mission */}
        <Card data-aos="fade-left">
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Eye className="text-blue-600 w-8 h-8" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              To become a nationally trusted brand in engineering solutions by
              leading innovation, ensuring reliability, and upholding the
              highest standards in service and safety.
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default MissionVission;
