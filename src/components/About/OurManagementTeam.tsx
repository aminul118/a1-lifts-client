import managementTeam from "@/lib/constants/managementTeam";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Card, CardContent } from "../ui/card";

const OurManagementTeam = () => {
  return (
    <Container backgroundColor="dark:bg-slate-800 bg-white">
      <SectionTitle title="Our Management Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {managementTeam?.map((team) => (
          <Card
            data-aos="fade-up"
            key={team.id}
            className="bg-white dark:bg-slate-900 p-6 text-center"
          >
            <CardContent className="space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-orange-500">
                <Image
                  src={team.img}
                  alt={team.details}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-semibold text-orange-500">
                {team.designation}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {team.details}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default OurManagementTeam;
