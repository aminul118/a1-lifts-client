import { Mail, Phone } from "lucide-react";
import Container from "../ui/Container";
import Link from "next/link";

const ContactCards = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Phone Card */}
        <div className="lg:flex flex-1 items-center gap-6 bg-slate-800 text-white rounded-md px-6 py-6 shadow-md">
          <div className="lg:bg-[#1b1a1f] p-4 rounded-full">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-green-500 font-medium">Call Us For Service</p>
            <h2 className="text-xl sm:text-2xl font-bold">
              <a href="tel:+8801902884266" className="hover:underline block">
                +880 1902 8842 66
              </a>
              <a href="tel:+8801711939350" className="hover:underline block">
                +880 1711 9393 50
              </a>
            </h2>
            <p className="text-gray-400">Call 24/7 Anytime For Your Problem</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="lg:flex flex-1 items-center gap-6 bg-slate-900 text-white rounded-md px-6 py-6 shadow-md h-40">
          <div className="lg:bg-white  bg-opacity-10 p-4 rounded-full">
            <Mail className="w-6 h-6 lg:text-green-600" />
          </div>
          <div>
            <p className="font-medium">Mail Us Anytime</p>
            <h2 className="text-xl sm:text-2xl font-bold">
              <Link
                href="mailto:contact@a1-lifts.com"
                className="hover:underline"
              >
                contact@a1-lifts.com
              </Link>
            </h2>
            <p className="text-white text-opacity-90">
              Mail 24/7 Anytime For Your Problem
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactCards;
