import OurServices from "@/components/common/OurServices";
import WhyA1Lifts from "@/components/common/WhyA1Lifts";
import ContactCards from "@/components/Home/ContactCards";
import FAQ from "@/components/Home/FAQ";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductShowcase from "@/components/Home/ProductShowcase";
import ServicesSection from "@/components/Home/ServicesSection";
import WorkSteps from "@/components/Home/WorkSteps";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { generateJsonLd } from "@/lib/generateJsonLd";
import { Metadata } from "next";
import Head from "next/head";

//>> SEO Start
export const metadata: Metadata = generateMetaTags({
  title:
    "A1 Lifts and Engineering -Leading Lift & Escalator Company in Bangladesh",
  description:
    "A1 Lifts & Engineering offers top lift, generator, substation & engineering services in BD, including lift sales, maintenance & spare parts",
  keywords:
    "a1-lifts, lifts, bd lifts, cheappest lifts in bangladesh, lift company in Bangladesh, best lift company in bangladesh, Lift company in Dhaka, lift price in Bangladesh, elevator in bd, Hospital Lift Bangladesh, Property Lifts, Lift for house, A1 lifts, A one lifts, A one lifts and enginnering, Lift maintains, Lifts parts, lift servicing company in bangladesh, small lift for a house, A1 lifts bd",
  image: "/assets/screenshots/hero.png",
});
//>> SEO End

// ✅ JSON-LD for the homepage
const organizationJsonLd = generateJsonLd("Organization", {
  name: "A1 Lifts and Engineering",
  url: "https://www.a1-lifts.com",
  logo: "https://www.a1-lifts.com/icon.png",
  sameAs: [
    "https://www.facebook.com/a1lifts",
    "https://www.linkedin.com/company/a1-lifts",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+8801902884266",
    contactType: "Customer Service",
  },
});

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <OurServices />
      <ProductShowcase />
      <ServicesSection />
      <WhyA1Lifts />
      <WorkSteps />
      <FAQ />
      <ContactCards />
      {/* ✅ Inject JSON-LD into the head */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={organizationJsonLd}
        />
      </Head>
    </>
  );
};

export default HomePage;
