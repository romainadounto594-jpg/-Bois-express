import { LanguageCode, LegalPageData } from '../types';
import { LEGAL_PAGES } from './legal';

type LegalKey =
  | 'mentions-legales'
  | 'protection-des-donnees'
  | 'conditions-generales-de-vente'
  | 'conditions-dutilisation';

const LEGAL_OVERRIDES: Record<
  Exclude<LanguageCode, 'fr'>,
  Record<LegalKey, LegalPageData>
> = {
  en: {
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Legal Notice',
      breadcrumbLabel: 'Legal Notice',
      sections: [
        {
          heading: '1: Legal Information',
          paragraphs: [
            'The website is managed by:',
            'BOIS EXPRESS – 3 rue de Schoeneck, 57600 Forbach, France',
            'SIRET: 50182636600038 · NAF: 8130Z · Phone: +33 3 87 13 38 12 · Email: contact@bois-express.fr',
            'Publication Director: Bois express Management',
            'Hosting provider: OVH, 2 rue Kellermann, 59100 Roubaix, France.',
          ],
        },
        {
          heading: '2: Data Protection',
          paragraphs: [
            'Information on personal data processing and cookies is detailed in the "Data Protection" and "Terms of Use" sections.',
          ],
        },
        {
          heading: '3: Intellectual Property',
          paragraphs: [
            'All content on this website (texts, photographs, illustrations, brand marks) is the exclusive property of Bois express. Any unauthorized reproduction or representation is strictly prohibited.',
          ],
        },
      ],
    },
    'protection-des-donnees': {
      slug: 'protection-des-donnees',
      title: 'Data Protection',
      breadcrumbLabel: 'Data Protection',
      sections: [
        {
          heading: 'Collection & Purpose',
          paragraphs: [
            'Personal data collected via contact forms, account creation, or order simulation is used solely by Bois express to process your requests and manage orders.',
            'No personal data is sold or transferred outside the European Union.',
          ],
        },
        {
          heading: 'Your GDPR Rights',
          paragraphs: [
            'In accordance with the European GDPR (Regulation 2016/679/EU), you have rights of access, rectification, erasure, restriction, and portability.',
            'To exercise these rights, write to BOIS EXPRESS, 3 rue de Schoeneck, 57600 Forbach, France, or email contact@bois-express.fr.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Essential cookies keep your shopping cart and language preference active. Optional analytics, API, social, video, and advertising cookies require your prior consent and can be updated at any time using the button below. Maximum lifespan: 13 months.',
          ],
        },
      ],
    },
    'conditions-generales-de-vente': {
      slug: 'conditions-generales-de-vente',
      title: 'Terms and Conditions of Sale',
      breadcrumbLabel: 'Terms of Sale',
      sections: [
        {
          heading: 'Article 1 – Scope',
          paragraphs: [
            'These Terms and Conditions of Sale apply to orders placed with BOIS EXPRESS (3 rue de Schoeneck, 57600 Forbach). In the event of any discrepancy between translated versions, the French original remains legally binding.',
          ],
        },
        {
          heading: 'Article 2 – Availability & Pricing',
          paragraphs: [
            'Offers are valid while visible on the website within the limits of available stock. Prices are shown in Euros including all applicable taxes (TTC).',
            'Note: Bulk firewood and pellets cannot be combined in the same order and must be placed separately.',
          ],
        },
        {
          heading: 'Article 3 – Delivery & Depot Pickup',
          paragraphs: [
            'Home delivery is provided in the covered Forbach / Moselle / Saarland zones via 7.5T tipper truck (bulk wood) or 19T tail-lift truck (pallets). Depot pickup is also available at 3 rue de Schoeneck, 57600 Forbach.',
          ],
        },
        {
          heading: 'Article 4 – Right of Withdrawal & Warranties',
          paragraphs: [
            'Individual consumers benefit from the statutory 14-day right of withdrawal and legal conformity warranties under French Consumer Code rules.',
          ],
        },
      ],
    },
    'conditions-dutilisation': {
      slug: 'conditions-dutilisation',
      title: 'Terms of Use',
      breadcrumbLabel: 'Terms of Use',
      sections: [
        {
          heading: 'Article 1 – Publisher',
          paragraphs: [
            'BOIS EXPRESS is a SAS registered under SIRET 50182636600038, located at 3 rue de Schoeneck, 57600 Forbach. Customer service is available Monday to Friday from 8:00 AM to 5:00 PM at +33 3 87 13 38 12.',
          ],
        },
        {
          heading: 'Article 2 – Access & Visitor Obligations',
          paragraphs: [
            'Access to the website is free of charge. Visitors agree not to misuse the site or attempt unauthorized access to its systems.',
          ],
        },
      ],
    },
  },
  de: {
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Impressum',
      breadcrumbLabel: 'Impressum',
      sections: [
        {
          heading: '1: Rechtliche Angaben',
          paragraphs: [
            'Verantwortlich für diese Website:',
            'BOIS EXPRESS – 3 rue de Schoeneck, 57600 Forbach, Frankreich',
            'SIRET: 50182636600038 · NAF: 8130Z · Telefon: +33 3 87 13 38 12 · E-Mail: contact@bois-express.fr',
            'Hosting: OVH, 2 rue Kellermann, 59100 Roubaix, Frankreich.',
          ],
        },
        {
          heading: '2: Datenschutz & Urheberrecht',
          paragraphs: [
            'Informationen zur Datenverarbeitung finden Sie unter „Datenschutz“. Alle Inhalte und Bilder dieser Website unterliegen dem Urheberrecht von Bois express.',
          ],
        },
      ],
    },
    'protection-des-donnees': {
      slug: 'protection-des-donnees',
      title: 'Datenschutz',
      breadcrumbLabel: 'Datenschutz',
      sections: [
        {
          heading: 'Erhebung und Zweck',
          paragraphs: [
            'Personenbezogene Daten werden ausschließlich zur Bearbeitung Ihrer Anfragen und zur Abwicklung simulierter Bestellungen verwendet. Es erfolgt keine Übermittlung außerhalb der Europäischen Union.',
          ],
        },
        {
          heading: 'Ihre Rechte (DSGVO)',
          paragraphs: [
            'Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit. Kontaktieren Sie uns unter contact@bois-express.fr oder schriftlich an BOIS EXPRESS, 3 rue de Schoeneck, 57600 Forbach.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Technisch notwendige Cookies speichern Ihren Warenkorb und Ihre Sprachauswahl. Optionale Cookies können unten jederzeit angepasst oder abgelehnt werden (maximale Speicherdauer: 13 Monate).',
          ],
        },
      ],
    },
    'conditions-generales-de-vente': {
      slug: 'conditions-generales-de-vente',
      title: 'Allgemeine Verkaufsbedingungen',
      breadcrumbLabel: 'AGB',
      sections: [
        {
          heading: 'Artikel 1 – Geltungsbereich',
          paragraphs: [
            'Diese Allgemeinen Verkaufsbedingungen gelten für Bestellungen bei BOIS EXPRESS (Forbach). Im Falle von Abweichungen ist ausschließlich die französische Originalfassung maßgeblich.',
          ],
        },
        {
          heading: 'Artikel 2 – Preise und Lieferbedingungen',
          paragraphs: [
            'Alle Preise verstehen sich in Euro inklusive gesetzlicher Mehrwertsteuer. Pellets und loses Brennholz müssen aufgrund unterschiedlicher Lieferfahrzeuge (7,5-t-Kipper vs. 19-t-LKW mit Hebebühne) getrennt bestellt werden.',
          ],
        },
        {
          heading: 'Artikel 3 – Widerrufsrecht',
          paragraphs: [
            'Verbrauchern steht das gesetzliche 14-tägige Widerrufsrecht gemäß den französischen Verbraucherschutzbestimmungen zu.',
          ],
        },
      ],
    },
    'conditions-dutilisation': {
      slug: 'conditions-dutilisation',
      title: 'Nutzungsbedingungen',
      breadcrumbLabel: 'Nutzungsbedingungen',
      sections: [
        {
          heading: 'Artikel 1 – Betreiber und Zugang',
          paragraphs: [
            'Betreiber ist BOIS EXPRESS SAS (57600 Forbach). Unser Kundenservice ist montags bis freitags von 8:00 bis 17:00 Uhr unter +33 3 87 13 38 12 erreichbar. Besucher verpflichten sich zu einer sachgemäßen Nutzung der Website.',
          ],
        },
      ],
    },
  },
  es: {
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Aviso legal',
      breadcrumbLabel: 'Aviso legal',
      sections: [
        {
          heading: '1: Información legal',
          paragraphs: [
            'Sitio web gestionado por BOIS EXPRESS – 3 rue de Schoeneck, 57600 Forbach, Francia.',
            'SIRET: 50182636600038 · NAF: 8130Z · Teléfono: +33 3 87 13 38 12 · Correo: contact@bois-express.fr',
            'Alojamiento: OVH, 2 rue Kellermann, 59100 Roubaix, Francia.',
          ],
        },
        {
          heading: '2: Propiedad intelectual',
          paragraphs: [
            'Todos los contenidos, textos e imágenes del sitio son propiedad exclusiva de Bois express.',
          ],
        },
      ],
    },
    'protection-des-donnees': {
      slug: 'protection-des-donnees',
      title: 'Protección de datos',
      breadcrumbLabel: 'Protección de datos',
      sections: [
        {
          heading: 'Tratamiento de datos y derechos RGPD',
          paragraphs: [
            'Los datos personales recopilados se utilizan únicamente para gestionar sus solicitudes y pedidos. Conforme al Reglamento europeo 2016/679 (RGPD), dispone de derechos de acceso, rectificación y supresión escribiendo a contact@bois-express.fr.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Las cookies esenciales mantienen su carrito y su preferencia de idioma. Puede configurar las cookies opcionales en cualquier momento mediante el botón inferior (duración máxima: 13 meses).',
          ],
        },
      ],
    },
    'conditions-generales-de-vente': {
      slug: 'conditions-generales-de-vente',
      title: 'Condiciones generales de venta',
      breadcrumbLabel: 'Condiciones de venta',
      sections: [
        {
          heading: 'Artículo 1 – Ámbito de aplicación',
          paragraphs: [
            'Estas condiciones rigen los pedidos realizados en BOIS EXPRESS. En caso de traducción, prevalece legalmente la versión original en francés.',
          ],
        },
        {
          heading: 'Artículo 2 – Precios y entrega',
          paragraphs: [
            'Los precios se expresan en euros con impuestos incluidos (IVA incl.). La leña a granel y los pellets deben pedirse por separado debido a los vehículos de entrega específicos.',
          ],
        },
      ],
    },
    'conditions-dutilisation': {
      slug: 'conditions-dutilisation',
      title: 'Condiciones de uso',
      breadcrumbLabel: 'Condiciones de uso',
      sections: [
        {
          heading: 'Artículo 1 – Acceso y responsabilidades',
          paragraphs: [
            'BOIS EXPRESS SAS (57600 Forbach) ofrece acceso gratuito al sitio web. Servicio de atención disponible de lunes a viernes de 8:00 a 17:00 en el +33 3 87 13 38 12.',
          ],
        },
      ],
    },
  },
};

export function getLocalizedLegalPage(
  pageKey: LegalKey,
  lang: LanguageCode
): LegalPageData {
  if (lang === 'fr') return LEGAL_PAGES[pageKey];
  return LEGAL_OVERRIDES[lang][pageKey] ?? LEGAL_PAGES[pageKey];
}
