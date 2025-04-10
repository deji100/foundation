import Image from "next/image";

const AboutPageMissionVisionSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col gap-12">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow">
              <Image
                src="/about3.webp"
                alt="Our Mission"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-[#154A62]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Our Mission
            </h2>
            <div className="h-1 w-12 bg-[#57DD8F] rounded-full mb-4" />
            <p className="text-sm sm:text-base leading-relaxed">
              GT Foundation is dedicated to uplifting underserved communities by
              providing sustainable solutions in education, housing, and access to
              clean water. Through empowerment and collaboration, we strive to create
              opportunities for a brighter tomorrow.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow">
              <Image
                src="/about4.webp"
                alt="Our Vision"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-[#154A62]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Our Vision
            </h2>
            <div className="h-1 w-12 bg-[#57DD8F] rounded-full mb-4" />
            <p className="text-sm sm:text-base leading-relaxed">
              We envision a world where every individual has access to essential
              resources and opportunities to succeed. Our goal is to break barriers
              and inspire change through impactful programs and partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageMissionVisionSection;
