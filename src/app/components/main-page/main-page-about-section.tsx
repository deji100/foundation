import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="w-full relative z-10 bg-[#F6F6F6]">
      <div className="w-[90%] mx-auto py-16 flex flex-col lg:flex-row gap-10 lg:gap-[60px]">
        {/* Image Section */}
        <div className="w-full max-w-[503px] h-[300px] sm:h-[400px] lg:h-[449px] mx-auto lg:mx-0">
          <Image
            src="/main-about.webp"
            className="w-full h-full object-cover rounded-md"
            alt="About Image"
            width={1000}
            height={1000}
          />
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-[#154A62] text-2xl sm:text-3xl lg:text-[40px] font-bold mb-2">
              About George-Taylor Foundation
            </h2>
            <hr className="border-3 rounded-md border-[#57DD8F] w-[50px]" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#585858] text-base sm:text-[18px] leading-relaxed">
              At GT Foundation, we are committed to creating lasting change in
              communities by empowering individuals and providing essential
              resources for a better future. Our mission is to uplift lives
              through youth empowerment, clean water initiatives, housing
              projects, and scholarships, ensuring that everyone has the
              opportunity to thrive.
            </p>

            <p className="text-[#585858] text-base sm:text-[18px] leading-relaxed">
              We envision a world where every individual has access to
              education, safe housing, and clean water, enabling them to build a
              brighter future. By fostering self-sufficiency and development, we
              strive to break the cycle of poverty and create sustainable
              change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

