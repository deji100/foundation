import Image from "next/image";

const Highlights = () => {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        {/* Skills Development */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/skill.webp" // Replace with your actual icon
            alt="Skills Development Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Skills Development
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Hands-on training and workshops equip youth with practical skills,
            preparing them for careers in various industries.
          </p>
        </div>

        {/* Entrepreneurship Training */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-md">
          <Image
            src="/training.webp" // Replace with your actual icon
            alt="Entrepreneurship Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Entrepreneurship Training
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Provides young entrepreneurs with resources, mentorship, and practical
            guidance to start and grow successful businesses.
          </p>
        </div>

        {/* Community Leadership */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image
            src="/leadership.webp" // Replace with your actual icon
            alt="Community Leadership Icon"
            width={60}
            height={60}
          />
          <h3 className="text-[#154A62] font-bold text-lg sm:text-xl">
            Community Leadership
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-xs">
            Empowers youth with leadership opportunities to drive positive change
            and make a lasting impact in their communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
