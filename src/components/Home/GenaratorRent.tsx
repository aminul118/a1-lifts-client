import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const GenaratorRent = () => {
  return (
    <Container>
      <Image
        src="/assets/images/services/genarator-rent.png"
        alt="Generator Rental"
        width={600}
        height={350}
        className="rounded-xl mx-auto mb-6"
      />
      <SectionTitle title="Genarator Rental Services" />
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg dark:text-white text-gray-700 mb-2">
          Need backup power for your event, office, or factory? We&rsquo;ve got
          you covered!
        </p>
        <p className="text-base text-gray-600 dark:text-white/90">
          Our reliable and fuel-efficient generators are available for short or
          long-term rental. Enjoy seamless power with setup, support, and 24/7
          service.
        </p>
      </div>
    </Container>
  );
};

export default GenaratorRent;
