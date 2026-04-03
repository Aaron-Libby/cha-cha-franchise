"use client";

import { useState, useEffect } from "react";

const menuItems = [
  { label: "the experience", href: "#the-experience" },
  { label: "about us", href: "#about-us" },
  { label: "how it works", href: "#how-it-works" },
  { label: "apply today", href: "#apply-today" },
];

export function PageMenu() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = [
      "the-experience",
      "about-us",
      "how-it-works",
      "how-it-works-mobile",
      "apply-today",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          let id = visible[0].target.id;
          if (id === "how-it-works-mobile") id = "how-it-works";
          setActiveSection(id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav id="page-menu" className="sticky top-0 z-20 bg-cream flex justify-center gap-4 md:gap-10 py-4 md:py-6 px-4 flex-wrap">
      {menuItems.map(({ label, href }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={label}
            href={href}
            className={`text-forest font-semibold text-[14px] md:text-[24px] uppercase tracking-[-0.48px] transition-all pb-1 border-b-2 ${
              isActive
                ? "border-forest"
                : "border-transparent hover:border-forest/30"
            }`}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
