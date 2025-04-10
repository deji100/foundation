"use client";

import Image from "next/image";
import { FC, useRef, useState, useEffect } from "react";
import { newsItems } from "../data";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NewsCardProps } from "../../type";

const NewsCard: FC<NewsCardProps> = ({ title, description, image, date }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden shrink-0 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
    <div className="relative h-48 w-full">
      <div className="w-full h-[165px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 rounded">
        {date}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-[#154A62] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>
      <a
        href={`/news/${encodeURIComponent(title)}`}
        className="text-[#154A62] font-medium inline-flex items-center"
      >
        Read more <ChevronRight className="w-4 h-4 ml-1 text-[#154A62]" />
      </a>
    </div>
  </div>
);

const MainPageNewsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardCount, setCardCount] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (container) {
      const card = container.children[index] as HTMLElement;
      const scrollAmount = card?.offsetLeft ?? 0;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < cardCount - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstElementChild?.clientWidth || 600;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + 24));
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const totalCards = container.childNodes.length;
      setCardCount(totalCards);
    }
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="w-[90%] mx-auto">
        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#154A62] mb-6">
          The Latest News
        </h2>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="sm:inline-block p-2 bg-white shadow rounded-full disabled:opacity-50"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="text-blue-900" />
          </button>

          {/* News Cards Scroll Area */}
          <div
            className="flex gap-6 mt-3 mb-3 scroll-smooth overflow-x-auto sm:overflow-x-hidden scrollbar-hide px-1 w-full"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
            ref={carouselRef}
          >
            {newsItems.map((item, index) => (
              <div key={index} style={{ scrollSnapAlign: "start" }}>
                <NewsCard {...item} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="sm:inline-block p-2 bg-white shadow rounded-full disabled:opacity-50"
            disabled={activeIndex >= cardCount - 1}
          >
            <ChevronRight className="text-blue-900" />
          </button>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: cardCount }).map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-4 bg-blue-900" : "w-2 bg-blue-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPageNewsSection;
