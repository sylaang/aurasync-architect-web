"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { loadParticles } from '@/lib/particles-loader';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  // Load particles.js lazy
  useEffect(() => {
    import('@/lib/particles-loader').then(({ loadParticles }) => {
      loadParticles();
    });
  }, []);

  return (
    <footer className="parallax-footer relative overflow-hidden text-white flex items-center justify-center">

      {/* Particles.js container */}
      <div id="particles-js" className="absolute inset-0"></div>

      {/* Background fixe - reste fixed tout le temps */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
        }}
      />

      {/* Contenu responsive avec overflow caché */}
      <div className="footer-content pt-12 pb-8 md:pt-24 md:pb-12 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">

            {/* Section 1 - Description */}
            <div className="text-center sm:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                <span className="font-semibold text-blue-400">
                  DD Interiors Home
                </span>
              </h3>
              <p className="text-gray-300 text-xs md:text-sm lg:text-base px-4 sm:px-0 break-words">
                Façonner des espaces qui racontent une histoire, où chaque détail inspire et chaque volume respire.
              </p>
            </div>

            {/* Section 2 - Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                <li>
                  <Link
                    href="/?filter=Résidentiel#projects"
                    scroll
                    title="Voir les projets d'architecture résidentielle du studio DD Interiors Home"
                    className="hover:text-white transition-colors duration-300 inline-block break-words"
                  >
                    Architecture résidentielle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?filter=Commerciale#projects"
                    scroll
                    title="Voir les projets de conception commerciale du studio DD Interiors Home"
                    className="hover:text-white transition-colors duration-300 inline-block break-words"
                  >
                    Conception commerciale
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3 - Explorer */}
            <div className="text-center sm:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Explorer</h3>
              <nav aria-label="Navigation interne vers les sections du site">
                <ul className="space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                  <li>
                    <a
                      href="/#about"
                      title="Présentation du studio DD Interiors Home et son univers"
                      className="hover:text-white transition-colors inline-block break-words"
                    >
                      Le studio → Découvrez mon univers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#profile"
                      title="Profil et parcours de Déborah KASSEYET, architecte"
                      className="hover:text-white transition-colors inline-block break-words"
                    >
                      À propos de moi → Mon profil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contact"
                      title="Formulaire de contact et coordonnées de DD Interiors Home"
                      className="hover:text-white transition-colors inline-block break-words"
                    >
                      Contact → Formulaire & coordonnées
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Section 4 - Réseaux sociaux */}
            <div className="text-center sm:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Suivez-moi</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base px-4 sm:px-0 break-words">
                Explorez mes projets d’architecture et les coulisses de mon travail directement sur mes réseaux !
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/dd-interiors-home-20a1062b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DD Interiors Home sur LinkedIn"
                  className="p-1.5 md:p-2 bg-white rounded-full border border-[#0A66C2] hover:bg-white/60 transition-colors inline-flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#0A66C2]" />
                </a>
                <a
                  href="https://www.instagram.com/dd.interiorshome/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DD Interiors Home sur Instagram"
                  className="p-1.5 md:p-2 bg-white rounded-full border border-[#E4405F] hover:bg-white/60 transition-colors inline-flex items-center justify-center"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#E4405F]" />
                </a>
              </div>
            </div>

          </div>

          {/* Footer bottom - version responsive */}
          <div className="border-t border-white/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-[11px] md:text-xs lg:text-sm gap-4 md:gap-0">
              <p className="text-center md:text-left break-words">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-blue-400">
                  DD Interiors Home
                </span>. Tous droits réservés.
              </p>
              
              <nav aria-label="Liens légaux et crédits" className="w-full md:w-auto">
                <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:space-x-4">
                  <li>
                    <a
                      href="/politique-de-confidentialite"
                      title="Consultez la politique de confidentialité de DD Interiors Home"
                      className="hover:text-white transition-colors whitespace-nowrap md:whitespace-normal break-words"
                    >
                      Confidentialité
                    </a>
                  </li>
                  <li className="hidden md:inline text-gray-600">•</li>
                  <li>
                    <a href="/conditions-generales-utilisation"
                      title="Consultez les conditions generales utilisation de DD Interiors Home"
                      className="hover:text-white transition-colors whitespace-nowrap md:whitespace-normal break-words"
                    >
                      CGU
                    </a>
                  </li>
                  <li className="hidden md:inline text-gray-600">•</li>
                  <li>
                    <a href="/politique-de-cookies"
                      title="Consultez la politique de cookies de DD Interiors Home"
                      className="hover:text-white transition-colors whitespace-nowrap md:whitespace-normal break-words"
                    >
                      Cookies
                    </a>
                  </li>
                  <li className="hidden md:inline text-gray-600">•</li>
                  <li>
                    <a href="/mentions-legales"
                      title="Consultez les mentions légales de DD Interiors Home"
                      className="hover:text-white transition-colors whitespace-nowrap md:whitespace-normal break-words"
                    >
                      Mentions
                    </a>
                  </li>
                  <li className="hidden md:inline text-gray-600">•</li>
                  <li>
                    <a
                      href="https://aurasync-sooty.vercel.app"
                      title="Développé par AuraSync"
                      className="hover:text-white transition-colors whitespace-nowrap md:whitespace-normal break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AuraSync
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}