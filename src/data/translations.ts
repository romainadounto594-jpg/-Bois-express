import { LanguageCode } from '../types';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  label: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'fr', shortLabel: 'FR', label: 'Français' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
  { code: 'de', shortLabel: 'DE', label: 'Deutsch' },
  { code: 'es', shortLabel: 'ES', label: 'Español' },
];

export interface TranslationSchema {
  common: {
    home: string;
    shop: string;
    backToHome: string;
    languageLabel: string;
    chooseLanguage: string;
    outOfStockBadge: string;
    addToCart: string;
    added: string;
    addedToCart: string;
    readMore: string;
    orderNoticeTitle: string;
    orderNoticeIntro: string;
    orderNoticeRule: string;
    orderNoticeShort: string;
    decreaseQty: string;
    increaseQty: string;
    quantity: string;
    removeItem: string;
    breadcrumbAria: string;
  };
  header: {
    announcement: string;
    myAccount: string;
    login: string;
    openCart: string;
    homeAria: string;
    toggleMenu: string;
    mainNavAria: string;
  };
  nav: {
    home: string;
    bois: string;
    briquettes: string;
    pellets: string;
    granules: string;
    allumage: string;
    actualites: string;
    contact: string;
    cart: string;
    deliveryZones: string;
    accountPrefix: string;
    loginRegister: string;
    closeMenu: string;
    mobileNavAria: string;
  };
  footer: {
    mentionsLegales: string;
    protectionDonnees: string;
    cgu: string;
    cgv: string;
    cookieSettings: string;
    copyright: string;
    languageTitle: string;
  };
  home: {
    heroTitle: string;
    catBois: string;
    catBriquettes: string;
    catPellets: string;
    catAllumage: string;
    viewProducts: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutText: string;
    discoverCatalog: string;
    featuredEyebrow: string;
    featuredTitle: string;
    deliveryLeftTitle: string;
    deliveryLeftLine1: string;
    deliveryLeftLine2: string;
    deliveryRightTitle: string;
    deliveryRightLine1: string;
    deliveryRightLine2: string;
  };
  category: {
    showingAllPrefix: string;
    resultsSuffix: string;
  };
  boutique: {
    title: string;
    allProducts: string;
    productsCountSuffix: string;
    sortAria: string;
    sortDefault: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
  };
  productDetail: {
    notFoundTitle: string;
    notFoundText: string;
    backToShop: string;
    categoryLabel: string;
    outOfStockBoxTitle: string;
    outOfStockContactLink: string;
    relatedProducts: string;
  };
  cart: {
    drawerAria: string;
    yourCart: string;
    closeCart: string;
    emptyCart: string;
    discoverCatalog: string;
    subtotalColon: string;
    viewCart: string;
    checkout: string;
    pageTitle: string;
    continueShopping: string;
    colProduct: string;
    colPrice: string;
    colQuantity: string;
    colSubtotal: string;
    colAction: string;
    unitPricePrefix: string;
    subtotalLabel: string;
    summaryTitle: string;
    deliveryLabel: string;
    deliveryArea: string;
    deliveryZonesPrefix: string;
    deliveryZonesLink: string;
    totalInclTax: string;
    conflictTitle: string;
    conflictDesc: string;
    validateOrder: string;
  };
  checkout: {
    breadcrumbTitle: string;
    pageTitle: string;
    emptyText: string;
    goToShop: string;
    conflictTitle: string;
    conflictText: string;
    editCartLink: string;
    loggedInAs: string;
    switchAccount: string;
    alreadyCustomer: string;
    loginOrRegister: string;
    section1Title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    deliveryMethodLabel: string;
    deliveryHomeTitle: string;
    deliveryHomeDesc: string;
    deliveryPickupTitle: string;
    deliveryPickupDesc: string;
    street: string;
    streetPlaceholder: string;
    postalCode: string;
    city: string;
    notesLabel: string;
    createAccountCheck: string;
    choosePassword: string;
    passwordMinPlaceholder: string;
    section2Title: string;
    demoEnvBadge: string;
    cardMethodTitle: string;
    fillTestCard: string;
    cardHolder: string;
    cardNumber: string;
    cardExpiry: string;
    cardCvc: string;
    transferMethodTitle: string;
    transferMethodDesc: string;
    codMethodTitle: string;
    summaryTitle: string;
    qtyShort: string;
    subtotal: string;
    delivery: string;
    deliveryIncluded: string;
    totalInclTax: string;
    acceptCgvPrefix: string;
    acceptCgvLink: string;
    processing: string;
    payPrefix: string;
    paySuffix: string;
    confirmEyebrow: string;
    confirmGreetingPrefix: string;
    confirmGreetingMid: string;
    confirmGreetingSuffix: string;
    confirmSimNote: string;
    orderNumberLabel: string;
    paymentStatusLabel: string;
    paymentMethodLabel: string;
    cardShort: string;
    transferShort: string;
    codShort: string;
    orderedItemsTitle: string;
    qtyLinePrefix: string;
    shippingAddressTitle: string;
    pickupPointTitle: string;
    phoneShort: string;
    viewOrdersBtn: string;
    continueShoppingBtn: string;
    errFirstName: string;
    errLastName: string;
    errEmail: string;
    errPhone: string;
    errStreet: string;
    errPostal: string;
    errCity: string;
    errAccountPwd: string;
    errCardHolder: string;
    errCardNumber: string;
    errCardExpiry: string;
    errCardCvc: string;
    errCgv: string;
    statusPaid: string;
    statusTransfer: string;
    statusCod: string;
    pickupStreetFallback: string;
    ownerNotifyHint: string;
    ownerEmailSentTitle: string;
    ownerEmailSentDesc: string;
    ownerEmailPendingTitle: string;
    ownerEmailPendingDesc: string;
    ownerEmailErrorTitle: string;
    ownerEmailErrorDesc: string;
  };
  account: {
    pageTitle: string;
    redirectNotice: string;
    loginTitle: string;
    loginSubtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    togglePwdAria: string;
    loginBtn: string;
    fillDemoBtn: string;
    demoBoxTitle: string;
    demoEmailLabel: string;
    demoPwdLabel: string;
    registerTitle: string;
    registerSubtitle: string;
    firstName: string;
    lastName: string;
    phone: string;
    deliveryStreet: string;
    deliveryStreetPlaceholder: string;
    postalCode: string;
    city: string;
    passwordMin: string;
    confirmPassword: string;
    acceptTermsPrefix: string;
    termsLink: string;
    andText: string;
    privacyLink: string;
    createAccountBtn: string;
    connectedBadge: string;
    helloPrefix: string;
    orderFuelsBtn: string;
    logoutBtn: string;
    myDetailsTitle: string;
    editBtn: string;
    detailsUpdated: string;
    saveBtn: string;
    cancelBtn: string;
    telShort: string;
    currentCartTitle: string;
    itemsLabel: string;
    viewCartBtn: string;
    goToCheckoutBtn: string;
    myOrdersTitle: string;
    noOrdersText: string;
    discoverCatalogBtn: string;
    orderPrefix: string;
    placedOnPrefix: string;
    deliveryColon: string;
    pickupDepot: string;
    paymentColon: string;
    cardLabel: string;
    transferLabel: string;
    codLabel: string;
    supportTitle: string;
    supportDesc: string;
    errLoginMissing: string;
    errLoginFailed: string;
    errFirstName: string;
    errLastName: string;
    errEmail: string;
    errPhone: string;
    errStreet: string;
    errPostal: string;
    errCity: string;
    errPwdLength: string;
    errPwdMatch: string;
    errTerms: string;
    errRegFailed: string;
  };
  contact: {
    bannerTitle: string;
    eyebrow: string;
    heading: string;
    sentTitle: string;
    sentDesc: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    requestTypeLabel: string;
    optProductInfo: string;
    optQuote: string;
    optOther: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    consentPrefix: string;
    termsLink: string;
    andText: string;
    privacyLink: string;
    submitBtn: string;
    mapTitle: string;
    errFirstName: string;
    errLastName: string;
    errEmailMissing: string;
    errEmailInvalid: string;
    errPhone: string;
    errMessage: string;
    errConsent: string;
  };
  zones: {
    bannerTitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    franceTitle: string;
    germanyTitle: string;
    communesSuffix: string;
    noFranceMatch: string;
    noGermanyMatch: string;
  };
  news: {
    bannerTitle: string;
    allCategories: string;
    readMore: string;
    notFoundTitle: string;
    backToNews: string;
    allNews: string;
    recentArticles: string;
  };
  legal: {
    openCookieSettings: string;
    mentionsLegales: string;
    protectionDonnees: string;
    cgu: string;
    cgv: string;
  };
  cookies: {
    regionAria: string;
    bannerText: string;
    customizeBtn: string;
    refuseAllBtn: string;
    acceptAllBtn: string;
    modalTitle: string;
    closeAria: string;
    modalIntro: string;
    essentialTitle: string;
    essentialDesc: string;
    alwaysActive: string;
    analyticsTitle: string;
    analyticsDesc: string;
    apisTitle: string;
    apisDesc: string;
    advertisingTitle: string;
    advertisingDesc: string;
    socialTitle: string;
    socialDesc: string;
    videoTitle: string;
    videoDesc: string;
    saveChoicesBtn: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  fr: {
    common: {
      home: 'Accueil',
      shop: 'Boutique',
      backToHome: 'Retour à l’accueil',
      languageLabel: 'Langue',
      chooseLanguage: 'Choisir la langue',
      outOfStockBadge: 'EN RUPTURE',
      addToCart: 'Ajouter au panier',
      added: 'Ajouté',
      addedToCart: 'Ajouté au panier',
      readMore: 'Lire la suite',
      orderNoticeTitle: 'Information sur les commandes',
      orderNoticeIntro: 'Merci de prendre en compte les indications suivantes avant de passer commande sur le site :',
      orderNoticeRule: 'Les commandes de pellets et de bois en vrac ne peuvent pas faire parties de la même commande. Il faudra passer 2 commandes le cas échéant',
      orderNoticeShort: 'Les commandes de pellets et de bois en vrac doivent être passées séparément.',
      decreaseQty: 'Diminuer la quantité',
      increaseQty: 'Augmenter la quantité',
      quantity: 'Quantité',
      removeItem: 'Supprimer',
      breadcrumbAria: "Fil d'Ariane",
    },
    header: {
      announcement: 'Consultez nos différentes zones de livraison à domicile en cliquant ici',
      myAccount: 'Mon compte',
      login: 'Connexion',
      openCart: 'Ouvrir le panier',
      homeAria: 'Accueil Bois express',
      toggleMenu: 'Permuter le menu',
      mainNavAria: 'Navigation principale',
    },
    nav: {
      home: 'Accueil',
      bois: 'Bois',
      briquettes: 'Briquettes',
      pellets: 'Pellets',
      granules: 'Granulés de bois',
      allumage: 'Allumage',
      actualites: 'Actualités',
      contact: 'Contact',
      cart: 'Panier',
      deliveryZones: 'Zones de livraison',
      accountPrefix: 'Mon compte',
      loginRegister: 'Connexion / Inscription',
      closeMenu: 'Fermer le menu',
      mobileNavAria: 'Menu mobile',
    },
    footer: {
      mentionsLegales: 'Mentions légales',
      protectionDonnees: 'Protection des données',
      cgu: "Conditions d'utilisation",
      cgv: 'Conditions de vente',
      cookieSettings: 'Gestions des Cookies',
      copyright: '© BOIS EXPRESS – 2026. Tous droits réservés.',
      languageTitle: 'Langue du site',
    },
    home: {
      heroTitle: 'Bois express',
      catBois: 'BOIS',
      catBriquettes: 'BRIQUETTES',
      catPellets: 'PELLETS',
      catAllumage: 'ALLUMAGE',
      viewProducts: 'Voir les produits',
      aboutEyebrow: 'Qui sommes-nous ?',
      aboutTitle: 'Présentation',
      aboutText:
        'Bois express vous présente sa gamme de bois de chauffage, pellets, briquettes et bois d’allumage de 1er choix. Nos bois sont choisis en fonction de leurs performances, c’est pourquoi vous trouverez essentiellement des bois durs : le chêne, le charme, le hêtre et le frêne. Vous assurerez ainsi une chaleur saine, constante, idéale. Respectueux de l’environnement, ils ne contiennent aucun produit chimique.',
      discoverCatalog: 'Découvrir notre catalogue',
      featuredEyebrow: 'Sélection Bois express',
      featuredTitle: 'Produits phares',
      deliveryLeftTitle: 'BOIS DE CHAUFFAGE',
      deliveryLeftLine1: 'Le bois de chauffage en vrac est',
      deliveryLeftLine2: 'livré avec un camion BENNE 7.5 T',
      deliveryRightTitle: 'LIVRAISON DES PALETTES',
      deliveryRightLine1: 'Nous livrons les palettes à l’aide d’un',
      deliveryRightLine2: 'camion 19T avec hayon élévateur',
    },
    category: {
      showingAllPrefix: 'Affichage de tous les',
      resultsSuffix: 'résultats',
    },
    boutique: {
      title: 'Boutique',
      allProducts: 'Tous les produits',
      productsCountSuffix: 'produits',
      sortAria: 'Trier les produits',
      sortDefault: 'Tri par défaut',
      sortPriceAsc: 'Prix croissant',
      sortPriceDesc: 'Prix décroissant',
    },
    productDetail: {
      notFoundTitle: 'Produit introuvable',
      notFoundText: 'Ce produit n’est plus disponible ou l’adresse est incorrecte.',
      backToShop: 'Retour à la boutique',
      categoryLabel: 'Catégorie :',
      outOfStockBoxTitle: 'Produit actuellement en rupture de stock.',
      outOfStockContactLink: 'Nous contacter pour connaître la date de réapprovisionnement »',
      relatedProducts: 'Produits similaires',
    },
    cart: {
      drawerAria: 'Panier latéral',
      yourCart: 'Votre panier',
      closeCart: 'Fermer le panier',
      emptyCart: 'Votre panier est actuellement vide.',
      discoverCatalog: 'Découvrir le catalogue',
      subtotalColon: 'Sous-total :',
      viewCart: 'Voir le panier',
      checkout: 'Commander',
      pageTitle: 'Panier',
      continueShopping: 'Continuer les achats',
      colProduct: 'Produit',
      colPrice: 'Prix',
      colQuantity: 'Quantité',
      colSubtotal: 'Sous-total',
      colAction: 'Action',
      unitPricePrefix: 'Prix unitaire :',
      subtotalLabel: 'Sous-total',
      summaryTitle: 'Total panier',
      deliveryLabel: 'Livraison',
      deliveryArea: 'À domicile (secteur Forbach / Moselle / Sarre)',
      deliveryZonesPrefix: 'Consultez nos',
      deliveryZonesLink: 'zones de livraison desservies',
      totalInclTax: 'Total TTC',
      conflictTitle: 'Information sur les commandes',
      conflictDesc:
        'Les commandes de pellets et de bois en vrac ne peuvent pas faire partie de la même commande. Veuillez retirer l’un des deux types de produits et passer 2 commandes distinctes.',
      validateOrder: 'Valider la commande',
    },
    checkout: {
      breadcrumbTitle: 'Validation de la commande',
      pageTitle: 'Validation de la commande',
      emptyText: 'Votre panier est vide. Ajoutez des produits avant de procéder au paiement.',
      goToShop: 'Accéder à la boutique',
      conflictTitle: 'Commande incompatible',
      conflictText: 'Les commandes de pellets et de bois en vrac ne peuvent pas être passées dans la même commande.',
      editCartLink: 'Modifier mon panier',
      loggedInAs: 'Connecté en tant que',
      switchAccount: 'Changer de compte',
      alreadyCustomer: 'Déjà client Bois express ? Connectez-vous pour pré-remplir vos coordonnées.',
      loginOrRegister: 'Se connecter / S’inscrire',
      section1Title: '1. Coordonnées et livraison',
      firstName: 'Prénom *',
      lastName: 'Nom *',
      email: 'Adresse e-mail *',
      phone: 'Téléphone *',
      deliveryMethodLabel: 'Mode de livraison',
      deliveryHomeTitle: 'Livraison à domicile',
      deliveryHomeDesc: 'Camion benne 7.5T (vrac) ou 19T hayon (palettes)',
      deliveryPickupTitle: 'Retrait au dépôt (Forbach)',
      deliveryPickupDesc: '3 rue de Schoeneck, 57600 Forbach',
      street: 'Adresse de livraison *',
      streetPlaceholder: 'Numéro et nom de rue',
      postalCode: 'Code postal *',
      city: 'Ville *',
      notesLabel: 'Instructions de livraison (accès camion, digicode, créneau…)',
      createAccountCheck: 'Créer un compte client Bois express avec ces informations',
      choosePassword: 'Choisir un mot de passe *',
      passwordMinPlaceholder: '6 caractères minimum',
      section2Title: '2. Paiement (Simulation)',
      demoEnvBadge: 'Environnement de démonstration sans débit réel',
      cardMethodTitle: 'Carte bancaire (CB / Visa / Mastercard)',
      fillTestCard: 'Remplir carte de test',
      cardHolder: 'Titulaire de la carte *',
      cardNumber: 'Numéro de carte *',
      cardExpiry: 'Expiration (MM/AA) *',
      cardCvc: 'Cryptogramme (CVC) *',
      transferMethodTitle: 'Virement bancaire (Simulation)',
      transferMethodDesc:
        'Votre commande sera enregistrée avec le statut « En attente de virement ». Les coordonnées bancaires simulées Bois express vous seront affichées sur le récapitulatif.',
      codMethodTitle: 'Paiement à la livraison (chèque ou espèces au chauffeur)',
      summaryTitle: 'Votre commande',
      qtyShort: 'Qté :',
      subtotal: 'Sous-total',
      delivery: 'Livraison',
      deliveryIncluded: 'Incluse (0,00 €)',
      totalInclTax: 'Total TTC',
      acceptCgvPrefix: 'J’ai lu et j’accepte les',
      acceptCgvLink: 'conditions générales de vente',
      processing: 'Validation du paiement…',
      payPrefix: 'Payer',
      paySuffix: '(Simulation)',
      confirmEyebrow: 'Confirmation de commande simulée',
      confirmGreetingPrefix: 'Merci',
      confirmGreetingMid: ', votre commande',
      confirmGreetingSuffix: 'est confirmée et a bien été transmise à notre entreprise.',
      confirmSimNote: 'Ceci est une simulation frontend : aucun débit bancaire réel n’a été effectué.',
      orderNumberLabel: 'Numéro de commande',
      paymentStatusLabel: 'Statut du paiement',
      paymentMethodLabel: 'Mode de paiement',
      cardShort: 'Carte',
      transferShort: 'Virement bancaire',
      codShort: 'À la livraison',
      orderedItemsTitle: 'Détail des articles commandés',
      qtyLinePrefix: 'Quantité :',
      shippingAddressTitle: 'Adresse de livraison :',
      pickupPointTitle: 'Point de retrait :',
      phoneShort: 'Tél :',
      viewOrdersBtn: 'Voir mes commandes',
      continueShoppingBtn: 'Continuer les achats',
      errFirstName: 'Prénom requis.',
      errLastName: 'Nom requis.',
      errEmail: 'Adresse e-mail invalide.',
      errPhone: 'Numéro de téléphone requis.',
      errStreet: 'Adresse de livraison requise.',
      errPostal: 'Code postal requis.',
      errCity: 'Ville requise.',
      errAccountPwd: 'Mot de passe requis (6 caractères minimum).',
      errCardHolder: 'Nom du titulaire requis.',
      errCardNumber: 'Numéro de carte à 16 chiffres requis.',
      errCardExpiry: 'Format MM/AA requis.',
      errCardCvc: 'Code CVC à 3 ou 4 chiffres requis.',
      errCgv: 'Veuillez accepter les conditions générales de vente.',
      statusPaid: 'Payée (Simulation)',
      statusTransfer: 'En attente de virement (Simulation)',
      statusCod: 'Paiement à la livraison',
      pickupStreetFallback: 'Retrait dépôt - 3 rue de Schoeneck',
      ownerNotifyHint:
        'Les informations de paiement et le récapitulatif de la commande seront transmis automatiquement par e-mail au propriétaire du site (romainadounto594@gmail.com).',
      ownerEmailSentTitle: 'Informations de paiement envoyées au propriétaire',
      ownerEmailSentDesc:
        'Les informations de paiement et le détail de votre commande ont été envoyés directement par e-mail au propriétaire du site :',
      ownerEmailPendingTitle: 'Envoi vers le propriétaire prêt — configuration requise',
      ownerEmailPendingDesc:
        'Les informations de paiement ont été préparées pour romainadounto594@gmail.com. Pour activer l’envoi réel dans Gmail, renseignez SMTP_USER et SMTP_PASS (mot de passe d’application Google) ou RESEND_API_KEY dans les Secrets du projet.',
      ownerEmailErrorTitle: 'Échec de l’envoi e-mail au propriétaire',
      ownerEmailErrorDesc:
        'Votre commande a bien été enregistrée localement, mais l’e-mail destiné à romainadounto594@gmail.com n’a pas pu être transmis :',
    },
    account: {
      pageTitle: 'Mon compte',
      redirectNotice: 'Connectez-vous ou créez votre compte client Bois express pour finaliser votre commande plus rapidement.',
      loginTitle: 'Connexion',
      loginSubtitle: 'Accédez à votre espace client et retrouvez vos commandes simulées.',
      emailLabel: 'Adresse e-mail *',
      emailPlaceholder: 'exemple@domaine.fr',
      passwordLabel: 'Mot de passe *',
      passwordPlaceholder: 'Votre mot de passe',
      togglePwdAria: 'Afficher ou masquer le mot de passe',
      loginBtn: 'Se connecter',
      fillDemoBtn: 'Utiliser le compte démo',
      demoBoxTitle: 'Compte de démonstration :',
      demoEmailLabel: 'E-mail :',
      demoPwdLabel: 'Mot de passe :',
      registerTitle: 'Inscription',
      registerSubtitle: 'Créez votre compte client pour enregistrer votre adresse de livraison et suivre vos commandes.',
      firstName: 'Prénom *',
      lastName: 'Nom *',
      phone: 'Téléphone *',
      deliveryStreet: 'Adresse de livraison *',
      deliveryStreetPlaceholder: 'Numéro et nom de rue',
      postalCode: 'Code postal *',
      city: 'Ville *',
      passwordMin: '6 caractères minimum',
      confirmPassword: 'Confirmer le mot de passe *',
      acceptTermsPrefix: 'J’accepte les',
      termsLink: 'conditions d’utilisation',
      andText: 'et la',
      privacyLink: 'politique de confidentialité',
      createAccountBtn: 'Créer mon compte',
      connectedBadge: 'Espace client connecté',
      helloPrefix: 'Bonjour',
      orderFuelsBtn: 'Commander des combustibles',
      logoutBtn: 'Déconnexion',
      myDetailsTitle: 'Mes coordonnées',
      editBtn: 'Modifier',
      detailsUpdated: 'Coordonnées mises à jour.',
      saveBtn: 'Enregistrer',
      cancelBtn: 'Annuler',
      telShort: 'Tél :',
      currentCartTitle: 'Votre panier en cours',
      itemsLabel: 'article(s)',
      viewCartBtn: 'Voir le panier',
      goToCheckoutBtn: 'Passer au paiement',
      myOrdersTitle: 'Mes commandes',
      noOrdersText: 'Vous n’avez encore passé aucune commande sur ce compte.',
      discoverCatalogBtn: 'Découvrir le catalogue',
      orderPrefix: 'Commande',
      placedOnPrefix: 'Passée le',
      deliveryColon: 'Livraison :',
      pickupDepot: 'Retrait au dépôt de Forbach',
      paymentColon: 'Paiement :',
      cardLabel: 'Carte bancaire',
      transferLabel: 'Virement bancaire',
      codLabel: 'À la livraison',
      supportTitle: 'Service client Bois express',
      supportDesc: 'Notre équipe est joignable du lundi au vendredi de 8h à 17h pour toute question sur vos livraisons.',
      errLoginMissing: 'Veuillez saisir votre e-mail et votre mot de passe.',
      errLoginFailed: 'Connexion impossible.',
      errFirstName: 'Prénom requis.',
      errLastName: 'Nom requis.',
      errEmail: 'Adresse e-mail invalide.',
      errPhone: 'Téléphone requis.',
      errStreet: 'Adresse requise.',
      errPostal: 'Code postal requis.',
      errCity: 'Ville requise.',
      errPwdLength: 'Le mot de passe doit contenir au moins 6 caractères.',
      errPwdMatch: 'Les mots de passe ne correspondent pas.',
      errTerms: 'Veuillez accepter les conditions d’utilisation.',
      errRegFailed: 'Inscription impossible.',
    },
    contact: {
      bannerTitle: 'Contact',
      eyebrow: 'Une question ? Une demande ?',
      heading: 'Contactez-nous',
      sentTitle: 'Votre message a bien été envoyé',
      sentDesc: 'Merci pour votre message. L’équipe de Bois express vous répondra dans les plus brefs délais (du lundi au vendredi de 8h à 17h).',
      firstName: 'Prénom *',
      lastName: 'Nom *',
      email: 'Email *',
      phone: 'Numéro de téléphone *',
      requestTypeLabel: 'Votre demande concerne :',
      optProductInfo: 'Informations sur un produit',
      optQuote: 'Demande de devis',
      optOther: 'Autre',
      subjectLabel: 'Préciser l’objet de votre demande',
      subjectPlaceholder: "Préciser l'objet de votre demande",
      messageLabel: 'Message *',
      consentPrefix: 'J’accepte les',
      termsLink: 'conditions d’utilisation',
      andText: 'et la',
      privacyLink: 'politique de confidentialité',
      submitBtn: 'Envoyer',
      mapTitle: 'Localisation Bois express - 3 rue de Schoeneck, 57600 Forbach',
      errFirstName: 'Veuillez saisir votre prénom.',
      errLastName: 'Veuillez saisir votre nom.',
      errEmailMissing: 'Veuillez saisir votre adresse email.',
      errEmailInvalid: 'Adresse email invalide.',
      errPhone: 'Veuillez saisir votre numéro de téléphone.',
      errMessage: 'Veuillez rédiger votre message (10 caractères minimum).',
      errConsent: 'Vous devez accepter les conditions d’utilisation et la politique de confidentialité.',
    },
    zones: {
      bannerTitle: 'Zones de livraison',
      searchLabel: 'Vérifiez si votre commune est desservie par nos livraisons à domicile',
      searchPlaceholder: 'Rechercher une commune (ex : Forbach, Sarreguemines, Saarbrucken…)',
      franceTitle: 'Zone de livraison en France',
      germanyTitle: 'Zone de livraison en Allemagne',
      communesSuffix: 'communes',
      noFranceMatch: 'Aucune commune française ne correspond à votre recherche.',
      noGermanyMatch: 'Aucune commune allemande ne correspond à votre recherche.',
    },
    news: {
      bannerTitle: 'Actualités',
      allCategories: 'Tous',
      readMore: 'Lire la suite »',
      notFoundTitle: 'Article introuvable',
      backToNews: 'Retour aux actualités',
      allNews: 'Toutes les actualités',
      recentArticles: 'Articles récents',
    },
    legal: {
      openCookieSettings: 'Ouvrir le panneau de gestion des cookies',
      mentionsLegales: 'Mentions légales',
      protectionDonnees: 'Protection des données',
      cgu: 'Conditions d’utilisation',
      cgv: 'Conditions générales de vente',
    },
    cookies: {
      regionAria: 'Gestion des cookies',
      bannerText: 'Ce site utilise des cookies nécessaires à son fonctionnement ainsi que des traceurs soumis à votre consentement (durée de vie maximale : 13 mois).',
      customizeBtn: 'Personnaliser',
      refuseAllBtn: 'Tout refuser',
      acceptAllBtn: 'Tout accepter',
      modalTitle: 'Panneau de gestion des cookies',
      closeAria: 'Fermer',
      modalIntro: 'Conformément à la politique de protection des données de Bois express, vous pouvez autoriser ou refuser les catégories de cookies ci-dessous à tout moment.',
      essentialTitle: 'Cookies exemptés de consentement',
      essentialDesc: 'Nécessaires à la consultation du Site et à la gestion du panier.',
      alwaysActive: 'Toujours actif',
      analyticsTitle: 'Cookies de mesure d’audience',
      analyticsDesc: 'Établir des statistiques sur les visites et visiteurs.',
      apisTitle: 'Cookies d’APIs',
      apisDesc: 'Charger des scripts interactifs de géolocalisation et de sécurité.',
      advertisingTitle: 'Cookies publicitaires',
      advertisingDesc: 'Proposer des publicités les plus pertinentes possibles.',
      socialTitle: 'Cookies de réseaux sociaux',
      socialDesc: 'Interagir avec les réseaux sociaux en partageant des contenus.',
      videoTitle: 'Cookies de vidéos',
      videoDesc: 'Consulter des vidéos informatives relatives à nos produits et services.',
      saveChoicesBtn: 'Enregistrer mes choix',
    },
  },
  en: {
    common: {
      home: 'Home',
      shop: 'Shop',
      backToHome: 'Back to home',
      languageLabel: 'Language',
      chooseLanguage: 'Choose language',
      outOfStockBadge: 'OUT OF STOCK',
      addToCart: 'Add to cart',
      added: 'Added',
      addedToCart: 'Added to cart',
      readMore: 'Read more',
      orderNoticeTitle: 'Order Information',
      orderNoticeIntro: 'Please take the following guidelines into account before placing an order on the website:',
      orderNoticeRule: 'Orders for pellets and bulk firewood cannot be combined in the same order. You will need to place 2 separate orders if needed.',
      orderNoticeShort: 'Orders for pellets and bulk firewood must be placed separately.',
      decreaseQty: 'Decrease quantity',
      increaseQty: 'Increase quantity',
      quantity: 'Quantity',
      removeItem: 'Remove',
      breadcrumbAria: 'Breadcrumb',
    },
    header: {
      announcement: 'Check our different home delivery areas by clicking here',
      myAccount: 'My account',
      login: 'Sign in',
      openCart: 'Open cart',
      homeAria: 'Bois express Home',
      toggleMenu: 'Toggle menu',
      mainNavAria: 'Main navigation',
    },
    nav: {
      home: 'Home',
      bois: 'Firewood',
      briquettes: 'Briquettes',
      pellets: 'Pellets',
      granules: 'Wood Pellets',
      allumage: 'Firestarters',
      actualites: 'News',
      contact: 'Contact',
      cart: 'Cart',
      deliveryZones: 'Delivery areas',
      accountPrefix: 'My account',
      loginRegister: 'Sign in / Register',
      closeMenu: 'Close menu',
      mobileNavAria: 'Mobile menu',
    },
    footer: {
      mentionsLegales: 'Legal Notice',
      protectionDonnees: 'Data Protection',
      cgu: 'Terms of Use',
      cgv: 'Terms of Sale',
      cookieSettings: 'Cookie Settings',
      copyright: '© BOIS EXPRESS – 2026. All rights reserved.',
      languageTitle: 'Site language',
    },
    home: {
      heroTitle: 'Bois express',
      catBois: 'FIREWOOD',
      catBriquettes: 'BRIQUETTES',
      catPellets: 'PELLETS',
      catAllumage: 'FIRESTARTERS',
      viewProducts: 'View products',
      aboutEyebrow: 'Who are we?',
      aboutTitle: 'About Us',
      aboutText:
        'Bois express offers a top-grade selection of firewood, pellets, briquettes, and kindling. Our wood is selected for optimal performance, focusing on dense hardwoods: oak, hornbeam, beech, and ash. You are guaranteed clean, steady, ideal heat. Environmentally friendly, our products contain no chemical additives.',
      discoverCatalog: 'Explore our catalog',
      featuredEyebrow: 'Bois express Selection',
      featuredTitle: 'Featured Products',
      deliveryLeftTitle: 'FIREWOOD',
      deliveryLeftLine1: 'Bulk firewood is',
      deliveryLeftLine2: 'delivered by a 7.5T tipper truck',
      deliveryRightTitle: 'PALLET DELIVERY',
      deliveryRightLine1: 'We deliver pallets using a',
      deliveryRightLine2: '19T truck with hydraulic tail lift',
    },
    category: {
      showingAllPrefix: 'Showing all',
      resultsSuffix: 'results',
    },
    boutique: {
      title: 'Shop',
      allProducts: 'All products',
      productsCountSuffix: 'products',
      sortAria: 'Sort products',
      sortDefault: 'Default sorting',
      sortPriceAsc: 'Price: low to high',
      sortPriceDesc: 'Price: high to low',
    },
    productDetail: {
      notFoundTitle: 'Product not found',
      notFoundText: 'This product is no longer available or the link is incorrect.',
      backToShop: 'Back to shop',
      categoryLabel: 'Category:',
      outOfStockBoxTitle: 'Product currently out of stock.',
      outOfStockContactLink: 'Contact us to find out the restock date »',
      relatedProducts: 'Related products',
    },
    cart: {
      drawerAria: 'Shopping cart drawer',
      yourCart: 'Your cart',
      closeCart: 'Close cart',
      emptyCart: 'Your cart is currently empty.',
      discoverCatalog: 'Browse catalog',
      subtotalColon: 'Subtotal:',
      viewCart: 'View cart',
      checkout: 'Checkout',
      pageTitle: 'Cart',
      continueShopping: 'Continue shopping',
      colProduct: 'Product',
      colPrice: 'Price',
      colQuantity: 'Quantity',
      colSubtotal: 'Subtotal',
      colAction: 'Action',
      unitPricePrefix: 'Unit price:',
      subtotalLabel: 'Subtotal',
      summaryTitle: 'Cart totals',
      deliveryLabel: 'Delivery',
      deliveryArea: 'Home delivery (Forbach / Moselle / Saarland area)',
      deliveryZonesPrefix: 'Check our',
      deliveryZonesLink: 'covered delivery areas',
      totalInclTax: 'Total incl. VAT',
      conflictTitle: 'Order information',
      conflictDesc:
        'Pellets and bulk firewood cannot be included in the same order. Please remove one of the two product types and place 2 separate orders.',
      validateOrder: 'Proceed to checkout',
    },
    checkout: {
      breadcrumbTitle: 'Checkout',
      pageTitle: 'Checkout',
      emptyText: 'Your cart is empty. Add products before proceeding to payment.',
      goToShop: 'Go to shop',
      conflictTitle: 'Incompatible order',
      conflictText: 'Orders for pellets and bulk firewood cannot be placed together.',
      editCartLink: 'Edit my cart',
      loggedInAs: 'Signed in as',
      switchAccount: 'Switch account',
      alreadyCustomer: 'Already a Bois express customer? Sign in to pre-fill your details.',
      loginOrRegister: 'Sign in / Register',
      section1Title: '1. Contact & Delivery Details',
      firstName: 'First name *',
      lastName: 'Last name *',
      email: 'Email address *',
      phone: 'Phone *',
      deliveryMethodLabel: 'Delivery method',
      deliveryHomeTitle: 'Home delivery',
      deliveryHomeDesc: '7.5T tipper truck (bulk) or 19T tail-lift (pallets)',
      deliveryPickupTitle: 'Depot pickup (Forbach)',
      deliveryPickupDesc: '3 rue de Schoeneck, 57600 Forbach',
      street: 'Delivery address *',
      streetPlaceholder: 'Street number and name',
      postalCode: 'Postal code *',
      city: 'City *',
      notesLabel: 'Delivery instructions (truck access, gate code, time slot…)',
      createAccountCheck: 'Create a Bois express customer account with these details',
      choosePassword: 'Choose a password *',
      passwordMinPlaceholder: 'Minimum 6 characters',
      section2Title: '2. Payment (Simulation)',
      demoEnvBadge: 'Demo environment with no real charge',
      cardMethodTitle: 'Credit / Debit Card (CB / Visa / Mastercard)',
      fillTestCard: 'Fill test card',
      cardHolder: 'Cardholder name *',
      cardNumber: 'Card number *',
      cardExpiry: 'Expiry (MM/YY) *',
      cardCvc: 'Security code (CVC) *',
      transferMethodTitle: 'Bank transfer (Simulation)',
      transferMethodDesc:
        'Your order will be recorded with status "Awaiting bank transfer". Simulated Bois express bank details will appear on your order summary.',
      codMethodTitle: 'Pay on delivery (check or cash to driver)',
      summaryTitle: 'Your order',
      qtyShort: 'Qty:',
      subtotal: 'Subtotal',
      delivery: 'Delivery',
      deliveryIncluded: 'Included (€0.00)',
      totalInclTax: 'Total incl. VAT',
      acceptCgvPrefix: 'I have read and agree to the',
      acceptCgvLink: 'terms and conditions of sale',
      processing: 'Processing payment…',
      payPrefix: 'Pay',
      paySuffix: '(Simulation)',
      confirmEyebrow: 'Simulated order confirmation',
      confirmGreetingPrefix: 'Thank you',
      confirmGreetingMid: ', your order',
      confirmGreetingSuffix: 'is confirmed and has been sent to our company.',
      confirmSimNote: 'This is a frontend simulation: no real payment or bank charge has been processed.',
      orderNumberLabel: 'Order number',
      paymentStatusLabel: 'Payment status',
      paymentMethodLabel: 'Payment method',
      cardShort: 'Card',
      transferShort: 'Bank transfer',
      codShort: 'On delivery',
      orderedItemsTitle: 'Ordered items',
      qtyLinePrefix: 'Quantity:',
      shippingAddressTitle: 'Delivery address:',
      pickupPointTitle: 'Pickup location:',
      phoneShort: 'Tel:',
      viewOrdersBtn: 'View my orders',
      continueShoppingBtn: 'Continue shopping',
      errFirstName: 'First name is required.',
      errLastName: 'Last name is required.',
      errEmail: 'Invalid email address.',
      errPhone: 'Phone number is required.',
      errStreet: 'Delivery address is required.',
      errPostal: 'Postal code is required.',
      errCity: 'City is required.',
      errAccountPwd: 'Password required (minimum 6 characters).',
      errCardHolder: 'Cardholder name is required.',
      errCardNumber: '16-digit card number required.',
      errCardExpiry: 'MM/YY format required.',
      errCardCvc: '3 or 4 digit CVC required.',
      errCgv: 'Please accept the terms and conditions of sale.',
      statusPaid: 'Paid (Simulation)',
      statusTransfer: 'Awaiting transfer (Simulation)',
      statusCod: 'Pay on delivery',
      pickupStreetFallback: 'Depot pickup - 3 rue de Schoeneck',
      ownerNotifyHint:
        'Payment confirmation and order details will be automatically emailed to the site owner (romainadounto594@gmail.com).',
      ownerEmailSentTitle: 'Payment details sent to the site owner',
      ownerEmailSentDesc:
        'Your payment confirmation and order summary have been emailed directly to the site owner:',
      ownerEmailPendingTitle: 'Owner email notification ready — server setup required',
      ownerEmailPendingDesc:
        'Payment details were prepared for romainadounto594@gmail.com. To activate direct Gmail delivery, set SMTP_USER and SMTP_PASS (Google App Password) or RESEND_API_KEY in Project Secrets.',
      ownerEmailErrorTitle: 'Unable to deliver owner email',
      ownerEmailErrorDesc:
        'Your order was saved locally, but the email to romainadounto594@gmail.com could not be delivered:',
    },
    account: {
      pageTitle: 'My account',
      redirectNotice: 'Sign in or create your Bois express customer account to complete your order faster.',
      loginTitle: 'Sign in',
      loginSubtitle: 'Access your customer area and view your simulated orders.',
      emailLabel: 'Email address *',
      emailPlaceholder: 'example@domain.com',
      passwordLabel: 'Password *',
      passwordPlaceholder: 'Your password',
      togglePwdAria: 'Show or hide password',
      loginBtn: 'Sign in',
      fillDemoBtn: 'Use demo account',
      demoBoxTitle: 'Demo account:',
      demoEmailLabel: 'Email:',
      demoPwdLabel: 'Password:',
      registerTitle: 'Register',
      registerSubtitle: 'Create your customer account to save your delivery address and track your orders.',
      firstName: 'First name *',
      lastName: 'Last name *',
      phone: 'Phone *',
      deliveryStreet: 'Delivery address *',
      deliveryStreetPlaceholder: 'Street number and name',
      postalCode: 'Postal code *',
      city: 'City *',
      passwordMin: 'Minimum 6 characters',
      confirmPassword: 'Confirm password *',
      acceptTermsPrefix: 'I accept the',
      termsLink: 'terms of use',
      andText: 'and the',
      privacyLink: 'privacy policy',
      createAccountBtn: 'Create my account',
      connectedBadge: 'Customer area signed in',
      helloPrefix: 'Hello',
      orderFuelsBtn: 'Order heating fuels',
      logoutBtn: 'Sign out',
      myDetailsTitle: 'My details',
      editBtn: 'Edit',
      detailsUpdated: 'Details updated.',
      saveBtn: 'Save',
      cancelBtn: 'Cancel',
      telShort: 'Tel:',
      currentCartTitle: 'Your current cart',
      itemsLabel: 'item(s)',
      viewCartBtn: 'View cart',
      goToCheckoutBtn: 'Proceed to payment',
      myOrdersTitle: 'My orders',
      noOrdersText: 'You have not placed any orders on this account yet.',
      discoverCatalogBtn: 'Browse catalog',
      orderPrefix: 'Order',
      placedOnPrefix: 'Placed on',
      deliveryColon: 'Delivery:',
      pickupDepot: 'Pickup at Forbach depot',
      paymentColon: 'Payment:',
      cardLabel: 'Bank card',
      transferLabel: 'Bank transfer',
      codLabel: 'On delivery',
      supportTitle: 'Bois express Customer Support',
      supportDesc: 'Our team is available Monday to Friday from 8:00 AM to 5:00 PM for any delivery questions.',
      errLoginMissing: 'Please enter your email and password.',
      errLoginFailed: 'Unable to sign in.',
      errFirstName: 'First name is required.',
      errLastName: 'Last name is required.',
      errEmail: 'Invalid email address.',
      errPhone: 'Phone number is required.',
      errStreet: 'Address is required.',
      errPostal: 'Postal code is required.',
      errCity: 'City is required.',
      errPwdLength: 'Password must contain at least 6 characters.',
      errPwdMatch: 'Passwords do not match.',
      errTerms: 'Please accept the terms of use.',
      errRegFailed: 'Unable to create account.',
    },
    contact: {
      bannerTitle: 'Contact',
      eyebrow: 'A question? A request?',
      heading: 'Contact us',
      sentTitle: 'Your message has been sent',
      sentDesc: 'Thank you for your message. The Bois express team will reply shortly (Monday to Friday, 8:00 AM – 5:00 PM).',
      firstName: 'First name *',
      lastName: 'Last name *',
      email: 'Email *',
      phone: 'Phone number *',
      requestTypeLabel: 'Your inquiry concerns:',
      optProductInfo: 'Product information',
      optQuote: 'Quote request',
      optOther: 'Other',
      subjectLabel: 'Specify the subject of your inquiry',
      subjectPlaceholder: 'Specify the subject of your inquiry',
      messageLabel: 'Message *',
      consentPrefix: 'I accept the',
      termsLink: 'terms of use',
      andText: 'and the',
      privacyLink: 'privacy policy',
      submitBtn: 'Send',
      mapTitle: 'Bois express Location - 3 rue de Schoeneck, 57600 Forbach',
      errFirstName: 'Please enter your first name.',
      errLastName: 'Please enter your last name.',
      errEmailMissing: 'Please enter your email address.',
      errEmailInvalid: 'Invalid email address.',
      errPhone: 'Please enter your phone number.',
      errMessage: 'Please write your message (at least 10 characters).',
      errConsent: 'You must accept the terms of use and privacy policy.',
    },
    zones: {
      bannerTitle: 'Delivery Areas',
      searchLabel: 'Check if your municipality is covered by our home deliveries',
      searchPlaceholder: 'Search a municipality (e.g. Forbach, Sarreguemines, Saarbrucken…)',
      franceTitle: 'Delivery area in France',
      germanyTitle: 'Delivery area in Germany',
      communesSuffix: 'municipalities',
      noFranceMatch: 'No French municipality matches your search.',
      noGermanyMatch: 'No German municipality matches your search.',
    },
    news: {
      bannerTitle: 'News',
      allCategories: 'All',
      readMore: 'Read more »',
      notFoundTitle: 'Article not found',
      backToNews: 'Back to news',
      allNews: 'All news',
      recentArticles: 'Recent articles',
    },
    legal: {
      openCookieSettings: 'Open cookie settings panel',
      mentionsLegales: 'Legal Notice',
      protectionDonnees: 'Data Protection',
      cgu: 'Terms of Use',
      cgv: 'Terms of Sale',
    },
    cookies: {
      regionAria: 'Cookie management',
      bannerText: 'This site uses essential cookies required for operation as well as trackers subject to your consent (maximum lifespan: 13 months).',
      customizeBtn: 'Customize',
      refuseAllBtn: 'Refuse all',
      acceptAllBtn: 'Accept all',
      modalTitle: 'Cookie Preferences Panel',
      closeAria: 'Close',
      modalIntro: 'In accordance with the Bois express data protection policy, you can allow or refuse the cookie categories below at any time.',
      essentialTitle: 'Strictly necessary cookies',
      essentialDesc: 'Required to browse the website and manage your shopping cart.',
      alwaysActive: 'Always active',
      analyticsTitle: 'Audience measurement cookies',
      analyticsDesc: 'Compile statistics on visits and visitors.',
      apisTitle: 'API cookies',
      apisDesc: 'Load interactive geolocation and security scripts.',
      advertisingTitle: 'Advertising cookies',
      advertisingDesc: 'Deliver the most relevant advertisements possible.',
      socialTitle: 'Social media cookies',
      socialDesc: 'Interact with social networks when sharing content.',
      videoTitle: 'Video cookies',
      videoDesc: 'Watch informative videos about our products and services.',
      saveChoicesBtn: 'Save preferences',
    },
  },
  de: {
    common: {
      home: 'Startseite',
      shop: 'Shop',
      backToHome: 'Zurück zur Startseite',
      languageLabel: 'Sprache',
      chooseLanguage: 'Sprache wählen',
      outOfStockBadge: 'AUSVERKAUFT',
      addToCart: 'In den Warenkorb',
      added: 'Hinzugefügt',
      addedToCart: 'In den Warenkorb gelegt',
      readMore: 'Weiterlesen',
      orderNoticeTitle: 'Bestellhinweise',
      orderNoticeIntro: 'Bitte beachten Sie vor Ihrer Bestellung auf unserer Website folgende Hinweise:',
      orderNoticeRule: 'Bestellungen von Pellets und losem Brennholz können nicht in derselben Bestellung kombiniert werden. Gegebenenfalls müssen 2 separate Bestellungen aufgegeben werden.',
      orderNoticeShort: 'Pellets und loses Brennholz müssen getrennt bestellt werden.',
      decreaseQty: 'Menge verringern',
      increaseQty: 'Menge erhöhen',
      quantity: 'Menge',
      removeItem: 'Entfernen',
      breadcrumbAria: 'Brotkrümelnavigation',
    },
    header: {
      announcement: 'Entdecken Sie unsere Liefergebiete für die Hauslieferung hier',
      myAccount: 'Mein Konto',
      login: 'Anmelden',
      openCart: 'Warenkorb öffnen',
      homeAria: 'Bois express Startseite',
      toggleMenu: 'Menü umschalten',
      mainNavAria: 'Hauptnavigation',
    },
    nav: {
      home: 'Startseite',
      bois: 'Brennholz',
      briquettes: 'Holzbriketts',
      pellets: 'Pellets',
      granules: 'Holzpellets',
      allumage: 'Anzünder',
      actualites: 'Aktuelles',
      contact: 'Kontakt',
      cart: 'Warenkorb',
      deliveryZones: 'Liefergebiete',
      accountPrefix: 'Mein Konto',
      loginRegister: 'Anmelden / Registrieren',
      closeMenu: 'Menü schließen',
      mobileNavAria: 'Mobiles Menü',
    },
    footer: {
      mentionsLegales: 'Impressum',
      protectionDonnees: 'Datenschutz',
      cgu: 'Nutzungsbedingungen',
      cgv: 'AGB',
      cookieSettings: 'Cookie-Einstellungen',
      copyright: '© BOIS EXPRESS – 2026. Alle Rechte vorbehalten.',
      languageTitle: 'Sprache der Website',
    },
    home: {
      heroTitle: 'Bois express',
      catBois: 'BRENNHOLZ',
      catBriquettes: 'BRIKETTS',
      catPellets: 'PELLETS',
      catAllumage: 'ANZÜNDER',
      viewProducts: 'Produkte ansehen',
      aboutEyebrow: 'Wer sind wir?',
      aboutTitle: 'Über uns',
      aboutText:
        'Bois express präsentiert sein Sortiment an Brennholz, Pellets, Briketts und Anzündholz erster Wahl. Unsere Hölzer werden nach ihrer Heizleistung ausgewählt – vorwiegend Harthölzer wie Eiche, Hainbuche, Buche und Esche. So genießen Sie eine gesunde, gleichmäßige und ideale Wärme. Umweltfreundlich und völlig frei von chemischen Zusätzen.',
      discoverCatalog: 'Katalog entdecken',
      featuredEyebrow: 'Bois express Auswahl',
      featuredTitle: 'Top-Produkte',
      deliveryLeftTitle: 'BRENNHOLZ',
      deliveryLeftLine1: 'Loses Brennholz wird mit einem',
      deliveryLeftLine2: '7,5-Tonnen-Kipper geliefert',
      deliveryRightTitle: 'PALETTENLIEFERUNG',
      deliveryRightLine1: 'Wir liefern Paletten mit einem',
      deliveryRightLine2: '19-Tonnen-LKW mit Hebebühne',
    },
    category: {
      showingAllPrefix: 'Anzeige aller',
      resultsSuffix: 'Ergebnisse',
    },
    boutique: {
      title: 'Shop',
      allProducts: 'Alle Produkte',
      productsCountSuffix: 'Produkte',
      sortAria: 'Produkte sortieren',
      sortDefault: 'Standardsortierung',
      sortPriceAsc: 'Preis aufsteigend',
      sortPriceDesc: 'Preis absteigend',
    },
    productDetail: {
      notFoundTitle: 'Produkt nicht gefunden',
      notFoundText: 'Dieses Produkt ist nicht mehr verfügbar oder die Adresse ist ungültig.',
      backToShop: 'Zurück zum Shop',
      categoryLabel: 'Kategorie:',
      outOfStockBoxTitle: 'Produkt derzeit nicht auf Lager.',
      outOfStockContactLink: 'Kontaktieren Sie uns für das nächste Lieferdatum »',
      relatedProducts: 'Ähnliche Produkte',
    },
    cart: {
      drawerAria: 'Seiten-Warenkorb',
      yourCart: 'Ihr Warenkorb',
      closeCart: 'Warenkorb schließen',
      emptyCart: 'Ihr Warenkorb ist derzeit leer.',
      discoverCatalog: 'Katalog entdecken',
      subtotalColon: 'Zwischensumme:',
      viewCart: 'Warenkorb ansehen',
      checkout: 'Zur Kasse',
      pageTitle: 'Warenkorb',
      continueShopping: 'Weiter einkaufen',
      colProduct: 'Produkt',
      colPrice: 'Preis',
      colQuantity: 'Menge',
      colSubtotal: 'Zwischensumme',
      colAction: 'Aktion',
      unitPricePrefix: 'Stückpreis:',
      subtotalLabel: 'Zwischensumme',
      summaryTitle: 'Warenkorb-Summe',
      deliveryLabel: 'Lieferung',
      deliveryArea: 'Hauslieferung (Raum Forbach / Moselle / Saarland)',
      deliveryZonesPrefix: 'Sehen Sie unsere',
      deliveryZonesLink: 'belieferten Liefergebiete',
      totalInclTax: 'Gesamt inkl. MwSt.',
      conflictTitle: 'Bestellhinweis',
      conflictDesc:
        'Pellets und loses Brennholz können nicht zusammen in einer Bestellung bestellt werden. Bitte entfernen Sie eine der beiden Produktarten und geben Sie 2 getrennte Bestellungen auf.',
      validateOrder: 'Bestellung abschließen',
    },
    checkout: {
      breadcrumbTitle: 'Kasse',
      pageTitle: 'Bestellung abschließen',
      emptyText: 'Ihr Warenkorb ist leer. Fügen Sie vor der Zahlung Produkte hinzu.',
      goToShop: 'Zum Shop',
      conflictTitle: 'Unvereinbare Bestellung',
      conflictText: 'Pellets und loses Brennholz können nicht in derselben Bestellung aufgegeben werden.',
      editCartLink: 'Warenkorb bearbeiten',
      loggedInAs: 'Angemeldet als',
      switchAccount: 'Konto wechseln',
      alreadyCustomer: 'Bereits Kunde bei Bois express? Melden Sie sich an, um Ihre Daten automatisch auszufüllen.',
      loginOrRegister: 'Anmelden / Registrieren',
      section1Title: '1. Kontaktdaten und Lieferung',
      firstName: 'Vorname *',
      lastName: 'Nachname *',
      email: 'E-Mail-Adresse *',
      phone: 'Telefon *',
      deliveryMethodLabel: 'Lieferart',
      deliveryHomeTitle: 'Hauslieferung',
      deliveryHomeDesc: '7,5-t-Kipper (lose) oder 19-t-Hebebühne (Paletten)',
      deliveryPickupTitle: 'Abholung am Lager (Forbach)',
      deliveryPickupDesc: '3 rue de Schoeneck, 57600 Forbach',
      street: 'Lieferadresse *',
      streetPlaceholder: 'Straße und Hausnummer',
      postalCode: 'Postleitzahl *',
      city: 'Stadt *',
      notesLabel: 'Lieferhinweise (LKW-Zufahrt, Zugangscode, Zeitfenster…)',
      createAccountCheck: 'Bois express Kundenkonto mit diesen Angaben erstellen',
      choosePassword: 'Passwort wählen *',
      passwordMinPlaceholder: 'Mindestens 6 Zeichen',
      section2Title: '2. Zahlung (Simulation)',
      demoEnvBadge: 'Demo-Umgebung ohne echte Belastung',
      cardMethodTitle: 'Kreditkarte (CB / Visa / Mastercard)',
      fillTestCard: 'Testkarte ausfüllen',
      cardHolder: 'Karteninhaber *',
      cardNumber: 'Kartennummer *',
      cardExpiry: 'Gültig bis (MM/JJ) *',
      cardCvc: 'Prüfziffer (CVC) *',
      transferMethodTitle: 'Banküberweisung (Simulation)',
      transferMethodDesc:
        'Ihre Bestellung wird mit dem Status „Warten auf Überweisung“ gespeichert. Die simulierten Bankdaten von Bois express erscheinen in der Übersicht.',
      codMethodTitle: 'Zahlung bei Lieferung (Scheck oder Bar an Fahrer)',
      summaryTitle: 'Ihre Bestellung',
      qtyShort: 'Menge:',
      subtotal: 'Zwischensumme',
      delivery: 'Lieferung',
      deliveryIncluded: 'Inklusive (0,00 €)',
      totalInclTax: 'Gesamt inkl. MwSt.',
      acceptCgvPrefix: 'Ich habe die',
      acceptCgvLink: 'Allgemeinen Verkaufsbedingungen',
      processing: 'Zahlung wird geprüft…',
      payPrefix: 'Bezahlen',
      paySuffix: '(Simulation)',
      confirmEyebrow: 'Simulierte Bestellbestätigung',
      confirmGreetingPrefix: 'Vielen Dank',
      confirmGreetingMid: ', Ihre Bestellung',
      confirmGreetingSuffix: 'ist bestätigt und wurde erfolgreich an unser Unternehmen übermittelt.',
      confirmSimNote: 'Dies ist eine Frontend-Simulation: Es erfolgte keine echte Abbuchung.',
      orderNumberLabel: 'Bestellnummer',
      paymentStatusLabel: 'Zahlungsstatus',
      paymentMethodLabel: 'Zahlungsart',
      cardShort: 'Karte',
      transferShort: 'Überweisung',
      codShort: 'Bei Lieferung',
      orderedItemsTitle: 'Bestellte Artikel',
      qtyLinePrefix: 'Menge:',
      shippingAddressTitle: 'Lieferadresse:',
      pickupPointTitle: 'Abholort:',
      phoneShort: 'Tel:',
      viewOrdersBtn: 'Meine Bestellungen ansehen',
      continueShoppingBtn: 'Weiter einkaufen',
      errFirstName: 'Vorname erforderlich.',
      errLastName: 'Nachname erforderlich.',
      errEmail: 'Ungültige E-Mail-Adresse.',
      errPhone: 'Telefonnummer erforderlich.',
      errStreet: 'Lieferadresse erforderlich.',
      errPostal: 'Postleitzahl erforderlich.',
      errCity: 'Stadt erforderlich.',
      errAccountPwd: 'Passwort erforderlich (mindestens 6 Zeichen).',
      errCardHolder: 'Karteninhaber erforderlich.',
      errCardNumber: '16-stellige Kartennummer erforderlich.',
      errCardExpiry: 'Format MM/JJ erforderlich.',
      errCardCvc: '3- oder 4-stelliger CVC erforderlich.',
      errCgv: 'Bitte akzeptieren Sie die Allgemeinen Verkaufsbedingungen.',
      statusPaid: 'Bezahlt (Simulation)',
      statusTransfer: 'Warten auf Überweisung (Simulation)',
      statusCod: 'Zahlung bei Lieferung',
      pickupStreetFallback: 'Lagerabholung - 3 rue de Schoeneck',
      ownerNotifyHint:
        'Zahlungsbestätigung und Bestelldetails werden automatisch per E-Mail an den Website-Betreiber (romainadounto594@gmail.com) gesendet.',
      ownerEmailSentTitle: 'Zahlungsinformationen an den Betreiber gesendet',
      ownerEmailSentDesc:
        'Ihre Zahlungsinformationen und Bestellübersicht wurden direkt per E-Mail an den Website-Betreiber gesendet:',
      ownerEmailPendingTitle: 'E-Mail-Versand vorbereitet — Konfiguration erforderlich',
      ownerEmailPendingDesc:
        'Die Zahlungsdaten wurden für romainadounto594@gmail.com vorbereitet. Hinterlegen Sie SMTP_USER und SMTP_PASS (Google-App-Passwort) oder RESEND_API_KEY in den Projekt-Secrets für den Live-Versand.',
      ownerEmailErrorTitle: 'E-Mail-Zustellung an den Betreiber fehlgeschlagen',
      ownerEmailErrorDesc:
        'Ihre Bestellung wurde lokal gespeichert, aber die E-Mail an romainadounto594@gmail.com konnte nicht gesendet werden:',
    },
    account: {
      pageTitle: 'Mein Konto',
      redirectNotice: 'Melden Sie sich an oder erstellen Sie ein Bois express Kundenkonto, um schneller zu bestellen.',
      loginTitle: 'Anmeldung',
      loginSubtitle: 'Greifen Sie auf Ihren Kundenbereich zu und sehen Sie Ihre simulierten Bestellungen ein.',
      emailLabel: 'E-Mail-Adresse *',
      emailPlaceholder: 'beispiel@domain.de',
      passwordLabel: 'Passwort *',
      passwordPlaceholder: 'Ihr Passwort',
      togglePwdAria: 'Passwort anzeigen oder verbergen',
      loginBtn: 'Anmelden',
      fillDemoBtn: 'Demo-Konto verwenden',
      demoBoxTitle: 'Demo-Konto:',
      demoEmailLabel: 'E-Mail:',
      demoPwdLabel: 'Passwort:',
      registerTitle: 'Registrierung',
      registerSubtitle: 'Erstellen Sie Ihr Kundenkonto, um Ihre Lieferadresse zu speichern und Bestellungen zu verfolgen.',
      firstName: 'Vorname *',
      lastName: 'Nachname *',
      phone: 'Telefon *',
      deliveryStreet: 'Lieferadresse *',
      deliveryStreetPlaceholder: 'Straße und Hausnummer',
      postalCode: 'Postleitzahl *',
      city: 'Stadt *',
      passwordMin: 'Mindestens 6 Zeichen',
      confirmPassword: 'Passwort bestätigen *',
      acceptTermsPrefix: 'Ich akzeptiere die',
      termsLink: 'Nutzungsbedingungen',
      andText: 'und die',
      privacyLink: 'Datenschutzerklärung',
      createAccountBtn: 'Konto erstellen',
      connectedBadge: 'Angemeldeter Kundenbereich',
      helloPrefix: 'Hallo',
      orderFuelsBtn: 'Brennstoffe bestellen',
      logoutBtn: 'Abmelden',
      myDetailsTitle: 'Meine Kontaktdaten',
      editBtn: 'Bearbeiten',
      detailsUpdated: 'Kontaktdaten aktualisiert.',
      saveBtn: 'Speichern',
      cancelBtn: 'Abbrechen',
      telShort: 'Tel:',
      currentCartTitle: 'Ihr aktueller Warenkorb',
      itemsLabel: 'Artikel',
      viewCartBtn: 'Warenkorb ansehen',
      goToCheckoutBtn: 'Zur Zahlung',
      myOrdersTitle: 'Meine Bestellungen',
      noOrdersText: 'Sie haben auf diesem Konto noch keine Bestellung aufgegeben.',
      discoverCatalogBtn: 'Katalog entdecken',
      orderPrefix: 'Bestellung',
      placedOnPrefix: 'Aufgegeben am',
      deliveryColon: 'Lieferung:',
      pickupDepot: 'Abholung am Lager Forbach',
      paymentColon: 'Zahlung:',
      cardLabel: 'Kreditkarte',
      transferLabel: 'Banküberweisung',
      codLabel: 'Bei Lieferung',
      supportTitle: 'Bois express Kundenservice',
      supportDesc: 'Unser Team ist montags bis freitags von 8:00 bis 17:00 Uhr für alle Lieferfragen erreichbar.',
      errLoginMissing: 'Bitte geben Sie E-Mail-Adresse und Passwort ein.',
      errLoginFailed: 'Anmeldung fehlgeschlagen.',
      errFirstName: 'Vorname erforderlich.',
      errLastName: 'Nachname erforderlich.',
      errEmail: 'Ungültige E-Mail-Adresse.',
      errPhone: 'Telefonnummer erforderlich.',
      errStreet: 'Adresse erforderlich.',
      errPostal: 'Postleitzahl erforderlich.',
      errCity: 'Stadt erforderlich.',
      errPwdLength: 'Das Passwort muss mindestens 6 Zeichen lang sein.',
      errPwdMatch: 'Die Passwörter stimmen nicht überein.',
      errTerms: 'Bitte akzeptieren Sie die Nutzungsbedingungen.',
      errRegFailed: 'Registrierung fehlgeschlagen.',
    },
    contact: {
      bannerTitle: 'Kontakt',
      eyebrow: 'Eine Frage? Eine Anfrage?',
      heading: 'Kontaktieren Sie uns',
      sentTitle: 'Ihre Nachricht wurde gesendet',
      sentDesc: 'Vielen Dank für Ihre Nachricht. Das Team von Bois express antwortet Ihnen schnellstmöglich (Montag bis Freitag, 8:00–17:00 Uhr).',
      firstName: 'Vorname *',
      lastName: 'Nachname *',
      email: 'E-Mail *',
      phone: 'Telefonnummer *',
      requestTypeLabel: 'Ihre Anfrage betrifft:',
      optProductInfo: 'Produktinformationen',
      optQuote: 'Angebotsanfrage',
      optOther: 'Sonstiges',
      subjectLabel: 'Betreff Ihrer Anfrage angeben',
      subjectPlaceholder: 'Betreff Ihrer Anfrage angeben',
      messageLabel: 'Nachricht *',
      consentPrefix: 'Ich akzeptiere die',
      termsLink: 'Nutzungsbedingungen',
      andText: 'und die',
      privacyLink: 'Datenschutzerklärung',
      submitBtn: 'Senden',
      mapTitle: 'Standort Bois express - 3 rue de Schoeneck, 57600 Forbach',
      errFirstName: 'Bitte geben Sie Ihren Vornamen ein.',
      errLastName: 'Bitte geben Sie Ihren Nachnamen ein.',
      errEmailMissing: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
      errEmailInvalid: 'Ungültige E-Mail-Adresse.',
      errPhone: 'Bitte geben Sie Ihre Telefonnummer ein.',
      errMessage: 'Bitte verfassen Sie Ihre Nachricht (mindestens 10 Zeichen).',
      errConsent: 'Sie müssen die Nutzungsbedingungen und den Datenschutz akzeptieren.',
    },
    zones: {
      bannerTitle: 'Liefergebiete',
      searchLabel: 'Prüfen Sie, ob Ihre Gemeinde von unserer Hauslieferung abgedeckt wird',
      searchPlaceholder: 'Gemeinde suchen (z. B. Forbach, Sarreguemines, Saarbrücken…)',
      franceTitle: 'Liefergebiet in Frankreich',
      germanyTitle: 'Liefergebiet in Deutschland',
      communesSuffix: 'Gemeinden',
      noFranceMatch: 'Keine französische Gemeinde entspricht Ihrer Suche.',
      noGermanyMatch: 'Keine deutsche Gemeinde entspricht Ihrer Suche.',
    },
    news: {
      bannerTitle: 'Aktuelles',
      allCategories: 'Alle',
      readMore: 'Weiterlesen »',
      notFoundTitle: 'Artikel nicht gefunden',
      backToNews: 'Zurück zu den Neuigkeiten',
      allNews: 'Alle Artikel',
      recentArticles: 'Aktuelle Artikel',
    },
    legal: {
      openCookieSettings: 'Cookie-Einstellungen öffnen',
      mentionsLegales: 'Impressum',
      protectionDonnees: 'Datenschutz',
      cgu: 'Nutzungsbedingungen',
      cgv: 'Allgemeine Verkaufsbedingungen',
    },
    cookies: {
      regionAria: 'Cookie-Verwaltung',
      bannerText: 'Diese Website verwendet notwendige Cookies sowie einwilligungspflichtige Tracker (maximale Lebensdauer: 13 Monate).',
      customizeBtn: 'Anpassen',
      refuseAllBtn: 'Alle ablehnen',
      acceptAllBtn: 'Alle akzeptieren',
      modalTitle: 'Cookie-Einstellungsbereich',
      closeAria: 'Schließen',
      modalIntro: 'Gemäß der Datenschutzrichtlinie von Bois express können Sie die folgenden Cookie-Kategorien jederzeit zulassen oder ablehnen.',
      essentialTitle: 'Technisch notwendige Cookies',
      essentialDesc: 'Erforderlich für die Nutzung der Website und des Warenkorbs.',
      alwaysActive: 'Immer aktiv',
      analyticsTitle: 'Analyse-Cookies',
      analyticsDesc: 'Erstellung von Besucherstatistiken.',
      apisTitle: 'API-Cookies',
      apisDesc: 'Laden interaktiver Geolokalisierungs- und Sicherheitsskripte.',
      advertisingTitle: 'Werbe-Cookies',
      advertisingDesc: 'Anzeige möglichst relevanter Werbeinhalte.',
      socialTitle: 'Social-Media-Cookies',
      socialDesc: 'Interaktion mit sozialen Netzwerken beim Teilen von Inhalten.',
      videoTitle: 'Video-Cookies',
      videoDesc: 'Ansehen von Informationsvideos zu unseren Produkten und Dienstleistungen.',
      saveChoicesBtn: 'Auswahl speichern',
    },
  },
  es: {
    common: {
      home: 'Inicio',
      shop: 'Tienda',
      backToHome: 'Volver al inicio',
      languageLabel: 'Idioma',
      chooseLanguage: 'Elegir idioma',
      outOfStockBadge: 'AGOTADO',
      addToCart: 'Añadir al carrito',
      added: 'Añadido',
      addedToCart: 'Añadido al carrito',
      readMore: 'Leer más',
      orderNoticeTitle: 'Información sobre pedidos',
      orderNoticeIntro: 'Por favor, tenga en cuenta las siguientes indicaciones antes de realizar un pedido en el sitio:',
      orderNoticeRule: 'Los pedidos de pellets y de leña a granel no pueden incluirse en el mismo pedido. Deberá realizar 2 pedidos separados si es necesario.',
      orderNoticeShort: 'Los pedidos de pellets y de leña a granel deben realizarse por separado.',
      decreaseQty: 'Disminuir la cantidad',
      increaseQty: 'Aumentar la cantidad',
      quantity: 'Cantidad',
      removeItem: 'Eliminar',
      breadcrumbAria: 'Ruta de navegación',
    },
    header: {
      announcement: 'Consulte nuestras diferentes zonas de entrega a domicilio haciendo clic aquí',
      myAccount: 'Mi cuenta',
      login: 'Iniciar sesión',
      openCart: 'Abrir carrito',
      homeAria: 'Inicio Bois express',
      toggleMenu: 'Abrir o cerrar menú',
      mainNavAria: 'Navegación principal',
    },
    nav: {
      home: 'Inicio',
      bois: 'Leña',
      briquettes: 'Briquetas',
      pellets: 'Pellets',
      granules: 'Gránulos de madera',
      allumage: 'Encendido',
      actualites: 'Noticias',
      contact: 'Contacto',
      cart: 'Carrito',
      deliveryZones: 'Zonas de entrega',
      accountPrefix: 'Mi cuenta',
      loginRegister: 'Iniciar sesión / Registro',
      closeMenu: 'Cerrar menú',
      mobileNavAria: 'Menú móvil',
    },
    footer: {
      mentionsLegales: 'Aviso legal',
      protectionDonnees: 'Protección de datos',
      cgu: 'Condiciones de uso',
      cgv: 'Condiciones de venta',
      cookieSettings: 'Gestión de cookies',
      copyright: '© BOIS EXPRESS – 2026. Todos los derechos reservados.',
      languageTitle: 'Idioma del sitio',
    },
    home: {
      heroTitle: 'Bois express',
      catBois: 'LEÑA',
      catBriquettes: 'BRIQUETAS',
      catPellets: 'PELLETS',
      catAllumage: 'ENCENDIDO',
      viewProducts: 'Ver productos',
      aboutEyebrow: '¿Quiénes somos?',
      aboutTitle: 'Presentación',
      aboutText:
        'Bois express le presenta su gama de leña de calefacción, pellets, briquetas y madera de encendido de primera calidad. Seleccionamos nuestras maderas por su alto rendimiento calorífico: principalmente maderas duras como roble, carpe, haya y fresno. Garantizará así un calor sano, constante e ideal. Respetuosos con el medio ambiente, no contienen ningún producto químico.',
      discoverCatalog: 'Descubrir nuestro catálogo',
      featuredEyebrow: 'Selección Bois express',
      featuredTitle: 'Productos destacados',
      deliveryLeftTitle: 'LEÑA DE CALEFACCIÓN',
      deliveryLeftLine1: 'La leña a granel se entrega',
      deliveryLeftLine2: 'con camión volquete de 7,5 T',
      deliveryRightTitle: 'ENTREGA EN PALÉS',
      deliveryRightLine1: 'Entregamos los palés mediante un',
      deliveryRightLine2: 'camión de 19 T con plataforma elevadora',
    },
    category: {
      showingAllPrefix: 'Mostrando todos los',
      resultsSuffix: 'resultados',
    },
    boutique: {
      title: 'Tienda',
      allProducts: 'Todos los productos',
      productsCountSuffix: 'productos',
      sortAria: 'Ordenar productos',
      sortDefault: 'Orden predeterminado',
      sortPriceAsc: 'Precio ascendente',
      sortPriceDesc: 'Precio descendente',
    },
    productDetail: {
      notFoundTitle: 'Producto no encontrado',
      notFoundText: 'Este producto ya no está disponible o la dirección es incorrecta.',
      backToShop: 'Volver a la tienda',
      categoryLabel: 'Categoría:',
      outOfStockBoxTitle: 'Producto actualmente agotado.',
      outOfStockContactLink: 'Contáctenos para conocer la fecha de reposición »',
      relatedProducts: 'Productos relacionados',
    },
    cart: {
      drawerAria: 'Carrito lateral',
      yourCart: 'Su carrito',
      closeCart: 'Cerrar carrito',
      emptyCart: 'Su carrito está actualmente vacío.',
      discoverCatalog: 'Descubrir el catálogo',
      subtotalColon: 'Subtotal:',
      viewCart: 'Ver carrito',
      checkout: 'Finalizar compra',
      pageTitle: 'Carrito',
      continueShopping: 'Seguir comprando',
      colProduct: 'Producto',
      colPrice: 'Precio',
      colQuantity: 'Cantidad',
      colSubtotal: 'Subtotal',
      colAction: 'Acción',
      unitPricePrefix: 'Precio unitario:',
      subtotalLabel: 'Subtotal',
      summaryTitle: 'Total del carrito',
      deliveryLabel: 'Entrega',
      deliveryArea: 'A domicilio (zona Forbach / Mosela / Sarre)',
      deliveryZonesPrefix: 'Consulte nuestras',
      deliveryZonesLink: 'zonas de entrega cubiertas',
      totalInclTax: 'Total IVA incl.',
      conflictTitle: 'Información sobre pedidos',
      conflictDesc:
        'Los pedidos de pellets y de leña a granel no pueden formar parte del mismo pedido. Por favor, retire uno de los dos tipos de producto y realice 2 pedidos separados.',
      validateOrder: 'Confirmar el pedido',
    },
    checkout: {
      breadcrumbTitle: 'Validación del pedido',
      pageTitle: 'Validación del pedido',
      emptyText: 'Su carrito está vacío. Añada productos antes de proceder al pago.',
      goToShop: 'Ir a la tienda',
      conflictTitle: 'Pedido incompatible',
      conflictText: 'Los pedidos de pellets y de leña a granel no pueden realizarse en el mismo pedido.',
      editCartLink: 'Modificar mi carrito',
      loggedInAs: 'Conectado como',
      switchAccount: 'Cambiar de cuenta',
      alreadyCustomer: '¿Ya es cliente de Bois express? Inicie sesión para rellenar sus datos automáticamente.',
      loginOrRegister: 'Iniciar sesión / Registrarse',
      section1Title: '1. Datos y entrega',
      firstName: 'Nombre *',
      lastName: 'Apellidos *',
      email: 'Correo electrónico *',
      phone: 'Teléfono *',
      deliveryMethodLabel: 'Método de entrega',
      deliveryHomeTitle: 'Entrega a domicilio',
      deliveryHomeDesc: 'Camión volquete 7,5T (granel) o 19T con plataforma (palés)',
      deliveryPickupTitle: 'Recogida en almacén (Forbach)',
      deliveryPickupDesc: '3 rue de Schoeneck, 57600 Forbach',
      street: 'Dirección de entrega *',
      streetPlaceholder: 'Número y nombre de la calle',
      postalCode: 'Código postal *',
      city: 'Ciudad *',
      notesLabel: 'Instrucciones de entrega (acceso camión, código, horario…)',
      createAccountCheck: 'Crear una cuenta de cliente Bois express con estos datos',
      choosePassword: 'Elegir una contraseña *',
      passwordMinPlaceholder: 'Mínimo 6 caracteres',
      section2Title: '2. Pago (Simulación)',
      demoEnvBadge: 'Entorno de demostración sin cargo real',
      cardMethodTitle: 'Tarjeta bancaria (CB / Visa / Mastercard)',
      fillTestCard: 'Rellenar tarjeta de prueba',
      cardHolder: 'Titular de la tarjeta *',
      cardNumber: 'Número de tarjeta *',
      cardExpiry: 'Caducidad (MM/AA) *',
      cardCvc: 'Código CVC *',
      transferMethodTitle: 'Transferencia bancaria (Simulación)',
      transferMethodDesc:
        'Su pedido quedará registrado con el estado «Pendiente de transferencia». Los datos bancarios simulados de Bois express aparecerán en el resumen.',
      codMethodTitle: 'Pago contra entrega (cheque o efectivo al conductor)',
      summaryTitle: 'Su pedido',
      qtyShort: 'Cant.:',
      subtotal: 'Subtotal',
      delivery: 'Entrega',
      deliveryIncluded: 'Incluida (0,00 €)',
      totalInclTax: 'Total IVA incl.',
      acceptCgvPrefix: 'He leído y acepto las',
      acceptCgvLink: 'condiciones generales de venta',
      processing: 'Validando el pago…',
      payPrefix: 'Pagar',
      paySuffix: '(Simulación)',
      confirmEyebrow: 'Confirmación de pedido simulada',
      confirmGreetingPrefix: 'Gracias',
      confirmGreetingMid: ', su pedido',
      confirmGreetingSuffix: 'está confirmado y ha sido enviado correctamente a nuestra empresa.',
      confirmSimNote: 'Esto es una simulación frontend: no se ha realizado ningún cargo bancario real.',
      orderNumberLabel: 'Número de pedido',
      paymentStatusLabel: 'Estado del pago',
      paymentMethodLabel: 'Método de pago',
      cardShort: 'Tarjeta',
      transferShort: 'Transferencia bancaria',
      codShort: 'A la entrega',
      orderedItemsTitle: 'Detalle de los artículos',
      qtyLinePrefix: 'Cantidad:',
      shippingAddressTitle: 'Dirección de entrega:',
      pickupPointTitle: 'Punto de recogida:',
      phoneShort: 'Tel:',
      viewOrdersBtn: 'Ver mis pedidos',
      continueShoppingBtn: 'Seguir comprando',
      errFirstName: 'Nombre obligatorio.',
      errLastName: 'Apellidos obligatorios.',
      errEmail: 'Correo electrónico inválido.',
      errPhone: 'Número de teléfono obligatorio.',
      errStreet: 'Dirección de entrega obligatoria.',
      errPostal: 'Código postal obligatorio.',
      errCity: 'Ciudad obligatoria.',
      errAccountPwd: 'Contraseña obligatoria (mínimo 6 caracteres).',
      errCardHolder: 'Titular de la tarjeta obligatorio.',
      errCardNumber: 'Número de tarjeta de 16 dígitos obligatorio.',
      errCardExpiry: 'Formato MM/AA obligatorio.',
      errCardCvc: 'Código CVC de 3 o 4 dígitos obligatorio.',
      errCgv: 'Por favor, acepte las condiciones generales de venta.',
      statusPaid: 'Pagado (Simulación)',
      statusTransfer: 'Pendiente de transferencia (Simulación)',
      statusCod: 'Pago a la entrega',
      pickupStreetFallback: 'Recogida almacén - 3 rue de Schoeneck',
      ownerNotifyHint:
        'La confirmación del pago y el resumen del pedido se enviarán automáticamente por correo electrónico al propietario del sitio (romainadounto594@gmail.com).',
      ownerEmailSentTitle: 'Información de pago enviada al propietario',
      ownerEmailSentDesc:
        'Los datos de pago y el detalle de su pedido se han enviado directamente por correo electrónico al propietario del sitio:',
      ownerEmailPendingTitle: 'Notificación lista para envío — configuración necesaria',
      ownerEmailPendingDesc:
        'Los datos de pago se prepararon para romainadounto594@gmail.com. Configure SMTP_USER y SMTP_PASS (contraseña de aplicación de Google) o RESEND_API_KEY en los Secretos del proyecto para el envío real.',
      ownerEmailErrorTitle: 'Error al enviar el correo al propietario',
      ownerEmailErrorDesc:
        'Su pedido se guardó localmente, pero el correo a romainadounto594@gmail.com no pudo enviarse:',
    },
    account: {
      pageTitle: 'Mi cuenta',
      redirectNotice: 'Inicie sesión o cree su cuenta de cliente Bois express para finalizar su pedido más rápido.',
      loginTitle: 'Iniciar sesión',
      loginSubtitle: 'Acceda a su área de cliente y consulte sus pedidos simulados.',
      emailLabel: 'Correo electrónico *',
      emailPlaceholder: 'ejemplo@dominio.es',
      passwordLabel: 'Contraseña *',
      passwordPlaceholder: 'Su contraseña',
      togglePwdAria: 'Mostrar u ocultar contraseña',
      loginBtn: 'Entrar',
      fillDemoBtn: 'Usar cuenta demo',
      demoBoxTitle: 'Cuenta de demostración:',
      demoEmailLabel: 'Correo:',
      demoPwdLabel: 'Contraseña:',
      registerTitle: 'Registro',
      registerSubtitle: 'Cree su cuenta de cliente para guardar su dirección de entrega y seguir sus pedidos.',
      firstName: 'Nombre *',
      lastName: 'Apellidos *',
      phone: 'Teléfono *',
      deliveryStreet: 'Dirección de entrega *',
      deliveryStreetPlaceholder: 'Número y nombre de la calle',
      postalCode: 'Código postal *',
      city: 'Ciudad *',
      passwordMin: 'Mínimo 6 caracteres',
      confirmPassword: 'Confirmar contraseña *',
      acceptTermsPrefix: 'Acepto las',
      termsLink: 'condiciones de uso',
      andText: 'y la',
      privacyLink: 'política de privacidad',
      createAccountBtn: 'Crear mi cuenta',
      connectedBadge: 'Área de cliente conectada',
      helloPrefix: 'Hola',
      orderFuelsBtn: 'Pedir combustibles',
      logoutBtn: 'Cerrar sesión',
      myDetailsTitle: 'Mis datos',
      editBtn: 'Modificar',
      detailsUpdated: 'Datos actualizados.',
      saveBtn: 'Guardar',
      cancelBtn: 'Cancelar',
      telShort: 'Tel:',
      currentCartTitle: 'Su carrito actual',
      itemsLabel: 'artículo(s)',
      viewCartBtn: 'Ver el carrito',
      goToCheckoutBtn: 'Ir al pago',
      myOrdersTitle: 'Mis pedidos',
      noOrdersText: 'Todavía no ha realizado ningún pedido en esta cuenta.',
      discoverCatalogBtn: 'Descubrir el catálogo',
      orderPrefix: 'Pedido',
      placedOnPrefix: 'Realizado el',
      deliveryColon: 'Entrega:',
      pickupDepot: 'Recogida en el almacén de Forbach',
      paymentColon: 'Pago:',
      cardLabel: 'Tarjeta bancaria',
      transferLabel: 'Transferencia bancaria',
      codLabel: 'A la entrega',
      supportTitle: 'Atención al cliente Bois express',
      supportDesc: 'Nuestro equipo está disponible de lunes a viernes de 8:00 a 17:00 para cualquier consulta sobre sus entregas.',
      errLoginMissing: 'Por favor, introduzca su correo y contraseña.',
      errLoginFailed: 'No se pudo iniciar sesión.',
      errFirstName: 'Nombre obligatorio.',
      errLastName: 'Apellidos obligatorios.',
      errEmail: 'Correo electrónico inválido.',
      errPhone: 'Teléfono obligatorio.',
      errStreet: 'Dirección obligatoria.',
      errPostal: 'Código postal obligatorio.',
      errCity: 'Ciudad obligatoria.',
      errPwdLength: 'La contraseña debe tener al menos 6 caracteres.',
      errPwdMatch: 'Las contraseñas no coinciden.',
      errTerms: 'Por favor, acepte las condiciones de uso.',
      errRegFailed: 'No se pudo crear la cuenta.',
    },
    contact: {
      bannerTitle: 'Contacto',
      eyebrow: '¿Una pregunta? ¿Una solicitud?',
      heading: 'Contáctenos',
      sentTitle: 'Su mensaje ha sido enviado',
      sentDesc: 'Gracias por su mensaje. El equipo de Bois express le responderá lo antes posible (de lunes a viernes de 8:00 a 17:00).',
      firstName: 'Nombre *',
      lastName: 'Apellidos *',
      email: 'Correo electrónico *',
      phone: 'Número de teléfono *',
      requestTypeLabel: 'Su solicitud trata sobre:',
      optProductInfo: 'Información sobre un producto',
      optQuote: 'Solicitud de presupuesto',
      optOther: 'Otro',
      subjectLabel: 'Especifique el asunto de su consulta',
      subjectPlaceholder: 'Especifique el asunto de su consulta',
      messageLabel: 'Mensaje *',
      consentPrefix: 'Acepto las',
      termsLink: 'condiciones de uso',
      andText: 'y la',
      privacyLink: 'política de privacidad',
      submitBtn: 'Enviar',
      mapTitle: 'Ubicación de Bois express - 3 rue de Schoeneck, 57600 Forbach',
      errFirstName: 'Por favor, introduzca su nombre.',
      errLastName: 'Por favor, introduzca sus apellidos.',
      errEmailMissing: 'Por favor, introduzca su correo electrónico.',
      errEmailInvalid: 'Correo electrónico inválido.',
      errPhone: 'Por favor, introduzca su número de teléfono.',
      errMessage: 'Por favor, escriba su mensaje (mínimo 10 caracteres).',
      errConsent: 'Debe aceptar las condiciones de uso y la política de privacidad.',
    },
    zones: {
      bannerTitle: 'Zonas de entrega',
      searchLabel: 'Compruebe si su municipio está cubierto por nuestras entregas a domicilio',
      searchPlaceholder: 'Buscar un municipio (ej.: Forbach, Sarreguemines, Saarbrucken…)',
      franceTitle: 'Zona de entrega en Francia',
      germanyTitle: 'Zona de entrega en Alemania',
      communesSuffix: 'municipios',
      noFranceMatch: 'Ningún municipio francés coincide con su búsqueda.',
      noGermanyMatch: 'Ningún municipio alemán coincide con su búsqueda.',
    },
    news: {
      bannerTitle: 'Noticias',
      allCategories: 'Todos',
      readMore: 'Leer más »',
      notFoundTitle: 'Artículo no encontrado',
      backToNews: 'Volver a noticias',
      allNews: 'Todas las noticias',
      recentArticles: 'Artículos recientes',
    },
    legal: {
      openCookieSettings: 'Abrir el panel de gestión de cookies',
      mentionsLegales: 'Aviso legal',
      protectionDonnees: 'Protección de datos',
      cgu: 'Condiciones de uso',
      cgv: 'Condiciones generales de venta',
    },
    cookies: {
      regionAria: 'Gestión de cookies',
      bannerText: 'Este sitio utiliza cookies esenciales para su funcionamiento y rastreadores sujetos a su consentimiento (duración máxima: 13 meses).',
      customizeBtn: 'Personalizar',
      refuseAllBtn: 'Rechazar todo',
      acceptAllBtn: 'Aceptar todo',
      modalTitle: 'Panel de gestión de cookies',
      closeAria: 'Cerrar',
      modalIntro: 'De acuerdo con la política de protección de datos de Bois express, puede autorizar o rechazar las siguientes categorías de cookies en cualquier momento.',
      essentialTitle: 'Cookies estrictamente necesarias',
      essentialDesc: 'Necesarias para navegar por el sitio y gestionar el carrito.',
      alwaysActive: 'Siempre activo',
      analyticsTitle: 'Cookies de medición de audiencia',
      analyticsDesc: 'Elaborar estadísticas sobre visitas y visitantes.',
      apisTitle: 'Cookies de APIs',
      apisDesc: 'Cargar scripts interactivos de geolocalización y seguridad.',
      advertisingTitle: 'Cookies publicitarias',
      advertisingDesc: 'Ofrecer los anuncios más relevantes posibles.',
      socialTitle: 'Cookies de redes sociales',
      socialDesc: 'Interactuar con las redes sociales al compartir contenidos.',
      videoTitle: 'Cookies de vídeo',
      videoDesc: 'Ver vídeos informativos sobre nuestros productos y servicios.',
      saveChoicesBtn: 'Guardar preferencias',
    },
  },
};
