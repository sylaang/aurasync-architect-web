'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArchitectIntro() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">L'architecte derrière chaque projet</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez l’univers, le parcours et les inspirations de [**Nom Prénom**], architecte passionné(e) par la création d’espaces durables, sensibles et porteurs de sens.
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
              src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Portrait de l'architecte"
              width={600}
              height={800}
              className="object-cover w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">[Nom Prénom]</h3>
            <p className="text-sm text-muted-foreground mb-4">Architecte DPLG / Fondateur·rice de [Nom de la société]</p>
            <p className="text-base mb-6">
              Fort(e) de plus de [X] années d’expérience dans l’architecture résidentielle, commerciale et patrimoniale,
              [Nom] conçoit des espaces où l’esthétique rencontre la fonctionnalité. Chaque projet est guidé par une attention minutieuse
              aux détails, au contexte, et aux aspirations uniques de chaque client.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white p-2 rounded-full bg-gray-800 hover:bg-black transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@tonsite.com" className="text-white p-2 rounded-full bg-gray-800 hover:bg-black transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
