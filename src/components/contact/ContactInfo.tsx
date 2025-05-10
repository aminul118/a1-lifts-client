import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

const contactDetails = [
  { id: 1, icon: FaPhone, text: "+880 1718 6543 32" },
  { id: 2, icon: FaEnvelope, text: "contact@a1-lifts.com" },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    text: "Dhaka, Bangladesh",
  },
  { id: 4, icon: FaClock, text: "Mon - Sat : 9:00 AM - 6:00 PM" },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-right" className="pb-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 text-center mb-8">
          Contact Information
        </h2>
        <ul className="space-y-6">
          {contactDetails?.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-start sm:items-center gap-4 w-full"
            >
              <Button variant="outline">
                <Icon size={10} />
              </Button>
              <span className="text-gray-700 dark:text-white/70 break-words">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
