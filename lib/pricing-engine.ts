/**
 * MOTEUR DE TARIFICATION DYNAMIQUE AIRBNB-LIKE
 *
 * Ce module implémente une logique de tarification sophistiquée
 * basée sur les meilleures pratiques du marché Airbnb.
 *
 * ARCHITECTURE PRÊTE POUR API EXTERNE:
 * - Les fonctions mock peuvent être remplacées par des appels API réels
 * - Compatible avec AirDNA, Mashvisor, PriceLabs, etc.
 */

import {
  MarketData,
  getMarketData,
  equipmentOptions,
  standingOptions,
} from './airbnb-market-data';

// ============================================================================
// TYPES
// ============================================================================

export interface PricingInput {
  propertyType: 'studio' | 't2' | 't3' | 't4' | 'house' | 'villa';
  cityId: string;
  bedrooms: number;
  capacity: number;
  surface: number;
  standing: 'standard' | 'premium' | 'luxury';
  equipments: string[];
}

export interface DynamicPricing {
  basePrice: number;
  adjustedPrice: number;
  weekendPrice: number;
  weekdayPrice: number;
  seasonalPrices: {
    january: number;
    february: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
  };
  specialEventPrices: {
    newYear: number;
    valentines: number;
    easter: number;
    summer: number;
    christmas: number;
  };
  priceBreakdown: PriceBreakdown;
  competitorAnalysis: CompetitorAnalysis;
  optimizationSuggestions: OptimizationSuggestion[];
}

export interface PriceBreakdown {
  baseMarketPrice: number;
  standingAdjustment: number;
  capacityAdjustment: number;
  surfaceAdjustment: number;
  equipmentBonus: number;
  locationPremium: number;
  demandMultiplier: number;
  finalPrice: number;
}

export interface CompetitorAnalysis {
  averageCompetitorPrice: number;
  pricePosition: 'below' | 'average' | 'above' | 'premium';
  percentileRank: number;
  similarListingsCount: number;
  priceRange: { min: number; max: number };
}

export interface OptimizationSuggestion {
  type: 'equipment' | 'standing' | 'pricing' | 'description' | 'photos';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  potentialRevenueLift: number; // En pourcentage
  estimatedCost?: number;
  roi?: number; // Return on investment en mois
}

// ============================================================================
// DONNÉES DE RÉFÉRENCE AVANCÉES
// ============================================================================

// Coefficients de demande par jour de la semaine
// Utilisé pour le calcul des prix weekend/weekday
export const weekdayDemandCoefficients = {
  monday: 0.85,
  tuesday: 0.85,
  wednesday: 0.90,
  thursday: 0.95,
  friday: 1.15,
  saturday: 1.25,
  sunday: 1.05,
};

// Coefficients mensuels par type de destination
const monthlyCoefficients: Record<string, Record<string, number>> = {
  // Villes d'affaires (Paris, Lyon, etc.)
  business: {
    january: 0.75, february: 0.80, march: 0.95, april: 1.00,
    may: 1.05, june: 1.10, july: 0.85, august: 0.70,
    september: 1.10, october: 1.05, november: 0.95, december: 0.90,
  },
  // Destinations balnéaires (Côte d'Azur, Nice, etc.)
  coastal: {
    january: 0.50, february: 0.55, march: 0.65, april: 0.80,
    may: 1.00, june: 1.30, july: 1.60, august: 1.70,
    september: 1.20, october: 0.85, november: 0.55, december: 0.60,
  },
  // Destinations montagne
  mountain: {
    january: 1.50, february: 1.60, march: 1.40, april: 0.70,
    may: 0.60, june: 0.80, july: 1.10, august: 1.20,
    september: 0.75, october: 0.65, november: 0.55, december: 1.40,
  },
  // Destinations rurales/campagne
  rural: {
    january: 0.60, february: 0.65, march: 0.75, april: 0.90,
    may: 1.05, june: 1.15, july: 1.30, august: 1.35,
    september: 1.10, october: 0.95, november: 0.70, december: 0.80,
  },
};

// Catégorisation des villes par type de destination
const cityDestinationType: Record<string, keyof typeof monthlyCoefficients> = {
  paris: 'business',
  lyon: 'business',
  marseille: 'coastal',
  bordeaux: 'business',
  nice: 'coastal',
  'cote-azur': 'coastal',
  alpes: 'mountain',
  provence: 'rural',
  toulouse: 'business',
  nantes: 'business',
  strasbourg: 'business',
  other: 'rural',
};

// Événements spéciaux et leur impact
const specialEvents = {
  newYear: { months: [12, 1], multiplier: 1.8 },
  valentines: { months: [2], multiplier: 1.3 },
  easter: { months: [3, 4], multiplier: 1.25 },
  summer: { months: [7, 8], multiplier: 1.5 },
  christmas: { months: [12], multiplier: 1.6 },
};

// ============================================================================
// FONCTIONS PRINCIPALES
// ============================================================================

/**
 * Calcule la tarification dynamique complète pour un bien
 */
export function calculateDynamicPricing(input: PricingInput): DynamicPricing {
  const marketData = getMarketData(input.cityId);

  if (!marketData) {
    throw new Error(`Market data not found for city: ${input.cityId}`);
  }

  // 1. Calculer le breakdown du prix
  const breakdown = calculatePriceBreakdown(input, marketData);

  // 2. Prix de base ajusté
  const basePrice = breakdown.finalPrice;

  // 3. Calculer les prix par jour de semaine
  const weekendPrice = Math.round(basePrice * 1.20);
  const weekdayPrice = Math.round(basePrice * 0.90);

  // 4. Calculer les prix mensuels
  const destinationType = cityDestinationType[input.cityId] || 'rural';
  const monthCoeffs = monthlyCoefficients[destinationType];

  const seasonalPrices = {
    january: Math.round(basePrice * monthCoeffs.january),
    february: Math.round(basePrice * monthCoeffs.february),
    march: Math.round(basePrice * monthCoeffs.march),
    april: Math.round(basePrice * monthCoeffs.april),
    may: Math.round(basePrice * monthCoeffs.may),
    june: Math.round(basePrice * monthCoeffs.june),
    july: Math.round(basePrice * monthCoeffs.july),
    august: Math.round(basePrice * monthCoeffs.august),
    september: Math.round(basePrice * monthCoeffs.september),
    october: Math.round(basePrice * monthCoeffs.october),
    november: Math.round(basePrice * monthCoeffs.november),
    december: Math.round(basePrice * monthCoeffs.december),
  };

  // 5. Prix événements spéciaux
  const specialEventPrices = {
    newYear: Math.round(basePrice * specialEvents.newYear.multiplier),
    valentines: Math.round(basePrice * specialEvents.valentines.multiplier),
    easter: Math.round(basePrice * specialEvents.easter.multiplier),
    summer: Math.round(basePrice * specialEvents.summer.multiplier),
    christmas: Math.round(basePrice * specialEvents.christmas.multiplier),
  };

  // 6. Analyse concurrentielle
  const competitorAnalysis = analyzeCompetitors(input, marketData, basePrice);

  // 7. Suggestions d'optimisation
  const optimizationSuggestions = generateOptimizationSuggestions(input, marketData, basePrice);

  return {
    basePrice,
    adjustedPrice: basePrice,
    weekendPrice,
    weekdayPrice,
    seasonalPrices,
    specialEventPrices,
    priceBreakdown: breakdown,
    competitorAnalysis,
    optimizationSuggestions,
  };
}

/**
 * Calcule le détail du prix
 */
function calculatePriceBreakdown(input: PricingInput, marketData: MarketData): PriceBreakdown {
  // Prix de base du marché
  const baseMarketPrice = marketData.averagePricePerNight[input.propertyType];

  // Ajustement standing
  const standingData = standingOptions.find(s => s.id === input.standing);
  const standingMultiplier = standingData?.multiplier || 1.0;
  const standingAdjustment = baseMarketPrice * (standingMultiplier - 1);

  // Ajustement capacité (prix par voyageur supplémentaire)
  const baseCapacity = getBaseCapacity(input.propertyType);
  const extraGuests = Math.max(0, input.capacity - baseCapacity);
  const capacityAdjustment = extraGuests * 8; // 8€ par voyageur supplémentaire

  // Ajustement surface
  const averageSurface = getAverageSurface(input.propertyType);
  const surfaceRatio = input.surface / averageSurface;
  const surfaceAdjustment = baseMarketPrice * (Math.min(Math.max(surfaceRatio - 1, -0.2), 0.2) * 0.5);

  // Bonus équipements
  let equipmentBonus = 0;
  input.equipments.forEach(eqId => {
    const equipment = equipmentOptions.find(e => e.id === eqId);
    if (equipment) {
      equipmentBonus += baseMarketPrice * equipment.priceImpact;
    }
  });

  // Premium de localisation (basé sur la demande)
  const locationPremium = marketData.demandLevel === 'high' ? baseMarketPrice * 0.10 :
                          marketData.demandLevel === 'medium' ? baseMarketPrice * 0.05 : 0;

  // Multiplicateur de demande (basé sur la concurrence)
  const demandMultiplier = marketData.competitionLevel === 'low' ? 1.10 :
                           marketData.competitionLevel === 'medium' ? 1.0 : 0.95;

  // Prix final
  const subtotal = baseMarketPrice + standingAdjustment + capacityAdjustment + surfaceAdjustment + equipmentBonus + locationPremium;
  const finalPrice = Math.round(subtotal * demandMultiplier);

  return {
    baseMarketPrice,
    standingAdjustment: Math.round(standingAdjustment),
    capacityAdjustment: Math.round(capacityAdjustment),
    surfaceAdjustment: Math.round(surfaceAdjustment),
    equipmentBonus: Math.round(equipmentBonus),
    locationPremium: Math.round(locationPremium),
    demandMultiplier,
    finalPrice,
  };
}

/**
 * Analyse la position concurrentielle
 */
function analyzeCompetitors(input: PricingInput, marketData: MarketData, currentPrice: number): CompetitorAnalysis {
  const basePrice = marketData.averagePricePerNight[input.propertyType];

  // Simuler une fourchette de prix concurrents
  const minPrice = Math.round(basePrice * 0.70);
  const maxPrice = Math.round(basePrice * 1.80);
  const avgPrice = Math.round((minPrice + maxPrice) / 2);

  // Déterminer la position
  let position: CompetitorAnalysis['pricePosition'] = 'average';
  let percentile = 50;

  if (currentPrice < avgPrice * 0.85) {
    position = 'below';
    percentile = 25;
  } else if (currentPrice > avgPrice * 1.15 && currentPrice <= avgPrice * 1.40) {
    position = 'above';
    percentile = 75;
  } else if (currentPrice > avgPrice * 1.40) {
    position = 'premium';
    percentile = 90;
  }

  // Simuler le nombre de listings similaires
  const similarListings = Math.round(50 + Math.random() * 150);

  return {
    averageCompetitorPrice: avgPrice,
    pricePosition: position,
    percentileRank: percentile,
    similarListingsCount: similarListings,
    priceRange: { min: minPrice, max: maxPrice },
  };
}

/**
 * Génère des suggestions d'optimisation personnalisées
 */
function generateOptimizationSuggestions(
  input: PricingInput,
  marketData: MarketData,
  currentPrice: number
): OptimizationSuggestion[] {
  const suggestions: OptimizationSuggestion[] = [];

  // Suggestion équipements manquants à fort impact
  const highImpactEquipments = equipmentOptions.filter(eq =>
    !input.equipments.includes(eq.id) && eq.priceImpact >= 0.10
  );

  highImpactEquipments.forEach(eq => {
    suggestions.push({
      type: 'equipment',
      priority: eq.priceImpact >= 0.20 ? 'high' : 'medium',
      title: `Ajouter ${eq.name}`,
      description: `L'ajout de ${eq.name.toLowerCase()} peut augmenter votre prix de ${Math.round(eq.priceImpact * 100)}%`,
      potentialRevenueLift: eq.priceImpact * 100,
      estimatedCost: getEquipmentCost(eq.id),
      roi: Math.round(getEquipmentCost(eq.id) / (currentPrice * 30 * 0.8 * eq.priceImpact)),
    });
  });

  // Suggestion standing
  if (input.standing === 'standard') {
    suggestions.push({
      type: 'standing',
      priority: 'high',
      title: 'Passer au standing Premium',
      description: 'Une décoration soignée et des équipements de qualité peuvent justifier un prix 25% plus élevé',
      potentialRevenueLift: 25,
      estimatedCost: 3000,
      roi: 4,
    });
  } else if (input.standing === 'premium') {
    suggestions.push({
      type: 'standing',
      priority: 'medium',
      title: 'Viser le standing Luxe',
      description: 'Un positionnement haut de gamme permet d\'atteindre une clientèle premium (+55%)',
      potentialRevenueLift: 30,
      estimatedCost: 8000,
      roi: 6,
    });
  }

  // Suggestion photos professionnelles
  suggestions.push({
    type: 'photos',
    priority: 'high',
    title: 'Photos professionnelles',
    description: 'Des photos de qualité augmentent les réservations de 40% en moyenne',
    potentialRevenueLift: 15,
    estimatedCost: 300,
    roi: 1,
  });

  // Suggestion description
  suggestions.push({
    type: 'description',
    priority: 'medium',
    title: 'Optimiser la description',
    description: 'Une description attractive avec mots-clés pertinents améliore le référencement',
    potentialRevenueLift: 8,
    estimatedCost: 0,
  });

  // Trier par priorité et limiter
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return suggestions
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, 5);
}

// ============================================================================
// FONCTIONS UTILITAIRES
// ============================================================================

function getBaseCapacity(propertyType: string): number {
  const capacities: Record<string, number> = {
    studio: 2, t2: 3, t3: 5, t4: 7, house: 8, villa: 10,
  };
  return capacities[propertyType] || 4;
}

function getAverageSurface(propertyType: string): number {
  const surfaces: Record<string, number> = {
    studio: 25, t2: 45, t3: 70, t4: 95, house: 120, villa: 200,
  };
  return surfaces[propertyType] || 60;
}

function getEquipmentCost(equipmentId: string): number {
  const costs: Record<string, number> = {
    pool: 25000,
    jacuzzi: 8000,
    garden: 5000,
    sea_view: 0, // Non modifiable
    gym: 3000,
    aircon: 2500,
    parking: 0, // Dépend de l'immeuble
    balcony: 0, // Non modifiable
    dishwasher: 500,
    washer: 400,
    tv: 300,
    wifi: 50,
    kitchen: 2000,
    heating: 1500,
  };
  return costs[equipmentId] || 500;
}

/**
 * Calcule le revenu annuel optimisé avec tarification dynamique
 */
export function calculateOptimizedAnnualRevenue(pricing: DynamicPricing): {
  conservative: number;
  optimized: number;
  aggressive: number;
} {
  const occupancyRates = {
    conservative: 0.65,
    optimized: 0.80,
    aggressive: 0.90,
  };

  // Calculer le prix moyen pondéré par mois
  const monthlyPrices = Object.values(pricing.seasonalPrices);
  const avgMonthlyPrice = monthlyPrices.reduce((a, b) => a + b, 0) / 12;

  // Appliquer le mix weekday/weekend (environ 30% weekends)
  const weightedAvgPrice = avgMonthlyPrice * 0.7 + pricing.weekendPrice * 0.3 * (avgMonthlyPrice / pricing.basePrice);

  return {
    conservative: Math.round(weightedAvgPrice * 365 * occupancyRates.conservative),
    optimized: Math.round(weightedAvgPrice * 365 * occupancyRates.optimized),
    aggressive: Math.round(weightedAvgPrice * 365 * occupancyRates.aggressive),
  };
}

// ============================================================================
// INTERFACE API MOCK (à remplacer par API réelle)
// ============================================================================

/**
 * MOCK: Récupère les données de marché en temps réel
 * À remplacer par un appel AirDNA/Mashvisor
 */
export async function fetchRealTimeMarketData(cityId: string): Promise<MarketData | null> {
  // Simuler un délai réseau
  await new Promise(resolve => setTimeout(resolve, 500));

  // Pour l'instant, retourne les données locales
  return getMarketData(cityId) || null;
}

/**
 * MOCK: Récupère les listings concurrents
 * À remplacer par un appel API réel
 */
export async function fetchCompetitorListings(
  cityId: string,
  propertyType: string
): Promise<{ count: number; avgPrice: number; listings: unknown[] }> {
  // Simuler un délai réseau
  await new Promise(resolve => setTimeout(resolve, 800));

  const marketData = getMarketData(cityId);
  if (!marketData) {
    return { count: 0, avgPrice: 0, listings: [] };
  }

  const basePrice = marketData.averagePricePerNight[propertyType as keyof typeof marketData.averagePricePerNight];

  return {
    count: Math.round(50 + Math.random() * 150),
    avgPrice: basePrice,
    listings: [], // Serait rempli avec de vraies données
  };
}
