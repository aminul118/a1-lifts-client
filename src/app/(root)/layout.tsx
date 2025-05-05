import { Children } from "@/lib/types/types";

import DesktopNavbar from "@/components/layouts/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/layouts/Navbar/MobileNavbar";
import Footer from "@/components/layouts/Footer/Footer";

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
