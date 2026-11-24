import { CategoryMeta, Product, ProductCategorySlug } from "../types";

export const CATEGORIES_META: Record<ProductCategorySlug, CategoryMeta> = {
  "bois": {
    "slug": "bois",
    "name": "Bois",
    "title": "Bois",
    "description": "Notre bois de chauffage est issu des essences les plus calorifiques : le hêtre, le charme, le chêne et le frêne. Avec un bois dur, vous obtiendrez plus de chaleur et aurez moins souvent besoin de recharger votre appareil de chauffage. Bois express vous propose différents conditionnements, différentes tailles : 25, 33 ou 50 cm. Nous proposons aussi des bois mi-secs qu’il faudra stocker pour une durée d’environ 12 mois pour atteindre une humidité idéale pour la combustion. Nos bois de chauffage sont proposés en big bag, en vrac, sur palette ou en filet contenant 6 à 8 bûches de dimension 33 cm. Notre bois mi-sec est proposé en vrac. Avec Bois express, vous serez assurés de disposer d’un bois de qualité, et serez respectueux de l’environnement.",
    "bannerImage": "/images/banner-bois.jpg"
  },
  "briquettes": {
    "slug": "briquettes",
    "name": "Briquettes",
    "title": "Briquettes",
    "description": "Les briquettes sont issues de la compression de sciures de menuiserie séchées, tout comme le bois, elles sont respectueuses de l’environnement et 100% naturelles. Elles ont exactement les mêmes propriétés et peuvent s’utiliser en remplacement du bois de chauffage traditionnel ou en complément. La forme les différencie, la briquette sera rectangulaire, tandis que le bois sera plutôt cylindrique. Elles optimisent l’efficacité de votre appareil de chauffage grâce à leur combustion idéale, une briquette assure environ 1h30 de combustion. Leurs avantages sont d’être maniables, non poussiéreuses, elles ne génèrent pas de cendres et n’encrassent pas le conduit. Chez Bois express, vous trouverez des briquettes de jours et des briquettes de nuit. La briquette de nuit est composée d’écorces de bois, elle permet une diffusion de chaleur moins forte mais sa durée de combustion est plus longue. Nos briquettes de jours sont proposées en palette de 96 paquets de 10kg, et en paquet de 12 soit 10 kg. Celles de nuit sont proposées en palette de 96 paquets de 10kg, et en paquet de 12 soit 12 kg.",
    "bannerImage": "/images/cat-briquettes.webp"
  },
  "pellets": {
    "slug": "pellets",
    "name": "Pellets",
    "title": "Pellets",
    "description": "Le pellet présente une excellente qualité de combustion et produit très peu de cendre. Bois express vous présentera sa gamme de pellets de différentes marques et vous proposera celui qui vous conviendra le mieux. En fonction de leur marque, ils sont disponibles en sacs de 15 kg, en palette de 65 sacs, 75 sacs et 66 sacs. Nos pellets sont certifiés EN+ (sauf ERDA) A1 et/ou DIN+, 100% résineux et produits à base de sciure d’épicéa et de sapin. Toujours respectueux de l’environnement, ils ne contiennent pas de produits chimiques. Les suffixes DIN, DIN + ou EN+ (sauf ERDA) A1 sont un indicateur de qualité de granulés de bois. Cette certification vous permettra de choisir la meilleure qualité de pellets pour chauffer votre habitation tout en faisant des économies.",
    "bannerImage": "/images/cat-pellets.webp"
  },
  "granules-de-bois": {
    "slug": "granules-de-bois",
    "name": "Granulés de bois",
    "title": "Granulés de bois",
    "description": "Le pellet présente une excellente qualité de combustion et produit très peu de cendre. Bois express vous présentera sa gamme de pellets de différentes marques et vous proposera celui qui vous conviendra le mieux. En fonction de leur marque, ils sont disponibles en sacs de 15 kg, en palette de 65 sacs, 75 sacs et 66 sacs. Nos pellets sont certifiés EN+ A1 et/ou DIN+, 100% résineux et produits à base de sciure d’épicéa et de sapin. Toujours respectueux de l’environnement, ils ne contiennent pas de produits chimiques. Les suffixes DIN, DIN + ou EN+ A1 sont un indicateur de qualité de granulés de bois. Cette certification vous permettra de choisir la meilleure qualité de pellets pour chauffer votre habitation tout en faisant des économies.",
    "bannerImage": "/images/cat-pellets.webp"
  },
  "allumage": {
    "slug": "allumage",
    "name": "Allumage",
    "title": "Allumage",
    "description": "Le bois d’allumage est un petit bois très sec, résineux, de longueur uniforme, et idéal pour l’allumage des poêles, inserts, foyers et chaudières à bûches traditionnelles et même des barbecues ! Il peut aussi être écologique, produit à partir de laine de bois, c’est une laine mécaniquement tressée puis trempée dans un bain de cire alimentaire, son temps de combustion est plus long, un seul bâtonnet permet d’allumer avec sécurité vos appareils de chauffage. Ou bien fabriqué à partir de plantes, un allumeur propre, écologique et inodore. Bois express vous propose sa gamme de bois d’allumage en boîtes de 32 allume-feux (écologique ou à base de plante) ou en sac de 5 dm3.",
    "bannerImage": "/images/cat-allumage.webp"
  }
};

export const PRODUCTS: Product[] = [
  {
    "id": "bois-bois-de-chauffage-sec-en-vrac-longueur-25-cm-essences-calorifiques-copie",
    "slug": "bois-de-chauffage-sec-en-vrac-longueur-25-cm-essences-calorifiques-copie",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage mi-sec en vrac, longueur 25 cm, essences calorifiques",
    "price": 96,
    "priceSuffix": "le stère",
    "shortDesc": "Des bois de qualité qui sont constitués de hêtre, charme, chêne et frêne. Livrées en vrac à votre domicile, vous n’aurez plus qu’à choisir votre emplacement de stockage et d’empiler les bûches.",
    "inStock": true,
    "image": "/images/products/DSC_0159.jpg",
    "orderGroup": "bulk-wood"
  },
  {
    "id": "bois-bois-de-chauffage-mi-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques",
    "slug": "bois-de-chauffage-mi-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage mi-sec en vrac, longueur 33 ou 50 cm, essences calorifiques",
    "price": 89,
    "priceSuffix": "le stère",
    "shortDesc": "Livré en vrac, ces bûches de chauffage sont à stocker pour une durée d’environ 12 mois, afin d’atteindre un taux d’humidité idéal pour la combustion. Livrées à votre domicile, il vous faudra les stocker dans un endroit sec.",
    "inStock": true,
    "image": "/images/products/DSC_0297.jpg",
    "orderGroup": "bulk-wood"
  },
  {
    "id": "bois-bois-de-chauffage-en-big-bag-longueur-25cm",
    "slug": "bois-de-chauffage-en-big-bag-longueur-25cm",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en BIG BAG longueur 25CM",
    "price": 206,
    "priceSuffix": "2 stères",
    "shortDesc": "Livré en big bag contenant 2 stères, le stockage et le rangement sera plus simple.",
    "inStock": true,
    "image": "/images/products/mini1494428331.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-bois-de-chauffage-en-big-bag-longueur-33cm",
    "slug": "bois-de-chauffage-en-big-bag-longueur-33cm",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en BIG BAG longueur 33CM",
    "price": 163.2,
    "priceSuffix": "1,7 stères",
    "shortDesc": "Livré en big bag contenant 1,7 stères, le stockage et le rangement sera plus simple.",
    "inStock": true,
    "image": "/images/products/mini1494428331.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-bois-de-chauffage-en-big-bag-longueur-50cm",
    "slug": "bois-de-chauffage-en-big-bag-longueur-50cm",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en BIG BAG longueur 50CM",
    "price": 124.8,
    "priceSuffix": "1,3 stères",
    "shortDesc": "Livré en big bag contenant 1,3 stères, le stockage et le rangement sera plus simple.",
    "inStock": true,
    "image": "/images/products/mini1494428331.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-bois-de-chauffage-mi-sec-en-vrac-longueur-25-cm-essences-calorifiques",
    "slug": "bois-de-chauffage-mi-sec-en-vrac-longueur-25-cm-essences-calorifiques",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en vrac, longueur 25, essences calorifiques",
    "price": 99,
    "priceSuffix": "le stère",
    "shortDesc": "Livré en vrac, ces bûches de chauffage sont à stocker pour une durée d’environ 12 mois, afin d’atteindre un taux d’humidité idéal pour la combustion. Livrées à votre domicile, il vous faudra les stocker dans un endroit sec.",
    "inStock": true,
    "image": "/images/products/DSC_0297.jpg",
    "orderGroup": "bulk-wood"
  },
  {
    "id": "bois-bois-de-chauffage-sec-en-vrac-longueur-25-essences-calorifiques",
    "slug": "bois-de-chauffage-sec-en-vrac-longueur-25-essences-calorifiques",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en vrac, longueur 33cm, essences calorifiques",
    "price": 92,
    "priceSuffix": "le stère",
    "shortDesc": "Livrées en vrac, ces bûches de chauffage sont prêtes à l’emploi. Livrées à votre domicile, il vous faudra les stocker dans un endroit sec.",
    "inStock": true,
    "image": "/images/products/DSC_0297.jpg",
    "orderGroup": "bulk-wood"
  },
  {
    "id": "bois-bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques",
    "slug": "bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec en vrac, longueur 50 cm, essences calorifiques",
    "price": 92,
    "priceSuffix": "le stère",
    "shortDesc": "Pour une utilisation immédiate dans votre appareil de chauffage. Des bois de qualité qui sont constitués de hêtre, charme, chêne et frêne. Livrées en vrac à votre domicile, vous n’aurez plus qu’à choisir votre emplacement de stockage et d’empiler les bûches.",
    "inStock": true,
    "image": "/images/products/DSC_0159.jpg",
    "orderGroup": "bulk-wood"
  },
  {
    "id": "bois-bois-de-chauffage-sec-sur-palette-longueur-25cm-essences-selectionnees",
    "slug": "bois-de-chauffage-sec-sur-palette-longueur-25cm-essences-selectionnees",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec sur palette, longueur 25cm, essences sélectionnées",
    "price": 360,
    "priceSuffix": "3 stères (soit 120",
    "shortDesc": "Bois sélectionné, livré sur palette de dimension 1m/1m/1.80m et prêt à l’emploi. Fini la corvée de stockage. Votre bois est rangé sur une palette et livré dans votre garage. Plus d’écorces ni de déchets de bois à ramasser après la livraison !",
    "inStock": true,
    "image": "/images/products/DSC_0287-rotated.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-bois-de-chauffage-sec-sur-palette-longueur-33cm-essences-selectionnees",
    "slug": "bois-de-chauffage-sec-sur-palette-longueur-33cm-essences-selectionnees",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec sur palette, longueur 33cm, essences sélectionnées",
    "price": 273,
    "priceSuffix": "2,6 stères (soit 105",
    "shortDesc": "Bois sélectionné, livré sur palette de dimension 1m/1m/1.80m et prêt à l’emploi. Fini la corvée de stockage. Votre bois est rangé sur une palette et livré dans votre garage. Plus d’écorces ni de déchets de bois à ramasser après la livraison !",
    "inStock": true,
    "image": "/images/products/DSC_0287-rotated.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-bois-de-chauffage-sec-sur-palette-longueur-50cm-essences-selectionnees",
    "slug": "bois-de-chauffage-sec-sur-palette-longueur-50cm-essences-selectionnees",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Bois de chauffage sec sur palette, longueur 50cm, essences sélectionnées",
    "price": 241.5,
    "priceSuffix": "2,3 stères (soit 105",
    "shortDesc": "Bois sélectionné, livré sur palette de dimension 1m/1m/1.80m et prêt à l’emploi. Fini la corvée de stockage. Votre bois est rangé sur une palette et livré dans votre garage. Plus d’écorces ni de déchets de bois à ramasser après la livraison !",
    "inStock": true,
    "image": "/images/products/DSC_0287-rotated.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "bois-filet-de-buches-de-bois-dimension-33-cm-6-a-8-pieces",
    "slug": "filet-de-buches-de-bois-dimension-33-cm-6-a-8-pieces",
    "category": "bois",
    "categoryName": "Bois",
    "title": "Filet de bûches de bois, dimension 33 cm, 6 à 8 pièces",
    "price": 5,
    "priceSuffix": "le filet",
    "shortDesc": "Idéal pour un petit feu d’appoint, pour passer un moment cocooning devant sa cheminée, profiter d’une chaleur saine, ou même pour allumer son barbecue, rien de mieux que de prévoir ces petits filets ! Essence calorifique de hêtre, humidité contrôlée et prêt à brûler.",
    "inStock": true,
    "image": "/images/products/mini1383319994.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "briquettes-buches-de-jours-type-ruf-en-paquets",
    "slug": "buches-de-jours-type-ruf-en-paquets",
    "category": "briquettes",
    "categoryName": "Briquettes",
    "title": "Bûches de jours type RUF en paquets",
    "price": 4.16,
    "priceSuffix": "le paquet de 10 bûches soit 10 kg",
    "shortDesc": "Bois densifié 100% naturel, fabriqué à partir de sciures non traitées de menuiserie, il s’agit de recyclage de produits d’industries du bois. Chaque briquette assure environ 1h30 de combustion. Elle optimise la pérennité de votre appareil de chauffage grâce à sa combustion idéale. À utiliser en complément ou en remplacement de la bûche de bois traditionnelle.",
    "inStock": true,
    "image": "/images/products/mini1383316842.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "briquettes-buches-de-jours-type-ruf-sur-palette",
    "slug": "buches-de-jours-type-ruf-sur-palette",
    "category": "briquettes",
    "categoryName": "Briquettes",
    "title": "Bûches de jours type RUF sur palette",
    "price": 400,
    "priceSuffix": "la palette de 96 paquets de 10 kg",
    "shortDesc": "Bois densifié 100% naturel, fabriqué à partir de sciures non traitées de menuiserie, il s’agit de recyclage de produits d’industries du bois. Chaque briquette assure environ 1h30 de combustion. Elle optimise la pérennité de votre appareil de chauffage grâce à sa combustion idéale. À utiliser en complément ou en remplacement de la bûche de bois traditionnelle.",
    "inStock": true,
    "image": "/images/products/mini1383579038.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "briquettes-buches-de-nuit-de-type-ruf-sur-palette",
    "slug": "buches-de-nuit-de-type-ruf-sur-palette",
    "category": "briquettes",
    "categoryName": "Briquettes",
    "title": "Bûches de nuit de type RUF sur palette",
    "price": 325,
    "priceSuffix": "la palette de 96 paquets de 10 kg",
    "shortDesc": "Bois densifié 100% naturel, fabriqué à partir d’écorces non traitées de menuiserie, il s’agit de recyclage de produits d’industries du bois. La briquette de nuit permet une diffusion de chaleur moins forte mais sa durée de combustion est plus longue.",
    "inStock": false,
    "image": "/images/products/mini1383579614.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "pellets-pellet-ante-en-sac",
    "slug": "pellet-ante-en-sac",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet ANTE en sac",
    "price": 5.99,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "",
    "inStock": false,
    "image": "/images/products/ANTE-sac.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "pellets-pellet-ante-la-palette",
    "slug": "pellet-ante-la-palette",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet ANTE la palette",
    "price": 389.35,
    "priceSuffix": "la palette de 65 sacs de 15 kg",
    "shortDesc": "",
    "inStock": false,
    "image": "/images/products/pellet-ante-palette.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "pellets-234",
    "slug": "234",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet ERDA DIN+ en sac",
    "price": 7.37,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "Certifié DIN +, le pellet est garanti 100% résineux et à base de sciure d’épicéa et de sapin. Ce granulé de bois n’est ni traité ni nocif.",
    "inStock": true,
    "image": "/images/products/ERDA_PELLETS_26062025_007-300x300.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "pellets-pellet-erda-din-la-palette",
    "slug": "pellet-erda-din-la-palette",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet ERDA DIN+ la palette",
    "price": 479,
    "priceSuffix": "la palette de 65 sacs de 15 kg",
    "shortDesc": "Certifié DIN +, le pellet est garanti 100% résineux et à base de sciure d’épicéa et de sapin. Ce granulé de bois n’est ni traité ni nocif.",
    "inStock": true,
    "image": "/images/products/ERDA_PELLETS_26062025_043-300x300.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "pellets-pellet-excellent-pellets-din-plus-en-palette",
    "slug": "pellet-excellent-pellets-din-plus-en-palette",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet VERPELLET DIN+ en palette",
    "price": 529,
    "priceSuffix": "la palette de 77 sacs de 15 kg",
    "shortDesc": "Pellet 100% résineux certifié DIN+ et EN+ A1 en palette de 77 sacs de 15 kg.",
    "inStock": true,
    "image": "/images/products/Capture-decran-2026-09-22-122348.png",
    "orderGroup": "pellet"
  },
  {
    "id": "pellets-pellet-excellent-pellets-en-sac",
    "slug": "pellet-excellent-pellets-en-sac",
    "category": "pellets",
    "categoryName": "Pellets",
    "title": "Pellet VERPELLET en sac",
    "price": 6.88,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "Ces pellets en sac de 15kg dépassent les normes de qualité les plus strictes DIN + ou EN +.",
    "inStock": true,
    "image": "/images/products/Capture-decran-2026-09-22-122342.png",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-ante-en-sac",
    "slug": "granules-de-bois-ante-en-sac",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois ANTE DIN+ et EN+ en sac",
    "price": 5.99,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "",
    "inStock": false,
    "image": "/images/products/ANTE-sac.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-ante-la-palette",
    "slug": "granules-de-bois-ante-la-palette",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois ANTE DIN+ et EN+ la palette",
    "price": 389.35,
    "priceSuffix": "la palette de 65 sacs de 15 kg",
    "shortDesc": "",
    "inStock": false,
    "image": "/images/products/pellet-ante-palette.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-erda-din-en-sac",
    "slug": "granules-de-bois-erda-din-en-sac",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois ERDA DIN+ en sac",
    "price": 7.37,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "Certifié DIN +, le pellet est garanti 100% résineux et à base de sciure d’épicéa et de sapin. Ce granulé de bois n’est ni traité ni nocif.",
    "inStock": true,
    "image": "/images/products/ERDA_PELLETS_26062025_007-300x300.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-erda-din-la-palette",
    "slug": "granules-de-bois-erda-din-la-palette",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois ERDA DIN+ la palette",
    "price": 479,
    "priceSuffix": "la palette de 65 sacs de 15 kg",
    "shortDesc": "Certifié DIN +, le pellet est garanti 100% résineux et à base de sciure d’épicéa et de sapin. Ce granulé de bois n’est ni traité ni nocif.",
    "inStock": true,
    "image": "/images/products/ERDA_PELLETS_26062025_043-300x300.jpg",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-excellent-pellets-din-en-palette",
    "slug": "granules-de-bois-excellent-pellets-din-en-palette",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois VERPELLET PELLETS en palette",
    "price": 529,
    "priceSuffix": "la palette de 77 sacs de 15 kg",
    "shortDesc": "Granulés de bois 100% résineux, certifiés DIN+ et EN+ A1.",
    "inStock": true,
    "image": "/images/products/Capture-decran-2026-09-22-122348.png",
    "orderGroup": "pellet"
  },
  {
    "id": "granules-de-bois-granules-de-bois-excellent-pellets-en-sac",
    "slug": "granules-de-bois-excellent-pellets-en-sac",
    "category": "granules-de-bois",
    "categoryName": "Granulés de bois",
    "title": "Granulés de bois VERPELLET PELLETS en sac",
    "price": 6.88,
    "priceSuffix": "le sac de 15kg",
    "shortDesc": "Ces granulés de bois sont 100% résineux certifié DIN+ et EN+ A1.",
    "inStock": true,
    "image": "/images/products/Capture-decran-2026-09-22-122342.png",
    "orderGroup": "pellet"
  },
  {
    "id": "allumage-allume-feu-ecologique",
    "slug": "allume-feu-ecologique",
    "category": "allumage",
    "categoryName": "Allumage",
    "title": "Allume-feu écologique",
    "price": 6.5,
    "priceSuffix": "la boîte de 32 bâtonnets",
    "shortDesc": "Il est écologique, produit à partir de laine de bois, c’est une laine mécaniquement tressée puis trempée dans un bain de cire alimentaire, son temps de combustion est plus long, environ 8 à 10 minutes, un seul bâtonnet permet d’allumer avec sécurité vos appareils de chauffage.",
    "inStock": true,
    "image": "/images/products/allume-feu-eco-min-rotated.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "allumage-allume-feu-sans-petrole",
    "slug": "allume-feu-sans-petrole",
    "category": "allumage",
    "categoryName": "Allumage",
    "title": "Allume-feu sans pétrole",
    "price": 2.95,
    "priceSuffix": "la boîte de 32 bâtonnets",
    "shortDesc": "Toutes saisons, cet allume-feu est sans pétrole, à bas de plantes, propre, écologique et inodore brûle environ 10 minutes. Idéal pour barbecue, cheminée et poêle.",
    "inStock": true,
    "image": "/images/products/allume-feu-o.jpg",
    "orderGroup": "standard"
  },
  {
    "id": "allumage-filet-de-bois-allume-feu",
    "slug": "filet-de-bois-allume-feu",
    "category": "allumage",
    "categoryName": "Allumage",
    "title": "Filet de bois allume-feu",
    "price": 4.5,
    "priceSuffix": "le filet",
    "shortDesc": "Le bois d’allumage est un petit bois très sec, résineux, de longueur uniforme, et idéal pour l’allumage des poêles, inserts, foyers et chaudières à bûches traditionnelles et même des barbecues en période estivale. Il allumera rapidement votre feu.",
    "inStock": true,
    "image": "/images/products/filet-bois-min-rotated.jpg",
    "orderGroup": "standard"
  }
];

export function getProductsByCategory(category: ProductCategorySlug): Product[] {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, limit);
}
