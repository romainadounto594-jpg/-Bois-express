import { ArticleBlock, LanguageCode, NewsArticle } from '../types';
import { NEWS_ARTICLES } from './articles';

interface ArticleOverride {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  blocks: ArticleBlock[];
}

const ARTICLE_OVERRIDES: Record<
  Exclude<LanguageCode, 'fr'>,
  Record<string, ArticleOverride>
> = {
  en: {
    'poele-a-bois-ou-cheminee-quel-systeme-de-chauffage-choisir-en-2026': {
      title: 'Wood stove or fireplace: which heating system should you choose in 2026?',
      category: 'Briquettes',
      date: 'October 13, 2025',
      excerpt: 'Wood heating remains one of the most valued solutions in Europe, offering comfort, performance, and natural warmth',
      blocks: [
        { type: 'heading', text: 'Regulatory context and challenges in 2026' },
        {
          type: 'paragraph',
          text: 'In 2026, choosing between a wood stove and an open or closed fireplace insert is no longer just a question of aesthetics. New air-quality standards, energy efficiency targets, and operating costs make technical and environmental criteria essential.',
        },
        { type: 'heading', text: 'The "ban rumor": myth or reality?' },
        {
          type: 'paragraph',
          text: 'Rather than an outright ban on wood heating, European and national frameworks focus on upgrading older open fireplaces toward high-efficiency Ecodesign appliances that produce minimal fine particulates.',
        },
        { type: 'heading', text: 'Wood stove vs. fireplace insert' },
        {
          type: 'paragraph',
          text: 'A modern sealed wood stove or pellet stove delivers 75% to 90% efficiency with controlled airflow and post-combustion, making it ideal for primary heating when paired with properly seasoned hardwood logs or DIN+ pellets.',
        },
      ],
    },
    'briquettes-de-bois-lalternative-ecoresponsable-pour-chauffer-votre-maison': {
      title: 'Wood briquettes: the eco-friendly alternative to heat your home',
      category: 'Briquettes',
      date: 'September 16, 2025',
      excerpt: 'Faced with rising fossil fuel prices and climate challenges, more households are turning to compressed wood briquettes',
      blocks: [
        { type: 'heading', text: 'What is a wood briquette?' },
        {
          type: 'paragraph',
          text: 'Wood briquettes are solid biofuels made by compressing dried sawmill and joinery sawdust under ultra-high pressure. Natural wood lignin acts as a binder—meaning zero glues, resins, or chemical additives.',
        },
        { type: 'heading', text: 'High density and low moisture' },
        {
          type: 'paragraph',
          text: 'With moisture below 8–10% and density close to 1,000 kg/m³, a single RUF briquette burns cleanly for around 1.5 hours, leaves minimal ash, and keeps glass and flues much cleaner than damp logs.',
        },
        { type: 'heading', text: 'Day vs. night briquettes' },
        {
          type: 'paragraph',
          text: 'Day briquettes deliver strong, steady warmth, while bark-based night briquettes provide a gentler, extended ember bed overnight.',
        },
      ],
    },
    'pellet-ante-bois-sac-ou-palette-tout-savoir-sur-les-granules-de-bois-de-qualite': {
      title: 'ANTE Pellets: bags or pallets, everything to know about quality wood pellets',
      category: 'Pellets',
      date: 'August 26, 2025',
      excerpt: 'ANTE wood pellets have become a benchmark for households looking for economical, clean, and reliable heating',
      blocks: [
        { type: 'heading', text: 'Why choose ANTE pellets?' },
        {
          type: 'paragraph',
          text: 'Produced from PEFC-certified local softwood sawdust in eastern France, ANTE pellets are mechanically compressed with no chemical binders and maintain under 8% moisture.',
        },
        { type: 'heading', text: 'Performance and low ash content' },
        {
          type: 'paragraph',
          text: 'With a calorific value exceeding 4.8 kWh/kg and ash below 0.5%, DINplus and ENplus A1 certified pellets ensure stable stove operation and less maintenance.',
        },
      ],
    },
    'quelle-quantite-de-bois-de-chauffage-prevoir-pour-lhiver': {
      title: 'How much firewood should you plan for the winter?',
      category: 'Firewood',
      date: 'August 4, 2025',
      excerpt: 'Winter is approaching—estimating your firewood consumption early helps protect your comfort and annual heating budget',
      blocks: [
        { type: 'heading', text: 'Why estimate your firewood needs early?' },
        {
          type: 'paragraph',
          text: 'Planning ahead prevents mid-winter shortages when demand peaks and delivery lead times lengthen. Ordering in spring or summer also lets semi-seasoned wood finish drying properly.',
        },
        { type: 'heading', text: 'Key factors affecting consumption' },
        {
          type: 'paragraph',
          text: 'Your home insulation, surface area, regional climate, and appliance efficiency determine whether you need 3 to 5 steres (modern secondary stove) or 8 to 12 steres (primary heating).',
        },
      ],
    },
    'quel-bois-choisir-pour-votre-cheminee-focus-sur-le-noyer-comme-bois-de-chauffage': {
      title: 'Which firewood to choose for your fireplace? Focus on walnut firewood',
      category: 'Firewood',
      date: 'July 14, 2025',
      excerpt: 'Not all firewood species burn alike. Discover how dense hardwoods compare for clean, long-lasting fireplace heat',
      blocks: [
        { type: 'heading', text: 'Hardwoods vs. softwoods' },
        {
          type: 'paragraph',
          text: 'Softwoods ignite rapidly and work well for kindling, while dense hardwoods—oak, beech, hornbeam, ash, and seasoned walnut—deliver slow, steady combustion with 1,800 to 2,000 kWh per stere.',
        },
        { type: 'heading', text: 'Keep moisture below 20%' },
        {
          type: 'paragraph',
          text: 'Regardless of species, firewood must be well seasoned (<20% moisture) to avoid smoke, soot, and creosote buildup.',
        },
      ],
    },
    'allume-feu-naturel-maitrisez-lart-de-lallumage-top-down-avec-efficacite-et-ecologie': {
      title: 'Natural firestarters: master the top-down lighting method efficiently',
      category: 'Firestarters',
      date: 'June 13, 2025',
      excerpt: 'Learn how to start a clean, smoke-free fire using natural wood-wool firestarters and the top-down technique',
      blocks: [
        { type: 'heading', text: 'What is a natural firestarter?' },
        {
          type: 'paragraph',
          text: 'Natural firestarters made of braided wood wool and vegetable wax contain no petroleum or toxic solvents, lighting cleanly without odor or black smoke—for stoves and barbecues alike.',
        },
        { type: 'heading', text: 'Why use the top-down method?' },
        {
          type: 'paragraph',
          text: 'By placing kindling and one wood-wool starter on top of larger logs, combustion gases burn as they pass through the flame, dramatically reducing smoke and keeping stove glass clean.',
        },
      ],
    },
    'chauffage-au-bois-ce-systeme-de-chauffage-sera-t-il-bientot-interdit-en-2027': {
      title: 'Wood heating: will this heating system be banned in 2027?',
      category: 'Firestarters',
      date: 'May 23, 2025',
      excerpt: 'Understanding upcoming 2027 European Ecodesign requirements for wood stoves, inserts, and open fireplaces',
      blocks: [
        { type: 'heading', text: 'European Ecodesign updates in 2027' },
        {
          type: 'paragraph',
          text: 'The upcoming 2027 EU rules target obsolete, low-efficiency open fireplaces and high-emission appliances—not modern Ecodesign-compliant stoves burning dry hardwood or certified pellets.',
        },
        { type: 'heading', text: 'Transition to cleaner appliances' },
        {
          type: 'paragraph',
          text: 'Pairing a modern high-efficiency stove with <20% moisture firewood or EN+ A1 pellets keeps emissions minimal while preserving affordable renewable heat.',
        },
      ],
    },
    'comment-allumer-un-feu-dans-sa-cheminee-guide-complet-pour-un-allumage-reussi': {
      title: 'How to light a fireplace fire: complete guide for a successful start',
      category: 'Firestarters',
      date: 'April 18, 2025',
      excerpt: 'Proper hearth preparation, dry hardwood logs, airflow, and top-down lighting ensure a warm, smoke-free fire every time',
      blocks: [
        { type: 'heading', text: 'Prepare the hearth and air intakes' },
        {
          type: 'paragraph',
          text: 'Clear excess ash while keeping air vents open so draft establishes quickly. Stack split dry hardwood logs at the bottom with kindling and natural firestarters on top.',
        },
        { type: 'heading', text: 'Avoid glossy paper and liquid fuels' },
        {
          type: 'paragraph',
          text: 'Use dry kindling and natural wax-coated wood-wool sticks instead of newspaper or flammable liquids for safe, reliable ignition.',
        },
      ],
    },
    'pellets-de-bois-fabrication-stockage-et-certifications-pour-un-chauffage-performant': {
      title: 'Wood pellets: manufacturing, storage, and certifications for high performance',
      category: 'Pellets',
      date: 'March 21, 2025',
      excerpt: 'How 6 mm softwood pellets are produced, why DIN+ / EN+ A1 matters, and how to store pallets away from moisture',
      blocks: [
        { type: 'heading', text: 'How pellets are produced' },
        {
          type: 'paragraph',
          text: 'Dry spruce and fir sawdust is compressed at high pressure through a 6 mm die without chemical glue, producing dense pellets with optimal heating value.',
        },
        { type: 'heading', text: 'Best practices for storing pellet pallets' },
        {
          type: 'paragraph',
          text: 'Keep bags off bare concrete floors on pallets in a dry, ventilated garage or shed, protect from rain, and rotate older bags first.',
        },
      ],
    },
    'pellets-erda-tout-savoir-sur-les-granules-de-bois-energies-renouvelables-des-ardennes': {
      title: 'ERDA Pellets: everything about Energies Renouvelables des Ardennes wood pellets',
      category: 'Pellets',
      date: 'March 21, 2025',
      excerpt: 'Discover ERDA DIN+ certified 100% softwood pellets made from spruce and Douglas fir sawdust for clean, economical heating',
      blocks: [
        { type: 'heading', text: 'Why choose ERDA pellets?' },
        {
          type: 'paragraph',
          text: 'ERDA DIN+ and EN+ A1 pellets are manufactured from selected spruce and fir sawdust with zero chemical additives, offering high calorific output and minimal ash.',
        },
        { type: 'heading', text: 'Available in 15 kg bags or 65-bag pallets' },
        {
          type: 'paragraph',
          text: 'Available individually or by the pallet with home delivery via 19T tail-lift truck across our Forbach, Moselle, and Saarland service area.',
        },
      ],
    },
  },
  de: {
    'poele-a-bois-ou-cheminee-quel-systeme-de-chauffage-choisir-en-2026': {
      title: 'Kaminofen oder Kamin: Welches Heizsystem 2026 wählen?',
      category: 'Holzbriketts',
      date: '13. Oktober 2025',
      excerpt: 'Das Heizen mit Holz bleibt eine der beliebtesten und wirtschaftlichsten Lösungen für wohlige Wärme im Zuhause',
      blocks: [
        { type: 'heading', text: 'Regulatorischer Rahmen und Anforderungen 2026' },
        {
          type: 'paragraph',
          text: '2026 hängt die Wahl zwischen Kaminofen und Kamineinsatz nicht mehr nur vom Design ab: Wirkungsgrad, Feinstaubgrenzwerte und Ecodesign-Normen stehen im Mittelpunkt.',
        },
        { type: 'heading', text: 'Kaminofen vs. Kamineinsatz' },
        {
          type: 'paragraph',
          text: 'Moderne geschlossene Holz- und Pelletöfen erreichen Wirkungsgrade von 75 % bis 90 % und verbrennen trockenes Hartholz oder DIN+-Pellets besonders sauber.',
        },
      ],
    },
    'briquettes-de-bois-lalternative-ecoresponsable-pour-chauffer-votre-maison': {
      title: 'Holzbriketts: die umweltfreundliche Alternative zum Heizen',
      category: 'Holzbriketts',
      date: '16. September 2025',
      excerpt: 'Angesichts steigender Energiepreise setzen immer mehr Haushalte auf hochverdichtete Holzbriketts aus unbehandeltem Sägemehl',
      blocks: [
        { type: 'heading', text: 'Was ist ein Holzbrikett?' },
        {
          type: 'paragraph',
          text: 'Holzbriketts entstehen durch Hochdruckpressung von trockenen Schreinereisägespänen. Das holzeigene Lignin wirkt als natürliches Bindemittel – ganz ohne Chemie.',
        },
        { type: 'heading', text: 'Hoher Heizwert und wenig Asche' },
        {
          type: 'paragraph',
          text: 'Mit unter 10 % Restfeuchte brennt ein RUF-Brikett rund 1,5 Stunden gleichmäßig ab und schont Ofen und Schornstein.',
        },
      ],
    },
    'pellet-ante-bois-sac-ou-palette-tout-savoir-sur-les-granules-de-bois-de-qualite': {
      title: 'ANTE Pellets: Sack oder Palette – alles über Qualitäts-Holzpellets',
      category: 'Pellets',
      date: '26. August 2025',
      excerpt: 'ANTE Holzpellets stehen für sauberes, wirtschaftliches und zuverlässiges Heizen mit zertifizierter Premiumqualität',
      blocks: [
        { type: 'heading', text: 'Warum ANTE Pellets wählen?' },
        {
          type: 'paragraph',
          text: 'Aus PEFC-zertifizierten regionalen Nadelholzspänen ohne Zusatzstoffe gepresst, überzeugen ANTE Pellets durch unter 8 % Restfeuchte und über 4,8 kWh/kg Heizwert.',
        },
      ],
    },
    'quelle-quantite-de-bois-de-chauffage-prevoir-pour-lhiver': {
      title: 'Wie viel Brennholz sollte man für den Winter einplanen?',
      category: 'Brennholz',
      date: '4. August 2025',
      excerpt: 'Der Winter naht: Wer seinen Brennholzbedarf frühzeitig kalkuliert, vermeidet Engpässe und sichert sich trockenes Holz',
      blocks: [
        { type: 'heading', text: 'Verbrauch richtig einschätzen' },
        {
          type: 'paragraph',
          text: 'Je nach Wohnfläche, Dämmung und Ofenwirkungsgrad liegt der Bedarf meist zwischen 3–5 Ster (Zusatzheizung) und 8–12 Ster (Hauptheizung).',
        },
      ],
    },
    'quel-bois-choisir-pour-votre-cheminee-focus-sur-le-noyer-comme-bois-de-chauffage': {
      title: 'Welches Holz für den Kamin? Fokus auf Nussbaum als Brennholz',
      category: 'Brennholz',
      date: '14. Juli 2025',
      excerpt: 'Nicht jede Holzart brennt gleich: Erfahren Sie, wie sich dichte Harthölzer im Kamin bewähren',
      blocks: [
        { type: 'heading', text: 'Hartholz vs. Nadelholz' },
        {
          type: 'paragraph',
          text: 'Harthölzer wie Eiche, Buche, Hainbuche, Esche und Nussbaum brennen langsam mit gleichmäßiger Flamme und liefern 1.800 bis 2.000 kWh pro Ster Trockenholz.',
        },
      ],
    },
    'allume-feu-naturel-maitrisez-lart-de-lallumage-top-down-avec-efficacite-et-ecologie': {
      title: 'Natürliche Anzünder: Die Top-Down-Anzündmethode meistern',
      category: 'Anzünder',
      date: '13. Juni 2025',
      excerpt: 'Entzünden Sie Ihr Kaminfeuer schnell, sauber und raucharm mit Holzwolle-Anzündern von oben nach unten',
      blocks: [
        { type: 'heading', text: 'Vorteile von Holzwolle-Anzündern' },
        {
          type: 'paragraph',
          text: 'In Pflanzenwachs getränkte Holzwolle brennt geruchlos und ohne chemische Rückstände etwa 8–10 Minuten lang.',
        },
        { type: 'heading', text: 'Anzünden von oben (Top-Down)' },
        {
          type: 'paragraph',
          text: 'Anzündholz und Anzünder liegen oben auf den großen Scheiten. Dadurch verbrennen aufsteigende Gase direkt in der Flamme – deutlich weniger Rauch und Ruß.',
        },
      ],
    },
    'chauffage-au-bois-ce-systeme-de-chauffage-sera-t-il-bientot-interdit-en-2027': {
      title: 'Holzheizung: Wird dieses Heizsystem 2027 verboten?',
      category: 'Anzünder',
      date: '23. Mai 2025',
      excerpt: 'Was die verschärfte europäische Ecodesign-Verordnung ab 2027 für alte Kamine und moderne Holzöfen wirklich bedeutet',
      blocks: [
        { type: 'heading', text: 'Fokus auf veraltete offene Kamine' },
        {
          type: 'paragraph',
          text: 'Die EU-Vorgaben ab 2027 richten sich gegen veraltete, ineffiziente Geräte – moderne Ecodesign-Holzöfen und Pelletkessel bleiben zulässig.',
        },
      ],
    },
    'comment-allumer-un-feu-dans-sa-cheminee-guide-complet-pour-un-allumage-reussi': {
      title: 'Kaminfeuer richtig anzünden: kompletter Leitfaden',
      category: 'Anzünder',
      date: '18. April 2025',
      excerpt: 'Gute Vorbereitung, trockenes Hartholz und die richtige Luftzufuhr sorgen für ein sauberes, langanhaltendes Feuer',
      blocks: [
        { type: 'heading', text: 'Feuerraum vorbereiten' },
        {
          type: 'paragraph',
          text: 'Überschüssige Asche entfernen, Luftklappen öffnen und trockene Holzscheite mit Anzündholz und Natur-Anzündern von oben entfachen.',
        },
      ],
    },
    'pellets-de-bois-fabrication-stockage-et-certifications-pour-un-chauffage-performant': {
      title: 'Holzpellets: Herstellung, Lagerung und Zertifizierungen',
      category: 'Pellets',
      date: '21. März 2025',
      excerpt: 'Wie 6-mm-Pellets hergestellt werden, was DIN+ und EN+ A1 garantieren und wie Sie Paletten trocken lagern',
      blocks: [
        { type: 'heading', text: 'Tipps zur optimalen Lagerung' },
        {
          type: 'paragraph',
          text: 'Lagern Sie Pelletsäcke auf Paletten ohne direkten Bodenkontakt in einem trockenen, belüfteten Raum und schützen Sie sie vor Feuchtigkeit.',
        },
      ],
    },
    'pellets-erda-tout-savoir-sur-les-granules-de-bois-energies-renouvelables-des-ardennes': {
      title: 'ERDA Pellets: Alles über Holzpellets von Energies Renouvelables des Ardennes',
      category: 'Pellets',
      date: '21. März 2025',
      excerpt: 'DIN+-zertifizierte Pellets aus 100 % Nadelholz (Fichte & Tanne) ohne chemische Zusätze für effizientes Heizen',
      blocks: [
        { type: 'heading', text: 'Geprüfte Qualität für Ofen und Kessel' },
        {
          type: 'paragraph',
          text: 'ERDA-Pellets bieten einen hohen Heizwert und extrem wenig Asche – lieferbar im 15-kg-Sack oder als 65-Sack-Palette im Raum Forbach, Moselle und Saarland.',
        },
      ],
    },
  },
  es: {
    'poele-a-bois-ou-cheminee-quel-systeme-de-chauffage-choisir-en-2026': {
      title: 'Estufa de leña o chimenea: ¿qué sistema de calefacción elegir en 2026?',
      category: 'Briquetas',
      date: '13 de octubre de 2025',
      excerpt: 'La calefacción con madera sigue siendo una de las soluciones más valoradas por su confort, rendimiento y calor natural',
      blocks: [
        { type: 'heading', text: 'Contexto normativo en 2026' },
        {
          type: 'paragraph',
          text: 'En 2026, elegir entre estufa de leña o chimenea cerrada implica considerar eficiencia energética, emisiones de partículas y normativa Ecodesign.',
        },
        { type: 'heading', text: 'Estufa moderna frente a chimenea' },
        {
          type: 'paragraph',
          text: 'Las estufas estancas de leña o pellets alcanzan rendimientos del 75 % al 90 % cuando se utilizan con leña dura seca o pellets certificados DIN+.',
        },
      ],
    },
    'briquettes-de-bois-lalternative-ecoresponsable-pour-chauffer-votre-maison': {
      title: 'Briquetas de madera: la alternativa eco-responsable para su hogar',
      category: 'Briquetas',
      date: '16 de septiembre de 2025',
      excerpt: 'Ante el alza de los combustibles fósiles, cada vez más hogares eligen briquetas de madera comprimida 100 % naturales',
      blocks: [
        { type: 'heading', text: '¿Qué es una briqueta de madera?' },
        {
          type: 'paragraph',
          text: 'Las briquetas se fabrican comprimiendo serrín seco sin colas ni aditivos químicos. Su humedad inferior al 10 % garantiza una combustión limpia de unas 1h30 por unidad.',
        },
      ],
    },
    'pellet-ante-bois-sac-ou-palette-tout-savoir-sur-les-granules-de-bois-de-qualite': {
      title: 'Pellet ANTE: saco o palé, todo sobre los gránulos de calidad',
      category: 'Pellets',
      date: '26 de agosto de 2025',
      excerpt: 'Los pellets ANTE son una referencia para quienes buscan una calefacción económica, limpia y sostenible',
      blocks: [
        { type: 'heading', text: 'Calidad y trazabilidad' },
        {
          type: 'paragraph',
          text: 'Elaborados con serrín de coníferas certificado PEFC, sin aditivos, con menos del 8 % de humedad y un poder calorífico superior a 4,8 kWh/kg.',
        },
      ],
    },
    'quelle-quantite-de-bois-de-chauffage-prevoir-pour-lhiver': {
      title: '¿Qué cantidad de leña prever para el invierno?',
      category: 'Leña',
      date: '4 de agosto de 2025',
      excerpt: 'Anticipar su consumo de leña antes del invierno le permite evitar roturas de stock y controlar su presupuesto',
      blocks: [
        { type: 'heading', text: 'Estimar sus necesidades' },
        {
          type: 'paragraph',
          text: 'Según el aislamiento, la superficie de la vivienda y el equipo de calefacción, un hogar consume entre 3–5 estéreos (apoyo) y 8–12 estéreos (calefacción principal).',
        },
      ],
    },
    'quel-bois-choisir-pour-votre-cheminee-focus-sur-le-noyer-comme-bois-de-chauffage': {
      title: '¿Qué leña elegir para su chimenea? Enfoque en el nogal',
      category: 'Leña',
      date: '14 de julio de 2025',
      excerpt: 'No todas las maderas arden igual: descubra el rendimiento calorífico de las maderas duras frente a las resinosas',
      blocks: [
        { type: 'heading', text: 'Maderas duras bien secas' },
        {
          type: 'paragraph',
          text: 'Roble, haya, carpe, fresno y nogal ofrecen una combustión lenta y constante de 1.800 a 2.000 kWh por estéreo siempre que la humedad sea inferior al 20 %.',
        },
      ],
    },
    'allume-feu-naturel-maitrisez-lart-de-lallumage-top-down-avec-efficacite-et-ecologie': {
      title: 'Encendedor natural: domine el encendido top-down con eficacia',
      category: 'Encendido',
      date: '13 de junio de 2025',
      excerpt: 'Aprenda a encender su chimenea o barbacoa de forma natural y sin humos con lana de madera y método inverso',
      blocks: [
        { type: 'heading', text: 'Encendido limpio desde arriba' },
        {
          type: 'paragraph',
          text: 'Colocando astillas secas y un encendedor de lana de madera con cera vegetal en la parte superior de los troncos se reducen drásticamente los humos y el hollín.',
        },
      ],
    },
    'chauffage-au-bois-ce-systeme-de-chauffage-sera-t-il-bientot-interdit-en-2027': {
      title: 'Calefacción de leña: ¿se prohibirá este sistema en 2027?',
      category: 'Encendido',
      date: '23 de mayo de 2025',
      excerpt: 'Lo que realmente prevé la normativa europea Ecodesign de 2027 para chimeneas abiertas y estufas modernas',
      blocks: [
        { type: 'heading', text: 'Hacia equipos más eficientes' },
        {
          type: 'paragraph',
          text: 'La normativa europea de 2027 apunta a los hogares abiertos antiguos y contaminantes, no a las estufas modernas de alto rendimiento ni a los pellets certificados.',
        },
      ],
    },
    'comment-allumer-un-feu-dans-sa-cheminee-guide-complet-pour-un-allumage-reussi': {
      title: 'Cómo encender un fuego en su chimenea: guía completa',
      category: 'Encendido',
      date: '18 de abril de 2025',
      excerpt: 'Prepare el hogar, elija leña dura seca y aplique el encendido top-down para disfrutar de un fuego rápido y sin humo',
      blocks: [
        { type: 'heading', text: 'Pasos para un encendido perfecto' },
        {
          type: 'paragraph',
          text: 'Retire el exceso de cenizas, abra las entradas de aire, coloque los troncos grandes abajo y las astillas con el encendedor ecológico encima.',
        },
      ],
    },
    'pellets-de-bois-fabrication-stockage-et-certifications-pour-un-chauffage-performant': {
      title: 'Pellets de madera: fabricación, almacenamiento y certificaciones',
      category: 'Pellets',
      date: '21 de marzo de 2025',
      excerpt: 'Todo sobre la fabricación de pellets de 6 mm, las normas DIN+ / EN+ A1 y cómo conservar sus palés secos',
      blocks: [
        { type: 'heading', text: 'Almacenamiento óptimo' },
        {
          type: 'paragraph',
          text: 'Guarde los sacos sobre palés sin contacto directo con el suelo en un local seco y ventilado para preservar su poder calorífico.',
        },
      ],
    },
    'pellets-erda-tout-savoir-sur-les-granules-de-bois-energies-renouvelables-des-ardennes': {
      title: 'Pellets ERDA: todo sobre los gránulos Energies Renouvelables des Ardennes',
      category: 'Pellets',
      date: '21 de marzo de 2025',
      excerpt: 'Pellets certificados DIN+ 100 % coníferas (pícea y abeto) sin aditivos químicos para una combustión limpia',
      blocks: [
        { type: 'heading', text: 'Alto rendimiento y mínima ceniza' },
        {
          type: 'paragraph',
          text: 'Disponibles en sacos de 15 kg o en palés de 65 sacos con entrega rápida a domicilio en nuestra zona de Forbach, Mosela y Sarre.',
        },
      ],
    },
  },
};

export function getLocalizedArticle(article: NewsArticle, lang: LanguageCode): NewsArticle {
  if (lang === 'fr') return article;
  const override = ARTICLE_OVERRIDES[lang][article.slug];
  if (!override) return article;
  return {
    ...article,
    title: override.title,
    category: override.category,
    date: override.date,
    excerpt: override.excerpt,
    blocks: override.blocks,
  };
}

export function getLocalizedArticles(lang: LanguageCode): NewsArticle[] {
  return NEWS_ARTICLES.map((article) => getLocalizedArticle(article, lang));
}

export function getLocalizedArticleBySlug(
  slug: string,
  lang: LanguageCode
): NewsArticle | undefined {
  const found = NEWS_ARTICLES.find((a) => a.slug === slug);
  return found ? getLocalizedArticle(found, lang) : undefined;
}
