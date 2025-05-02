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
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6">
          Redéfinir <span className="text-white/80">Architecture</span> Excellence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto tracking-wide">
          Créer des espaces qui inspirent, transforment et résistent à l'épreuve du temps
          </p>
        </div>
        
        <div className={cn(
          "absolute bottom-12 transition-all duration-1000 delay-500 ease-out transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <a 
            href="#projects" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Découvrez notre travail</span>
            <ArrowDown className="animate-bounce w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}