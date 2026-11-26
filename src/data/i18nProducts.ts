import { CategoryMeta, LanguageCode, Product, ProductCategorySlug } from '../types';
import { CATEGORIES_META, PRODUCTS } from './products';

interface LocalizedCategoryOverride {
  name: string;
  title: string;
  description: string;
}

interface LocalizedProductOverride {
  title: string;
  priceSuffix: string;
  shortDesc: string;
}

const CATEGORY_OVERRIDES: Record<
  Exclude<LanguageCode, 'fr'>,
  Record<ProductCategorySlug, LocalizedCategoryOverride>
> = {
  en: {
    bois: {
      name: 'Firewood',
      title: 'Firewood',
      description:
        'Our firewood comes from the highest-calorific hardwood species: beech, hornbeam, oak, and ash. With dense hardwood, you get more heat and need to reload your stove or fireplace less often. Bois express offers multiple packaging options and log lengths: 25, 33, or 50 cm. We also offer semi-seasoned wood that should be stored for around 12 months to reach ideal combustion moisture. Our firewood is available in big bags, bulk, on pallets, or in nets containing 6 to 8 logs (33 cm). With Bois express, you are guaranteed quality, environmentally friendly firewood.',
    },
    briquettes: {
      name: 'Briquettes',
      title: 'Briquettes',
      description:
        'Briquettes are made from compressed, kiln-dried joinery sawdust. Like traditional firewood, they are 100% natural and eco-friendly, with the same heating properties for replacing or complementing traditional logs. Each briquette provides roughly 1.5 hours of clean combustion. They are easy to handle, dust-free, leave minimal ash, and keep your flue clean. At Bois express, we offer day briquettes (pallets of 96 x 10 kg packs or 10 kg packs) and bark-based night briquettes for longer, gentler heat.',
    },
    pellets: {
      name: 'Pellets',
      title: 'Pellets',
      description:
        'Wood pellets offer excellent combustion quality and produce very little ash. Bois express offers a selection of trusted brands tailored to your heating system, available in 15 kg bags or pallets of 65, 66, or 77 bags. Our pellets are EN+ A1 and/or DIN+ certified, 100% softwood made from spruce and fir sawdust with no chemical additives. Choose certified quality to heat your home efficiently while saving energy.',
    },
    'granules-de-bois': {
      name: 'Wood Pellets',
      title: 'Wood Pellets',
      description:
        'Wood pellets offer excellent combustion quality and produce very little ash. Bois express offers a selection of trusted brands tailored to your heating system, available in 15 kg bags or pallets of 65, 66, or 77 bags. Our pellets are EN+ A1 and/or DIN+ certified, 100% softwood made from spruce and fir sawdust with no chemical additives.',
    },
    allumage: {
      name: 'Firestarters',
      title: 'Firestarters',
      description:
        'Kindling wood is very dry, uniform softwood ideal for lighting stoves, inserts, log boilers, fireplaces, and even barbecues. We also provide ecological wood-wool firestarters dipped in food-grade wax for longer burn time, as well as clean, odorless plant-based firestarters. Available in boxes of 32 sticks or 5 dm³ bags.',
    },
  },
  de: {
    bois: {
      name: 'Brennholz',
      title: 'Brennholz',
      description:
        'Unser Brennholz stammt aus den heizwertstärksten Hartholzarten: Buche, Hainbuche, Eiche und Esche. Mit Hartholz erzielen Sie mehr Wärme und müssen seltener nachlegen. Bois express bietet verschiedene Verpackungen und Schnittlängen an: 25, 33 oder 50 cm. Wir bieten auch halbtrockenes Holz an, das etwa 12 Monate gelagert werden sollte, um die ideale Restfeuchte zu erreichen. Lieferbar im Big Bag, lose, auf Palette oder im Netz mit 6 bis 8 Scheiten (33 cm).',
    },
    briquettes: {
      name: 'Holzbriketts',
      title: 'Holzbriketts',
      description:
        'Holzbriketts werden aus gepressten, getrockneten Schreinereisägespänen hergestellt und sind wie klassisches Brennholz zu 100 % natürlich und umweltfreundlich. Ein Brikett brennt rund 1,5 Stunden lang sauber und gleichmäßig. Sie sind handlich, staubfrei, aschearm und schonen Ihren Schornstein. Bei Bois express erhalten Sie Tagbriketts sowie Rinden-Nachtbriketts für eine längere Glutdauer.',
    },
    pellets: {
      name: 'Pellets',
      title: 'Pellets',
      description:
        'Holzpellets bieten eine hervorragende Verbrennungsqualität und erzeugen sehr wenig Asche. Bois express führt ausgewählte Marken in 15-kg-Säcken sowie auf Paletten mit 65, 66 oder 77 Säcken. Unsere Pellets sind EN+ A1 und/oder DIN+ zertifiziert, bestehen zu 100 % aus Nadelholz (Fichte und Tanne) und enthalten keinerlei chemische Zusätze.',
    },
    'granules-de-bois': {
      name: 'Holzpellets',
      title: 'Holzpellets',
      description:
        'Holzpellets bieten eine hervorragende Verbrennungsqualität und erzeugen sehr wenig Asche. Bois express führt ausgewählte Marken in 15-kg-Säcken sowie auf Paletten mit 65, 66 oder 77 Säcken. Unsere Pellets sind EN+ A1 und/oder DIN+ zertifiziert und frei von chemischen Bindemitteln.',
    },
    allumage: {
      name: 'Anzünder',
      title: 'Anzünder',
      description:
        'Anzündholz ist sehr trockenes, gleichmäßig gespaltenes Nadelholz – ideal zum Anfeuern von Kaminöfen, Einsätzen, Holzheizkesseln und Grills. Außerdem bieten wir ökologische Holzwolle-Anzünder mit Wachs sowie geruchlose pflanzliche Anzünder in Packungen zu 32 Stück oder 5-dm³-Netzen.',
    },
  },
  es: {
    bois: {
      name: 'Leña',
      title: 'Leña',
      description:
        'Nuestra leña proviene de las maderas con mayor poder calorífico: haya, carpe, roble y fresno. Con madera dura obtendrá más calor y tendrá que recargar su estufa o chimenea con menos frecuencia. Bois express ofrece distintos formatos y largos: 25, 33 o 50 cm, disponibles en big bag, a granel, en palé o en malla de 6 a 8 troncos (33 cm).',
    },
    briquettes: {
      name: 'Briquetas',
      title: 'Briquetas',
      description:
        'Las briquetas se fabrican mediante compresión de serrín seco de carpintería y son 100 % naturales y respetuosas con el medio ambiente. Cada briqueta ofrece aproximadamente 1h30 de combustión limpia. Son fáciles de manipular, no generan polvo ni apenas cenizas y mantienen limpio el conducto. Disponibles en briquetas de día y de noche.',
    },
    pellets: {
      name: 'Pellets',
      title: 'Pellets',
      description:
        'El pellet ofrece una excelente calidad de combustión y produce muy poca ceniza. Bois express le ofrece distintas marcas en sacos de 15 kg o en palés de 65, 66 o 77 sacos. Nuestros pellets cuentan con certificación EN+ A1 y/o DIN+, son 100 % coníferas (pícea y abeto) y no contienen aditivos químicos.',
    },
    'granules-de-bois': {
      name: 'Gránulos de madera',
      title: 'Gránulos de madera',
      description:
        'Los gránulos de madera ofrecen una excelente calidad de combustión y muy poca ceniza. Disponibles en sacos de 15 kg o palés de 65, 66 o 77 sacos, con certificación EN+ A1 y/o DIN+ y 100 % madera de coníferas sin productos químicos.',
    },
    allumage: {
      name: 'Encendido',
      title: 'Encendido',
      description:
        'La madera de encendido es un pequeño tronco resinoso muy seco y uniforme, ideal para encender estufas, chimeneas, calderas e incluso barbacoas. También ofrecemos pastillas ecológicas de lana de madera con cera y encendedores vegetales sin olor en cajas de 32 unidades o sacos de 5 dm³.',
    },
  },
};

const PRODUCT_OVERRIDES: Record<
  Exclude<LanguageCode, 'fr'>,
  Record<string, LocalizedProductOverride>
> = {
  en: {
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-cm-essences-calorifiques-copie': {
      title: 'Semi-seasoned bulk firewood, 25 cm length, high-heat hardwoods',
      priceSuffix: 'per stere',
      shortDesc:
        'Quality hardwood logs made of beech, hornbeam, oak, and ash. Delivered in bulk to your home—ready for you to stack in your storage area.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Semi-seasoned bulk firewood, 33 or 50 cm length, high-heat hardwoods',
      priceSuffix: 'per stere',
      shortDesc:
        'Delivered in bulk, these heating logs should be stored for around 12 months in a dry place to reach ideal combustion moisture.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-25cm': {
      title: 'Seasoned firewood in BIG BAG, 25 cm length',
      priceSuffix: '2 steres',
      shortDesc: 'Delivered in a big bag containing 2 steres for easier handling and storage.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-33cm': {
      title: 'Seasoned firewood in BIG BAG, 33 cm length',
      priceSuffix: '1.7 steres',
      shortDesc: 'Delivered in a big bag containing 1.7 steres for easier handling and storage.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-50cm': {
      title: 'Seasoned firewood in BIG BAG, 50 cm length',
      priceSuffix: '1.3 steres',
      shortDesc: 'Delivered in a big bag containing 1.3 steres for easier handling and storage.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-25-cm-essences-calorifiques': {
      title: 'Seasoned bulk firewood, 25 cm length, high-heat hardwoods',
      priceSuffix: 'per stere',
      shortDesc:
        'Delivered in bulk, these heating logs should be stored in a dry space for optimal burning performance.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-essences-calorifiques': {
      title: 'Seasoned bulk firewood, 33 cm length, high-heat hardwoods',
      priceSuffix: 'per stere',
      shortDesc: 'Delivered in bulk, these dry firewood logs are ready to burn. Store in a dry place upon delivery.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Seasoned bulk firewood, 50 cm length, high-heat hardwoods',
      priceSuffix: 'per stere',
      shortDesc:
        'Ready for immediate use in your stove or fireplace. High-heat beech, hornbeam, oak, and ash delivered in bulk to your home.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-25cm-essences-selectionnees': {
      title: 'Seasoned firewood on pallet, 25 cm length, selected hardwoods',
      priceSuffix: '3 steres (€120/stere)',
      shortDesc:
        'Selected dry firewood stacked on a 1m x 1m x 1.80m pallet, ready to burn. No stacking chore, delivered right to your garage with no loose bark mess.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-33cm-essences-selectionnees': {
      title: 'Seasoned firewood on pallet, 33 cm length, selected hardwoods',
      priceSuffix: '2.6 steres (€105/stere)',
      shortDesc:
        'Selected dry firewood stacked on a 1m x 1m x 1.80m pallet, ready to burn. Delivered neatly into your garage with zero mess.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-50cm-essences-selectionnees': {
      title: 'Seasoned firewood on pallet, 50 cm length, selected hardwoods',
      priceSuffix: '2.3 steres (€105/stere)',
      shortDesc:
        'Selected dry firewood stacked on a 1m x 1m x 1.80m pallet, ready to burn. Delivered neatly into your garage with zero mess.',
    },
    'bois-filet-de-buches-de-bois-dimension-33-cm-6-a-8-pieces': {
      title: 'Net bag of firewood logs, 33 cm, 6 to 8 pieces',
      priceSuffix: 'per net bag',
      shortDesc:
        'Ideal for a cozy evening fire or lighting a barbecue. High-heat beechwood with controlled moisture, ready to burn.',
    },
    'briquettes-buches-de-jours-type-ruf-en-paquets': {
      title: 'RUF day compressed wood briquettes (pack)',
      priceSuffix: 'pack of 10 briquettes (10 kg)',
      shortDesc:
        '100% natural densified wood made from untreated joinery sawdust. Each briquette burns for about 1.5 hours with clean combustion.',
    },
    'briquettes-buches-de-jours-type-ruf-sur-palette': {
      title: 'RUF day compressed wood briquettes (pallet)',
      priceSuffix: 'pallet of 96 x 10 kg packs',
      shortDesc:
        '100% natural densified wood made from untreated joinery sawdust. Each briquette provides about 1.5 hours of efficient heat.',
    },
    'briquettes-buches-de-nuit-de-type-ruf-sur-palette': {
      title: 'RUF night bark briquettes (pallet)',
      priceSuffix: 'pallet of 96 x 10 kg packs',
      shortDesc:
        '100% natural compressed bark briquettes providing gentle, long-lasting heat overnight.',
    },
    'pellets-pellet-ante-en-sac': {
      title: 'ANTE wood pellets (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc: '',
    },
    'pellets-pellet-ante-la-palette': {
      title: 'ANTE wood pellets (pallet)',
      priceSuffix: 'pallet of 65 x 15 kg bags',
      shortDesc: '',
    },
    'pellets-234': {
      title: 'ERDA DIN+ wood pellets (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc:
        'DIN+ certified, guaranteed 100% softwood made from spruce and fir sawdust. Untreated and additive-free.',
    },
    'pellets-pellet-erda-din-la-palette': {
      title: 'ERDA DIN+ wood pellets (pallet)',
      priceSuffix: 'pallet of 65 x 15 kg bags',
      shortDesc:
        'DIN+ certified, guaranteed 100% softwood made from spruce and fir sawdust. Untreated and additive-free.',
    },
    'pellets-pellet-excellent-pellets-din-plus-en-palette': {
      title: 'VERPELLET DIN+ wood pellets (pallet)',
      priceSuffix: 'pallet of 77 x 15 kg bags',
      shortDesc: '100% softwood pellets certified DIN+ and EN+ A1 on a pallet of 77 x 15 kg bags.',
    },
    'pellets-pellet-excellent-pellets-en-sac': {
      title: 'VERPELLET wood pellets (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc: 'These 15 kg pellet bags exceed the strictest DIN+ and EN+ quality standards.',
    },
    'granules-de-bois-granules-de-bois-ante-en-sac': {
      title: 'ANTE DIN+ & EN+ wood granules (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-ante-la-palette': {
      title: 'ANTE DIN+ & EN+ wood granules (pallet)',
      priceSuffix: 'pallet of 65 x 15 kg bags',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-erda-din-en-sac': {
      title: 'ERDA DIN+ wood granules (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc:
        'DIN+ certified, guaranteed 100% softwood made from spruce and fir sawdust. Untreated and additive-free.',
    },
    'granules-de-bois-granules-de-bois-erda-din-la-palette': {
      title: 'ERDA DIN+ wood granules (pallet)',
      priceSuffix: 'pallet of 65 x 15 kg bags',
      shortDesc:
        'DIN+ certified, guaranteed 100% softwood made from spruce and fir sawdust. Untreated and additive-free.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-din-en-palette': {
      title: 'VERPELLET PELLETS wood granules (pallet)',
      priceSuffix: 'pallet of 77 x 15 kg bags',
      shortDesc: '100% softwood granules certified DIN+ and EN+ A1.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-en-sac': {
      title: 'VERPELLET PELLETS wood granules (15 kg bag)',
      priceSuffix: 'per 15 kg bag',
      shortDesc: '100% softwood granules certified DIN+ and EN+ A1.',
    },
    'allumage-allume-feu-ecologique': {
      title: 'Eco-friendly wood-wool firestarters',
      priceSuffix: 'box of 32 sticks',
      shortDesc:
        'Made from braided wood wool dipped in food-grade wax. Burns 8 to 10 minutes—one stick safely lights your stove or fireplace.',
    },
    'allumage-allume-feu-sans-petrole': {
      title: 'Petroleum-free plant-based firestarters',
      priceSuffix: 'box of 32 sticks',
      shortDesc:
        'All-season, petroleum-free, plant-based, clean and odorless firestarters burning around 10 minutes. Ideal for barbecue, fireplace, and stove.',
    },
    'allumage-filet-de-bois-allume-feu': {
      title: 'Kindling firewood net bag',
      priceSuffix: 'per net bag',
      shortDesc:
        'Very dry, uniform softwood kindling ideal for starting stoves, inserts, traditional log boilers, and summer barbecues quickly.',
    },
  },
  de: {
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-cm-essences-calorifiques-copie': {
      title: 'Halbtrockenes Brennholz lose, 25 cm Länge, heizwertstarke Harthölzer',
      priceSuffix: 'pro Ster',
      shortDesc:
        'Qualitätsholz aus Buche, Hainbuche, Eiche und Esche. Lose zu Ihnen nach Hause geliefert – bereit zum Stapeln.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Halbtrockenes Brennholz lose, 33 oder 50 cm Länge, Harthölzer',
      priceSuffix: 'pro Ster',
      shortDesc:
        'Lose geliefert; diese Scheite sollten rund 12 Monate trocken gelagert werden, um den idealen Feuchtigkeitsgehalt zu erreichen.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-25cm': {
      title: 'Trockenes Brennholz im BIG BAG, Länge 25 cm',
      priceSuffix: '2 Ster',
      shortDesc: 'Geliefert im Big Bag mit 2 Ster Inhalt für einfache Lagerung und Handhabung.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-33cm': {
      title: 'Trockenes Brennholz im BIG BAG, Länge 33 cm',
      priceSuffix: '1,7 Ster',
      shortDesc: 'Geliefert im Big Bag mit 1,7 Ster Inhalt für einfache Lagerung und Handhabung.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-50cm': {
      title: 'Trockenes Brennholz im BIG BAG, Länge 50 cm',
      priceSuffix: '1,3 Ster',
      shortDesc: 'Geliefert im Big Bag mit 1,3 Ster Inhalt für einfache Lagerung und Handhabung.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-25-cm-essences-calorifiques': {
      title: 'Trockenes Brennholz lose, Länge 25 cm, heizwertstarke Harthölzer',
      priceSuffix: 'pro Ster',
      shortDesc:
        'Lose geliefert; für optimale Heizleistung an einem trockenen, belüfteten Ort lagern.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-essences-calorifiques': {
      title: 'Trockenes Brennholz lose, Länge 33 cm, heizwertstarke Harthölzer',
      priceSuffix: 'pro Ster',
      shortDesc: 'Lose geliefert und sofort ofenfertig. Nach Lieferung trocken lagern.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Trockenes Brennholz lose, Länge 50 cm, heizwertstarke Harthölzer',
      priceSuffix: 'pro Ster',
      shortDesc:
        'Sofort einsatzbereit für Ihren Kamin oder Holzofen. Hochwertiges Hartholz aus Buche, Hainbuche, Eiche und Esche lose geliefert.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-25cm-essences-selectionnees': {
      title: 'Trockenes Brennholz auf Palette, 25 cm, ausgewählte Harthölzer',
      priceSuffix: '3 Ster (120 €/Ster)',
      shortDesc:
        'Ausgewähltes trockenes Holz auf Palette (1m × 1m × 1,80m), sofort heizfertig. Direkt in Ihre Garage geliefert, ohne Rindenabfall.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-33cm-essences-selectionnees': {
      title: 'Trockenes Brennholz auf Palette, 33 cm, ausgewählte Harthölzer',
      priceSuffix: '2,6 Ster (105 €/Ster)',
      shortDesc:
        'Ausgewähltes trockenes Holz auf Palette (1m × 1m × 1,80m), sauber gestapelt und direkt bis in Ihre Garage geliefert.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-50cm-essences-selectionnees': {
      title: 'Trockenes Brennholz auf Palette, 50 cm, ausgewählte Harthölzer',
      priceSuffix: '2,3 Ster (105 €/Ster)',
      shortDesc:
        'Ausgewähltes trockenes Holz auf Palette (1m × 1m × 1,80m), sauber gestapelt und direkt bis in Ihre Garage geliefert.',
    },
    'bois-filet-de-buches-de-bois-dimension-33-cm-6-a-8-pieces': {
      title: 'Brennholznetz 33 cm, 6 bis 8 Scheite',
      priceSuffix: 'pro Netz',
      shortDesc:
        'Ideal für ein gemütliches Kaminfeuer zwischendurch oder zum Grillen. Kammergetrocknetes Buchenholz, sofort brennfertig.',
    },
    'briquettes-buches-de-jours-type-ruf-en-paquets': {
      title: 'RUF Tag-Holzbriketts im Paket',
      priceSuffix: '10er-Paket (10 kg)',
      shortDesc:
        '100 % natürliches Pressholz aus unbehandelten Schreinereisägespänen. Jedes Brikett brennt ca. 1,5 Stunden sehr sauber.',
    },
    'briquettes-buches-de-jours-type-ruf-sur-palette': {
      title: 'RUF Tag-Holzbriketts auf Palette',
      priceSuffix: 'Palette mit 96 × 10 kg Paketen',
      shortDesc:
        '100 % natürliches Pressholz aus unbehandelten Schreinereisägespänen mit rund 1,5 Stunden Brenndauer pro Brikett.',
    },
    'briquettes-buches-de-nuit-de-type-ruf-sur-palette': {
      title: 'RUF Nacht-Rindenbriketts auf Palette',
      priceSuffix: 'Palette mit 96 × 10 kg Paketen',
      shortDesc:
        '100 % natürliche Rindenbriketts für eine sanfte und besonders langanhaltende Glut über Nacht.',
    },
    'pellets-pellet-ante-en-sac': {
      title: 'ANTE Pellets im 15-kg-Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc: '',
    },
    'pellets-pellet-ante-la-palette': {
      title: 'ANTE Pellets auf Palette',
      priceSuffix: 'Palette mit 65 × 15 kg Säcken',
      shortDesc: '',
    },
    'pellets-234': {
      title: 'ERDA DIN+ Pellets im 15-kg-Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc:
        'DIN+-zertifiziert, garantiert 100 % Nadelholz aus Fichten- und Tannensägespänen. Unbehandelt und schadstofffrei.',
    },
    'pellets-pellet-erda-din-la-palette': {
      title: 'ERDA DIN+ Pellets auf Palette',
      priceSuffix: 'Palette mit 65 × 15 kg Säcken',
      shortDesc:
        'DIN+-zertifiziert, garantiert 100 % Nadelholz aus Fichten- und Tannensägespänen. Unbehandelt und schadstofffrei.',
    },
    'pellets-pellet-excellent-pellets-din-plus-en-palette': {
      title: 'VERPELLET DIN+ Pellets auf Palette',
      priceSuffix: 'Palette mit 77 × 15 kg Säcken',
      shortDesc: '100 % Nadelholzpellets mit DIN+ und EN+ A1 Zertifizierung auf Palette zu 77 Säcken à 15 kg.',
    },
    'pellets-pellet-excellent-pellets-en-sac': {
      title: 'VERPELLET Pellets im 15-kg-Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc: 'Diese 15-kg-Sackpellets übertreffen die strengsten DIN+ und EN+ Qualitätsnormen.',
    },
    'granules-de-bois-granules-de-bois-ante-en-sac': {
      title: 'ANTE DIN+ & EN+ Holzpellets im Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-ante-la-palette': {
      title: 'ANTE DIN+ & EN+ Holzpellets auf Palette',
      priceSuffix: 'Palette mit 65 × 15 kg Säcken',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-erda-din-en-sac': {
      title: 'ERDA DIN+ Holzpellets im Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc:
        'DIN+-zertifiziert, garantiert 100 % Nadelholz aus Fichten- und Tannensägespänen. Unbehandelt und schadstofffrei.',
    },
    'granules-de-bois-granules-de-bois-erda-din-la-palette': {
      title: 'ERDA DIN+ Holzpellets auf Palette',
      priceSuffix: 'Palette mit 65 × 15 kg Säcken',
      shortDesc:
        'DIN+-zertifiziert, garantiert 100 % Nadelholz aus Fichten- und Tannensägespänen. Unbehandelt und schadstofffrei.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-din-en-palette': {
      title: 'VERPELLET PELLETS Holzpellets auf Palette',
      priceSuffix: 'Palette mit 77 × 15 kg Säcken',
      shortDesc: '100 % Nadelholz-Granulat mit DIN+ und EN+ A1 Zertifizierung.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-en-sac': {
      title: 'VERPELLET PELLETS Holzpellets im Sack',
      priceSuffix: 'pro 15-kg-Sack',
      shortDesc: '100 % Nadelholz-Granulat mit DIN+ und EN+ A1 Zertifizierung.',
    },
    'allumage-allume-feu-ecologique': {
      title: 'Ökologische Holzwolle-Anzünder',
      priceSuffix: 'Box mit 32 Stück',
      shortDesc:
        'Aus geflochtener Holzwolle, getränkt in Lebensmittelwachs. Brenndauer 8–10 Minuten für sicheres Anfeuern.',
    },
    'allumage-allume-feu-sans-petrole': {
      title: 'Erdölfreie pflanzliche Anzünder',
      priceSuffix: 'Box mit 32 Stück',
      shortDesc:
        'Ganzjährig verwendbar, erdölfrei, pflanzlich, sauber und geruchlos mit ca. 10 Minuten Brenndauer für Grill, Kamin und Ofen.',
    },
    'allumage-filet-de-bois-allume-feu': {
      title: 'Anzündholz im Netz',
      priceSuffix: 'pro Netz',
      shortDesc:
        'Sehr trockenes, gleichmäßiges Nadelholz-Anzündholz für Kaminöfen, Einsätze, Holzkessel und Sommergrills.',
    },
  },
  es: {
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-cm-essences-calorifiques-copie': {
      title: 'Leña semiseca a granel, 25 cm, maderas caloríficas',
      priceSuffix: 'por estéreo',
      shortDesc:
        'Madera de calidad compuesta por haya, carpe, roble y fresno. Entregada a granel en su domicilio para apilar.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Leña semiseca a granel, 33 o 50 cm, maderas caloríficas',
      priceSuffix: 'por estéreo',
      shortDesc:
        'Entregada a granel, esta leña debe almacenarse unos 12 meses en lugar seco para alcanzar una humedad óptima.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-25cm': {
      title: 'Leña seca en BIG BAG, longitud 25 cm',
      priceSuffix: '2 estéreos',
      shortDesc: 'Entregada en big bag de 2 estéreos para facilitar el almacenamiento y la manipulación.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-33cm': {
      title: 'Leña seca en BIG BAG, longitud 33 cm',
      priceSuffix: '1,7 estéreos',
      shortDesc: 'Entregada en big bag de 1,7 estéreos para facilitar el almacenamiento y la manipulación.',
    },
    'bois-bois-de-chauffage-en-big-bag-longueur-50cm': {
      title: 'Leña seca en BIG BAG, longitud 50 cm',
      priceSuffix: '1,3 estéreos',
      shortDesc: 'Entregada en big bag de 1,3 estéreos para facilitar el almacenamiento y la manipulación.',
    },
    'bois-bois-de-chauffage-mi-sec-en-vrac-longueur-25-cm-essences-calorifiques': {
      title: 'Leña seca a granel, longitud 25 cm, maderas caloríficas',
      priceSuffix: 'por estéreo',
      shortDesc:
        'Entregada a granel en su domicilio; almacenar en un lugar seco para una combustión óptima.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-25-essences-calorifiques': {
      title: 'Leña seca a granel, longitud 33 cm, maderas caloríficas',
      priceSuffix: 'por estéreo',
      shortDesc: 'Entregada a granel y lista para usar. Almacenar en un lugar seco.',
    },
    'bois-bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques': {
      title: 'Leña seca a granel, longitud 50 cm, maderas caloríficas',
      priceSuffix: 'por estéreo',
      shortDesc:
        'Para uso inmediato en su estufa o chimenea. Haya, carpe, roble y fresno de calidad entregados a granel.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-25cm-essences-selectionnees': {
      title: 'Leña seca en palé, longitud 25 cm, maderas seleccionadas',
      priceSuffix: '3 estéreos (120 €/estéreo)',
      shortDesc:
        'Leña seleccionada lista para usar en palé de 1m × 1m × 1,80m. Entregada ordenada directamente en su garaje, sin residuos.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-33cm-essences-selectionnees': {
      title: 'Leña seca en palé, longitud 33 cm, maderas seleccionadas',
      priceSuffix: '2,6 estéreos (105 €/estéreo)',
      shortDesc:
        'Leña seleccionada lista para usar en palé de 1m × 1m × 1,80m. Entregada ordenada directamente en su garaje, sin residuos.',
    },
    'bois-bois-de-chauffage-sec-sur-palette-longueur-50cm-essences-selectionnees': {
      title: 'Leña seca en palé, longitud 50 cm, maderas seleccionadas',
      priceSuffix: '2,3 estéreos (105 €/estéreo)',
      shortDesc:
        'Leña seleccionada lista para usar en palé de 1m × 1m × 1,80m. Entregada ordenada directamente en su garaje, sin residuos.',
    },
    'bois-filet-de-buches-de-bois-dimension-33-cm-6-a-8-pieces': {
      title: 'Malla de leña de 33 cm, 6 a 8 troncos',
      priceSuffix: 'por malla',
      shortDesc:
        'Ideal para un fuego acogedor en la chimenea o para encender la barbacoa. Haya con humedad controlada, lista para arder.',
    },
    'briquettes-buches-de-jours-type-ruf-en-paquets': {
      title: 'Briquetas de día tipo RUF en paquete',
      priceSuffix: 'paquete de 10 briquetas (10 kg)',
      shortDesc:
        'Madera densificada 100 % natural de serrín de carpintería sin tratar. Cada briqueta arde aprox. 1h30 con combustión limpia.',
    },
    'briquettes-buches-de-jours-type-ruf-sur-palette': {
      title: 'Briquetas de día tipo RUF en palé',
      priceSuffix: 'palé de 96 paquetes de 10 kg',
      shortDesc:
        'Madera densificada 100 % natural de serrín sin tratar. Cada briqueta ofrece unas 1h30 de combustión óptima.',
    },
    'briquettes-buches-de-nuit-de-type-ruf-sur-palette': {
      title: 'Briquetas de noche tipo RUF en palé',
      priceSuffix: 'palé de 96 paquetes de 10 kg',
      shortDesc:
        'Madera densificada 100 % natural a base de cortezas para una difusión de calor suave y más prolongada.',
    },
    'pellets-pellet-ante-en-sac': {
      title: 'Pellet ANTE en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc: '',
    },
    'pellets-pellet-ante-la-palette': {
      title: 'Pellet ANTE en palé',
      priceSuffix: 'palé de 65 sacos de 15 kg',
      shortDesc: '',
    },
    'pellets-234': {
      title: 'Pellet ERDA DIN+ en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc:
        'Certificado DIN+, 100 % coníferas a base de serrín de pícea y abeto. Sin tratamientos ni aditivos.',
    },
    'pellets-pellet-erda-din-la-palette': {
      title: 'Pellet ERDA DIN+ en palé',
      priceSuffix: 'palé de 65 sacos de 15 kg',
      shortDesc:
        'Certificado DIN+, 100 % coníferas a base de serrín de pícea y abeto. Sin tratamientos ni aditivos.',
    },
    'pellets-pellet-excellent-pellets-din-plus-en-palette': {
      title: 'Pellet VERPELLET DIN+ en palé',
      priceSuffix: 'palé de 77 sacos de 15 kg',
      shortDesc: 'Pellet 100 % coníferas certificado DIN+ y EN+ A1 en palé de 77 sacos de 15 kg.',
    },
    'pellets-pellet-excellent-pellets-en-sac': {
      title: 'Pellet VERPELLET en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc: 'Estos pellets en saco de 15 kg superan las normas de calidad más estrictas DIN+ y EN+.',
    },
    'granules-de-bois-granules-de-bois-ante-en-sac': {
      title: 'Gránulos de madera ANTE DIN+ y EN+ en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-ante-la-palette': {
      title: 'Gránulos de madera ANTE DIN+ y EN+ en palé',
      priceSuffix: 'palé de 65 sacos de 15 kg',
      shortDesc: '',
    },
    'granules-de-bois-granules-de-bois-erda-din-en-sac': {
      title: 'Gránulos de madera ERDA DIN+ en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc:
        'Certificado DIN+, 100 % coníferas a base de serrín de pícea y abeto. Sin tratamientos ni aditivos.',
    },
    'granules-de-bois-granules-de-bois-erda-din-la-palette': {
      title: 'Gránulos de madera ERDA DIN+ en palé',
      priceSuffix: 'palé de 65 sacos de 15 kg',
      shortDesc:
        'Certificado DIN+, 100 % coníferas a base de serrín de pícea y abeto. Sin tratamientos ni aditivos.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-din-en-palette': {
      title: 'Gránulos de madera VERPELLET PELLETS en palé',
      priceSuffix: 'palé de 77 sacos de 15 kg',
      shortDesc: 'Gránulos de madera 100 % coníferas certificados DIN+ y EN+ A1.',
    },
    'granules-de-bois-granules-de-bois-excellent-pellets-en-sac': {
      title: 'Gránulos de madera VERPELLET PELLETS en saco',
      priceSuffix: 'saco de 15 kg',
      shortDesc: 'Gránulos de madera 100 % coníferas certificados DIN+ y EN+ A1.',
    },
    'allumage-allume-feu-ecologique': {
      title: 'Encendedor ecológico de lana de madera',
      priceSuffix: 'caja de 32 unidades',
      shortDesc:
        'Elaborado con lana de madera trenzada bañada en cera alimentaria. Arde entre 8 y 10 minutos para un encendido seguro.',
    },
    'allumage-allume-feu-sans-petrole': {
      title: 'Encendedor vegetal sin petróleo',
      priceSuffix: 'caja de 32 unidades',
      shortDesc:
        'A base de plantas, sin petróleo, limpio e inodoro, arde unos 10 minutos. Ideal para barbacoa, chimenea y estufa.',
    },
    'allumage-filet-de-bois-allume-feu': {
      title: 'Malla de leña de encendido',
      priceSuffix: 'por malla',
      shortDesc:
        'Madera resinosa muy seca y uniforme, ideal para encender rápidamente estufas, calderas y barbacoas.',
    },
  },
};

export function getLocalizedCategoryMeta(
  slug: ProductCategorySlug,
  lang: LanguageCode
): CategoryMeta {
  const base = CATEGORIES_META[slug];
  if (lang === 'fr') return base;
  const override = CATEGORY_OVERRIDES[lang][slug];
  return {
    ...base,
    name: override.name,
    title: override.title,
    description: override.description,
  };
}

export function getLocalizedProduct(product: Product, lang: LanguageCode): Product {
  if (lang === 'fr') return product;
  const catName = CATEGORY_OVERRIDES[lang][product.category]?.name ?? product.categoryName;
  const override = PRODUCT_OVERRIDES[lang][product.id];
  if (!override) {
    return {
      ...product,
      categoryName: catName,
    };
  }
  return {
    ...product,
    categoryName: catName,
    title: override.title,
    priceSuffix: override.priceSuffix,
    shortDesc: override.shortDesc,
  };
}

export function getLocalizedProducts(lang: LanguageCode): Product[] {
  return PRODUCTS.map((p) => getLocalizedProduct(p, lang));
}

export function getLocalizedProductsByCategory(
  category: ProductCategorySlug,
  lang: LanguageCode
): Product[] {
  return PRODUCTS.filter((p) => p.category === category).map((p) =>
    getLocalizedProduct(p, lang)
  );
}

export function getLocalizedProductBySlug(
  slug: string,
  lang: LanguageCode
): Product | undefined {
  const found = PRODUCTS.find((p) => p.slug === slug);
  return found ? getLocalizedProduct(found, lang) : undefined;
}

export function getLocalizedRelatedProducts(
  product: Product,
  lang: LanguageCode,
  limit = 4
): Product[] {
  return PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id
  )
    .slice(0, limit)
    .map((p) => getLocalizedProduct(p, lang));
}
