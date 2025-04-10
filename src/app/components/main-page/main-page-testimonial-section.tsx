"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "../data";

export default function MainPageTestimonial() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

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
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollRight = () => {
    if (activeIndex < cardCount - 1) scrollToIndex(activeIndex + 1);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!cardWidth) return;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + 24));
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardWidth]);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const firstCard = container.firstElementChild as HTMLElement;
      if (firstCard) {
        setCardWidth(firstCard.clientWidth);
      }
      setCardCount(container.childNodes.length);
    }
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center px-4 sm:px-6 md:px-8 py-12"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Image
        src="/testimonial-bg.webp"
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        alt="Testimonial"
        width={1000}
        height={1000}
      />

      <div className="w-[90%] mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8 relative z-10">
          What People Say
        </h2>
      </div>

      <div className="w-[98%] mx-auto relative z-10 flex items-center gap-2 sm:gap-4">
        <button
          onClick={scrollLeft}
          className="p-2 bg-white shadow rounded-full disabled:opacity-50"
          disabled={activeIndex === 0}
        >
          <ChevronLeft className="text-green-500" />
        </button>

        <div
          className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          ref={carouselRef}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 snap-start shrink-0 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[90vw] sm:max-w-none"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="text-green-500 mb-4">
                <Quote />
              </div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-bold text-[#154A62]">{testimonial.name}</p>
                <p className="text-sm text-[#154A62]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="p-2 bg-white shadow rounded-full disabled:opacity-50"
          disabled={activeIndex >= cardCount - 1}
        >
          <ChevronRight className="text-green-500" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2 relative z-10">
        {Array.from({ length: cardCount }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
