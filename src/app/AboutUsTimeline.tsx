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
    <div className="flex gap-2 h-[400px] md:h-[468px]">
      {timelineData.map((item, index) => {
        const isActive = index === activeIndex;

        if (isActive) {
          return (
            <div
              key={item.year}
              className="rounded-[10px] flex-1 min-w-0 p-6 md:p-10 flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-forest font-semibold text-[24px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1] mb-6">
                  {item.title}
                </h3>
                <p className="text-text-muted font-medium text-[16px] md:text-[24px] leading-[1.3] tracking-[-0.48px]">
                  {item.description}
                </p>
              </div>
              <div className="rounded-[15px] overflow-hidden w-full md:w-[320px] h-[200px] md:h-full shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={400}
                  className="object-cover w-full h-full"
                />
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
            <span className="text-forest font-semibold text-[18px] md:text-[24px] uppercase tracking-[-0.48px] -rotate-90 whitespace-nowrap">
              {item.year}
            </span>
          </button>
        );
      })}
    </div>
  );
}
