import type { Metadata } from "next";
import "./globals.css";
import { Children } from "@/lib/types/types";
import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "../providers/ThemeProvider";
import AosProvider from "../providers/AosProvider";
import { generateMetaTags } from "@/lib/genarateMetaTags";

//>> SEO Start
export const metadata: Metadata = generateMetaTags({
  title:
    "A1 Lifts and Engineering - Best Lift & Escalator Company in Bangladesh ",
  description:
    "A1 Lifts and Enginnering is the best lift & Escalator company in Bangladesh that provides passenger lifts, hospital lifts, and capsule lifts, with technical services,. Lift maintains",
  keywords: [
    "lift company in Bangladesh",
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
  ],
  image: "/assets/screenshots/hero.png",
  path: "",
});
//>> SEO END

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
