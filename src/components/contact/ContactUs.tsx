import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Container from "../ui/Container";

const ContactUs = () => {
  return (
    <Container>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[1] dark:hidden" />
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 container mx-auto">
          <div className="flex-1 w-full max-w-lg">
            <ContactInfo />
          </div>
          <div className="flex-1 w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
