'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from '@/lib/services';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (typeof window !== 'undefined' && AOS) {
      AOS.init({
        duration: 850,
        easing: 'ease-out',
        once: false,
        offset: 250,
        delay: 100,
      });
    }
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes services
            <span className="sr-only">
              Expertise en architecture intérieure, aménagement et design sur-mesure pour espaces résidentiels et commerciaux
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            DD Interiors Home propose des services d'<strong>architecture intérieure</strong> sur-mesure pour vos projets <strong>résidentiels</strong> et <strong>commerciaux</strong>.
            Mon approche comprend l'<strong>aménagement intérieur</strong>, la <strong>visualisation 3D</strong> de vos espaces, la <strong>décoration</strong> et le <strong>design sur-mesure</strong>, ainsi qu’un <strong>accompagnement administratif</strong> complet.
            Chaque projet est conçu pour répondre précisément aux besoins de mes clients, tout en créant des espaces esthétiques, fonctionnels et uniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceWrapper = service.aos ? 'div' : motion.div;

            return (
              <ServiceWrapper
                key={index}
                data-aos={service.aos}
                initial={!service.aos ? { opacity: 0, y: 50 } : undefined}
                animate={!service.aos && isInView ? { opacity: 1, y: 0 } : undefined}
                transition={!service.aos ? { duration: 0.5, delay: index * 0.1 } : undefined}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </ServiceWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
