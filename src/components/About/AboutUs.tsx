import aboutUs from "@/lib/constants/aboutUs";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const AboutUs = () => {
  return (
    <Container backgroundColor="dark:bg-slate-800 bg-white">
      <SectionTitle title="Something About us" />
      <div className="space-y-4 lg:text-justify">
        {aboutUs?.map((about, i) => {
          return <p key={i}>{about}</p>;
        })}
      </div>
    </Container>
  );
};

export default AboutUs;
