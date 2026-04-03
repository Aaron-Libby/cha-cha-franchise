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
    const sectionIds = menuItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
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
    <nav id="page-menu" className="sticky top-0 z-20 bg-cream flex justify-center gap-6 md:gap-10 py-6 px-4 flex-wrap">
      {menuItems.map(({ label, href }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={label}
            href={href}
            className={`text-forest font-semibold text-[16px] md:text-[24px] uppercase tracking-[-0.48px] transition-all pb-1 border-b-2 ${
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
