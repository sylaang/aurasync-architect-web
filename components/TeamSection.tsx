'use client';

import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArchitectIntro() {
  return (
    <section id="profile" className="py-24 bg-white" itemScope itemType="https://schema.org/Person">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">L'architecte derrière chaque projet</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le travail de <span className="font-semibold text-black">Déborah KASSEYET</span>, architecte d’intérieur, s’exprime à travers des espaces durables et élégants, conçus en réponse aux usages et aux besoins de chaque projet.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/team/Deborah-Kasseyet-Architecte.jpg"
              alt="Portrait de l'architecte"
              width={600}
              height={800}
              className="object-cover w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">Déborah KASSEYET</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <span>Architecte d'intérieur</span> / Fondatrice de{' '}
              <span>
                <span className="font-semibold text-blue-500">DD Interiors Home</span>
              </span>
            </p>
            <p className="text-base mb-6">
              Avec plus de 12 ans d’expérience, Déborah KASSEYET vous accompagne dans vos projets résidentiels et commerciaux, en concevant des espaces élégants, fonctionnels et cohérents.
              Chaque projet est guidé par une écoute attentive, une lecture précise des usages et une attention particulière portée aux détails.
            </p>
            <div className="flex space-x-4" >
              <a
                href="https://www.linkedin.com/in/dd-interiors-home-20a1062b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de DD Interiors Home"
                className="text-white p-2 rounded-full bg-gray-800 hover:bg-black transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/dd.interiorshome/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Instagram de DD Interiors Home"
                className="text-white p-2 rounded-full bg-gray-800 hover:bg-black transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
