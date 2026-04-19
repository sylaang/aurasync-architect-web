import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from './google-analytics'
import MetaHome from '@/components/MetaHome';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DD Interiors Home | Solutions architecturales innovantes',
  description: 'DD Interiors Home conçoit des espaces résidentiels, commerciaux innovants, durables et intemporels en Ile-de-France.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Préchargement de l’image HeroSection */}
        <link rel="preload" as="image" href="/image-hero-section/HeroSection.png" />

        

        <MetaHome />

        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="logo/DD-Interiors-Home-logo.png" />
        <link rel="icon" href="/logo/DD-Interiors-Home-favicon.png" type="image/png" />


      </head>

      <body className={`${inter.className} overflow-x-hidden`}>

        <div className="flex flex-col min-h-screen">

          <Navbar />

          <main className="flex-grow bg-white relative z-10">
            {children}
          </main>

          <Footer />

        </div>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      </body>

    </html>
  );
}