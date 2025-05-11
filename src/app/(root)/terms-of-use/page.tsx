import termsOfUseData from "@/lib/constants/termsOfUserData";
import { generateMetaTags } from "@/lib/genarateMetaTags";
import { Metadata } from "next";

//>> SEO Start

export const metadata: Metadata = generateMetaTags({
  title: "Terms of Use",
  description:
    "Review the Terms of Use for A1 Lifts and Engineering. Understand the rules for accessing and using our website, services, and digital content.",
  keywords: [
    "A1 Lifts terms of use",
    "terms and conditions A1 Lifts",
    "website usage policy",
    "lift company legal terms",
    "Bangladesh engineering services terms",
    "A1 Lifts disclaimer",
    "user agreement A1 Lifts",
    "lift service access rules",
    "escalator service policy",
    "terms of website use",
  ],
  image: "/assets/seo/hero.png",
  path: "terms-of-use",
});

//>> SEO END

const TermsOfUsePage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Terms of Use</h1>

      <p className="text-gray-700 dark:text-white/80 mb-4">
        By accessing this website, you agree to comply with and be bound by the
        following terms of use. Please read them carefully before using our
        services.
      </p>

      <div className="space-y-6">
        {termsOfUseData.map((section, index) => (
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

export default TermsOfUsePage;
