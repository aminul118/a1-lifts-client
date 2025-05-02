import { Banner } from "@/lib/types/types";

const SectionBanner = ({
  heading,
  description,
  className,
  backgroundImagePath,
}: Banner) => {
  return (
    <div
      className={`${className} relative w-full h-64 lg:h-96 bg-cover bg-center  flex items-center justify-center `}
      style={{
        backgroundImage: backgroundImagePath
          ? `url('${backgroundImagePath}')`
          : "none",
      }}
    >
      {backgroundImagePath && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-3xl 2xl:text-5xl  font-bold mb-6 ">{heading}</h2>
        {description && <p className="lg:text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default SectionBanner;
