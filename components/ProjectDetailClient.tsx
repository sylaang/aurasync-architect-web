// components/ProjectDetailClient.tsx (composant côté client)
"use client"; // Cela permet d'exécuter ce composant côté client

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Définir l'interface pour le projet
interface Project {
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  architect: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
  features: string[];
}

// Définir les props du composant
interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div>
        <h2>Images</h2>
        <div className="images">
          <Image src={project.images[activeImage]} alt={`Image ${activeImage + 1}`} width={600} height={400} />
        </div>
        <div>
          {project.images.map((image, index) => (
            <button key={index} onClick={() => setActiveImage(index)}>
              <Image src={image} alt={`Thumbnail ${index + 1}`} width={100} height={100} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
