import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

type ContactText = { text: string; link?: string };

const contactDetails: {
  id: string;
  icon: React.ElementType;
  texts: ContactText[];
}[] = [
  {
    id: "phones",
    icon: FaPhone,
    texts: [
      { text: "+880 1902 8842 66", link: "tel:+8801902884266" },
      { text: "+880 1711 9393 50", link: "tel:+8801711939350" },
    ],
  },
  {
    id: "email",
    icon: FaEnvelope,
    texts: [
      { text: "contact@a1-lifts.com", link: "mailto:contact@a1-lifts.com" },
    ],
  },
  {
    id: "location",
    icon: FaMapMarkerAlt,
    texts: [{ text: "Dhaka, Bangladesh" }],
  },
  {
    id: "hours",
    icon: FaClock,
    texts: [{ text: "Mon - Sat : 9:00 AM - 6:00 PM" }],
  },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-right" className="pb-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 text-center mb-8">
          Contact Information
        </h2>
        <ul className="space-y-6">
          {contactDetails.map(({ id, icon: Icon, texts }) => (
            <li key={id} className="flex items-center gap-4 w-full">
              <Button aria-label={id} variant="outline">
                <Icon size={10} />
              </Button>
              <div className="space-y-1">
                {texts.map((textObj, index) =>
                  textObj.link ? (
                    <a
                      key={index}
                      href={textObj.link}
                      className="block text-gray-700 dark:text-white/70 break-words hover:underline"
                    >
                      {textObj.text}
                    </a>
                  ) : (
                    <span
                      key={index}
                      className="block text-gray-700 dark:text-white/70 break-words"
                    >
                      {textObj.text}
                    </span>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
