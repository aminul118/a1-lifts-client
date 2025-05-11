import { Children } from "@/lib/types/types";

import DesktopNavbar from "@/components/layouts/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/layouts/Navbar/MobileNavbar";
import Footer from "@/components/layouts/Footer/Footer";
import { Metadata } from "next";
import { generateMetaTags } from "@/lib/genarateMetaTags";

//>> SEO Start
export const metadata: Metadata = generateMetaTags({
  title:
    "A1 Lifts and Engineering - Best Lift & Escalator Company in Bangladesh ",
  description:
    "A1 Lifts and Enginnering is the best lift & Escalator company in Bangladesh that provides passenger lifts, hospital lifts, and capsule lifts, with technical services,. Lift maintains",
  keywords: [
    "lift company in Bangladesh",
    "best lift company in bangladesh",
    " lift company in Dhaka, lift price in Bangladesh,",
    " lift elevator",
    "Hospital Lift Bangladesh",
    "Property Lifts",
    "Lift for house",
    "A1 lifts",
    "A one lifts",
    "A one lifts and enginnering",
    "Lift maintains",
    "Lifts parts",
    "lift servicing company in bangladesh",
    "small lift for a house",
  ],
  image: "/assets/screenshots/hero.png",
  path: "",
});
//>> SEO End

const MainLayout = ({ children }: Children) => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <main className="min-h-[calc(100vh-276px)] mt-[68px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
