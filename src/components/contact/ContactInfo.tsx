import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const officeCards = [
  {
    id: "dhaka",
    title: "Dhaka Office",
    address: [
      "Holding #121 (Level-2)",
      "Road #21, Mohakhali DOHS",
      "Dhaka-1206, Bangladesh",
    ],
    phone: [
      { text: "+880 1902 8842 66", link: "tel:+8801902884266", whatsapp: true },
      { text: "+880 1711 9350 50", link: "tel:+8801711935050", whatsapp: true },
      { text: "+880 2983 4892", link: "tel:+88029834892" },
      { text: "+880 2224 4153 29", link: "tel:+8802224415329" },
    ],
    email: ["contact@a1-lifts.com", "info@a1-lifts.com"],
  },
  {
    id: "faridpur",
    title: "Faridpur Office",
    address: [
      "Holding #92 Ward - 25",
      "Baitul Aman, Faridpur-7803",
      "Bangladesh",
    ],
    phone: [
      { text: "+880 1902 8842 66", link: "tel:+8801902884266", whatsapp: true },
      { text: "+880 1711 9393 50", link: "tel:+8801711939350", whatsapp: true },
    ],
    email: ["contact@a1-lifts.com", "info@a1-lifts.com"],
  },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-up" className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white/90 mb-10">
        Office Addresses
      </h2>
      <div className="grid md:grid-cols-1 gap-6 max-w-5xl mx-auto">
        {officeCards.map((office) => (
          <Card key={office.id} className="rounded-2xl">
            <CardContent className="space-y-2">
              <h3 className="text-xl font-semibold mb-4">{office.title}</h3>

              {/* Address */}
              <div className="flex items-start gap-3">
                <Button variant="outline">
                  <FaMapMarkerAlt />
                </Button>
                <div className="text-gray-700 dark:text-white/70 space-y-1">
                  {office.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Button variant="outline">
                  <FaPhone />
                </Button>
                <div className="text-gray-700 dark:text-white/70 space-y-1">
                  {office.phone.map((p, i) => (
                    <div key={i}>
                      <a
                        href={p.link}
                        className="hover:underline inline-flex items-center gap-2"
                      >
                        {p.text}
                        {p.whatsapp && (
                          <FaWhatsapp className="text-green-500" />
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Button variant="outline">
                  <FaEnvelope />
                </Button>
                <div className="text-gray-700 dark:text-white/70 space-y-1">
                  {office.email.map((e, i) => (
                    <a
                      key={i}
                      href={`mailto:${e}`}
                      className="hover:underline block"
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
