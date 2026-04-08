/**
 * Hook personnalisé pour l'estimation des revenus locatifs
 *
 * Ce hook encapsule toute la logique de calcul et d'analyse
 * pour une utilisation simple dans les composants React.
 *
 * @example
 * const { estimate, updateProperty, isCalculating } = useRevenueEstimator();
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  calculateRevenue,
  PropertyInput,
  RevenueEstimate,
} from '@/lib/revenue-calculator';
import {
  marketDatabase,
  equipmentOptions,
  standingOptions,
  MarketData,
} from '@/lib/airbnb-market-data';

// Types d'export pour les consommateurs du hook
export type PropertyType = PropertyInput['propertyType'];
export type StandingType = PropertyInput['standing'];

export interface UseRevenueEstimatorOptions {
  initialPropertyType?: PropertyType;
  initialCityId?: string;
  initialStanding?: StandingType;
  initialEquipments?: string[];
  commissionRate?: number;
  debounceMs?: number;
}

export interface UseRevenueEstimatorReturn {
  // État du formulaire
  propertyType: PropertyType;
  cityId: string;
  bedrooms: number;
  capacity: number;
  surface: number;
  standing: StandingType;
  equipments: string[];
  commissionRate: number;

  // Setters
  setPropertyType: (type: PropertyType) => void;
  setCityId: (id: string) => void;
  setBedrooms: (bedrooms: number) => void;
  setCapacity: (capacity: number) => void;
  setSurface: (surface: number) => void;
  setStanding: (standing: StandingType) => void;
  setEquipments: (equipments: string[]) => void;
  toggleEquipment: (equipmentId: string) => void;
  setCommissionRate: (rate: number) => void;

  // Résultats
  estimate: RevenueEstimate | null;
  isCalculating: boolean;

  // Données de référence
  availableCities: MarketData[];
  availableEquipments: typeof equipmentOptions;
  availableStandings: typeof standingOptions;

  // Utilitaires
  resetToDefaults: () => void;
  getMarketInsights: () => MarketInsights | null;
}

export interface MarketInsights {
  cityName: string;
  marketTrend: string;
  demandLevel: string;
  competitionLevel: string;
  averageOccupancy: number;
  seasonalVariation: {
    lowSeasonDiscount: number;
    highSeasonPremium: number;
  };
  recommendations: string[];
  potentialGrowth: number;
}

// Configurations par défaut selon le type de bien
const propertyDefaults: Record<PropertyType, { bedrooms: number; capacity: number; surface: number }> = {
  studio: { bedrooms: 0, capacity: 2, surface: 25 },
  t2: { bedrooms: 1, capacity: 3, surface: 45 },
  t3: { bedrooms: 2, capacity: 5, surface: 70 },
  t4: { bedrooms: 3, capacity: 7, surface: 95 },
  house: { bedrooms: 4, capacity: 8, surface: 120 },
  villa: { bedrooms: 5, capacity: 10, surface: 200 },
};

export function useRevenueEstimator(options: UseRevenueEstimatorOptions = {}): UseRevenueEstimatorReturn {
  const {
    initialPropertyType = 't2',
    initialCityId = 'paris',
    initialStanding = 'standard',
    initialEquipments = ['wifi', 'kitchen', 'heating'],
    commissionRate: initialCommissionRate = 0.15,
    debounceMs = 300,
  } = options;

  // État du formulaire
  const [propertyType, setPropertyTypeState] = useState<PropertyType>(initialPropertyType);
  const [cityId, setCityId] = useState(initialCityId);
  const [bedrooms, setBedrooms] = useState(propertyDefaults[initialPropertyType].bedrooms);
  const [capacity, setCapacity] = useState(propertyDefaults[initialPropertyType].capacity);
  const [surface, setSurface] = useState(propertyDefaults[initialPropertyType].surface);
  const [standing, setStanding] = useState<StandingType>(initialStanding);
  const [equipments, setEquipments] = useState<string[]>(initialEquipments);
  const [commissionRate, setCommissionRate] = useState(initialCommissionRate);

  // État des résultats
  const [estimate, setEstimate] = useState<RevenueEstimate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Setter pour le type de bien avec mise à jour automatique des valeurs par défaut
  const setPropertyType = useCallback((type: PropertyType) => {
    setPropertyTypeState(type);
    const defaults = propertyDefaults[type];
    setBedrooms(defaults.bedrooms);
    setCapacity(defaults.capacity);
    setSurface(defaults.surface);
  }, []);

  // Toggle un équipement
  const toggleEquipment = useCallback((equipmentId: string) => {
    setEquipments(prev =>
      prev.includes(equipmentId)
        ? prev.filter(e => e !== equipmentId)
        : [...prev, equipmentId]
    );
  }, []);

  // Reset aux valeurs par défaut
  const resetToDefaults = useCallback(() => {
    setPropertyType(initialPropertyType);
    setCityId(initialCityId);
    setStanding(initialStanding);
    setEquipments(initialEquipments);
    setCommissionRate(initialCommissionRate);
  }, [initialPropertyType, initialCityId, initialStanding, initialEquipments, initialCommissionRate, setPropertyType]);

  // Calcul de l'estimation avec debounce
  useEffect(() => {
    setIsCalculating(true);

    const timer = setTimeout(() => {
      const input: PropertyInput = {
        propertyType,
        cityId,
        bedrooms,
        capacity,
        surface,
        standing,
        equipments,
      };

      const result = calculateRevenue(input, commissionRate);
      setEstimate(result);
      setIsCalculating(false);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [propertyType, cityId, bedrooms, capacity, surface, standing, equipments, commissionRate, debounceMs]);

  // Fonction pour obtenir des insights de marché
  const getMarketInsights = useCallback((): MarketInsights | null => {
    if (!estimate?.marketData) return null;

    const { marketData } = estimate;
    const { seasonalMultipliers } = marketData;

    return {
      cityName: marketData.cityName,
      marketTrend: marketData.marketTrend,
      demandLevel: marketData.demandLevel,
      competitionLevel: marketData.competitionLevel,
      averageOccupancy: marketData.averageOccupancy,
      seasonalVariation: {
        lowSeasonDiscount: Math.round((1 - seasonalMultipliers.lowSeason) * 100),
        highSeasonPremium: Math.round((seasonalMultipliers.highSeason - 1) * 100),
      },
      recommendations: estimate.recommendations,
      potentialGrowth: marketData.marketTrend === 'rising' ? 10 : marketData.marketTrend === 'stable' ? 3 : -5,
    };
  }, [estimate]);

  // Données de référence mémorisées
  const availableCities = useMemo(() => marketDatabase, []);
  const availableEquipments = useMemo(() => equipmentOptions, []);
  const availableStandings = useMemo(() => standingOptions, []);

  return {
    // État
    propertyType,
    cityId,
    bedrooms,
    capacity,
    surface,
    standing,
    equipments,
    commissionRate,

    // Setters
    setPropertyType,
    setCityId,
    setBedrooms,
    setCapacity,
    setSurface,
    setStanding,
    setEquipments,
    toggleEquipment,
    setCommissionRate,

    // Résultats
    estimate,
    isCalculating,

    // Données de référence
    availableCities,
    availableEquipments,
    availableStandings,

    // Utilitaires
    resetToDefaults,
    getMarketInsights,
  };
}

export default useRevenueEstimator;
