'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ArchStudio a transformé notre vision en un espace de vie extraordinaire qui concilie parfaitement esthétique et fonctionnalité. Leur souci du détail et leur engagement en faveur de la durabilité ont dépassé nos attentes.",
    author: "James Wilson",
    title: "Client résidentiel"
  },
  {
    quote: "Travailler avec ArchStudio sur notre siège social a été une expérience sans faille. Ils ont créé un espace innovant qui incarne notre culture d'entreprise et améliore la productivité.",
    author: "Emily Rodriguez",
    title: "PDG, Innovate Tech"
  },
  {
    quote: "L'expertise de l'équipe en matière d'urbanisme a joué un rôle déterminant dans la revitalisation de nos espaces communautaires. Leur approche réfléchie de la conception a permis de créer des environnements qui favorisent les liens et l'engagement.",
    author: "Michael Chen",
    title: "Directeur de l'urbanisme"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-secondary/20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages clients</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
          Écoutez ce que les clients ont à dire sur leur expérience de travail avec <span className="font-semibold text-blue-500"> DD Interiors Home</span> et sur l'impact des solutions architecturales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <p className="text-foreground italic mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}