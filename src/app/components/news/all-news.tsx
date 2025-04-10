import Image from "next/image";
import { newsItems } from "../data";
import { NewsCardProps } from "../../type";
import Link from "next/link";

const Card = ({ c }: { c: NewsCardProps }) => {
  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col gap-2">
      <div className="w-full h-[222px] relative">
        <Image
          src={c.image}
          className="w-full h-full object-cover rounded-md"
          alt={c.title}
          width={1000}
          height={1000}
        />
      </div>
      <div className="px-0 sm:px-0 flex flex-col gap-3">
        <h3 className="text-[20px] font-bold text-[#154A62]">{c.title}</h3>
        <p className="text-[16px] text-[#7E7E7E]">{c.description}</p>
        <Link
          href={`/news/${encodeURIComponent(c.title) || "/"}`}
          className="w-fit"
        >
          <button className="bg-[#154A62] text-white rounded-md py-2 px-4 flex items-center justify-center gap-2">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

const AllNews = () => {
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
            <div className="flex flex-col gap-2">
              <h2 className="text-[#154A62] text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[50px]">
                George-Taylor Foundation Empowers Local Communities{" "}
              </h2>
              <hr className="border-3 border-[#57DD8F] rounded-md w-[50px]" />
            </div>
            <p className="text-[#585858] text-[16px] sm:text-[18px]">
              Discover how the George-Taylor Foundation is making a difference
              through education, health, and community development initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            {newsItems.map((c: NewsCardProps) => (
              <Card key={c.title} c={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
