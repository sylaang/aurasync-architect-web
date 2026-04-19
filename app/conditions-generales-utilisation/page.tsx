// app/conditions-generales-utilisation/page.tsx


import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d’Utilisation - DD Interiors Home | Déborah KASSEYET Architecte",
  description:
    "Conditions générales d’utilisation du site DD Interiors Home, édité par Déborah KASSEYET, architecte à Paris. Accès, utilisation et responsabilités des utilisateurs.",
  alternates: {
    canonical: "https://ddinteriorshome.com/conditions-generales-utilisation/",
  },
};

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-40 max-w-4xl">

      <h1 className="text-3xl font-bold mb-6">Conditions Générales d’Utilisation</h1>

      <p className="mb-4">
        Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet
        de définir les modalités d’accès et d’utilisation du site de
        Déborah KASSEYET, architecte.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Objet du site
      </h2>
      <p className="mb-4">
        Le site a pour objectif de présenter les projets, services et
        réalisations de Déborah KASSEYET, ainsi que de permettre aux
        utilisateurs de prendre contact via un formulaire dédié.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Accès au site
      </h2>
      <p className="mb-4">
        Le site est accessible gratuitement à tout utilisateur disposant
        d’un accès à Internet. Tous les frais relatifs à l’accès au site
        (matériel informatique, connexion Internet, etc.) sont à la charge
        de l’utilisateur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Propriété intellectuelle
      </h2>
      <p className="mb-4">
        L’ensemble des contenus présents sur le site (textes, images,
        photographies, plans, logos, éléments graphiques, etc.) est protégé
        par le droit de la propriété intellectuelle.
      </p>
      <p className="mb-4">
        Toute reproduction, représentation, modification, publication,
        adaptation ou exploitation, totale ou partielle, du contenu du site
        est interdite sans autorisation écrite préalable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Responsabilité
      </h2>
      <p className="mb-4">
        Les informations diffusées sur le site sont fournies à titre indicatif.
        Malgré le soin apporté à leur rédaction, elles peuvent contenir des
        inexactitudes ou omissions.
      </p>
      <p className="mb-4">
        Déborah KASSEYET ne pourra être tenue responsable de tout dommage
        direct ou indirect résultant de l’accès ou de l’utilisation du site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Liens externes
      </h2>
      <p className="mb-4">
        Le site peut contenir des liens vers des sites tiers.
        Déborah KASSEYET n’exerce aucun contrôle sur ces sites et décline
        toute responsabilité quant à leur contenu.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Données personnelles
      </h2>
      <p className="mb-4">
        Les données personnelles collectées via le formulaire de contact
        sont traitées conformément à la Politique de confidentialité
        disponible sur le site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Modification des CGU
      </h2>
      <p className="mb-4">
        Les présentes conditions peuvent être modifiées à tout moment.
        La version applicable est celle en vigueur à la date de consultation du site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Droit applicable
      </h2>
      <p className="mb-4">
        Les présentes CGU sont soumises au droit français.
        En cas de litige, et à défaut de résolution amiable,
        les tribunaux français seront seuls compétents.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Contact
      </h2>
      <p className="mb-4">
        Pour toute question relative aux présentes conditions :
      </p>
      <p className="mb-4">
        📧 ddinteriorshome@gmail.com
      </p>
      <p className="mt-8 mb-4">
        Pour plus d’informations sur la protection de vos données personnelles et vos droits, consultez également{' '}
        la <a href="/politique-de-confidentialite" className="text-blue-600 underline">politique de confidentialité</a>,{' '}
        la <a href="/politique-de-cookies" className="text-blue-600 underline">politique de cookies</a> et{' '}
        les{' '}<a href="/mentions-legales" className="text-blue-600 underline">mentions légales</a>.
      </p>
    </div>
  );
};

export default TermsOfUse;
