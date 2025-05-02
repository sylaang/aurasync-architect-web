'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'Projets', href: '#projects' },
  { name: 'A propos de', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: "L'architecte", href: '#team' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/'; // Vérifie si nous sommes sur la page d'accueil

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="#home" className="font-bold text-xl tracking-tight">
              ARCHSTUDIO
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  className={cn(
                    'text-sm tracking-wider hover:text-primary transition duration-300',
                    scrolled ? 'text-foreground' : (
                      ['/projects', '/terms-of-use', '/cookies-policy', '/privacy-policy'].some((page) => pathname.includes(page)) 
                      ? 'text-black' 
                      : 'text-white'
                    )
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md focus:outline-none',
                scrolled ? 'text-foreground' : 'text-white'
              )}
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={isHomePage ? link.href : `/${link.href}`}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
