// components/RelatedProjects.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
    id: number;
    slug: string; // 👈 on ajoute le slug
    title: string;
    category: string;
    images: string[];
}

interface RelatedProjectsProps {
    projects: Project[];
    category: string;
}

export default function RelatedProjects({ projects, category }: RelatedProjectsProps) {
    return (
        <motion.div
            className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            {projects.length > 0 && (
                <h2 className="text-3xl md:text-4xl font-light mb-16">Projets similaires</h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <RelatedProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-16 text-center">
                {projects.length > 0 && (
                    <Link
                        href={`/projects/${projects[0].slug}`} // 👈 ici aussi
                        className="inline-flex items-center text-sm font-medium hover:underline group"
                    >
                        Voir le projet
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

function RelatedProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.slug}`} className="group"> {/* 👈 ici aussi */}
            <div className="overflow-hidden mb-4" style={{ width: '60vw', height: '20vh' }}>
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <h3 className="text-xl font-medium group-hover:underline transition-all">
                {project.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                {project.category}
            </p>
        </Link>
    );
}
