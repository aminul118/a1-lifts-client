import features from "@/lib/constants/features";

const WhyA1Lifts = () => {
  return (
    <div className="relative bg-[url('/assets/backgrounds/building.png')] bg-cover bg-center md:bg-fixed min-h-[550px] py-16 md:py-24 2xl:py-44 px-4 sm:px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full container mx-auto text-white text-center">
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          <h2
            data-aos="fade-left"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Why A1 Lifts & Engineering Solution?
          </h2>
          <p
            data-aos="fade-right"
            className="text-sm sm:text-base mb-10 text-gray-300"
          >
            At Digital Twin Energy LLC, we combine advanced technology with
            sustainable solutions to deliver reliable and efficient energy
            systems. Our commitment to safety, compliance, and transparency sets
            us apart in the clean energy sector.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-2 sm:px-0">
          {features?.map(({ id, icon, title, description }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl backdrop-blur-sm"
            >
              {icon}
              <h3 className="text-lg sm:text-xl mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-gray-200 text-sm sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyA1Lifts;
