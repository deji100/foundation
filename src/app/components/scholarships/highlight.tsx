import Image from "next/image";

const Highlights = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        {/* Skills Development */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/school2.webp" // Replace with your actual icon
            alt="Skills Development Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Tuition & Educational Support{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Providing financial aid for tuition, books, and essential
            educational expenses, enabling students to focus on their studies.
          </p>
        </div>

        {/* Entrepreneurship Training */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-md">
          <Image
            src="/school1.webp" // Replace with your actual icon
            alt="Entrepreneurship Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Mentorship & Career Development{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Connecting scholars with mentors and career development resources to
            guide their academic and professional journeys.
          </p>
        </div>

        {/* Community Leadership */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/school3.webp" // Replace with your actual icon
            alt="Community Leadership Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Community Engagement{" "}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Encouraging scholarship recipients to give back to their communities
            through service projects and leadership programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
