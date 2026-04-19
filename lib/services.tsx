// lib/services.ts
import { JSX } from 'react';
import { Home, Building2, Ruler, Image, Lamp, FileCheck } from 'lucide-react';

export type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  aos?: string;
};

export const services: Service[] = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Architecture résidentielle',
    description: "Concevoir des maisons et appartements uniques, alliant confort, style et fonctionnalité, pour créer des intérieurs qui reflètent le mode de vie et la personnalité de chaque client.",
    aos: 'fade-down-right'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Conception commerciale',
    description: "Aménager des espaces professionnels et commerces élégants et performants, pensés pour stimuler la productivité, renforcer la cohésion et refléter l’identité de chaque entreprise, en respectant les principes d’architecture intérieure.",
    aos: 'fade-down'
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Aménagement intérieur',
    description: "Optimiser et organiser les espaces intérieurs en harmonie avec la structure architecturale, pour offrir des environnements fonctionnels, esthétiques et agréables à vivre ou travailler.",
    aos: 'fade-down-left'
  },
  {
    icon: <Image className="h-8 w-8" />,
    title: 'Visualisation & Conception 3D',
    description: "Créer des rendus 3D photoréalistes pour vos projets résidentiels et commerciaux, permettant d’anticiper chaque détail, tester différentes configurations et prendre les meilleures décisions avant la réalisation.",
    aos: 'fade-up-right'
  },
  {
    icon: <Lamp className="h-8 w-8" />,
    title: 'Décoration & aménagement intérieur',
    description: "Harmoniser mobilier, matériaux et éclairage pour sublimer chaque espace, en concevant des intérieurs résidentiels et commerciaux esthétiques, fonctionnels et personnalisés selon vos besoins.",
    aos: 'fade-up'
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Accompagnement administratif',
    description: "Gérer toutes les démarches administratives pour vos projets : demandes ERP, urbanisme, autorisations et suivi de dossiers, afin d’assurer un projet serein, conforme et bien coordonné.",
    aos: 'fade-up-left'
  },
];
