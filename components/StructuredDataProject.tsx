interface StructuredDataProjectProps {
  title: string;
  slug: string;
}

export default function StructuredDataProject({ title, slug }: StructuredDataProjectProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://ddinteriorshome.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Projets",
              "item": "https://ddinteriorshome.com/#projects"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title,
              "item": `https://ddinteriorshome.com/projects/${slug}`
            }
          ]
        })
      }}
    />
  );
}
