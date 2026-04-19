// app/politique-de-confidentialite/page.tsx

import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - DD Interiors Home | Déborah KASSEYET Architecte",
  description:
    "Politique de confidentialité du site DD Interiors Home, édité par Déborah KASSEYET, architecte à Paris. Protection et usage des données personnelles.",
  alternates: {
    canonical: "https://ddinteriorshome.com/politique-de-confidentialite/",
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-40 max-w-4xl">
      
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <p className="mb-4">
        La présente politique de confidentialité a pour objectif d’informer les utilisateurs
        du site de Déborah KASSEYET, architecte, sur la manière dont leurs données
        personnelles sont collectées, utilisées et protégées, conformément au Règlement
        Général sur la Protection des Données (RGPD).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Responsable du traitement
      </h2>
      <p className="mb-4">
        Le responsable du traitement des données est :
      </p>
      <p className="mb-4">
        Déborah KASSEYET<br />
        Architecte<br />
        📧 ddinteriorshome@gmail.com
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Données collectées
      </h2>
      <p className="mb-4">
        Les données personnelles susceptibles d’être collectées sur le site sont :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Contenu du message envoyé via le formulaire de contact</li>
        <li>Données de navigation (via Google Analytics)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Finalités du traitement
      </h2>
      <p className="mb-4">
        Les données collectées sont utilisées pour :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Répondre aux demandes envoyées via le formulaire de contact</li>
        <li>Améliorer l’expérience utilisateur</li>
        <li>Analyser la fréquentation du site</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Base légale
      </h2>
      <p className="mb-4">
        Le traitement des données repose :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Sur votre consentement (formulaire de contact et cookies analytiques)</li>
        <li>Sur l’intérêt légitime d’amélioration du site</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Durée de conservation
      </h2>
      <p className="mb-4">
        Les données issues du formulaire de contact sont conservées pour une durée
        maximale de 3 ans à compter du dernier échange.
      </p>
      <p className="mb-4">
        Les données de navigation sont conservées conformément aux règles de Google Analytics
        (maximum 13 mois).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Destinataires des données
      </h2>
      <p className="mb-4">
        Les données personnelles sont exclusivement destinées à Déborah KASSEYET.
      </p>
      <p className="mb-4">
        Certaines données techniques peuvent être traitées par :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>IONOS (hébergement du site)</li>
        <li>Google Analytics (mesure d’audience)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Sécurité des données
      </h2>
      <p className="mb-4">
        Des mesures techniques et organisationnelles appropriées sont mises en place
        afin de garantir la sécurité et la confidentialité des données personnelles.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Vos droits
      </h2>
      <p className="mb-4">
        Conformément à la réglementation en vigueur, vous disposez des droits suivants :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Droit d’accès</li>
        <li>Droit de rectification</li>
        <li>Droit à l’effacement</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d’opposition</li>
        <li>Droit à la portabilité des données</li>
      </ul>

      <p className="mb-4">
        Vous pouvez exercer ces droits en contactant :
      </p>
      <p className="mb-4">
        📧 ddinteriorshome@gmail.com
      </p>

      <p className="mb-4">
        En cas de litige, vous avez également le droit d’introduire une réclamation
        auprès de la CNIL (www.cnil.fr).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Mise à jour
      </h2>
      <p className="mb-4">
        La présente politique de confidentialité peut être modifiée à tout moment afin
        de garantir sa conformité avec la législation en vigueur.
      </p>
      <p className="mt-8 mb-4">
        Pour plus d’informations sur la protection de vos données personnelles et vos droits, consultez également{' '}
        les <a href="/conditions-generales-utilisation" className="text-blue-600 underline">Conditions Générales d’Utilisation</a>,{' '}
        la <a href="/politique-de-cookies" className="text-blue-600 underline">politique de cookies</a> et{' '}
        les <a href="/mentions-legales" className="text-blue-600 underline">mentions légales</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
