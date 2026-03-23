import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/fade-in";

export default function SiteFooter() {
  return (
    <footer className="relative text-white mt-auto overflow-hidden">
      {/* Universal Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new/ba1e96dd5d34bcec79306516e61d87.jpg"
          alt="Ideálne Domy Footer"
          fill
          className="object-cover"
        />
        {/* Gradient from 40% brown to 100% brown */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#272220]/40 via-[#272220]/90 to-[#272220]" />
      </div>

      <div className="relative z-10">
        {/* Universal CTA */}
        <div className="site-container pt-32 pb-16 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Máte záujem o výstavbu rodinného domu?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Kontaktujte nás pre bezplatnú konzultáciu. Radi vám poradíme s výberom projektu a pripravíme nezáväznú cenovú ponuku.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#cenova-ponuka" className="btn-primary !bg-white !text-[#272220] hover:!bg-white/90 group uppercase tracking-widest text-xs font-medium">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="CENOVÁ PONUKA">CENOVÁ PONUKA</span>
                </span>
              </Link>
              <a href="tel:+421905563348" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#272220] group uppercase tracking-widest text-xs font-medium">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="ZAVOLAJTE NÁM">ZAVOLAJTE NÁM</span>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="site-container pb-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company */}
            <div>
              <Image 
                src="/images/logo.svg" 
                alt="Ideálne Domy" 
                width={180} 
                height={40} 
                className="h-10 w-auto mb-6 brightness-0 invert" 
              />
              <p className="text-white/60 text-sm leading-relaxed">
                Sme stavebná spoločnosť zameraná výhradne na výstavbu rodinných domov.
                Už 16 rokov realizujeme domy od projektu po výstavbu na kľúč.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Navigácia</h4>
              <ul className="space-y-4">
                {[
                  { label: "Domov", href: "#top" },
                  { label: "O nás", href: "#o-nas" },
                  { label: "Referencie", href: "#referencie" },
                  { label: "Práve staviame", href: "#prave-staviame" },
                  { label: "Cenová ponuka", href: "#cenova-ponuka" },
                  { label: "Kontakt", href: "#kontakt" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-base group block">
                      <span className="hover-split-text">
                        <span className="hover-split-text-inner" data-text={link.label}>{link.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Služby</h4>
              <ul className="space-y-4 text-base text-white/60">
                {["Projekty na mieru", "Hrubá stavba", "Stavba na kľúč", "Nízkoenergetické domy", "Pasívne domy"].map((item) => (
                  <li key={item}>
                    <span className="group cursor-pointer hover:text-white transition-colors block">
                      <span className="hover-split-text">
                        <span className="hover-split-text-inner" data-text={item}>{item}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Kontakt</h4>
              <ul className="space-y-4 text-base text-white/60">
                <li>
                  <span className="group cursor-pointer hover:text-white transition-colors block">
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="Rosinská cesta 8862/21">Rosinská cesta 8862/21</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="group cursor-pointer hover:text-white transition-colors block">
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="010 01 Žilina">010 01 Žilina</span>
                    </span>
                  </span>
                </li>
                <li className="pt-2">
                  <a href="tel:+421905563348" className="group hover:text-white transition-colors block">
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="+421 905 563 348">+421 905 563 348</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@idealnedomy.sk" className="group hover:text-white transition-colors block">
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="info@idealnedomy.sk">info@idealnedomy.sk</span>
                    </span>
                  </a>
                </li>
                <li className="pt-2">Po – Pi: 8:00 – 16:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} IDEÁLNE DOMY, s.r.o. Všetky práva vyhradené. IČO: 45911517
            </p>
            <div className="flex gap-8 text-sm text-white/40">
              <span className="group cursor-pointer hover:text-white transition-colors block">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="GDPR">GDPR</span>
                </span>
              </span>
              <span className="group cursor-pointer hover:text-white transition-colors block">
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="Obchodné podmienky">Obchodné podmienky</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
