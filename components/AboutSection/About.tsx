'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import AboutContent from './AboutContent';
import AboutAnimation from './AboutAnimation';

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutAnimation />

          {/* Partie texte + stats */}
          <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerChildren}>
            <AboutContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
