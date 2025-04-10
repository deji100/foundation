import Image from "next/image";

const AboutPageTeamSection = () => {
  return (
    <section className="w-full bg-[#154A62] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Meet Our Team
        </h2>
        <div className="h-1 w-12 bg-[#57DD8F] rounded-full mx-auto mb-10" />

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow">
              <Image
                src="/team1.webp"
                alt="Michael Benson"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-[#57DD8F] text-lg font-semibold">
              Michael Benson
            </h3>
            <p className="text-sm text-white">Founder</p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow">
              <Image
                src="/team2.webp"
                alt="Janet Arkham"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-[#57DD8F] text-lg font-semibold">
              Janet Arkham
            </h3>
            <p className="text-sm text-white">Treasurer</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow">
              <Image
                src="/team3.webp"
                alt="John Malcom"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-[#57DD8F] text-lg font-semibold">
              John Malcom
            </h3>
            <p className="text-sm text-white">Secretary</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageTeamSection;
