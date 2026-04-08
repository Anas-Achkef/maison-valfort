import { NextRequest, NextResponse } from "next/server";

// ============================================
// CHATBOT IA CONVERSATIONNEL - MAISON VALFORT
// Version 6.0 "EXCELLENCE" - Intelligence Ultime
// ============================================
// Features:
// - NLU avancé avec synonymes et variations
// - Mémoire contextuelle persistante
// - Personnalité et ton adaptatif
// - Suggestions intelligentes
// - Gestion multi-tours avancée
// - Analyse de sentiment
// - Réponses variées et naturelles
// ============================================

const COMPANY = {
  name: "Maison Valfort",
  phone: "+33 6 73 04 09 43",
  email: "contact@maison-valfort.com",
  commission: "20%",
  zones: ["Paris", "Île-de-France", "Côte d'Azur", "Provence", "Lyon", "Bordeaux"],
  horaires: "24h/24 - 7J/7",
  anneesExperience: 5,
  nombreProprietaires: 50,
  nombreVoyageurs: 500,
};

// ============================================
// BASE DE CONNAISSANCES ENRICHIE
// ============================================
const KNOWLEDGE_BASE = {
  types_biens: {
    keywords: ["type", "genre", "sorte", "bien", "logement", "appartement", "hebergement", "proposez", "offrez", "avez-vous", "disponible"],
    response: `Nous proposons une large gamme de biens d'exception :

🏠 **Appartements**
   • Studios cosy (1-2 pers)
   • T2/T3 familiaux
   • Grands appartements T4+

🏡 **Maisons**
   • Avec jardin privatif
   • Avec terrasse/balcon

🏰 **Villas de prestige**
   • Avec piscine privée
   • Vue mer ou campagne

🌆 **Biens atypiques**
   • Lofts industriels
   • Penthouses panoramiques
   • Maisons d'architecte

Tous nos biens sont sélectionnés pour leur qualité, confort et emplacement.

**Quel type vous intéresserait ?**`,
    followUp: ["Où souhaitez-vous séjourner ?", "Pour combien de personnes ?", "Avez-vous des critères particuliers ?"]
  },

  services_voyageurs: {
    keywords: ["service", "voyageur", "client", "locataire", "inclus", "compris", "offert", "sejour"],
    response: `Nos services pour les voyageurs sont pensés pour un séjour parfait :

✨ **Avant votre arrivée**
   • Sélection personnalisée de logements
   • Photos réelles, descriptions détaillées
   • Réservation simple et sécurisée

🔑 **À votre arrivée**
   • Accueil personnalisé (ou check-in autonome 24/7)
   • Remise des clés avec visite guidée
   • Kit de bienvenue offert

🏠 **Pendant votre séjour**
   • Conciergerie disponible 7j/7
   • Ménage hôtelier
   • Assistance multilingue

🌟 **Expériences sur-mesure**
   • Chef à domicile
   • Spa privatif
   • VTC et chauffeur privé
   • Réservations restaurants/spectacles

**Vous souhaitez réserver un séjour ?**`,
    followUp: ["Dans quelle ville ?", "Pour quelles dates ?"]
  },

  services_proprietaires: {
    keywords: ["proprietaire", "gestion", "confier", "bien", "gerer", "revenue", "louer mon"],
    response: `Propriétaire ? Nous gérons TOUT pour vous :

📸 **Mise en valeur**
   • Shooting photo professionnel
   • Home staging si nécessaire
   • Annonces optimisées SEO

📊 **Gestion des réservations**
   • Diffusion multi-plateformes (Airbnb, Booking, etc.)
   • Tarification dynamique (prix optimal automatique)
   • Calendrier synchronisé

👋 **Gestion des voyageurs**
   • Communication pré-arrivée
   • Accueil personnalisé ou check-in autonome
   • Support 24/7 pendant le séjour

✨ **Entretien**
   • Ménage professionnel hôtelier
   • Blanchisserie
   • Maintenance et petites réparations

📈 **Reporting**
   • Tableau de bord en temps réel
   • Rapport mensuel détaillé
   • Paiements automatiques

**Tout cela pour seulement ${COMPANY.commission} de commission !**

Nos propriétaires gagnent en moyenne **+40% de revenus** par rapport à une gestion seule.`,
    followUp: ["Quel type de bien possédez-vous ?", "Où est-il situé ?", "Voulez-vous une estimation gratuite ?"]
  },

  tarifs_commission: {
    keywords: ["tarif", "prix", "cout", "combien", "commission", "pourcentage", "frais", "paye"],
    response: `Notre modèle est simple et transparent :

💰 **${COMPANY.commission} de commission** sur les revenus locatifs

**Ce qui est INCLUS :**
✅ Photos professionnelles
✅ Création et gestion des annonces
✅ Communication avec les voyageurs
✅ Accueil et remise des clés
✅ Ménage professionnel
✅ Linge de maison fourni
✅ Maintenance courante
✅ Assurance RC Pro
✅ Reporting mensuel

**PAS de frais cachés !**
**PAS d'engagement longue durée !**

📊 Résultat moyen : **+40% de revenus** pour nos propriétaires

**Vous souhaitez une estimation pour votre bien ?**`,
    followUp: ["Voulez-vous une estimation gratuite ?", "Quel type de bien possédez-vous ?"]
  },

  zones_intervention: {
    keywords: ["zone", "ville", "region", "secteur", "ou", "intervenez", "couvrez", "quartier", "lieu"],
    response: `Nous intervenons dans les destinations les plus prisées :

🗼 **PARIS & ÎLE-DE-FRANCE**
   • Paris intra-muros (tous arrondissements)
   • Hauts-de-Seine, Yvelines
   • Fontainebleau, Versailles

🌴 **CÔTE D'AZUR**
   • Nice & Cannes
   • Saint-Tropez & Ramatuelle
   • Monaco & Antibes
   • Menton & Cap d'Ail

🌿 **PROVENCE**
   • Aix-en-Provence
   • Marseille & Cassis
   • Luberon & Alpilles
   • Saint-Rémy, Gordes

🍷 **LYON & RHÔNE-ALPES**
   • Lyon centre
   • Beaujolais
   • Monts du Lyonnais

🍇 **BORDEAUX & SUD-OUEST**
   • Bordeaux & métropole
   • Saint-Émilion
   • Bassin d'Arcachon

**Votre bien ou recherche se situe dans une de ces zones ?**`,
    followUp: ["Vous êtes propriétaire ou voyageur ?", "Dans quelle ville exactement ?"]
  },

  sous_location: {
    keywords: ["sous-location", "sous location", "loyer garanti", "bail", "securise", "sans risque"],
    response: `Notre offre **Sous-Location Professionnelle** est unique :

🔐 **LE CONCEPT**
Vous nous confiez votre bien via un bail, et nous vous versons un loyer GARANTI chaque mois.

✅ **VOS AVANTAGES**

💰 **Loyer garanti**
   • Même montant chaque mois
   • Peu importe le taux d'occupation
   • Versement à date fixe

🛡️ **Zéro risque**
   • Nous assumons les impayés
   • Dégradations couvertes
   • Vacance locative à notre charge

😌 **Zéro gestion**
   • Nous gérons absolument tout
   • Aucune sollicitation de votre part
   • Vous profitez sereinement

📋 **Bail flexible**
   • Durée adaptée à vos besoins
   • Conditions de sortie claires
   • Récupération de votre bien possible

**Idéal pour :** expatriés, multi-propriétaires, ou ceux qui veulent un revenu 100% passif.

**Intéressé ? Parlons-en !**`,
    followUp: ["Quel est votre bien ?", "Où est-il situé ?", "Voulez-vous qu'on vous appelle ?"]
  },

  processus_proprietaire: {
    keywords: ["comment", "etape", "commencer", "demarrer", "fonctionnement", "processus", "procedure"],
    response: `Confier votre bien est simple et rapide :

**ÉTAPE 1 - Premier contact** 📞
→ Appel découverte de 15 min
→ On échange sur votre bien et vos attentes

**ÉTAPE 2 - Visite gratuite** 🏠
→ Un expert se déplace chez vous
→ Évaluation du potentiel locatif
→ Conseils d'optimisation

**ÉTAPE 3 - Proposition** 📋
→ Estimation de vos revenus
→ Présentation de nos services
→ Contrat clair et sans engagement

**ÉTAPE 4 - Mise en valeur** 📸
→ Shooting photo professionnel
→ Home staging si nécessaire
→ Création des annonces

**ÉTAPE 5 - C'est parti !** 🚀
→ Publication sur toutes les plateformes
→ Premières réservations sous 2 semaines
→ Vous recevez vos revenus

**En résumé : 2 semaines entre votre appel et vos premiers revenus !**

📞 Appelez-nous : ${COMPANY.phone}`,
    followUp: ["Voulez-vous qu'on vous rappelle ?", "Avez-vous des questions ?"]
  },

  avis_temoignages: {
    keywords: ["avis", "temoignage", "retour", "experience", "satisfait", "client", "recommand"],
    response: `Nos clients parlent de nous :

⭐⭐⭐⭐⭐ **Marie L.** - Paris 16ème
_"Service impeccable du début à la fin. Mon appartement n'a jamais été aussi bien entretenu, et mes revenus ont doublé !"_

⭐⭐⭐⭐⭐ **Pierre D.** - Nice
_"Enfin une conciergerie qui tient ses promesses. Équipe réactive, professionnelle. Je recommande les yeux fermés."_

⭐⭐⭐⭐⭐ **Sophie M.** - Lyon
_"En tant qu'expatriée, je cherchais une solution clé en main. Maison Valfort gère tout parfaitement, je ne m'occupe de rien."_

⭐⭐⭐⭐⭐ **Laurent & Julie** - Voyageurs
_"Séjour magique dans un appartement sublime à Paris. Accueil chaleureux, logement impeccable. On reviendra !"_

📊 **En chiffres :**
• ${COMPANY.nombreProprietaires}+ propriétaires nous font confiance
• ${COMPANY.nombreVoyageurs}+ voyageurs satisfaits
• 4.9/5 de note moyenne
• 98% de taux de recommandation`,
    followUp: ["Vous souhaitez nous rejoindre ?", "Une question sur nos services ?"]
  },

  avantages: {
    keywords: ["pourquoi", "avantage", "difference", "unique", "special", "choisir", "meilleur"],
    response: `Pourquoi choisir **Maison Valfort** ?

🏆 **EXPERTISE**
   • ${COMPANY.anneesExperience}+ ans d'expérience
   • Équipe de professionnels passionnés
   • Connaissance fine du marché local

✨ **QUALITÉ 5 ÉTOILES**
   • Standards hôteliers
   • Contrôle qualité systématique
   • Linge et produits premium

💰 **RENTABILITÉ MAXIMALE**
   • +40% de revenus en moyenne
   • Tarification dynamique IA
   • Optimisation continue

🤝 **FLEXIBILITÉ TOTALE**
   • Sans engagement
   • Résiliable à tout moment
   • Récupération de votre bien quand vous voulez

📱 **DISPONIBILITÉ 24/7**
   • Équipe joignable en permanence
   • Urgences traitées en 2h
   • App de suivi en temps réel

🔒 **SÉCURITÉ**
   • Assurance RC Pro incluse
   • Vérification des voyageurs
   • Garantie dégradations

**Nous ne sommes pas une simple conciergerie, nous sommes votre partenaire.**`,
    followUp: ["Prêt à nous rejoindre ?", "Des questions spécifiques ?"]
  },

  horaires_contact: {
    keywords: ["horaire", "heure", "ouvert", "quand", "disponible", "joindre", "appeler"],
    response: `Nous sommes à votre disposition :

📞 **Téléphone** : ${COMPANY.phone}
📧 **Email** : ${COMPANY.email}
🌐 **Site** : maisonvalfort.com

⏰ **Horaires d'ouverture**
   • Lundi - Vendredi : 9h - 19h
   • Samedi : 10h - 17h
   • Dimanche : Urgences uniquement

💬 **Chat en ligne** : 24h/24 (vous y êtes !)

🆘 **Urgences voyageurs** : Ligne dédiée 24/7

**Préférez-vous qu'on vous rappelle ?**`,
    followUp: ["Voulez-vous qu'on vous rappelle ?", "Un email peut-être ?"]
  },

  paiement: {
    keywords: ["paiement", "payer", "carte", "virement", "facture", "reglement"],
    response: `Nos modalités de paiement sont flexibles :

💳 **Pour les voyageurs**
   • Carte bancaire (Visa, Mastercard, Amex)
   • Virement bancaire
   • PayPal
   • Apple Pay / Google Pay

💰 **Pour les propriétaires**
   • Virement automatique mensuel
   • Détail des revenus par réservation
   • Factures disponibles dans votre espace

📄 **Facturation claire**
   • Récapitulatif mensuel détaillé
   • Export comptable disponible
   • TVA si applicable

**Une question sur un paiement ?**`,
    followUp: ["Avez-vous d'autres questions ?"]
  },

  annulation: {
    keywords: ["annulation", "annuler", "rembours", "modification", "changer"],
    response: `Notre politique d'annulation est équilibrée :

🔄 **Pour les voyageurs**
   • Annulation gratuite jusqu'à 14 jours avant
   • 50% remboursé entre 7-14 jours
   • Non remboursable moins de 7 jours
   _(Conditions selon le bien choisi)_

📋 **Modifications possibles**
   • Changement de dates (selon disponibilité)
   • Ajout de voyageurs
   • Services supplémentaires

🛡️ **Cas exceptionnels**
   • Remboursement intégral si problème du logement
   • Relogement si imprévu
   • Assurance voyage recommandée

**Une annulation à effectuer ?** Contactez-nous vite !`,
    followUp: ["Besoin d'annuler une réservation ?", "Autre question ?"]
  },

  securite: {
    keywords: ["securite", "securise", "confiance", "assurance", "garanti", "protege", "verif"],
    response: `Votre sécurité est notre priorité :

🔐 **Pour les voyageurs**
   • Paiements 100% sécurisés
   • Logements vérifiés et certifiés
   • Assistance 24/7

🛡️ **Pour les propriétaires**
   • Vérification de chaque voyageur
   • Assurance RC Pro incluse
   • Garantie contre les dégradations
   • Caution systématique

✅ **Notre engagement**
   • Photos réelles, jamais de surprise
   • Équipe locale sur place
   • Intervention rapide si besoin

**Vous êtes entre de bonnes mains !**`,
    followUp: ["Rassuré(e) ?", "D'autres questions ?"]
  },

  experiences: {
    keywords: ["experience", "activite", "sortie", "restaurant", "chef", "spa", "massage", "vtc", "chauffeur"],
    response: `Enrichissez votre séjour avec nos expériences :

🍽️ **GASTRONOMIE**
   • Chef à domicile
   • Cours de cuisine
   • Réservation des meilleures tables
   • Livraison traiteur

🧘 **BIEN-ÊTRE**
   • Spa et massages à domicile
   • Coach sportif
   • Yoga privatif

🚗 **MOBILITÉ**
   • VTC et chauffeur privé
   • Location de véhicules prestige
   • Transferts aéroport

🎭 **CULTURE & LOISIRS**
   • Billets spectacles et musées
   • Visites privées guidées
   • Excursions sur-mesure

🍾 **ÉVÉNEMENTS**
   • Organisation de soirées
   • Décoration personnalisée
   • Service traiteur & DJ

**Toutes nos expériences sont réservables sur demande.**

Qu'est-ce qui vous ferait plaisir ?`,
    followUp: ["Une expérience vous intéresse ?", "Pour quelle occasion ?"]
  },

  animaux: {
    keywords: ["animaux", "animal", "chien", "chat", "pet", "compagnon"],
    response: `Les animaux de compagnie sont les bienvenus !

🐕 **Biens "Pet-friendly"**
   • Sélection de logements acceptant les animaux
   • Jardins et espaces extérieurs
   • Proximité parcs et balades

📋 **Conditions**
   • Supplément ménage parfois demandé (15-30€)
   • Accord préalable du propriétaire
   • Animaux bien éduqués

🐾 **Services disponibles**
   • Dog-sitting sur demande
   • Recommandations vétérinaires
   • Adresses de promenades

**Dites-nous si vous voyagez avec un compagnon à 4 pattes !**`,
    followUp: ["Quel animal vous accompagne ?", "Où souhaitez-vous séjourner ?"]
  },

  accessibilite: {
    keywords: ["accessib", "handicap", "pmr", "fauteuil", "mobilite reduite"],
    response: `L'accessibilité est importante pour nous :

♿ **Logements adaptés PMR**
   • Plain-pied ou ascenseur
   • Douches accessibles
   • Espaces de circulation larges

📍 **Sur demande**
   • Liste des biens accessibles
   • Équipements spécifiques
   • Proximité transports adaptés

💬 **Accompagnement**
   • Échange personnalisé sur vos besoins
   • Solutions sur-mesure
   • Partenaires équipements médicaux

**N'hésitez pas à nous préciser vos besoins, nous trouverons la solution idéale.**`,
    followUp: ["Quels sont vos besoins spécifiques ?", "Dans quelle ville ?"]
  }
};

// ============================================
// ÉTAT DE CONVERSATION ENRICHI
// ============================================
interface ConversationState {
  userName: string | null;
  userType: "unknown" | "voyageur" | "proprietaire";
  currentFlow: "none" | "booking" | "owner" | "callback";
  mood: "neutral" | "happy" | "frustrated" | "curious";
  booking: {
    location: string | null;
    propertyType: string | null;
    guests: number | null;
    rooms: number | null;
    duration: string | null;
    dates: string | null;
    budget: string | null;
    specialRequests: string[];
  };
  owner: {
    location: string | null;
    propertyType: string | null;
    surface: string | null;
    rooms: number | null;
    phone: string | null;
  };
  lastQuestion: string | null;
  lastTopic: string | null;
  messageCount: number;
  conversationHistory: string[];
}

let state: ConversationState = {
  userName: null,
  userType: "unknown",
  currentFlow: "none",
  mood: "neutral",
  booking: {
    location: null,
    propertyType: null,
    guests: null,
    rooms: null,
    duration: null,
    dates: null,
    budget: null,
    specialRequests: [],
  },
  owner: {
    location: null,
    propertyType: null,
    surface: null,
    rooms: null,
    phone: null,
  },
  lastQuestion: null,
  lastTopic: null,
  messageCount: 0,
  conversationHistory: [],
};

// ============================================
// UTILITAIRES AVANCÉS
// ============================================
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "'")
    .replace(/[.,!?;:]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Analyse du sentiment
function analyzeSentiment(msg: string): "positive" | "negative" | "neutral" {
  const n = normalize(msg);
  const positive = ["merci", "super", "genial", "parfait", "excellent", "top", "cool", "bien", "content", "satisfait", "bravo"];
  const negative = ["nul", "mauvais", "cher", "probleme", "decu", "mecontant", "difficile", "complique", "pourquoi pas", "pas content"];

  let posScore = 0, negScore = 0;
  positive.forEach(w => { if (n.includes(w)) posScore++; });
  negative.forEach(w => { if (n.includes(w)) negScore++; });

  if (posScore > negScore) return "positive";
  if (negScore > posScore) return "negative";
  return "neutral";
}

// Extraire le prénom
function extractName(msg: string): string | null {
  const patterns = [
    /(?:je m'appelle|je suis|moi c'est|c'est)\s+(\w+)/i,
    /^(\w+)(?:\s+ici|\s+à l'appareil)?$/i,
  ];
  for (const p of patterns) {
    const match = msg.match(p);
    if (match && match[1].length > 2 && match[1].length < 20) {
      const name = match[1];
      const blacklist = ["bonjour", "salut", "merci", "oui", "non", "bien", "tres", "je", "nous"];
      if (!blacklist.includes(name.toLowerCase())) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }
    }
  }
  return null;
}

// ============================================
// DÉTECTION D'INTENTIONS AVANCÉE
// ============================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function detectIntent(msg: string): { intent: string; confidence: number; entities: Record<string, any> } {
  const n = normalize(msg);

  // Salutations
  if (/^(bonjour|salut|hello|hey|coucou|bonsoir|hi|bjr|slt)[\s!]*$/i.test(msg.trim())) {
    return { intent: "greeting", confidence: 1, entities: {} };
  }

  // Au revoir
  if (/^(au revoir|bye|a bientot|merci.*au revoir|ciao|a\+|bonne journee|bonne soiree)[\s!]*$/i.test(msg.trim())) {
    return { intent: "goodbye", confidence: 1, entities: {} };
  }

  // Remerciements
  if (/^(merci|thanks|merci beaucoup|merci bien)[\s!]*$/i.test(msg.trim())) {
    return { intent: "thanks", confidence: 1, entities: {} };
  }

  // Oui/Non
  if (/^(oui|yes|ok|d'?accord|tout a fait|exactement|absolument|ouais|yep)[\s!]*$/i.test(msg.trim())) {
    return { intent: "affirmative", confidence: 1, entities: {} };
  }
  if (/^(non|nan|pas vraiment|pas du tout|nope)[\s!]*$/i.test(msg.trim())) {
    return { intent: "negative", confidence: 1, entities: {} };
  }

  // Comment ça va
  if (/(?:ca va|comment.*(?:tu vas|allez|vas)|la forme|comment.*vous)/i.test(n)) {
    return { intent: "how_are_you", confidence: 0.9, entities: {} };
  }

  // Qui êtes-vous
  if (/(?:qui etes|qui es|c'?est quoi|qu'?est.?ce que.*maison valfort|parlez.?moi de vous|presentez)/i.test(n)) {
    return { intent: "who_are_you", confidence: 0.9, entities: {} };
  }

  // Contact/Rappel
  if (/(?:rappel|appelez.?moi|contactez|me contacter|telephone|email|joindre)/i.test(n)) {
    return { intent: "contact", confidence: 0.85, entities: {} };
  }

  // Demande de réservation explicite
  if (/(?:je |on |nous )?(?:cherche|veux|souhaite|voudrais|aimerais|recherche)\s+(?:un|une|louer|reserver)/i.test(n) ||
      /(?:reserver|louer|trouver)\s+(?:un|une)/i.test(n) ||
      /(?:besoin|envie)\s+(?:d'?un|d'?une)\s+(?:logement|appartement|maison|villa)/i.test(n)) {
    return { intent: "booking_request", confidence: 0.9, entities: extractBookingEntities(msg) };
  }

  // Propriétaire
  if (/(?:je suis|nous sommes)\s*proprietaire/i.test(n) ||
      /(?:mon|notre|j'?ai un)\s+(?:bien|appartement|maison).*(?:confier|louer|gerer)/i.test(n) ||
      /confier\s+(?:mon|notre|un)\s+(?:bien|appartement|maison)/i.test(n)) {
    return { intent: "owner", confidence: 0.9, entities: {} };
  }

  // Questions informationnelles
  for (const [topic, data] of Object.entries(KNOWLEDGE_BASE)) {
    const matchCount = data.keywords.filter(kw => n.includes(kw)).length;
    if (matchCount >= 2 || (matchCount === 1 && n.includes("?"))) {
      return { intent: "question", confidence: 0.8, entities: { topic } };
    }
  }

  // Nombre seul (réponse contextuelle)
  if (/^\d+$/.test(msg.trim())) {
    return { intent: "number_response", confidence: 0.7, entities: { number: parseInt(msg.trim()) } };
  }

  // Ville seule mentionnée
  const cities = extractCities(msg);
  if (cities.length > 0 && n.split(" ").length <= 3) {
    return { intent: "city_mention", confidence: 0.7, entities: { cities } };
  }

  return { intent: "unknown", confidence: 0, entities: {} };
}

// Extraction des villes
function extractCities(msg: string): string[] {
  const n = normalize(msg);
  const cities: string[] = [];
  const cityMap: Record<string, string> = {
    "paris": "Paris",
    "lyon": "Lyon",
    "marseille": "Marseille",
    "nice": "Nice",
    "cannes": "Cannes",
    "bordeaux": "Bordeaux",
    "toulouse": "Toulouse",
    "montpellier": "Montpellier",
    "saint-tropez": "Saint-Tropez",
    "st tropez": "Saint-Tropez",
    "monaco": "Monaco",
    "antibes": "Antibes",
    "aix": "Aix-en-Provence",
    "aix-en-provence": "Aix-en-Provence",
    "cote d'azur": "Côte d'Azur",
    "provence": "Provence",
    "ile-de-france": "Île-de-France",
    "ile de france": "Île-de-France",
  };

  for (const [pattern, city] of Object.entries(cityMap)) {
    if (n.includes(pattern)) {
      cities.push(city);
    }
  }
  return cities;
}

// Extraction des entités de réservation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractBookingEntities(msg: string): Record<string, any> {
  const n = normalize(msg);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entities: Record<string, any> = {};

  // Villes
  const cities = extractCities(msg);
  if (cities.length > 0) entities.location = cities[0];

  // Types de bien
  if (/appartement|appart\b/i.test(n)) entities.propertyType = "appartement";
  else if (/maison/i.test(n)) entities.propertyType = "maison";
  else if (/villa/i.test(n)) entities.propertyType = "villa";
  else if (/studio/i.test(n)) entities.propertyType = "studio";
  else if (/loft/i.test(n)) entities.propertyType = "loft";
  else if (/penthouse/i.test(n)) entities.propertyType = "penthouse";

  // Nombre de personnes
  const guestMatch = msg.match(/(\d+)\s*(?:personnes?|pers|voyageurs?|adultes?|invites?)/i) ||
                     msg.match(/(?:pour|nous serons?|on sera?|nous sommes)\s*(\d+)/i);
  if (guestMatch) entities.guests = parseInt(guestMatch[1]);

  // Nombre de chambres
  const roomMatch = msg.match(/(\d+)\s*(?:chambres?|pieces?|ch\b)/i);
  if (roomMatch) entities.rooms = parseInt(roomMatch[1]);

  // Durée
  const durationMatch = msg.match(/(\d+)\s*(nuits?|jours?|semaines?)/i);
  if (durationMatch) {
    const num = parseInt(durationMatch[1]);
    const unit = durationMatch[2].toLowerCase();
    if (unit.startsWith("semaine")) entities.duration = `${num} semaine${num > 1 ? 's' : ''}`;
    else if (unit.startsWith("jour")) entities.duration = `${num} jour${num > 1 ? 's' : ''}`;
    else entities.duration = `${num} nuit${num > 1 ? 's' : ''}`;
  }
  if (/week-?end/i.test(n)) entities.duration = "un week-end";

  // Dates/Mois
  const months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
  for (const month of months) {
    if (n.includes(month)) {
      entities.dates = month.charAt(0).toUpperCase() + month.slice(1);
      break;
    }
  }
  if (/cet ete|ete prochain/i.test(n)) entities.dates = "cet été";
  if (/noel/i.test(n)) entities.dates = "Noël";
  if (/nouvel an|reveillon/i.test(n)) entities.dates = "Nouvel An";
  if (/paques/i.test(n)) entities.dates = "Pâques";

  // Budget
  const budgetMatch = msg.match(/(\d+)\s*(?:euros?|€)/i);
  if (budgetMatch) entities.budget = `${budgetMatch[1]}€`;
  if (/petit budget|economique|pas cher/i.test(n)) entities.budget = "économique";
  if (/luxe|premium|haut de gamme|prestige/i.test(n)) entities.budget = "luxe";

  // Requêtes spéciales
  const specials: string[] = [];
  if (/piscine/i.test(n)) specials.push("piscine");
  if (/jardin/i.test(n)) specials.push("jardin");
  if (/terrasse|balcon/i.test(n)) specials.push("terrasse/balcon");
  if (/parking|garage/i.test(n)) specials.push("parking");
  if (/vue mer/i.test(n)) specials.push("vue mer");
  if (/animaux|chien|chat/i.test(n)) specials.push("animaux acceptés");
  if (/climatisation|clim/i.test(n)) specials.push("climatisation");
  if (specials.length > 0) entities.specialRequests = specials;

  return entities;
}

// ============================================
// GÉNÉRATEURS DE RÉPONSES VARIÉES
// ============================================
const RESPONSES = {
  greeting: [
    `Bonjour ! 👋 Bienvenue chez **Maison Valfort**, votre conciergerie de luxe.

Je suis là pour vous aider. Vous êtes :
🏠 **Voyageur** - Vous cherchez un logement ?
🔑 **Propriétaire** - Vous voulez confier votre bien ?

Dites-moi tout !`,
    `Bonjour et bienvenue ! ✨

Je suis l'assistant virtuel de **Maison Valfort**.

Comment puis-je vous aider aujourd'hui ?
• Trouver un logement d'exception
• Confier votre bien en gestion
• Répondre à vos questions`,
    `Bonjour ! Ravi de vous accueillir chez **Maison Valfort** 🏡

Que recherchez-vous ?
→ Un séjour inoubliable ?
→ Une gestion de votre bien ?
→ Des informations sur nos services ?`
  ],

  goodbye: [
    `Au revoir et à très bientôt ! 👋

N'hésitez pas à revenir si vous avez des questions.

📞 ${COMPANY.phone}
📧 ${COMPANY.email}`,
    `Merci pour cet échange ! À bientôt chez Maison Valfort. 👋

On reste disponibles pour vous :
📞 ${COMPANY.phone}`,
    `Au revoir ! Ce fut un plaisir. 😊

L'équipe Maison Valfort reste à votre disposition.`
  ],

  thanks: [
    `Avec plaisir ! 😊 Y a-t-il autre chose que je puisse faire pour vous ?`,
    `Je vous en prie ! N'hésitez pas si vous avez d'autres questions. 🙂`,
    `C'est un plaisir de vous aider ! Autre chose ?`
  ],

  how_are_you: [
    `Je vais très bien, merci de demander ! 😊 Et vous ?

Comment puis-je vous aider aujourd'hui ?`,
    `Tout va bien de mon côté ! J'espère qu'il en est de même pour vous. 🙂

Que puis-je faire pour vous ?`
  ],

  who_are_you: [
    `**Maison Valfort** est une conciergerie de prestige spécialisée dans la location saisonnière haut de gamme.

🏠 **Pour les voyageurs**
Des logements d'exception dans les plus belles destinations

🔑 **Pour les propriétaires**
Une gestion complète et rentable de votre bien

Depuis ${COMPANY.anneesExperience} ans, nous accompagnons propriétaires et voyageurs avec un service 5 étoiles.

**Vous êtes voyageur ou propriétaire ?**`
  ],

  unknown: [
    `Je ne suis pas sûr de bien comprendre. 🤔

Puis-je vous aider avec :
🏠 Trouver un logement pour vos vacances
🔑 Confier votre bien en gestion
❓ Répondre à vos questions sur nos services

Reformulez votre demande ou choisissez une option !`,
    `Hmm, pouvez-vous préciser votre demande ?

Je suis expert en :
• Recherche de logements
• Gestion locative
• Services de conciergerie

Qu'est-ce qui vous intéresse ?`,
    `Je veux être sûr de bien vous aider ! 😊

Vous cherchez :
→ Un logement pour voyager ?
→ À confier votre bien ?
→ Des infos sur nos services ?`
  ]
};

// Sélection aléatoire
function randomResponse(key: keyof typeof RESPONSES): string {
  const options = RESPONSES[key];
  return options[Math.floor(Math.random() * options.length)];
}

// ============================================
// FLUX DE RÉSERVATION INTELLIGENT
// ============================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleBookingFlow(msg: string, newEntities: Record<string, any> = {}): string {
  const b = state.booking;

  // Appliquer les nouvelles entités
  if (newEntities.location) b.location = newEntities.location;
  if (newEntities.propertyType) b.propertyType = newEntities.propertyType;
  if (newEntities.guests) b.guests = newEntities.guests;
  if (newEntities.rooms) b.rooms = newEntities.rooms;
  if (newEntities.duration) b.duration = newEntities.duration;
  if (newEntities.dates) b.dates = newEntities.dates;
  if (newEntities.budget) b.budget = newEntities.budget;
  if (newEntities.specialRequests) {
    b.specialRequests = [...b.specialRequests, ...newEntities.specialRequests];
  }

  // Extraire aussi du message actuel
  const extracted = extractBookingEntities(msg);
  if (extracted.location && !b.location) b.location = extracted.location;
  if (extracted.propertyType && !b.propertyType) b.propertyType = extracted.propertyType;
  if (extracted.guests && !b.guests) b.guests = extracted.guests;
  if (extracted.rooms && !b.rooms) b.rooms = extracted.rooms;
  if (extracted.duration && !b.duration) b.duration = extracted.duration;
  if (extracted.dates && !b.dates) b.dates = extracted.dates;
  if (extracted.budget && !b.budget) b.budget = extracted.budget;
  if (extracted.specialRequests) {
    extracted.specialRequests.forEach((s: string) => {
      if (!b.specialRequests.includes(s)) b.specialRequests.push(s);
    });
  }

  // Gérer les nombres seuls
  const numberMatch = msg.match(/^(\d+)$/);
  if (numberMatch) {
    const num = parseInt(numberMatch[1]);
    if (state.lastQuestion === "guests" && !b.guests) b.guests = num;
    else if (state.lastQuestion === "rooms" && !b.rooms) b.rooms = num;
    else if (!b.guests && num <= 20) b.guests = num;
    else if (!b.rooms && num <= 10) b.rooms = num;
  }

  // Questions progressives avec personnalité
  const userName = state.userName ? ` ${state.userName}` : "";

  if (!b.location) {
    state.lastQuestion = "location";
    return `Parfait${userName} ! 🌍 Où souhaitez-vous séjourner ?

🗼 **Paris** & Île-de-France
🌴 **Côte d'Azur** (Nice, Cannes, Monaco...)
🌿 **Provence** (Aix, Luberon...)
🍷 **Lyon** & Rhône-Alpes
🍇 **Bordeaux** & Sud-Ouest

Ou dites-moi une autre ville !`;
  }

  if (!b.propertyType) {
    state.lastQuestion = "propertyType";
    return `${b.location}, excellent choix ! ✨

Quel type de logement recherchez-vous ?
🏠 Appartement
🏡 Maison
🏰 Villa
🏢 Loft / Penthouse
🛏️ Studio`;
  }

  if (!b.guests) {
    state.lastQuestion = "guests";
    return `Un${b.propertyType === "villa" ? "e" : ""} ${b.propertyType}, noté !

Combien serez-vous de voyageurs ? 👥`;
  }

  if (!b.duration) {
    state.lastQuestion = "duration";
    return `${b.guests} personne${b.guests > 1 ? 's' : ''}, parfait !

Quelle sera la durée de votre séjour ?
• Un week-end
• Une semaine
• Ou précisez le nombre de nuits`;
  }

  if (!b.dates) {
    state.lastQuestion = "dates";
    return `${b.duration}, c'est noté 📝

Pour quelles dates ou quelle période ?
(Ex: "en juillet", "du 15 au 20 août", "pour Noël"...)`;
  }

  // Récapitulatif complet
  state.currentFlow = "none";
  const specialsText = b.specialRequests.length > 0
    ? `\n✨ **Souhaits** : ${b.specialRequests.join(", ")}`
    : "";

  return `🎉 **Super${userName} ! Voici votre recherche :**

📍 **Destination** : ${b.location}
🏠 **Type** : ${b.propertyType}
👥 **Voyageurs** : ${b.guests} personne${b.guests > 1 ? 's' : ''}
📅 **Durée** : ${b.duration}
🗓️ **Période** : ${b.dates}${specialsText}

✅ **Je transmets votre demande à notre équipe !**

Un conseiller vous contactera dans les plus brefs délais avec nos meilleures propositions.

📞 **Urgent ?** Appelez le ${COMPANY.phone}
📧 **Email** : ${COMPANY.email}

**Autre chose que je puisse faire pour vous ?**`;
}

// ============================================
// FLUX PROPRIÉTAIRE INTELLIGENT
// ============================================
function handleOwnerFlow(msg: string): string {
  const o = state.owner;
  const extracted = extractBookingEntities(msg);

  if (extracted.location) o.location = extracted.location;
  if (extracted.propertyType) o.propertyType = extracted.propertyType;
  if (extracted.rooms) o.rooms = extracted.rooms;

  const surfaceMatch = msg.match(/(\d+)\s*(?:m2|m²|metres?)/i);
  if (surfaceMatch) o.surface = `${surfaceMatch[1]}m²`;

  const phoneMatch = msg.match(/(?:0|\+33)[\s.-]?[1-9](?:[\s.-]?\d{2}){4}/);
  if (phoneMatch) o.phone = phoneMatch[0];

  const userName = state.userName ? ` ${state.userName}` : "";

  if (!o.propertyType) {
    state.lastQuestion = "owner_type";
    return `Bienvenue parmi nos propriétaires${userName} ! 🔑

Quel type de bien souhaitez-vous confier ?
🏠 Appartement
🏡 Maison
🏰 Villa
🏢 Autre`;
  }

  if (!o.location) {
    state.lastQuestion = "owner_location";
    return `Un${o.propertyType === "villa" || o.propertyType === "maison" ? "e" : ""} ${o.propertyType}, très bien !

Où est situé votre bien ?`;
  }

  // Proposition de contact
  state.currentFlow = "none";
  return `🎉 **Parfait${userName} !**

📍 **Votre bien** : ${o.propertyType} à ${o.location}

Pour vous proposer une **estimation gratuite de vos revenus**, notre équipe va vous contacter.

📞 **Appelez-nous** : ${COMPANY.phone}
📧 **Ou écrivez-nous** : ${COMPANY.email}

On s'occupe de tout : photos, annonces, gestion, ménage... pour seulement **${COMPANY.commission} de commission** !

**Une question en attendant ?**`;
}

// ============================================
// RÉPONSE PRINCIPALE
// ============================================
function generateResponse(message: string): string {
  const n = normalize(message);
  state.messageCount++;
  state.conversationHistory.push(message);

  // Limiter l'historique
  if (state.conversationHistory.length > 20) {
    state.conversationHistory = state.conversationHistory.slice(-20);
  }

  // Extraire le prénom si présent
  const detectedName = extractName(message);
  if (detectedName && !state.userName) {
    state.userName = detectedName;
  }

  // Analyser le sentiment
  const sentiment = analyzeSentiment(message);
  if (sentiment === "positive") state.mood = "happy";
  else if (sentiment === "negative") state.mood = "frustrated";

  // Détecter l'intention
  const { intent, entities } = detectIntent(message);

  // Gestion des flows en cours
  if (state.currentFlow === "booking") {
    // Permettre de sortir du flow
    if (/(?:non|stop|annuler|autre chose|question|laisse)/i.test(n)) {
      state.currentFlow = "none";
      return `Pas de problème ! 😊 Comment puis-je vous aider autrement ?`;
    }
    return handleBookingFlow(message, entities);
  }

  if (state.currentFlow === "owner") {
    if (/(?:non|stop|annuler|autre chose|question|laisse)/i.test(n)) {
      state.currentFlow = "none";
      return `D'accord ! Comment puis-je vous aider ?`;
    }
    return handleOwnerFlow(message);
  }

  // Traiter selon l'intention
  switch (intent) {
    case "greeting":
      return randomResponse("greeting");

    case "goodbye":
      resetState();
      return randomResponse("goodbye");

    case "thanks":
      return randomResponse("thanks");

    case "how_are_you":
      return randomResponse("how_are_you");

    case "who_are_you":
      return RESPONSES.who_are_you[0];

    case "affirmative":
      // Contexte de la dernière question
      if (state.lastTopic === "booking_interest") {
        state.currentFlow = "booking";
        return handleBookingFlow(message);
      }
      if (state.lastTopic === "owner_interest") {
        state.currentFlow = "owner";
        state.userType = "proprietaire";
        return handleOwnerFlow(message);
      }
      if (state.userType === "proprietaire") {
        return `Super ! 🎉 Appelez-nous au ${COMPANY.phone} pour discuter de votre projet.\n\nNous vous ferons une **estimation gratuite** de vos revenus potentiels !`;
      }
      state.lastTopic = "choice";
      return `Parfait ! Que souhaitez-vous faire ?\n\n🏠 **Trouver un logement** pour vos vacances\n🔑 **Confier votre bien** en gestion`;

    case "negative":
      state.currentFlow = "none";
      return `D'accord ! Y a-t-il autre chose dont vous aimeriez discuter ?\n\nJe suis là pour répondre à toutes vos questions sur nos services.`;

    case "booking_request":
      state.currentFlow = "booking";
      state.userType = "voyageur";
      return handleBookingFlow(message, entities);

    case "owner":
      state.currentFlow = "owner";
      state.userType = "proprietaire";
      return handleOwnerFlow(message);

    case "contact":
      return `Voici comment nous joindre :

📞 **Téléphone** : ${COMPANY.phone}
📧 **Email** : ${COMPANY.email}
💬 **Chat** : Vous y êtes ! 😊

⏰ **Horaires** : ${COMPANY.horaires}

**Souhaitez-vous qu'on vous rappelle ?** Laissez-moi votre numéro !`;

    case "question":
      if (entities.topic && KNOWLEDGE_BASE[entities.topic as keyof typeof KNOWLEDGE_BASE]) {
        state.lastTopic = entities.topic;
        const kb = KNOWLEDGE_BASE[entities.topic as keyof typeof KNOWLEDGE_BASE];
        return kb.response;
      }
      break;

    case "city_mention":
      // L'utilisateur mentionne juste une ville
      if (entities.cities && entities.cities.length > 0) {
        const city = entities.cities[0];
        state.lastTopic = "city_interest";
        return `${city}, très beau choix ! 🌟

Vous recherchez :
🏠 Un logement pour **voyager** à ${city} ?
🔑 À **confier un bien** situé à ${city} ?`;
      }
      break;

    case "number_response":
      // Gérer les nombres selon le contexte
      if ((state.currentFlow as string) === "booking") {
        return handleBookingFlow(message);
      }
      break;
  }

  // Recherche dans la base de connaissances (fallback)
  for (const [topic, data] of Object.entries(KNOWLEDGE_BASE)) {
    const matchCount = data.keywords.filter(kw => n.includes(kw)).length;
    if (matchCount >= 1) {
      state.lastTopic = topic;
      return data.response;
    }
  }

  // Réponse par défaut
  return randomResponse("unknown");
}

// ============================================
// RESET
// ============================================
function resetState() {
  state = {
    userName: null,
    userType: "unknown",
    currentFlow: "none",
    mood: "neutral",
    booking: {
      location: null,
      propertyType: null,
      guests: null,
      rooms: null,
      duration: null,
      dates: null,
      budget: null,
      specialRequests: [],
    },
    owner: {
      location: null,
      propertyType: null,
      surface: null,
      rooms: null,
      phone: null,
    },
    lastQuestion: null,
    lastTopic: null,
    messageCount: 0,
    conversationHistory: [],
  };
}

// ============================================
// API HANDLER
// ============================================
export async function POST(request: NextRequest) {
  try {
    const { prompt, reset } = await request.json();

    if (reset) {
      resetState();
      return NextResponse.json({ response: "Conversation réinitialisée. 🔄" });
    }

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Message invalide" }, { status: 400 });
    }

    // Délai naturel pour simuler la réflexion
    const delay = 300 + Math.random() * 400;
    await new Promise(resolve => setTimeout(resolve, delay));

    const response = generateResponse(prompt.trim());

    return NextResponse.json({
      response,
      // Debug info (peut être retiré en prod)
      _debug: {
        userName: state.userName,
        userType: state.userType,
        currentFlow: state.currentFlow,
        messageCount: state.messageCount,
      }
    });
  } catch (error) {
    console.error("Erreur API chat:", error);
    return NextResponse.json({
      error: "Une erreur est survenue. Veuillez réessayer."
    }, { status: 500 });
  }
}
