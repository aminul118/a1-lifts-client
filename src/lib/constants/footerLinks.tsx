import { FaFacebook, FaLinkedin } from "react-icons/fa";
// Social icons and URLs
const socialLinks = [
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
];

// Footer link sections
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Spare Parts", href: "/spare-parts" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Lifts", href: "/lifts" },
      { label: "Genarators", href: "/genarators" },
      { label: "Substations", href: "/substations" },
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

export { socialLinks, footerLinks };
