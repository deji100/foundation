import Image from "next/image";

const Highlights = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        {/* Skills Development */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/house4.webp" // Replace with your actual icon
            alt="Skills Development Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Affordable Housing Solutions{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            We develop sustainable, cost-effective housing for low-income
            families, providing safe and stable living environments.
          </p>
        </div>

        {/* Entrepreneurship Training */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-md">
          <Image
            src="/house2.webp" // Replace with your actual icon
            alt="Entrepreneurship Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Community Infrastructure Development{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Partnering with local organizations, we improve essential
            infrastructure such as sanitation, electricity, and clean water
            access in housing communities.
          </p>
        </div>

        {/* Community Leadership */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/house3.webp" // Replace with your actual icon
            alt="Community Leadership Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Housing & Financial Education{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            We offer workshops on homeownership, financial literacy, and
            sustainable living to empower families and foster long-term
            stability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
