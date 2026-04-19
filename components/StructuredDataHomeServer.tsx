import { services } from '@/lib/services';


export default function StructuredDataHomeServer () {
  return (
     <>
             {/* BreadcrumbList */}
     
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
                  "item": "https://ddinteriorshome.com/#home"
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
                  "name": "Le studio",
                  "item": "https://ddinteriorshome.com/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Services",
                  "item": "https://ddinteriorshome.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "À propos de moi",
                  "item": "https://ddinteriorshome.com/#profile"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Témoignages",
                  "item": "https://ddinteriorshome.com/#testimonials"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Contact",
                  "item": "https://ddinteriorshome.com/#contact"
                },
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": service.title,
                "url": `https://ddinteriorshome.com/#services`
              }))
            }),
          }}
        />

        {/* JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "additionalType": ["Architect", "LocalBusiness"],
              "@id": "https://ddinteriorshome.com/",
              description: "Studio d’architecture intérieure en Ile de France, spécialisé en résidentiel et commercial",
              name: "DD Interiors Home",
              logo: "https://ddinteriorshome.com/logo/DD-Interiors-Home-logo.png",
              url: "https://ddinteriorshome.com",
              telephone: "+33764402470",
              priceRange: "€ - €€€",
              areaServed: [
                { "@type": "City", name: "Paris" },
                { "@type": "AdministrativeArea", name: "Val-de-Marne" },
                { "@type": "AdministrativeArea", name: "Île-de-France" }
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "242 Boulevard Voltaire",
                addressLocality: "Paris",
                postalCode: "75011",
                addressCountry: "FR"
              },
              mainEntityOfPage: "https://ddinteriorshome.com/",
              serviceType: services.map(s => s.title),
              founder: { "@type": "Person", name: "Déborah KASSEYET" },
              sameAs: [
                "https://www.linkedin.com/in/dd-interiors-home-20a1062b9/",
                "https://www.instagram.com/dd.interiorshome/?hl=fr"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33764402470",
                  email: "ddinteriorshome@gmail.com",
                  contactType: "customer service",
                  areaServed: "FR",
                  availableLanguage: ["French", "English"],
                  url: "https://ddinteriorshome.com/#contact"
                },
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Déborah KASSEYET",
              "jobTitle": "Architecte d'intérieur",
              "worksFor": {
                "@type": "Organization",
                "name": "DD Interiors Home"
              },
              "sameAs": [
                "https://www.linkedin.com/in/dd-interiors-home-20a1062b9/",
                "https://www.instagram.com/dd.interiorshome/"
              ]
            }),
          }}
        />
     </>
       );
}