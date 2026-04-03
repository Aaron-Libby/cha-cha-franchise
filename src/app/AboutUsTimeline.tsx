"use client";

import { useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    year: "2016",
    title: "2016 — The Beginning",
    description:
      "Founded after time spent in Japan, Cha Cha Matcha opens its original flagship in SoHo, introducing premium Japanese matcha to New York City.",
    image: "/images/about-us-timeline.png",
    color: "#d1dcc2",
  },
  {
    year: "2017–2019",
    title: "2017–2019 — NYC to LA",
    description:
      "Rapid growth across New York City with multiple locations, followed by Cha Cha Matcha's Los Angeles debut — expanding the brand coast to coast.",
    image: "/images/timeline-2017.png",
    color: "#b8cea1",
  },
  {
    year: "2020",
    title: "2020 — Entering High-Traffic Markets",
    description:
      "A strategic move into Midtown Manhattan, near Bryant Park — signaling Cha Cha Matcha's shift toward high-visibility, high-foot-traffic locations.",
    image: "/images/timeline-2020.png",
    color: "#9db27c",
  },
  {
    year: "2022–2024",
    title: "2022–2024 — Multi-City Scale",
    description:
      "Continued expansion into key neighborhoods including Flatiron, Madison Ave, DUMBO, and Moynihan Train Hall — establishing Cha Cha Matcha as a multi-city brand.",
    image: "/images/timeline-2022.png",
    color: "#88a369",
  },
  {
    year: "2025–2026",
    title: "2025–2026 — The Next Chapter",
    description:
      "A Beverly Hills flagship marks Cha Cha Matcha's next phase, alongside the launch of its franchising program — opening the door for partners nationwide.",
    image: "/images/timeline-2025.png",
    color: "#799f4e",
  },
];

export function AboutUsTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Desktop: Horizontal accordion */}
      <div className="hidden md:flex gap-2 h-[468px]">
        {timelineData.map((item, index) => {
          const isActive = index === activeIndex;

          if (isActive) {
            return (
              <div
                key={item.year}
                className="rounded-[10px] flex-1 min-w-0 flex flex-row transition-all duration-500 ease-in-out overflow-hidden"
                style={{ backgroundColor: item.color }}
              >
                {/* Vertical year label on left edge */}
                <div className="w-[48px] shrink-0 flex items-center justify-center">
                  <span className="text-forest font-semibold text-[24px] uppercase tracking-[-0.48px] -rotate-90 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0 p-8 flex flex-row gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-forest font-semibold text-[32px] uppercase tracking-[-0.64px] leading-[1.1] mb-6">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-medium text-[24px] leading-[1.3] tracking-[-0.48px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="rounded-[15px] overflow-hidden w-[320px] h-full shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className="rounded-[8px] w-[48px] shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-forest font-semibold text-[24px] uppercase tracking-[-0.48px] -rotate-90 whitespace-nowrap">
                {item.year}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: Vertical accordion */}
      <div className="flex md:hidden flex-col gap-2">
        {timelineData.map((item, index) => {
          const isActive = index === activeIndex;

          if (isActive) {
            return (
              <div key={item.year}>
                {/* Active year tab */}
                <div
                  className="rounded-t-[10px] py-2 px-4 text-center"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-forest font-semibold text-[18px] uppercase tracking-[-0.48px]">
                    {item.year}
                  </span>
                </div>
                {/* Expanded content */}
                <div
                  className="rounded-b-[10px] p-6 flex flex-col gap-4"
                  style={{ backgroundColor: item.color }}
                >
                  <h3 className="text-forest font-semibold text-[24px] uppercase tracking-[-0.64px] leading-[1.1]">
                    {item.title}
                  </h3>
                  <p className="text-text-muted font-medium text-[16px] leading-[1.3] tracking-[-0.48px]">
                    {item.description}
                  </p>
                  <div className="rounded-[15px] overflow-hidden w-full h-[250px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={375}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className="rounded-[10px] py-3 px-4 text-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-forest font-semibold text-[18px] uppercase tracking-[-0.48px]">
                {item.year}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
