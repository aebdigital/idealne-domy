import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SmoothScroll from "@/components/smooth-scroll";

const rethink = Rethink_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rethink",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDEÁLNE DOMY | Výstavba rodinných domov na kľúč",
  description:
    "Realizujeme rodinné domy od projektu po výstavbu na kľúč. Už 16 rokov na slovenskom trhu. 104+ dokončených stavieb.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${rethink.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
