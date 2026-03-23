"use client";

import HeroSlider from "@/components/hero-slider";
import ReferenceSlider from "@/components/reference-slider";
import FadeIn from "@/components/fade-in";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { references } from "@/lib/references";

const services = [
  {
    title: "Projekty na mieru",
    description: "Individuálne projekty rodinných domov prispôsobené vašim potrebám a pozemku. Katalógové projekty za výhodné ceny.",
    icon: "📐",
    image: "/images/new/8b6a6f24dccfadce83de175c21f264.jpg",
  },
  {
    title: "Hrubá stavba",
    description: "Profesionálna realizácia hrubej stavby s bezplatnou konzultáciou. Kvalitné materiály a overené postupy.",
    icon: "🧱",
    image: "/images/new/97e2e23955e58bc770fdb1e97571c7.jpg",
  },
  {
    title: "Stavba na kľúč",
    description: "Kompletná výstavba rodinného domu na kľúč. Od projektu cez realizáciu až po odovzdanie hotového domu.",
    icon: "🏠",
    image: "/images/new/a37c0f28f9342573f8c3364ed7f3f9.jpg",
  },
];

const stats = [
  { number: "16+", label: "Rokov skúseností" },
  { number: "104+", label: "Dokončených stavieb" },
  { number: "3", label: "Pobočky na Slovensku" },
  { number: "100%", label: "Spokojných klientov" },
];

const currentProjects = [
  { title: "Podkrovný dom v Zamarovciach", image: "/images/new/12598e7af92ab8d56eafe5ef1efcc7.jpg" },
  { title: "Poschodový 2401 - Brno", image: "/images/new/3876dbbf2f240f151314a09a36bbdc.jpg" },
  { title: "Domy v Žilinskej Lehote", image: "/images/new/38956d71af191c31d844ea846584da.jpg" },
  { title: "Moderný dom v Bratislave", image: "/images/new/665ccb2eff31d69ae047668ecdd46b.jpg" },
];

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSlider />

      <div className="relative z-10 bg-[#fafaf8]">
        {/* Stats bar */}
        <section className="bg-[#272220] text-white py-12 relative z-10">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="text-4xl md:text-5xl font-heading font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80 mt-1 tracking-wide">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section 
          id="o-nas" 
          className="section-large relative grain-overlay"
          style={{ backgroundImage: "url('/images/texture.svg'), linear-gradient(to bottom, #F5F0EB, #fafaf8)" }}
        >
          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn variant="left">
                <div>
                  <div className="divider mb-6" />
                  <h2 className="mb-6">
                    <Image src="/images/logo.svg" alt="Sme IDEÁLNE DOMY" width={240} height={50} className="h-10 md:h-12 w-auto" />
                  </h2>
                  <p className="text-muted leading-relaxed text-lg mb-4">
                    Sme stavebná spoločnosť zameraná výhradne na výstavbu rodinných domov.
                    Špecializujeme sa na nízkoenergetické a pasívne domy s troma stupňami dokončenia.
                  </p>
                  <p className="text-muted leading-relaxed mb-8">
                    Víťaz CEZAAR 2022 v kategórii rodinné domy – Vila Bôrik. Člen Inštitútu
                    pre pasívne domy a Slovenskej komory stavebných inžinierov.
                  </p>
                  <Link href="/o-nas" className="btn-primary !bg-[#272220] !text-white !border-[#272220] group uppercase tracking-widest text-xs font-medium">
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="VIAC O NÁS">VIAC O NÁS</span>
                    </span>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn variant="right">
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/references/ref-01.jpg"
                    alt="Vila Bôrik - Víťaz CEZAAR 2022"
                    width={800}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#272220] z-20"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-large">
          <div className="site-container">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="divider mx-auto mb-6" />
                <h2 className="font-heading text-5xl md:text-7xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Naše služby
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Ponúkame komplexné služby od návrhu projektu až po dokončenie stavby na kľúč
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div className="group bg-[#272220] text-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#272220]/20 hover:-translate-y-2 transition-all duration-500">
                    <div className="img-hover-zoom h-72 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <motion.div 
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                        className="absolute inset-0 bg-[#272220] z-20"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* References slider */}
        <section 
          className="section-large relative grain-overlay" 
          style={{ backgroundImage: "url('/images/texture.svg'), linear-gradient(to bottom, #fafaf8, #F9FAFB, #fafaf8)" }}
        >
          <div className="site-container">
            <FadeIn>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <div className="divider mb-6" />
                  <h2 className="font-heading text-5xl md:text-7xl" style={{ fontFamily: "var(--font-heading)" }}>
                    Naše realizácie
                  </h2>
                  <p className="text-muted mt-3">104+ dokončených rodinných domov po celom Slovensku</p>
                </div>
                <Link href="/referencie" className="btn-outline hidden md:inline-block group uppercase tracking-widest text-xs font-medium">
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="VŠETKY REFERENCIE">VŠETKY REFERENCIE</span>
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn variant="scale">
              <ReferenceSlider 
                references={references.slice(0, 9).map((ref, idx) => {
                  const images = [
                    "/images/new/12598e7af92ab8d56eafe5ef1efcc7.jpg",
                    "/images/new/3876dbbf2f240f151314a09a36bbdc.jpg",
                    "/images/new/38956d71af191c31d844ea846584da.jpg",
                    "/images/new/665ccb2eff31d69ae047668ecdd46b.jpg",
                    "/images/new/8b6a6f24dccfadce83de175c21f264.jpg",
                    "/images/new/97e2e23955e58bc770fdb1e97571c7.jpg",
                    "/images/new/a37c0f28f9342573f8c3364ed7f3f9.jpg",
                    "/images/new/ba1e96dd5d34bcec79306516e61d87.jpg",
                    "/images/new/e3d0814a06f7b8d7f52ca6ac9fd422.jpg"
                  ];
                  return {
                    ...ref,
                    image: images[idx],
                    hoverImage: images[(idx + 4) % 9]
                  };
                })} 
              />
            </FadeIn>
            <div className="mt-8 text-center md:hidden">
              <Link href="/referencie" className="btn-outline group uppercase tracking-widest text-xs font-medium">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="VŠETKY REFERENCIE">VŠETKY REFERENCIE</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Currently building */}
        <section className="section-large">
          <div className="site-container">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="divider mx-auto mb-6" />
                <h2 className="font-heading text-5xl md:text-7xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Práve staviame
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Aktuálne rozpracované projekty, ktoré môžete navštíviť a presvedčiť sa o kvalite našej práce
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentProjects.map((project, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                    <div className="img-hover-zoom relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-80 object-cover"
                      />
                      <motion.div 
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.2 }}
                        className="absolute inset-0 bg-[#272220] z-20"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white text-lg font-medium">{project.title}</h3>
                      <span className="text-white/60 text-sm">Prebieha výstavba</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="text-center mt-12">
                <Link href="#referencie" className="btn-primary group uppercase tracking-widest text-xs font-medium">
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="VŠETKY REFERENCIE">VŠETKY REFERENCIE</span>
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
