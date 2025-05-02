'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.25, 0.3, 1],
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4559559/pexels-photo-4559559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Architects working together"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-lg hidden lg:block" />
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="lg:pl-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mon approche</h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-6"
            >
              Fondé par [Nom de l'architecte], ArchStudio est un cabinet d'architecture de premier plan,
              dédié à la création de designs innovants, durables et intemporels qui repoussent les frontières
              de la conception architecturale.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8"
            >
              Avec plus de 15 ans d'expérience, [Nom de l'architecte] a réalisé des projets dans divers domaines,
              de l'architecture résidentielle à la conception d'espaces commerciaux et publics. Chaque projet est
              une fusion de créativité, d'innovation et d'attention aux détails.
            </motion.p>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '15+', label: "Années d'expérience" },
                { number: '120+', label: "Projets réalisés" },
                { number: '25', label: "Prix de design" },
                { number: '1', label: "Architecte principal" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-4 bg-background rounded-lg shadow-sm"
                >
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}