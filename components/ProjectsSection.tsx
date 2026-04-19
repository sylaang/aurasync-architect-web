'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projectDetails } from '@/lib/projectsData';
import { useSearchParams } from 'next/navigation';

type CategoryFilter = "Tous" | "Résidentiel" | "Commerciale";

export default function ProjectsSection() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') as CategoryFilter || 'Tous';
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(initialFilter);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories: CategoryFilter[] = ["Tous", "Résidentiel", "Commerciale"];

  const filteredProjects = activeFilter === "Tous"
    ? projectDetails
    : projectDetails.filter(projectDetails => projectDetails.category === activeFilter);

  useEffect(() => {
    const hash = window.location.hash;
    const filter = searchParams.get('filter') as CategoryFilter | null;

    // Appliquer le filtre si présent
    if (filter && categories.includes(filter)) {
      setActiveFilter(filter);
    }

    if (hash === '#projects') {
      const section = document.getElementById('projects');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Petit délai pour être sûr que tout est chargé
      }
    }
  }, [searchParams]);

  const handleFilterChange = (category: CategoryFilter) => {
    setActiveFilter(category);
    // Met à jour l'URL avec le nouveau filtre
    const url = new URL(window.location.href);
    url.searchParams.set('filter', category);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>
            Explorer les créations
            <span className="sr-only">
              Projets d’architecture intérieure : villas modernes, studios et espaces commerciaux conçus à Paris et en Île-de-France
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Découvrez un éventail de projets résidentiels et commerciaux, conçus pour transformer chaque espace en expérience unique.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-in-out",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-500",
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="text-center p-6">
                    <span className="text-white/80 text-sm uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-6">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`Voir le projet ${project.title} de DD Interiors Home`}
                      className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir le Projet
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
