"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // We already have a global Lenis in SmoothScroll, but we can hook into navigation events here if needed.
    // However, global Lenis handles standard scrolling. Let's just do the page transition.
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
