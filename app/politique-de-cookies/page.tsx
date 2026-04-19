// app/politique-de-cookies/page.tsx

import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies - DD Interiors Home | Déborah KASSEYET Architecte",
  description:
    "Politique de cookies et gestion des données personnelles du site DD Interiors Home, édité par Déborah KASSEYET, architecte à Paris, conforme au RGPD.",
  alternates: {
    canonical: "https://ddinteriorshome.com/politique-de-cookies/",
  },
};

const CookiesPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-40 max-w-4xl">

      <h1 className="text-3xl font-bold mb-6">Politique de cookies</h1>

      <p className="mb-4">
        La présente politique de cookies a pour objectif d’informer les utilisateurs du site de
        Déborah KASSEYET, architecte, sur l’utilisation des cookies lors de leur navigation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Qu’est-ce qu’un cookie ?
      </h2>
      <p className="mb-4">
        Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette ou smartphone)
        lors de la consultation d’un site internet. Il permet de collecter des informations relatives à
        votre navigation afin d’améliorer votre expérience utilisateur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Quels types de cookies utilisons-nous ?
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        a) Cookies strictement nécessaires
      </h3>
      <p className="mb-4">
        Ces cookies sont indispensables au bon fonctionnement du site.
        Ils permettent notamment :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>L’affichage correct des pages</li>
        <li>La sécurité du site</li>
        <li>Le bon fonctionnement du formulaire de contact</li>
      </ul>
      <p className="mb-4">
        Ces cookies ne nécessitent pas votre consentement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        b) Cookies de mesure d’audience (Google Analytics)
      </h3>
      <p className="mb-4">
        Le site utilise Google Analytics afin d’analyser la fréquentation et d’améliorer
        l’expérience utilisateur.
      </p>
      <p className="mb-4">
        Les données collectées peuvent inclure :
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Les pages consultées</li>
        <li>La durée de navigation</li>
        <li>Le type d’appareil utilisé</li>
        <li>La localisation approximative (ville / pays)</li>
      </ul>
      <p className="mb-4">
        Ces informations sont anonymisées et utilisées uniquement à des fins statistiques.
        Les cookies analytiques sont déposés uniquement avec votre consentement.
      </p>

      <p className="mb-4">
        Pour en savoir plus sur la gestion des données par Google :
        <br />
        https://policies.google.com/privacy
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Gestion des cookies
      </h2>
      <p className="mb-4">
        Lors de votre première visite sur le site, un bandeau de consentement vous permet
        d’accepter ou de refuser les cookies non essentiels.
      </p>
      <p className="mb-4">
        Vous pouvez également configurer votre navigateur pour bloquer ou supprimer
        les cookies à tout moment.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Durée de conservation
      </h2>
      <p className="mb-4">
        Les cookies sont conservés pour une durée maximale de 13 mois, conformément
        à la réglementation en vigueur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Hébergement du site
      </h2>
      <p className="mb-4">
        Le site est hébergé par :
      </p>
      <p className="mb-4">
        IONOS<br />
        7 Place de la Gare<br />
        57200 Sarreguemines<br />
        France
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Contact
      </h2>
      <p className="mb-4">
        Pour toute question relative à cette politique de cookies, vous pouvez contacter :
      </p>
      <p className="mb-4">
        📧 ddinteriorshome@gmail.com
      </p>
      <p className="mt-8 mb-4">
        Pour plus d’informations sur la protection de vos données personnelles et vos droits, consultez également{' '}
        la <a href="/politique-de-confidentialite" className="text-blue-600 underline">politique de confidentialité</a>,{' '}
        les <a href="/conditions-generales-utilisation" className="text-blue-600 underline">Conditions Générales d’Utilisation</a> et{' '}
        les <a href="/mentions-legales" className="text-blue-600 underline">mentions légales</a>.
      </p>


    </div>
  );
};

export default CookiesPolicy;
