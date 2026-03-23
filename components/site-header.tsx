"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Domov", href: "#top" },
  { label: "O nás", href: "#o-nas" },
  { label: "Referencie", href: "#referencie" },
  { label: "Práve staviame", href: "#prave-staviame" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "bg-[#272220]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="site-container flex items-center justify-between h-24">
          
          {/* Left: Language Switcher */}
          <div className="w-1/3 flex items-center">
            <button className="text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10 backdrop-blur-sm group">
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="SK">SK</span>
              </span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="w-1/3 flex justify-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="Ideálne Domy" 
                width={180} 
                height={40} 
                className="h-7 md:h-9 w-auto brightness-0 invert" 
              />
            </Link>
          </div>

          {/* Right: Menu Toggle */}
          <div className="w-1/3 flex justify-end">
            <button
              onClick={() => setOpen(true)}
              className="text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 backdrop-blur-sm group"
            >
              <div className="w-4 flex flex-col gap-1">
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
              </div>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="Menu">Menu</span>
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 inset-x-0 h-[50vh] z-[60] bg-[#272220] flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-white/10"
          >
            {/* Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "url('/images/texture.svg')", backgroundSize: "cover", filter: "invert(1) opacity(0.3)" }} />

            {/* Header inside Menu */}
            <div className="relative z-10 site-container flex items-center justify-between h-24 shrink-0">
              <div className="w-1/3 flex items-center">
                <button className="text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10 group">
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="SK">SK</span>
                  </span>
                </button>
              </div>
              <div className="w-1/3 flex justify-center">
                <Image src="/images/logo.svg" alt="Ideálne Domy" width={180} height={40} className="h-7 md:h-9 w-auto brightness-0 invert" />
              </div>
              <div className="w-1/3 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 group"
                >
                  <span className="relative w-4 h-4 flex items-center justify-center">
                    <span className="absolute w-full h-[1.5px] bg-white rotate-45 rounded-full transition-transform group-hover:rotate-0"></span>
                    <span className="absolute w-full h-[1.5px] bg-white -rotate-45 rounded-full transition-transform group-hover:rotate-0"></span>
                  </span>
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Zavrieť">Zavrieť</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 flex-1 flex items-center pb-8 overflow-y-auto">
              <div className="site-container w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                
                {/* Left Side: Contact Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hidden md:flex flex-col gap-10 w-full md:w-1/2 md:pl-8 pt-4"
                >
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 block">Kontaktujte nás</span>
                    <a href="tel:+421905563348" className="text-white hover:text-white/70 transition-colors text-2xl font-light block group">
                      <span className="hover-split-text">
                        <span className="hover-split-text-inner" data-text="+421 905 563 348">+421 905 563 348</span>
                      </span>
                    </a>
                    <a href="mailto:info@idealnedomy.sk" className="text-white hover:text-white/70 transition-colors text-2xl font-light mt-3 block group">
                      <span className="hover-split-text">
                        <span className="hover-split-text-inner" data-text="info@idealnedomy.sk">info@idealnedomy.sk</span>
                      </span>
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 block">Centrála</span>
                    <address className="not-italic">
                      <span className="text-white/80 text-xl font-light block group cursor-default">
                        <span className="hover-split-text">
                          <span className="hover-split-text-inner" data-text="Rosinská cesta 8862/21">Rosinská cesta 8862/21</span>
                        </span>
                      </span>
                      <span className="text-white/80 text-xl font-light block mt-2 group cursor-default">
                        <span className="hover-split-text">
                          <span className="hover-split-text-inner" data-text="010 01 Žilina">010 01 Žilina</span>
                        </span>
                      </span>
                    </address>
                  </div>
                </motion.div>

                {/* Primary Links */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
                  <nav className="flex flex-col gap-5">
                    {navItems.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        key={item.href}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="text-4xl md:text-5xl lg:text-6xl font-heading text-white transition-colors tracking-tight block group"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text={item.label}>{item.label}</span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
