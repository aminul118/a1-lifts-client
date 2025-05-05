import termsOfUseData from "@/lib/constants/termsOfUserData";

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
