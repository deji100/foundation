"use client";

import React, { useRef, useState, useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import justifiedLayout from "justified-layout";
import Image from "next/image";
import { collage } from "../data";

const MainPageCollageSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1100);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [boxes, setBoxes] = useState<{ left: number; top: number; width: number; height: number }[]>([]);

  console.log(containerWidth)

  useEffect(() => {
    const calculateLayout = (width: number) => {
      const targetRowHeight =
        width < 640 ? 120 : width < 768 ? 160 : 200;

      const layout = justifiedLayout(
        collage.map((img) => ({ width: img.width, height: img.height })),
        {
          containerWidth: width,
          targetRowHeight,
          boxSpacing: 8,
        }
      );

      setBoxes(layout.boxes);
      setLayoutHeight(layout.containerHeight);
    };

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const newWidth = entries[0].contentRect.width;
        setContainerWidth(newWidth);
        calculateLayout(newWidth);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
      // initial layout
      calculateLayout(containerRef.current.offsetWidth);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white py-12">
      <div ref={containerRef} className="w-[90%] mx-auto relative z-10">
        <Gallery>
          <div
            className="relative mx-auto"
            style={{ height: layoutHeight }}
          >
            {boxes.map((box, i) => {
              const img = collage[i];
              return (
                <Item
                  key={i}
                  original={img.src}
                  thumbnail={img.thumbnail}
                  width={img.width}
                  height={img.height}
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      src={img.thumbnail}
                      alt=""
                      className="absolute cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 shadow-md"
                      width={img.width}
                      height={img.height}
                      style={{
                        left: box.left,
                        top: box.top,
                        width: box.width,
                        height: box.height,
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Item>
              );
            })}
          </div>
        </Gallery>
      </div>
    </div>
  );
};

export default MainPageCollageSection;
