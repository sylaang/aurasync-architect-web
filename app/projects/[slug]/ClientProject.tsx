'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RelatedProjects from '@/components/RelatedProjects';
import { projectDetails } from '@/lib/projectsData';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  area: string;
  architect: string;
  description: string;
  full_description: string;
  plan: string;
  images: string[];
  features: string[];
}

export default function ClientProject({ project }: { project: Project }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projets liés par catégorie (max 3)
  const relatedProjects = projectDetails
    .filter(p => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="w-full pt-24 project-page">
      {/* Image principale */}
      <div className="w-full h-[80vh] overflow-hidden relative">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ scale: { duration: 1.2, ease: 'easeOut' } }}
        >
          <motion.img
            src={project.images?.[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ y: 0 }}
            animate={{ y: scrollY * 0.1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </motion.div>
      </div>

      {/* Titre / Description + Détails */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-6 py-16">
        <div className="md:col-span-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{project.description}</p>
          <p className="text-muted-foreground text-lg mb-8">{project.full_description}</p>

          <h3 className="text-xl font-semibold mb-4">Plan du projet</h3>
          <img
            src={project.plan}
            alt={`Plan de ${project.title}`}
            className="w-full h-auto"
          />
        </div>

        <div className="md:col-span-4 space-y-10">
          <h3 className="text-gray-500 font-medium">DÉTAILS DU PROJET</h3>
          <p><span className="text-gray-500 font-medium">Catégorie</span><br /><span className="font-bold">{project.category}</span></p>
          <p><span className="text-gray-500 font-medium">Localisation</span><br /><span className="font-bold">{project.location}</span></p>
          <p><span className="text-gray-500 font-medium">Année</span><br /><span className="font-bold">{project.year}</span></p>
          <p><span className="text-gray-500 font-medium">Superficie</span><br /><span className="font-bold">{project.area}</span></p>
          <p><span className="text-gray-500 font-medium">Architecte</span><br /><span className="font-bold">{project.architect}</span></p>

          {project.features?.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Caractéristiques</h2>
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Images restantes */}
      <div className="flex flex-wrap gap-8 justify-center px-6 pb-16">
        {project.images?.slice(1).map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index + 2}`}
            className="w-[45vw] h-[50vw] object-cover rounded-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Projets liés */}
      <RelatedProjects projects={relatedProjects} category={project.category} />
    </div>
  );
}
