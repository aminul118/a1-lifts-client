import Link from "next/link";
import Copiright from "./Copiright";
import { Button } from "@/components/ui/button";
import { footerLinks, socialLinks } from "@/lib/constants/footerLinks";
import Logo from "../Navbar/Logo";

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6 md:px-20 text-white/90">
      <div className=" grid grid-cols-1 gap-12 lg:flex lg:justify-between container mx-auto">
        {/* Logo and Socials */}
        <div>
          <Logo size={70} />
          <p className=" my-6">
            Bringing you the best solutions for your business. <br />
            Connect with us for a seamless experience.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks?.map((item, idx) => (
              <Link target="_blank" key={idx} href={item.href}>
                <Button aria-label={item.name} variant="outline">
                  {item.icon}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks?.map((section, idx) => (
          <div key={idx}>
            <p className="font-semibold mb-3">{section?.title}</p>
            <ul className="space-y-2 mt-4">
              {section?.links?.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link?.href}
                    className="hover:text-blue-500 hover:underline"
                  >
                    {link?.label}
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
