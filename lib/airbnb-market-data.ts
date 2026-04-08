/**
 * Données de marché Airbnb simulées basées sur les tendances réelles
 * Ces données sont calibrées sur les moyennes observées sur Airbnb/AirDNA
 * pour différentes villes françaises et européennes.
 *
 * ARCHITECTURE ÉVOLUTIVE:
 * - Ces données peuvent être remplacées par des appels API réels (AirDNA, Mashvisor, etc.)
 * - La structure est conçue pour être compatible avec les réponses API standards
 */

export interface MarketData {
  cityId: string;
  cityName: string;
  country: string;
  // Prix moyens par nuit selon le type de bien (en euros)
  averagePricePerNight: {
    studio: number;
    t2: number;
    t3: number;
    t4: number;
    house: number;
    villa: number;
  };
  // Multiplicateurs saisonniers
  seasonalMultipliers: {
    lowSeason: number;    // Janvier-Mars
    midSeason: number;    // Avril-Juin, Septembre-Novembre
    highSeason: number;   // Juillet-Août, Décembre
  };
  // Données de marché
  marketTrend: 'rising' | 'stable' | 'declining';
  demandLevel: 'high' | 'medium' | 'low';
  competitionLevel: 'high' | 'medium' | 'low';
  averageOccupancy: number; // Taux d'occupation moyen observé
}

export interface PropertyStanding {
  id: 'standard' | 'premium' | 'luxury';
  multiplier: number;
  description: string;
}

export interface Equipment {
  id: string;
  name: string;
  priceImpact: number; // Impact en % sur le prix par nuit
  demandImpact: number; // Impact sur la demande
  category: 'essential' | 'comfort' | 'premium';
}

// Base de données des marchés (calibrée sur données réelles Airbnb 2024)
export const marketDatabase: MarketData[] = [
  {
    cityId: 'paris',
    cityName: 'Paris',
    country: 'France',
    averagePricePerNight: {
      studio: 95,
      t2: 145,
      t3: 195,
      t4: 275,
      house: 350,
      villa: 550,
    },
    seasonalMultipliers: {
      lowSeason: 0.85,
      midSeason: 1.0,
      highSeason: 1.35,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.78,
  },
  {
    cityId: 'lyon',
    cityName: 'Lyon',
    country: 'France',
    averagePricePerNight: {
      studio: 65,
      t2: 95,
      t3: 135,
      t4: 185,
      house: 245,
      villa: 380,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.25,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'medium',
    averageOccupancy: 0.72,
  },
  {
    cityId: 'marseille',
    cityName: 'Marseille',
    country: 'France',
    averagePricePerNight: {
      studio: 60,
      t2: 90,
      t3: 130,
      t4: 175,
      house: 230,
      villa: 420,
    },
    seasonalMultipliers: {
      lowSeason: 0.70,
      midSeason: 0.95,
      highSeason: 1.45,
    },
    marketTrend: 'stable',
    demandLevel: 'medium',
    competitionLevel: 'medium',
    averageOccupancy: 0.68,
  },
  {
    cityId: 'bordeaux',
    cityName: 'Bordeaux',
    country: 'France',
    averagePricePerNight: {
      studio: 70,
      t2: 105,
      t3: 150,
      t4: 210,
      house: 280,
      villa: 450,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 1.0,
      highSeason: 1.30,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'medium',
    averageOccupancy: 0.74,
  },
  {
    cityId: 'nice',
    cityName: 'Nice',
    country: 'France',
    averagePricePerNight: {
      studio: 85,
      t2: 130,
      t3: 185,
      t4: 260,
      house: 380,
      villa: 650,
    },
    seasonalMultipliers: {
      lowSeason: 0.65,
      midSeason: 0.95,
      highSeason: 1.55,
    },
    marketTrend: 'stable',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.75,
  },
  {
    cityId: 'cote-azur',
    cityName: 'Côte d\'Azur',
    country: 'France',
    averagePricePerNight: {
      studio: 90,
      t2: 140,
      t3: 200,
      t4: 290,
      house: 420,
      villa: 850,
    },
    seasonalMultipliers: {
      lowSeason: 0.60,
      midSeason: 0.90,
      highSeason: 1.65,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.72,
  },
  {
    cityId: 'alpes',
    cityName: 'Alpes (Stations)',
    country: 'France',
    averagePricePerNight: {
      studio: 80,
      t2: 125,
      t3: 180,
      t4: 260,
      house: 380,
      villa: 650,
    },
    seasonalMultipliers: {
      lowSeason: 0.55, // Hors saison ski
      midSeason: 0.85,
      highSeason: 1.75, // Saison ski
    },
    marketTrend: 'stable',
    demandLevel: 'high',
    competitionLevel: 'medium',
    averageOccupancy: 0.65,
  },
  {
    cityId: 'provence',
    cityName: 'Provence',
    country: 'France',
    averagePricePerNight: {
      studio: 65,
      t2: 100,
      t3: 145,
      t4: 200,
      house: 280,
      villa: 520,
    },
    seasonalMultipliers: {
      lowSeason: 0.60,
      midSeason: 0.95,
      highSeason: 1.50,
    },
    marketTrend: 'rising',
    demandLevel: 'medium',
    competitionLevel: 'low',
    averageOccupancy: 0.68,
  },
  {
    cityId: 'toulouse',
    cityName: 'Toulouse',
    country: 'France',
    averagePricePerNight: {
      studio: 55,
      t2: 85,
      t3: 120,
      t4: 165,
      house: 220,
      villa: 350,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.20,
    },
    marketTrend: 'stable',
    demandLevel: 'medium',
    competitionLevel: 'low',
    averageOccupancy: 0.70,
  },
  {
    cityId: 'nantes',
    cityName: 'Nantes',
    country: 'France',
    averagePricePerNight: {
      studio: 55,
      t2: 82,
      t3: 115,
      t4: 160,
      house: 210,
      villa: 340,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.25,
    },
    marketTrend: 'rising',
    demandLevel: 'medium',
    competitionLevel: 'low',
    averageOccupancy: 0.71,
  },
  {
    cityId: 'strasbourg',
    cityName: 'Strasbourg',
    country: 'France',
    averagePricePerNight: {
      studio: 60,
      t2: 90,
      t3: 125,
      t4: 175,
      house: 230,
      villa: 360,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 0.95,
      highSeason: 1.40, // Marchés de Noël
    },
    marketTrend: 'stable',
    demandLevel: 'medium',
    competitionLevel: 'medium',
    averageOccupancy: 0.69,
  },
  {
    cityId: 'other-france',
    cityName: 'Autre ville',
    country: 'France',
    averagePricePerNight: {
      studio: 50,
      t2: 75,
      t3: 105,
      t4: 145,
      house: 190,
      villa: 300,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.20,
    },
    marketTrend: 'stable',
    demandLevel: 'medium',
    competitionLevel: 'low',
    averageOccupancy: 0.65,
  },
  // Espagne
  {
    cityId: 'madrid',
    cityName: 'Madrid',
    country: 'Espagne',
    averagePricePerNight: {
      studio: 70,
      t2: 110,
      t3: 160,
      t4: 220,
      house: 300,
      villa: 480,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.30,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.75,
  },
  {
    cityId: 'barcelona',
    cityName: 'Barcelona',
    country: 'Espagne',
    averagePricePerNight: {
      studio: 85,
      t2: 130,
      t3: 185,
      t4: 260,
      house: 350,
      villa: 550,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 0.95,
      highSeason: 1.45,
    },
    marketTrend: 'stable',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.78,
  },
  {
    cityId: 'marbella',
    cityName: 'Marbella',
    country: 'Espagne',
    averagePricePerNight: {
      studio: 90,
      t2: 140,
      t3: 200,
      t4: 280,
      house: 400,
      villa: 750,
    },
    seasonalMultipliers: {
      lowSeason: 0.60,
      midSeason: 0.90,
      highSeason: 1.60,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'medium',
    averageOccupancy: 0.70,
  },
  {
    cityId: 'ibiza',
    cityName: 'Ibiza',
    country: 'Espagne',
    averagePricePerNight: {
      studio: 100,
      t2: 160,
      t3: 240,
      t4: 350,
      house: 500,
      villa: 1200,
    },
    seasonalMultipliers: {
      lowSeason: 0.45,
      midSeason: 0.85,
      highSeason: 1.85,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.65,
  },
  // Royaume-Uni
  {
    cityId: 'london',
    cityName: 'London',
    country: 'Royaume-Uni',
    averagePricePerNight: {
      studio: 120,
      t2: 180,
      t3: 260,
      t4: 380,
      house: 500,
      villa: 850,
    },
    seasonalMultipliers: {
      lowSeason: 0.85,
      midSeason: 1.0,
      highSeason: 1.30,
    },
    marketTrend: 'stable',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.80,
  },
  {
    cityId: 'manchester',
    cityName: 'Manchester',
    country: 'Royaume-Uni',
    averagePricePerNight: {
      studio: 70,
      t2: 105,
      t3: 150,
      t4: 210,
      house: 280,
      villa: 450,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.25,
    },
    marketTrend: 'rising',
    demandLevel: 'medium',
    competitionLevel: 'medium',
    averageOccupancy: 0.72,
  },
  // Émirats Arabes Unis
  {
    cityId: 'dubai',
    cityName: 'Dubai',
    country: 'Émirats',
    averagePricePerNight: {
      studio: 100,
      t2: 160,
      t3: 240,
      t4: 350,
      house: 500,
      villa: 1000,
    },
    seasonalMultipliers: {
      lowSeason: 0.70, // Été très chaud
      midSeason: 1.0,
      highSeason: 1.50, // Hiver
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.75,
  },
  {
    cityId: 'abu-dhabi',
    cityName: 'Abu Dhabi',
    country: 'Émirats',
    averagePricePerNight: {
      studio: 90,
      t2: 140,
      t3: 210,
      t4: 300,
      house: 420,
      villa: 850,
    },
    seasonalMultipliers: {
      lowSeason: 0.70,
      midSeason: 1.0,
      highSeason: 1.45,
    },
    marketTrend: 'rising',
    demandLevel: 'medium',
    competitionLevel: 'medium',
    averageOccupancy: 0.70,
  },
  // Italie
  {
    cityId: 'rome',
    cityName: 'Rome',
    country: 'Italie',
    averagePricePerNight: {
      studio: 80,
      t2: 125,
      t3: 180,
      t4: 260,
      house: 350,
      villa: 580,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 1.0,
      highSeason: 1.40,
    },
    marketTrend: 'stable',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.76,
  },
  {
    cityId: 'milan',
    cityName: 'Milan',
    country: 'Italie',
    averagePricePerNight: {
      studio: 85,
      t2: 130,
      t3: 190,
      t4: 270,
      house: 360,
      villa: 550,
    },
    seasonalMultipliers: {
      lowSeason: 0.80,
      midSeason: 1.0,
      highSeason: 1.35,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.74,
  },
  // Portugal
  {
    cityId: 'lisbon',
    cityName: 'Lisbonne',
    country: 'Portugal',
    averagePricePerNight: {
      studio: 70,
      t2: 110,
      t3: 160,
      t4: 230,
      house: 320,
      villa: 520,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 1.0,
      highSeason: 1.40,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'high',
    averageOccupancy: 0.77,
  },
  {
    cityId: 'porto',
    cityName: 'Porto',
    country: 'Portugal',
    averagePricePerNight: {
      studio: 60,
      t2: 95,
      t3: 140,
      t4: 200,
      house: 280,
      villa: 450,
    },
    seasonalMultipliers: {
      lowSeason: 0.75,
      midSeason: 1.0,
      highSeason: 1.35,
    },
    marketTrend: 'rising',
    demandLevel: 'high',
    competitionLevel: 'medium',
    averageOccupancy: 0.74,
  },
];

// Standings et leur impact sur le prix
export const standingOptions: PropertyStanding[] = [
  {
    id: 'standard',
    multiplier: 1.0,
    description: 'Équipement fonctionnel, décoration simple',
  },
  {
    id: 'premium',
    multiplier: 1.25,
    description: 'Équipement de qualité, décoration soignée',
  },
  {
    id: 'luxury',
    multiplier: 1.55,
    description: 'Équipement haut de gamme, design d\'exception',
  },
];

// Équipements et leur impact sur le prix/demande
export const equipmentOptions: Equipment[] = [
  // Essentiels
  { id: 'wifi', name: 'WiFi haut débit', priceImpact: 0, demandImpact: 0.05, category: 'essential' },
  { id: 'kitchen', name: 'Cuisine équipée', priceImpact: 0.05, demandImpact: 0.08, category: 'essential' },
  { id: 'washer', name: 'Lave-linge', priceImpact: 0.03, demandImpact: 0.05, category: 'essential' },
  { id: 'heating', name: 'Chauffage', priceImpact: 0, demandImpact: 0.03, category: 'essential' },

  // Confort
  { id: 'aircon', name: 'Climatisation', priceImpact: 0.08, demandImpact: 0.10, category: 'comfort' },
  { id: 'parking', name: 'Parking privé', priceImpact: 0.10, demandImpact: 0.12, category: 'comfort' },
  { id: 'balcony', name: 'Balcon/Terrasse', priceImpact: 0.07, demandImpact: 0.08, category: 'comfort' },
  { id: 'tv', name: 'TV écran plat', priceImpact: 0.02, demandImpact: 0.03, category: 'comfort' },
  { id: 'dishwasher', name: 'Lave-vaisselle', priceImpact: 0.03, demandImpact: 0.04, category: 'comfort' },

  // Premium
  { id: 'pool', name: 'Piscine', priceImpact: 0.25, demandImpact: 0.20, category: 'premium' },
  { id: 'jacuzzi', name: 'Jacuzzi/Spa', priceImpact: 0.18, demandImpact: 0.15, category: 'premium' },
  { id: 'garden', name: 'Jardin privé', priceImpact: 0.12, demandImpact: 0.10, category: 'premium' },
  { id: 'sea_view', name: 'Vue mer', priceImpact: 0.20, demandImpact: 0.18, category: 'premium' },
  { id: 'gym', name: 'Salle de sport', priceImpact: 0.08, demandImpact: 0.06, category: 'premium' },
];

// Impact de la capacité sur le prix
export const capacityMultipliers: Record<number, number> = {
  1: 0.85,
  2: 1.0,
  3: 1.08,
  4: 1.15,
  5: 1.22,
  6: 1.30,
  7: 1.38,
  8: 1.45,
  9: 1.52,
  10: 1.60,
  11: 1.65,
  12: 1.70,
};

// Impact de la surface sur le prix (bonus/malus par rapport à la moyenne)
export const getSurfaceMultiplier = (surface: number, propertyType: string): number => {
  const averageSurfaces: Record<string, number> = {
    studio: 25,
    t2: 45,
    t3: 70,
    t4: 95,
    house: 120,
    villa: 200,
  };

  const average = averageSurfaces[propertyType] || 60;
  const ratio = surface / average;

  // Bonus/malus plafonné à +/- 20%
  if (ratio > 1) {
    return Math.min(1 + (ratio - 1) * 0.15, 1.20);
  } else {
    return Math.max(1 - (1 - ratio) * 0.15, 0.80);
  }
};

// Fonction utilitaire pour obtenir les données d'une ville
export const getMarketData = (cityId: string): MarketData | undefined => {
  return marketDatabase.find(m => m.cityId === cityId);
};

// Fonction pour calculer le prix moyen annualisé (tenant compte des saisons)
export const getAnnualizedAveragePrice = (marketData: MarketData, propertyType: keyof MarketData['averagePricePerNight']): number => {
  const basePrice = marketData.averagePricePerNight[propertyType];
  const { lowSeason, midSeason, highSeason } = marketData.seasonalMultipliers;

  // Répartition approximative: 3 mois basse saison, 6 mois moyenne, 3 mois haute
  const weightedAverage = (basePrice * lowSeason * 3 + basePrice * midSeason * 6 + basePrice * highSeason * 3) / 12;

  return Math.round(weightedAverage);
};
