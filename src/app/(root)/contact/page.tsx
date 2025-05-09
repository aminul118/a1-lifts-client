import ContactUs from "@/components/contact/ContactUs";
import SectionBanner from "@/components/ui/SectionBanner";

const ContactPage = () => {
  return (
    <>
      <SectionBanner
        heading="Contact with us"
        backgroundImagePath="/assets/backgrounds/contact.png"
        className="text-white"
      />
      <ContactUs />
    </>
  );
};

export default ContactPage;
