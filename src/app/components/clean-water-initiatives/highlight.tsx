import Image from "next/image";

const Highlights = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        {/* Skills Development */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/water1.webp" // Replace with your actual icon
            alt="Skills Development Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Water Access & Sanitation{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            We provide sustainable clean water solutions through well
            installations, filtration systems, and sanitation programs, ensuring
            safe drinking water for communities.
          </p>
        </div>

        {/* Entrepreneurship Training */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-md">
          <Image
            src="/water2.webp" // Replace with your actual icon
            alt="Entrepreneurship Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Hygiene & Health Education{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Educating communities on proper hygiene practices and water
            conservation to reduce waterborne diseases and improve overall
            public health.
          </p>
        </div>

        {/* Community Leadership */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/water3.webp" // Replace with your actual icon
            alt="Community Leadership Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Sustainable Water Management{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Partnering with local leaders to implement long-term solutions for
            clean water access, fostering healthier and more resilient
            communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
