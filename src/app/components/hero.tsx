import Image from "next/image";

const Hero = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-[400px] s:h-[400px] l:h-[500px] flex items-center justify-center bg-[#F2F2F2] overflow-hidden">
      <Image
        src="/hero-bg.webp"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        alt="Hero"
        width={1000}
        height={1000}
      />
      <div className="w-[85%] relative z-2 mt-[50px]">
        <h1 className="text-[#fff] text-left text-[40px] sm:text-[50px] lg:text-[60px] font-bold mb-2">
          {title}
        </h1>
        <hr className="border-4 rounded-md border-[#57DD8F] w-[70px]" />
      </div>
    </div>
  );
};

export default Hero;
