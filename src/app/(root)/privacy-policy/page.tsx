import termsData from "@/lib/constants/termsData";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Terms & Conditions | A1 Lifts and Engineering",
  description:
    "Read the terms and conditions of A1 Lifts and Engineering. Understand your rights, responsibilities, and the legal guidelines for using our website and services.",
  keywords: [
    "A1 Lifts terms and conditions",
    "privacy policy A1 Lifts",
    "A1 Lifts legal terms",
    "lift company website policy",
    "Bangladesh lift company terms",
    "service terms A1 Lifts",
    "escalator company privacy policy",
    "engineering service terms",
    "terms of use",
    "A1 Lifts user agreement",
  ],
  image: "/assets/seo/hero.png",
  path: "privacy-policy",
});

//>> SEO END

const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 dark:text-white/80 mb-4">
        Welcome to A1 Lifts & Engineering. These terms and conditions outline
        the rules and regulations for the use of our website and services.
      </p>

      <div className="space-y-6">
        {termsData.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white ">
              {section.title}
            </h2>
            <p className="text-gray-700 dark:text-white/80">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
