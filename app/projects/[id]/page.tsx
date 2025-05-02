import { notFound } from 'next/navigation';
import { projectDetails } from '@/lib/projectsData';
import ClientProject from './ClientProject';

export function generateStaticParams() {

  const projectIds = projectDetails.map(project => project.id.toString());
  return projectIds.map(id => ({
    id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectDetails.find(p => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return <ClientProject project={project} />;
}
