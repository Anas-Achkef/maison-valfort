/**
 * Moteur de calcul des revenus locatifs Airbnb
 *
 * Ce module implémente une logique d'estimation basée sur:
 * - Les données de marché par ville
 * - Le type et standing du bien
 * - Les équipements disponibles
 * - La capacité d'accueil
 * - La surface du bien
 *
 * TAUX D'OCCUPATION FIXE: 80%
 */

import {
  MarketData,
  getMarketData,
  getAnnualizedAveragePrice,
  standingOptions,
  equipmentOptions,
  capacityMultipliers,
  getSurfaceMultiplier,
} from './airbnb-market-data';

export interface PropertyInput {
  propertyType: 'studio' | 't2' | 't3' | 't4' | 'house' | 'villa';
  cityId: string;
  bedrooms: number;
  capacity: number;
  surface: number;
  standing: 'standard' | 'premium' | 'luxury';
  equipments: string[];
}

export interface RevenueEstimate {
  // Prix calculés
  pricePerNight: number;
  pricePerNightLowSeason: number;
  pricePerNightHighSeason: number;

  // Revenus (avec 80% d'occupation)
  monthlyRevenueBrut: number;
  yearlyRevenueBrut: number;

  // Après commission
  commissionRate: number;
  monthlyCommission: number;
  yearlyCommission: number;
  monthlyRevenueNet: number;
  yearlyRevenueNet: number;

  // Métriques de marché
  marketData: MarketData | null;
  competitorPriceRange: { min: number; max: number };
  marketPosition: 'below' | 'average' | 'above';
  occupancyRate: number;

  // Détails du calcul
  breakdown: {
    basePrice: number;
    standingMultiplier: number;
    capacityMultiplier: number;
    surfaceMultiplier: number;
    equipmentBonus: number;
    totalMultiplier: number;
  };

  // Recommandations
  recommendations: string[];
}

// Taux d'occupation FIXE à 80%
const FIXED_OCCUPANCY_RATE = 0.80;

// Taux de commission par défaut (peut être personnalisé)
const DEFAULT_COMMISSION_RATE = 0.15;

/**
 * Calcule l'estimation complète des revenus locatifs
 */
export function calculateRevenue(
  input: PropertyInput,
  commissionRate: number = DEFAULT_COMMISSION_RATE
): RevenueEstimate {
  // Récupérer les données de marché
  const marketData = getMarketData(input.cityId);

  if (!marketData) {
    // Fallback si ville non trouvée
    return createFallbackEstimate(input, commissionRate);
  }

  // 1. Prix de base selon le type de bien et la ville
  const basePrice = getAnnualizedAveragePrice(marketData, input.propertyType);

  // 2. Multiplicateur de standing
  const standingData = standingOptions.find(s => s.id === input.standing);
  const standingMultiplier = standingData?.multiplier || 1.0;

  // 3. Multiplicateur de capacité
  const cappedCapacity = Math.min(Math.max(input.capacity, 1), 12);
  const capacityMultiplier = capacityMultipliers[cappedCapacity] || 1.0;

  // 4. Multiplicateur de surface
  const surfaceMultiplier = getSurfaceMultiplier(input.surface, input.propertyType);

  // 5. Bonus équipements
  let equipmentBonus = 0;
  input.equipments.forEach(eqId => {
    const equipment = equipmentOptions.find(e => e.id === eqId);
    if (equipment) {
      equipmentBonus += equipment.priceImpact;
    }
  });

  // 6. Calcul du prix par nuit
  const totalMultiplier = standingMultiplier * capacityMultiplier * surfaceMultiplier * (1 + equipmentBonus);
  const pricePerNight = Math.round(basePrice * totalMultiplier);

  // 7. Prix saisonniers
  const pricePerNightLowSeason = Math.round(pricePerNight * marketData.seasonalMultipliers.lowSeason);
  const pricePerNightHighSeason = Math.round(pricePerNight * marketData.seasonalMultipliers.highSeason);

  // 8. Calcul des revenus avec 80% d'occupation
  const daysPerMonth = 30;
  const occupiedDaysPerMonth = daysPerMonth * FIXED_OCCUPANCY_RATE;

  const monthlyRevenueBrut = Math.round(pricePerNight * occupiedDaysPerMonth);
  const yearlyRevenueBrut = monthlyRevenueBrut * 12;

  // 9. Calcul après commission
  const monthlyCommission = Math.round(monthlyRevenueBrut * commissionRate);
  const yearlyCommission = monthlyCommission * 12;
  const monthlyRevenueNet = monthlyRevenueBrut - monthlyCommission;
  const yearlyRevenueNet = yearlyRevenueBrut - yearlyCommission;

  // 10. Analyse concurrentielle
  const basePriceMin = marketData.averagePricePerNight[input.propertyType];
  const basePriceMax = basePriceMin * 1.8; // Les meilleurs biens peuvent atteindre +80%
  const competitorPriceRange = {
    min: Math.round(basePriceMin * 0.85),
    max: Math.round(basePriceMax),
  };

  // Position sur le marché
  let marketPosition: 'below' | 'average' | 'above' = 'average';
  const midPrice = (competitorPriceRange.min + competitorPriceRange.max) / 2;
  if (pricePerNight < midPrice * 0.9) {
    marketPosition = 'below';
  } else if (pricePerNight > midPrice * 1.1) {
    marketPosition = 'above';
  }

  // 11. Générer des recommandations
  const recommendations = generateRecommendations(input, marketData, pricePerNight, competitorPriceRange);

  return {
    pricePerNight,
    pricePerNightLowSeason,
    pricePerNightHighSeason,
    monthlyRevenueBrut,
    yearlyRevenueBrut,
    commissionRate,
    monthlyCommission,
    yearlyCommission,
    monthlyRevenueNet,
    yearlyRevenueNet,
    marketData,
    competitorPriceRange,
    marketPosition,
    occupancyRate: FIXED_OCCUPANCY_RATE,
    breakdown: {
      basePrice,
      standingMultiplier,
      capacityMultiplier,
      surfaceMultiplier,
      equipmentBonus,
      totalMultiplier,
    },
    recommendations,
  };
}

/**
 * Génère des recommandations personnalisées
 */
function generateRecommendations(
  input: PropertyInput,
  marketData: MarketData,
  currentPrice: number,
  priceRange: { min: number; max: number }
): string[] {
  const recommendations: string[] = [];

  // Recommandations équipements
  const hasPool = input.equipments.includes('pool');
  const hasAircon = input.equipments.includes('aircon');
  const hasParking = input.equipments.includes('parking');

  if (!hasAircon && ['nice', 'cote-azur', 'marseille', 'provence'].includes(input.cityId)) {
    recommendations.push('La climatisation est fortement recommandée dans cette région (+8% de revenus potentiels)');
  }

  if (!hasPool && ['villa', 'house'].includes(input.propertyType) && ['nice', 'cote-azur', 'provence'].includes(input.cityId)) {
    recommendations.push('Une piscine pourrait augmenter vos revenus de 25% dans cette zone');
  }

  if (!hasParking && ['paris', 'lyon', 'bordeaux'].includes(input.cityId)) {
    recommendations.push('Un parking privé est un atout majeur en ville (+10% de revenus)');
  }

  // Recommandations standing
  if (input.standing === 'standard' && currentPrice < priceRange.max * 0.6) {
    recommendations.push('Passer au standing Premium pourrait augmenter vos revenus de 25%');
  }

  // Recommandations marché
  if (marketData.marketTrend === 'rising') {
    recommendations.push('Le marché est en croissance - bon moment pour optimiser votre annonce');
  }

  if (marketData.demandLevel === 'high' && marketData.competitionLevel === 'low') {
    recommendations.push('Forte demande et faible concurrence - potentiel d\'augmentation des tarifs');
  }

  // Limiter à 3 recommandations max
  return recommendations.slice(0, 3);
}

/**
 * Estimation de secours si données manquantes
 */
function createFallbackEstimate(
  input: PropertyInput,
  commissionRate: number
): RevenueEstimate {
  // Prix de base approximatifs
  const basePrices: Record<string, number> = {
    studio: 55,
    t2: 80,
    t3: 110,
    t4: 150,
    house: 200,
    villa: 320,
  };

  const basePrice = basePrices[input.propertyType] || 80;
  const standingData = standingOptions.find(s => s.id === input.standing);
  const standingMultiplier = standingData?.multiplier || 1.0;

  const pricePerNight = Math.round(basePrice * standingMultiplier);
  const monthlyRevenueBrut = Math.round(pricePerNight * 30 * FIXED_OCCUPANCY_RATE);
  const yearlyRevenueBrut = monthlyRevenueBrut * 12;

  const monthlyCommission = Math.round(monthlyRevenueBrut * commissionRate);
  const yearlyCommission = monthlyCommission * 12;

  return {
    pricePerNight,
    pricePerNightLowSeason: Math.round(pricePerNight * 0.8),
    pricePerNightHighSeason: Math.round(pricePerNight * 1.3),
    monthlyRevenueBrut,
    yearlyRevenueBrut,
    commissionRate,
    monthlyCommission,
    yearlyCommission,
    monthlyRevenueNet: monthlyRevenueBrut - monthlyCommission,
    yearlyRevenueNet: yearlyRevenueBrut - yearlyCommission,
    marketData: null,
    competitorPriceRange: { min: basePrice * 0.8, max: basePrice * 1.5 },
    marketPosition: 'average',
    occupancyRate: FIXED_OCCUPANCY_RATE,
    breakdown: {
      basePrice,
      standingMultiplier,
      capacityMultiplier: 1,
      surfaceMultiplier: 1,
      equipmentBonus: 0,
      totalMultiplier: standingMultiplier,
    },
    recommendations: ['Contactez-nous pour une estimation personnalisée de votre marché local'],
  };
}

/**
 * Formate un nombre en euros
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formate un pourcentage
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value * 100)}%`;
}
