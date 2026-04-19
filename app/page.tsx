import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import About from '@/components/AboutSection/About';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import StructuredDataHomeServer from '@/components/StructuredDataHomeServer';

export default function Home() {
  return (
    <>
      <StructuredDataHomeServer />
      <HeroSection />
      <ProjectsSection />
      <About />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}