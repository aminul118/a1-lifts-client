type TSectionTitle = {
  title: string;
  details?: string;
};

const SectionTitle = ({ title, details }: TSectionTitle) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white/90 mb-4">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-white/90 mb-10  mx-auto">
        {details}
      </p>
    </div>
  );
};

export default SectionTitle;
