'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src="/image-hero-section/HeroSection.png"
        alt="Conception 3D par Déborah KASSEYET : espaces résidentiels et commerciaux, bar, dressing chic et salon élégant"
        className="hidden"
      />

      <div
        className="absolute inset-0 bg-cover bg-center"
        aria-label="Conception 3D par Déborah KASSEYET : espaces résidentiels et commerciaux, bar, dressing chic et salon élégant"
        style={{
          backgroundImage: "url('/image-hero-section/HeroSection.png')",
          backgroundPosition: "center center",
          filter: "brightness(0.7)",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "transition-all duration-1000 ease-out transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Redéfinir <span className="text-white/80">l’art de vivre à travers l’architecture</span>
            <span className="sr-only"> – architecture intérieure résidentielle et commerciale à Paris et Île-de-France</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto tracking-wide">
            Imaginer aujourd’hui les lieux qui marqueront demain.
            <span className="sr-only">
              Imaginer aujourd’hui les lieux résidentiels et commerciaux qui marqueront demain.
            </span>
          </p>
        </div>

        <div className={cn(
          "absolute bottom-12 transition-all duration-1000 delay-500 ease-out transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <a
            href="#projects"
            aria-label="Voir les projets réalisés par DD Interiors Home"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Entrez dans l’expérience</span>
            <ArrowDown className="animate-bounce w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}