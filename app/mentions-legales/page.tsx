// app/mentions-legales/page.tsx
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - DD Interiors Home | Déborah KASSEYET Architecte",
  description:
    "Mentions légales du site DD Interiors Home, édité par Déborah KASSEYET, architecte à Paris.",
  alternates: {
    canonical: "https://ddinteriorshome.com/mentions-legales/",
  },
};



const MentionsLegales = () => {
  return (
      <div className="container mx-auto px-4 py-40">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

        <p className="mb-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, nous vous informons que le présent site est édité par :
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Éditeur du site</h2>
        <p>
          Déborah KASSEYET<br />
          Architecte DPLG / Interior designer<br />
          Adresse : 242 Boulevard Voltaire, 75011 Paris<br />
          Email : ddinteriorshome@gmail.com<br />
          Téléphone : +33 7 64 40 24 70<br />
          SIRET : 820 255 594 00021
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Directrice de la publication</h2>
        <p>Déborah KASSEYET</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hébergeur du site</h2>
        <p>
          Ionos by 1&1<br />
          Adresse : 7 place de la Gare, 57200 Sarreguemines, France<br />
          Téléphone : 0970 808 911
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Création et développement</h2>
        <div className="flex flex-col items-start space-y-2" itemScope itemType="https://schema.org/Organization">

          <img
            src="/AuraSync/tampon-aurasync.png"
            alt="Tampon officiel de l'entreprise AuraSync"
            className="h-24"
            itemProp="logo"
          />

          <a
            href="https://aurasync-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="url"
            className="inline-block"
          >
            <img
              src="/AuraSync/AuraSync-logo.svg"
              alt="Logo officiel de l'entreprise AuraSync"
              className="h-16"
            />
          </a>

          <span className="text-sm">
            Site web : <a href="https://aurasync-sooty.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary underline" itemProp="url">
              https://aurasync-sooty.vercel.app/
            </a>
          </span>

          <meta itemProp="taxID" content="94361529400015" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu présent sur ce site, incluant textes, images, photographies, vidéos,
          illustrations, logos et icônes, est protégé par le droit d’auteur et reste la propriété exclusive de
          Déborah KASSEYET ou de ses partenaires. Toute reproduction, distribution, modification ou
          utilisation sans autorisation est strictement interdite.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Responsabilité</h2>
        <p>
          Déborah KASSEYET met tout en œuvre pour assurer l’exactitude et la mise à jour des informations
          diffusées sur ce site. Toutefois, l’éditeur ne peut être tenu responsable des erreurs ou omissions
          et de l’utilisation qui pourrait être faite des informations disponibles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Données personnelles</h2>
        <p>
          Les informations recueillies via ce site font l’objet d’un traitement destiné à répondre à vos
          demandes et à gérer la relation client. Conformément au RGPD, vous disposez d’un droit d’accès,
          de rectification et de suppression de vos données en nous contactant à l’adresse email :
          ddinteriorshome@gmail.com
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Loi applicable</h2>
        <p>
          Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la
          compétence exclusive des tribunaux français.
        </p>
        <p className="mt-8 mb-4">
          Pour plus d’informations sur la protection de vos données personnelles et vos droits, consultez également{' '}
          la <a href="/politique-de-confidentialite" className="text-blue-600 underline">politique de confidentialité</a>,{' '}
          les <a href="/conditions-generales-utilisation" className="text-blue-600 underline">Conditions Générales d’Utilisation</a> et{' '}
          la <a href="/politique-de-cookies" className="text-blue-600 underline">politique de cookies</a>.
        </p>

      </div>
  );
};

export default MentionsLegales;
