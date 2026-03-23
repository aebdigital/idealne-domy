"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    image: "/images/new/97e2e23955e58bc770fdb1e97571c7.jpg",
    title: "Výnimočné rodinné domy s ohľadom na detail",
    subtitle: "Dýchajte čistý vzduch v dome s naším rukopisom. Či už hľadáte bungalov, poschodový rodinný dom alebo modernú vilu, každá naša stavba ponúka jedinečný zážitok z bývania s dôrazom na prémiovú kvalitu.",
  },
  {
    image: "/images/new/38956d71af191c31d844ea846584da.jpg",
    title: "Už 16 rokov spájame dizajn a funkčnosť",
    subtitle: "Viac ako 104 úspešne dokončených stavieb po celom Slovensku hovorí jasnou rečou. Vytvárame priestory, ktoré vydržia generácie a poskytujú maximálny komfort.",
  },
  {
    image: "/images/new/8b6a6f24dccfadce83de175c21f264.jpg",
    title: "Projekty navrhované na mieru klienta",
    subtitle: "Každý pozemok skrýva iný potenciál a každý klient má iné sny. Náš individuálny prístup zaručuje, že vaša vízia bude zhmotnená bez akýchkoľvek kompromisov.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    // Safety check if slide count changed during development/HMR
    if (current >= slides.length) {
      setCurrent(0);
    }
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const currentSlide = slides[current] || slides[0];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#272220]">
      <motion.div 
        style={{ y }} 
        className="absolute inset-x-0 -top-[15%] -bottom-[15%]"
      >
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        ))}
      </motion.div>

      {/* Hero Bottom Content & Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 pt-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        
        <div className="site-container w-full h-full flex flex-col justify-end pointer-events-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            {/* Left Block (Text and Indicators) */}
            <div className="max-w-7xl">

              {/* Slide indicators */}
              <div className="flex gap-4 mb-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      i === current ? "bg-white w-20" : "bg-white/30 w-8 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <h1
                className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Right Block (CTA Button) */}
            <div className="shrink-0 lg:pb-2">
              <Link href="#kontakt" className="group flex justify-center bg-[#1a1715]/90 hover:bg-[#272220] backdrop-blur-md text-white text-center px-16 py-6 rounded-md transition-colors border border-white/10 uppercase tracking-[0.2em] text-sm font-medium w-full sm:w-auto min-w-[280px]">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="Kontakt">Kontakt</span>
                </span>
                <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
