'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function AboutAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.1, 0.25, 0.3, 1] },
    },
  };

  return (
    <div ref={ref} className="relative">
      <motion.div initial="hidden" animate={controls} variants={fadeInUp}>
        <Image
          src="/about/ImageAbout.jpg"
          alt="Architectes travaillant sur un projet d'architecture intérieure"
          width={600}
          height={800}
          className="w-full h-auto object-cover rounded-lg overflow-hidden"
        />
      </motion.div>

      <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-lg hidden lg:block" />
    </div>
  );
}
