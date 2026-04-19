// app/projects/[slug]/page.tsx
import { projectDetails } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import ClientProject from './ClientProject';
import StructuredDataProject from '@/components/StructuredDataProject';

interface ProjectPageProps {
  params: { slug: string };
}

// 🔹 Générer les slugs pour SSG
export function generateStaticParams() {
  return projectDetails.map(project => ({
    slug: project.slug,
  }));
}

// 🔹 Page principale
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectDetails.find(p => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <StructuredDataProject title={project.title} slug={project.slug} />
      <ClientProject project={project} />
    </>
  );
}

// 🚀 Metadata dynamique pour chaque projet
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projectDetails.find(p => p.slug === params.slug);
  if (!project) return {};

  const metadataBase = new URL('https://ddinteriorshome.com');

  return {
    title: `${project.title} | DD Interiors Home`,
    description: project.description,
    metadataBase,
    alternates: {
      canonical: `${metadataBase.origin}/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.full_description,
      url: `${metadataBase.origin}/projects/${project.slug}`,
      images: project.images?.[0]
        ? [{ url: `${metadataBase.origin}${project.images[0]}` }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.full_description,
      images: project.images?.[0] ? [`${metadataBase.origin}${project.images[0]}`] : [],
    },
  };
}
