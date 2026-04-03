"use client";

import { useState } from "react";
import Image from "next/image";

const mapData = [
  {
    id: "usa",
    label: "USA",
    image: "/images/usa-map.png",
    stats: [
      { value: "11", label: "store count" },
      { value: "2", label: "states" },
      { value: "2", label: "countries" },
    ],
  },
  {
    id: "canada",
    label: "Canada",
    image: "/images/canada-map.png",
    stats: [
      { value: "4", label: "store count" },
      { value: "4", label: "provinces" },
      { value: "2", label: "countries" },
    ],
  },
  {
    id: "international",
    label: "International",
    image: "/images/international-map.png",
    stats: [
      { value: "15", label: "store count" },
      { value: "2", label: "countries" },
    ],
  },
];

function MapTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (id: string) => void }) {
  return (
    <div className="flex gap-4 md:gap-6 justify-center md:justify-end relative">
      {mapData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative z-10 font-semibold text-[16px] md:text-[24px] uppercase tracking-[-0.48px] transition-colors px-3 md:px-4 py-1 rounded-full ${
            activeTab === tab.id
              ? "bg-forest text-cream"
              : "text-forest hover:text-forest/70"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function MapSection() {
  const [activeTab, setActiveTab] = useState("canada");
  const active = mapData.find((m) => m.id === activeTab)!;

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-8">
      {/* Desktop: Tabs above */}
      <div className="hidden md:block mb-4">
        <MapTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Map Image */}
        <div className="flex-1 w-full">
          <Image
            src={active.image}
            alt={`Cha Cha Matcha ${active.label} locations map`}
            width={750}
            height={584}
            className="w-full h-auto"
          />
        </div>

        {/* Mobile: Tabs between map and stats */}
        <div className="md:hidden w-full">
          <MapTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Map Stats */}
        <div className="bg-pink-light rounded-[15px] p-6 md:p-8 w-full md:w-[380px] shrink-0">
          <div className="space-y-3 md:space-y-4">
            {active.stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-forest text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.28px]">
                  {value}
                </p>
                <p className="text-forest font-semibold text-[20px] md:text-[32px] uppercase tracking-[-0.64px] leading-[1.1]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-4 md:mt-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-forest inline-block" />
              <span className="text-text-muted font-medium text-[14px] md:text-[18px] uppercase tracking-[-0.36px]">
                Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-pink inline-block" />
              <span className="text-text-muted font-medium text-[14px] md:text-[18px] uppercase tracking-[-0.36px]">
                Unavailable
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
