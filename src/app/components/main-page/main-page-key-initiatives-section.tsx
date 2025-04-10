import Image from "next/image";
import { initiatives } from "../data";
import { initiative } from "../../type";
import Link from "next/link";

const Card = ({ c }: { c: initiative }) => {
  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col gap-2">
      <div className="w-full h-[222px] relative">
        <Image
          src={c.image}
          className="w-full h-full object-cover rounded-md"
          alt={c.alt}
          width={600}
          height={222}
        />
      </div>
      <div className="px-2 sm:px-4 flex flex-col gap-3">
        <h3 className="text-[20px] font-bold text-[#154A62]">{c.title}</h3>
        <p className="text-[16px] text-[#7E7E7E]">{c.description}</p>
        <Link href={`/${c.link || "/"}`} className="w-fit">
          <button className="bg-[#154A62] text-white rounded-md py-2 px-4 flex items-center justify-center gap-2">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

const MainPageKeyInitiativesSection = () => {
  return (
    <div className="w-full h-auto relative py-16 md:py-20">
      <div className="w-[90%] mx-auto relative z-10">
        <Image
          src="/main-initiatives.webp"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-50 pointer-events-none"
          alt="Initiatives"
          width={1000}
          height={1000}
        />
        <div className="relative z-20">
          <div className="max-w-[600px] flex flex-col gap-[30px] mb-10">
            <div>
              <h2 className="text-[#154A62] text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                Our Key Initiatives
              </h2>
              <hr className="border-3 border-[#57DD8F] rounded-md w-[50px]" />
            </div>
            <p className="text-[#585858] text-[16px] sm:text-[18px]">
              At GT Foundation, our mission is driven by four core initiatives
              designed to uplift communities and transform lives. Through
              education, infrastructure, and essential resources, we empower
              individuals and create sustainable change.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            {initiatives.map((c: initiative) => (
              <Card key={c.title} c={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageKeyInitiativesSection;
