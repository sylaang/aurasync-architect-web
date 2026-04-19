'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const navLinks = [
  { name: 'Accueil', href: '#home', title: "Retour à l'accueil de DD Interiors Home" },
  { name: 'Projets', href: '#projects', title: "Voir les projets réalisés par DD Interiors Home" },
  { name: 'Le studio', href: '#about', title: "Découvrir le studio DD Interiors Home" },
  { name: 'Services', href: '#services', title: "Voir les services proposés par DD Interiors Home" },
  { name: "À propos de moi", href: '#profile', title: "En savoir plus sur Déborah KASSEYET" },
  { name: 'Témoignages', href: '#testimonials', title: "Lire les témoignages clients de DD Interiors Home" },
  { name: 'Contact', href: '#contact', title: "Contacter DD Interiors Home" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (hash: string) => {
    const id = hash.replace('#', '');

    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // 🔹 Gestion du style de la navbar selon la page et scroll
      const isAtTop = scrollTop < 50;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const isMiddle = !isAtTop && !isAtBottom;

      if (pathname !== '/' && isAtTop) {
        setScrolled(true);
      } else {
        setScrolled(isMiddle);
      }

      // 🔹 Détecter la section active
      let active = 'home';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.replace('#', ''));
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollTop >= offsetTop - clientHeight / 2) {
            active = link.href.replace('#', '');
          }
        }
      });
      setCurrentSection(active);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={cn(
          'fixed w-full z-50 transition-all duration-700 ease-in-out',
          scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center"
              aria-label="DD Interiors Home"
            >
              <Logo className="h-8 sm:h-10 md:h-12 w-auto text-gray-900 dark:text-white" />
            </a>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => {
                  const id = link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      title={link.title}
                      aria-current={currentSection === id ? 'page' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        'text-sm tracking-wider hover:text-primary transition duration-300',
                        scrolled ? 'text-foreground' : 'text-white'
                      )}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'inline-flex items-center justify-center p-2 rounded-md focus:outline-none',
                  scrolled ? 'text-foreground' : 'text-white'
                )}
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
          <div
            className={cn(
              'px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg transition-colors duration-300',
              scrolled ? 'bg-background text-foreground' : 'bg-transparent text-white'
            )}
          >
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  title={link.title}
                  aria-current={currentSection === id ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium hover:text-primary transition duration-300"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
