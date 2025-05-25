import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
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
    phone: [{ text: "+880 1711 9393 50", link: "tel:+8801711939350" }],
    email: "contact@a1-lifts.com",
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
      { text: "+880 1902 8842 66", link: "tel:+8801902884266" },
      { text: "+880 1711 9300 00", link: "tel:+8801711930000" },
    ],
    email: "contact@a1-lifts.com",
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

              <div className="flex items-center gap-3">
                <Button variant="outline">
                  <FaPhone />
                </Button>
                <div className="text-gray-700 dark:text-white/70 space-y-1">
                  {office.phone.map((p, i) => (
                    <a key={i} href={p.link} className="hover:underline block">
                      {p.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline">
                  <FaEnvelope />
                </Button>
                <a
                  href={`mailto:${office.email}`}
                  className="text-gray-700 dark:text-white/70 hover:underline"
                >
                  {office.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
