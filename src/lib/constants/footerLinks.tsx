import { FaFacebook } from "react-icons/fa";
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

export { socialLinks, footerLinks };
