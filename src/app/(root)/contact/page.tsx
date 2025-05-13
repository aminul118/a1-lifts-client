import ContactUs from "@/components/contact/ContactUs";
import SectionBanner from "@/components/ui/SectionBanner";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Contact - A1 Lifts and Engineering",
  description:
    "Get in touch with A1 Lifts and Engineering — the leading lift and escalator company in Bangladesh. Contact us for inquiries about passenger lifts, hospital lifts, lift maintenance, and installation services.",
  keywords: [
    "contact lift company in Bangladesh",
    "best lift company in Bangladesh",
    "lift company in Dhaka",
    "lift price in Bangladesh",
    "lift elevator Bangladesh",
    "Hospital Lift Bangladesh",
    "Lift maintenance",
    "small lift for house",
    "A1 Lifts contact",
    "A One Lifts and Engineering",
    "lift installation service",
  ],
  image: "/assets/screenshots/hero.png",
  path: "contact",
});

//>> SEO End

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
