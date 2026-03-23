"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Reference {
  image: string;
  hoverImage?: string;
  title: string;
  location: string;
  year: string;
  type: string;
  slug: string;
}

interface ReferenceSliderProps {
  references: Reference[];
}

export default function ReferenceSlider({ references }: ReferenceSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = 500;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Predchádzajúce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Ďalšie"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="ref-slider">
        {references.map((ref, i) => (
          <Link key={i} href={`/referencie/${ref.slug}`} className="ref-card block group">
            <Image
              src={ref.image}
              alt={ref.title}
              fill
              className="object-cover"
            />
            {ref.hoverImage && (
              <div className="absolute inset-0 z-[1] hover-reveal-clip">
                <Image
                  src={ref.hoverImage}
                  alt={`${ref.title} alt`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="ref-card-overlay relative z-10">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                {ref.type} · {ref.year}
              </p>
              <h3 className="text-lg font-medium text-white">{ref.title}</h3>
              <p className="text-sm text-white/80 mt-1">{ref.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
