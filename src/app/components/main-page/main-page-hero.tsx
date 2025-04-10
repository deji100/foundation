import Image from "next/image";
import Link from "next/link";

const MainPageHero = () => {
  return (
    <div className="w-full h-[744px] relative">
      <Image
        src="/main-hero.webp"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        alt="Main Hero Image"
        width={1000}
        height={1000}
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
        <h1 className="text-[42px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-tight sm:leading-[56px] md:leading-[64px] lg:leading-[72px] max-w-[90%] md:max-w-[800px] mb-6">
          Empowering <span className="text-[#57DD8F]">Lives</span>, Transforming{" "}
          <span className="text-[#FB9E3E]">Communities</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[620px] leading-relaxed mb-6">
          Join us in creating a brighter future. Through youth empowerment,
          clean water initiatives, housing projects, and scholarships.
        </p>
        <Link
          href="#"
          className="bg-green-400 hover:bg-green-500 text-[#154A62] font-semibold px-6 py-3 rounded-[12px] transition"
        >
          Donate{" "}
        </Link>
      </div>
    </div>
  );
};

export default MainPageHero;
