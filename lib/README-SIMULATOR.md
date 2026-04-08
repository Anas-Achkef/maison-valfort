# Simulateur de Revenus Locatifs Airbnb

## 📋 Vue d'ensemble

Ce simulateur intelligent estime les revenus locatifs basés sur les données du marché Airbnb, avec un **taux d'occupation fixe de 80%**.

## 🏗️ Architecture

```
lib/
├── airbnb-market-data.ts   # Base de données marchés (12 villes FR)
├── revenue-calculator.ts    # Moteur de calcul principal
├── pricing-engine.ts        # Tarification dynamique avancée
└── README-SIMULATOR.md      # Cette documentation

hooks/
└── useRevenueEstimator.ts   # Hook React personnalisé

components/
└── RevenueSimulator.tsx     # Composant UI
```

## 🔢 Formule de calcul

```
Prix/nuit = Prix_base_ville × Standing × Capacité × Surface × (1 + Équipements)

Revenu mensuel = Prix/nuit × 30 jours × 80%
Revenu annuel = Revenu mensuel × 12
Revenu net = Revenu brut - Commission
```

## 📊 Données de marché

### Villes disponibles

| Ville | Prix Studio | Prix T2 | Prix Villa | Tendance |
|-------|-------------|---------|------------|----------|
| Paris | 95€ | 145€ | 550€ | ↗️ Hausse |
| Lyon | 65€ | 95€ | 380€ | ↗️ Hausse |
| Nice | 85€ | 130€ | 650€ | ➡️ Stable |
| Côte d'Azur | 90€ | 140€ | 850€ | ↗️ Hausse |
| Alpes | 80€ | 125€ | 650€ | ➡️ Stable |
| Bordeaux | 70€ | 105€ | 450€ | ↗️ Hausse |
| Marseille | 60€ | 90€ | 420€ | ➡️ Stable |
| Provence | 65€ | 100€ | 520€ | ↗️ Hausse |
| Toulouse | 55€ | 85€ | 350€ | ➡️ Stable |
| Nantes | 55€ | 82€ | 340€ | ↗️ Hausse |
| Strasbourg | 60€ | 90€ | 360€ | ➡️ Stable |

### Multiplicateurs de standing

| Standing | Multiplicateur | Description |
|----------|---------------|-------------|
| Standard | ×1.00 | Équipement fonctionnel |
| Premium | ×1.25 | Qualité et décoration soignée |
| Luxe | ×1.55 | Haut de gamme, design d'exception |

### Équipements et impact

| Équipement | Impact Prix | Catégorie |
|------------|-------------|-----------|
| Piscine | +25% | Premium |
| Vue mer | +20% | Premium |
| Jacuzzi | +18% | Premium |
| Jardin | +12% | Premium |
| Parking | +10% | Confort |
| Climatisation | +8% | Confort |
| Balcon | +7% | Confort |
| Cuisine équipée | +5% | Essentiel |

## 🚀 Utilisation

### Avec le Hook (recommandé)

```tsx
import { useRevenueEstimator } from '@/hooks/useRevenueEstimator';

function MyComponent() {
  const {
    estimate,
    setPropertyType,
    setCityId,
    toggleEquipment,
    isCalculating,
  } = useRevenueEstimator({
    initialPropertyType: 't2',
    initialCityId: 'paris',
  });

  return (
    <div>
      {estimate && (
        <>
          <p>Prix/nuit: {estimate.pricePerNight}€</p>
          <p>Revenu mensuel: {estimate.monthlyRevenueBrut}€</p>
        </>
      )}
    </div>
  );
}
```

### Appel direct du calculateur

```tsx
import { calculateRevenue, PropertyInput } from '@/lib/revenue-calculator';

const input: PropertyInput = {
  propertyType: 't3',
  cityId: 'paris',
  bedrooms: 2,
  capacity: 5,
  surface: 70,
  standing: 'premium',
  equipments: ['wifi', 'aircon', 'parking'],
};

const estimate = calculateRevenue(input, 0.15); // 15% commission
console.log(estimate.monthlyRevenueNet); // Revenu net mensuel
```

### Tarification dynamique avancée

```tsx
import { calculateDynamicPricing } from '@/lib/pricing-engine';

const pricing = calculateDynamicPricing({
  propertyType: 'villa',
  cityId: 'cote-azur',
  bedrooms: 5,
  capacity: 10,
  surface: 200,
  standing: 'luxury',
  equipments: ['pool', 'sea_view', 'jacuzzi'],
});

console.log(pricing.seasonalPrices.july);  // Prix haute saison
console.log(pricing.specialEventPrices.summer); // Prix été
console.log(pricing.optimizationSuggestions); // Conseils
```

## 🔌 Connexion API externe

### Architecture prête pour AirDNA/Mashvisor

Le système est conçu pour être facilement connecté à une API externe :

```tsx
// lib/airbnb-market-data.ts

// Remplacer cette fonction par un appel API réel
export const getMarketData = async (cityId: string): Promise<MarketData> => {
  // AVANT (données locales)
  // return marketDatabase.find(m => m.cityId === cityId);

  // APRÈS (API réelle)
  const response = await fetch(`https://api.airdna.co/v1/market/${cityId}`);
  const data = await response.json();
  return transformAirDNAData(data);
};
```

### Endpoints API suggérés

| Service | Usage | URL |
|---------|-------|-----|
| AirDNA | Données marché | api.airdna.co |
| Mashvisor | Analytics | api.mashvisor.com |
| PriceLabs | Pricing dynamique | pricelabs.co/api |

## 📱 Responsive Design

Le composant est optimisé pour :
- Desktop (1024px+)
- Tablette (768px - 1023px)
- Mobile (< 768px)

## 🎨 Personnalisation

### Couleurs Tailwind utilisées

```css
/* tailwind.config.ts */
colors: {
  bordeaux: '#6D0303',
  blanc: '#FFFFFF',
  noir: '#1A1A1A',
  creme: '#F5F0EB',
  or: '#D4AF37',
}
```

### Animations

- Compteurs animés (count-up)
- Transitions Framer Motion
- Effets de hover

## 📈 Conversion Business

### Fonctionnalités incluses

1. **CTA Principal** : "Obtenir une estimation personnalisée"
2. **Analyse de marché** : Tendance, demande, concurrence
3. **Recommandations** : Suggestions d'amélioration personnalisées
4. **Prix saisonniers** : Basse/haute saison visibles

### Intégration tracking (à ajouter)

```tsx
// Exemple avec Google Analytics
const handleCTAClick = () => {
  gtag('event', 'simulator_cta_click', {
    property_type: propertyType,
    city: cityId,
    estimated_revenue: estimate?.monthlyRevenueNet,
  });
};
```

## 🧪 Tests

```bash
# Exécuter les tests
npm run test

# Tests à écrire
- calculateRevenue() avec différents inputs
- useRevenueEstimator hook
- Composant RevenueSimulator
```

## 📝 Hypothèses utilisées

1. **Taux d'occupation** : 80% fixe (standard marché optimisé)
2. **Prix moyens** : Calibrés sur données Airbnb 2024
3. **Saisonnalité** : 3 mois haute, 3 mois basse, 6 mois moyenne
4. **Commission** : 15% par défaut (ajustable)

## 🔄 Évolutions futures

- [ ] Connexion API AirDNA
- [ ] Historique des prix
- [ ] Prédictions ML
- [ ] Comparateur multi-villes
- [ ] Export PDF
- [ ] Envoi email automatique

## 📞 Support

Pour toute question technique, contacter l'équipe de développement.

---

*Dernière mise à jour : Décembre 2024*
