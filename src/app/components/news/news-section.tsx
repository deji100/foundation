import Image from "next/image";
import { NewsCardProps } from "../../type";

interface NewsSectionProps {
  news: NewsCardProps;
}

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            src={news.image}
            alt={news.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-xl"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#154A62] mb-4">
            {news.title}
          </h2>
          <p className="text-gray-700 text-base mb-4">{news.description}</p>
          <p className="text-gray-700 text-base">
            {news.description_paragraph_2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
