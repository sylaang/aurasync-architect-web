'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Ruler, Compass, Lightbulb, Home, Building2, Mountain } from 'lucide-react';
import 'aos/dist/aos.css'; // Importer le CSS d'AOS
import AOS from 'aos'; // Importer AOS

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Architecture résidentielle',
    description: "Créer des maisons personnalisées qui reflètent la personnalité et le mode de vie uniques de nos clients, en accordant une attention particulière aux détails et à la fonctionnalité.",
    aos: 'fade-down-right'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Conception commerciale',
    description: "Développer des espaces commerciaux innovants qui améliorent la productivité, favorisent la collaboration et incarnent l'identité de la marque.",
    aos: 'fade-down'
  },
  {
    icon: <Mountain className="h-8 w-8" />,
    title: 'Urbanisme',
    description: "Créer des environnements urbains durables qui favorisent l'interaction entre les communautés et relèvent les défis environnementaux et sociaux.",
    aos: 'fade-down-left'
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Aménagement intérieur',
    description: "Concevoir des espaces intérieurs qui s'harmonisent avec les éléments architecturaux pour créer des environnements cohérents, fonctionnels et esthétiques.",
    aos: 'fade-up-right'
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: 'Restauration',
    description: "Préserver et revitaliser les structures historiques tout en incorporant respectueusement des équipements modernes et des caractéristiques durables.",
    aos: 'fade-up'
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Conception durable',
    description: "Intégrer des principes respectueux de l'environnement et des technologies innovantes pour créer des bâtiments économes en énergie et respectueux de l'environnement.",
    aos: 'fade-up-left'

  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Initialisation de AOS
  useEffect(() => {
    if (typeof window !== 'undefined' && AOS) {
      AOS.init({
        duration: 850,
        easing: 'ease-out',     // Fonction de timing pour l'animation (e.g. 'ease-in', 'linear', etc.)
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Mon approche architecturale comprend une série de services adaptés, conçus pour répondre de manière précise aux attentes de chaque client et aux spécificités de chaque projet."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            if (service.aos) {
              return (
                <div
                  key={index}
                  data-aos={service.aos}
                  className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
