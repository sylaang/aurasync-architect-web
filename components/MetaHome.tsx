'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function MetaHome() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  if (!isHomepage) return null;

  return (
    <>
      {/* OG / Twitter / Canonical */}
      <meta property="og:title" content="DD Interiors Home | Solutions architecturales innovantes" />
      <meta property="og:description" content="DD Interiors Home conçoit des espaces résidentiels, commerciaux innovants, durables et intemporels en Ile-de-France." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ddinteriorshome.com/" />
      <meta property="og:image" content="https://ddinteriorshome.com/image-hero-section/HeroSection.png" />

      <link rel="canonical" href="https://ddinteriorshome.com/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DD Interiors Home | Solutions architecturales innovantes" />
      <meta name="twitter:description" content="DD Interiors Home conçoit des espaces résidentiels, commerciaux innovants, durables et intemporels en Ile-de-France." />
      <meta name="twitter:image" content="https://ddinteriorshome.com/image-hero-section/HeroSection.png" />
      <meta name="twitter:creator" content="@ddinteriorshome" />
    </>
  );
}
