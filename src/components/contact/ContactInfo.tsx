import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

const contactDetails = [
  {
    id: "phone1",
    icon: FaPhone,
    text: "+880 1902 8842 66",
    link: "tel:+8801902884266",
  },
  {
    id: "phone2",
    icon: FaPhone,
    text: "+880 1711 9393 50",
    link: "tel:+8801711939350",
  },
  {
    id: "email",
    icon: FaEnvelope,
    text: "contact@a1-lifts.com",
    link: "mailto:contact@a1-lifts.com",
  },
  { id: "location", icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh" },
  { id: "hours", icon: FaClock, text: "Mon - Sat : 9:00 AM - 6:00 PM" },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-right" className="pb-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 text-center mb-8">
          Contact Information
        </h2>
        <ul className="space-y-6">
          {contactDetails.map(({ id, icon: Icon, text, link }) => (
            <li
              key={id}
              className="flex items-start sm:items-center gap-4 w-full"
            >
              <Button variant="outline">
                <Icon size={10} />
              </Button>
              {link ? (
                <a
                  href={link}
                  className="text-gray-700 dark:text-white/70 break-words hover:underline"
                >
                  {text}
                </a>
              ) : (
                <span className="text-gray-700 dark:text-white/70 break-words">
                  {text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
