import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import Copiright from "./Copiright";
import { Button } from "@/components/ui/button";

// Social icons and URLs
const socialLinks = [{ icon: <FaFacebook />, href: "#" }];

// Footer link sections
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Vision", href: "/vision" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Lift Installation", href: "/lift-services" },
      { label: "Genarator Installation", href: "/genarator-services" },
      { label: "Substation Installation", href: "/substation-services" },
      { label: "Enginnering Solution", href: "/engineering-solution" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-10 px-6 md:px-20">
      <div className=" grid grid-cols-1 gap-12 lg:flex lg:justify-between container mx-auto">
        {/* Logo and Socials */}
        <div>
          <Image
            src="/logo.png"
            alt="SPF Logo"
            width={64}
            height={64}
            className="mb-2"
          />
          <p className=" mb-4">
            Bringing you the best solutions for your business. <br />
            Connect with us for a seamless experience.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <Button variant="outline">{item.icon}</Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 mt-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-8 border-[#333]" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 container mx-auto">
        <Copiright />

        <div className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="hover:text-blue-500 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="hover:text-blue-500 hover:underline"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
