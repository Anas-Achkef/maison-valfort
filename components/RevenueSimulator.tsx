"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Home,
  MapPin,
  Wifi,
  Car,
  Waves,
  Utensils,
  Tv,
  Wind,
  TrendingUp,
  Euro,
  Sparkles,
  Users,
  Maximize,
  Star,
  ChevronDown,
  CheckCircle2,
  Info,
  ArrowRight,
  Snowflake,
  Sun,
  Palmtree,
  Bath,
  TreePine,
  Eye,
  Dumbbell,
  WashingMachine,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  calculateRevenue,
  PropertyInput,
  RevenueEstimate,
} from "@/lib/revenue-calculator";
import {
  marketDatabase,
  equipmentOptions,
  standingOptions,
} from "@/lib/airbnb-market-data";

// Icônes pour les équipements
const equipmentIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  kitchen: Utensils,
  washer: WashingMachine,
  heating: Flame,
  aircon: Wind,
  parking: Car,
  balcony: Sun,
  tv: Tv,
  dishwasher: Utensils,
  pool: Waves,
  jacuzzi: Bath,
  garden: TreePine,
  sea_view: Eye,
  gym: Dumbbell,
};

// Types de biens avec leurs configurations
const propertyTypes = [
  { id: 'studio', bedrooms: 0, defaultCapacity: 2, defaultSurface: 25 },
  { id: 't2', bedrooms: 1, defaultCapacity: 3, defaultSurface: 45 },
  { id: 't3', bedrooms: 2, defaultCapacity: 5, defaultSurface: 70 },
  { id: 't4', bedrooms: 3, defaultCapacity: 7, defaultSurface: 95 },
  { id: 'house', bedrooms: 4, defaultCapacity: 8, defaultSurface: 120 },
  { id: 'villa', bedrooms: 5, defaultCapacity: 10, defaultSurface: 200 },
];

// Hook pour l'animation des compteurs
function useAnimatedCounter(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const startTime = performance.now();
    const startValue = countRef.current;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out-expo)
      const easeProgress = 1 - Math.pow(2, -10 * progress);

      const current = Math.round(startValue + (end - startValue) * easeProgress);
      setCount(current);
      countRef.current = current;

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return count;
}

// Composant pour afficher un compteur animé
function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const animatedValue = useAnimatedCounter(value);
  return (
    <span>
      {prefix}{animatedValue.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

export default function RevenueSimulator() {
  const { t, isRTL } = useLanguage();
  const resultsRef = useRef<HTMLDivElement>(null);
  const isResultsInView = useInView(resultsRef, { once: false, margin: "-100px" });

  // Extraire les pays uniques de la base de données
  const countries = Array.from(new Set(marketDatabase.map(m => m.country)));

  // État du formulaire
  const [propertyType, setPropertyType] = useState<PropertyInput['propertyType']>('t2');
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [cityId, setCityId] = useState('paris');
  const [bedrooms, setBedrooms] = useState(1);
  const [capacity, setCapacity] = useState(3);
  const [surface, setSurface] = useState(45);
  const [standing, setStanding] = useState<PropertyInput['standing']>('standard');
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>(['wifi', 'kitchen', 'heating']);
  const [commissionRate, setCommissionRate] = useState(0.20);

  // Villes filtrées par pays sélectionné
  const citiesByCountry = marketDatabase.filter(m => m.country === selectedCountry);

  // État des résultats
  const [estimate, setEstimate] = useState<RevenueEstimate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Quand le pays change, sélectionner la première ville de ce pays
  useEffect(() => {
    const firstCity = marketDatabase.find(m => m.country === selectedCountry);
    if (firstCity) {
      setCityId(firstCity.cityId);
    }
  }, [selectedCountry]);

  // Mise à jour automatique des valeurs par défaut lors du changement de type
  useEffect(() => {
    const typeConfig = propertyTypes.find(pt => pt.id === propertyType);
    if (typeConfig) {
      setBedrooms(typeConfig.bedrooms);
      setCapacity(typeConfig.defaultCapacity);
      setSurface(typeConfig.defaultSurface);
    }
  }, [propertyType]);

  // Calcul automatique à chaque changement
  const calculateEstimate = useCallback(() => {
    setIsCalculating(true);

    // Petit délai pour l'effet visuel
    const timer = setTimeout(() => {
      const input: PropertyInput = {
        propertyType,
        cityId,
        bedrooms,
        capacity,
        surface,
        standing,
        equipments: selectedEquipments,
      };

      const result = calculateRevenue(input, commissionRate);
      setEstimate(result);
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [propertyType, cityId, bedrooms, capacity, surface, standing, selectedEquipments, commissionRate]);

  useEffect(() => {
    calculateEstimate();
  }, [calculateEstimate]);

  // Toggle équipement
  const toggleEquipment = (id: string) => {
    setSelectedEquipments(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  // Traductions personnalisées pour les éléments du simulateur
  const labels = {
    fr: {
      badge: "Simulateur Intelligent",
      title: "Estimez vos revenus locatifs",
      subtitle: "Analyse basée sur les données du marché Airbnb avec un taux d'occupation de 80%",
      propertyType: "Type de bien",
      location: "Localisation",
      capacity: "Capacité d'accueil",
      surface: "Surface",
      standing: "Standing",
      equipments: "Équipements",
      advancedOptions: "Options avancées",
      commission: "Commission de gestion",
      results: {
        title: "Estimation de vos revenus",
        occupancy: "Taux d'occupation",
        pricePerNight: "Prix par nuit estimé",
        monthlyBrut: "Revenu mensuel brut",
        yearlyBrut: "Revenu annuel brut",
        commission: "Commission",
        commissionNote: "hors frais de ménage",
        monthlyNet: "Revenu net mensuel",
        yearlyNet: "Revenu net annuel",
        seasonalPrices: "Prix saisonniers",
        lowSeason: "Basse saison",
        highSeason: "Haute saison",
        marketAnalysis: "Analyse du marché",
        marketTrend: "Tendance",
        demandLevel: "Demande",
        competitionLevel: "Concurrence",
        recommendations: "Recommandations",
        cta: "Obtenir une estimation personnalisée",
        disclaimer: "Estimation basée sur les données du marché. Les résultats réels peuvent varier.",
      },
      propertyTypes: {
        studio: "Studio",
        t2: "T2",
        t3: "T3",
        t4: "T4",
        house: "Maison",
        villa: "Villa",
      },
      standings: {
        standard: "Standard",
        premium: "Premium",
        luxury: "Luxe",
      },
      marketTrends: {
        rising: "En hausse",
        stable: "Stable",
        declining: "En baisse",
      },
      demandLevels: {
        high: "Forte",
        medium: "Moyenne",
        low: "Faible",
      },
      travelers: "voyageurs",
      sqm: "m²",
      country: "Pays",
      city: "Ville",
      countries: {
        France: "France",
        Espagne: "Espagne",
        "Royaume-Uni": "Royaume-Uni",
        Émirats: "Émirats",
        Italie: "Italie",
        Portugal: "Portugal",
      },
    },
    en: {
      badge: "Smart Simulator",
      title: "Estimate your rental income",
      subtitle: "Analysis based on Airbnb market data with 80% occupancy rate",
      propertyType: "Property type",
      location: "Location",
      capacity: "Guest capacity",
      surface: "Surface area",
      standing: "Standing",
      equipments: "Amenities",
      advancedOptions: "Advanced options",
      commission: "Management fee",
      results: {
        title: "Your income estimate",
        occupancy: "Occupancy rate",
        pricePerNight: "Estimated price per night",
        monthlyBrut: "Gross monthly income",
        yearlyBrut: "Gross annual income",
        commission: "Commission",
        commissionNote: "excl. cleaning fees",
        monthlyNet: "Net monthly income",
        yearlyNet: "Net annual income",
        seasonalPrices: "Seasonal prices",
        lowSeason: "Low season",
        highSeason: "High season",
        marketAnalysis: "Market analysis",
        marketTrend: "Trend",
        demandLevel: "Demand",
        competitionLevel: "Competition",
        recommendations: "Recommendations",
        cta: "Get a personalized estimate",
        disclaimer: "Estimate based on market data. Actual results may vary.",
      },
      propertyTypes: {
        studio: "Studio",
        t2: "1BR",
        t3: "2BR",
        t4: "3BR",
        house: "House",
        villa: "Villa",
      },
      standings: {
        standard: "Standard",
        premium: "Premium",
        luxury: "Luxury",
      },
      marketTrends: {
        rising: "Rising",
        stable: "Stable",
        declining: "Declining",
      },
      demandLevels: {
        high: "High",
        medium: "Medium",
        low: "Low",
      },
      travelers: "guests",
      sqm: "sqm",
      country: "Country",
      city: "City",
      countries: {
        France: "France",
        Espagne: "Spain",
        "Royaume-Uni": "United Kingdom",
        Émirats: "UAE",
        Italie: "Italy",
        Portugal: "Portugal",
      },
    },
    es: {
      badge: "Simulador Inteligente",
      title: "Estime sus ingresos de alquiler",
      subtitle: "Análisis basado en datos del mercado Airbnb con una tasa de ocupación del 80%",
      propertyType: "Tipo de propiedad",
      location: "Ubicación",
      capacity: "Capacidad de huéspedes",
      surface: "Superficie",
      standing: "Categoría",
      equipments: "Equipamientos",
      advancedOptions: "Opciones avanzadas",
      commission: "Comisión de gestión",
      results: {
        title: "Estimación de sus ingresos",
        occupancy: "Tasa de ocupación",
        pricePerNight: "Precio estimado por noche",
        monthlyBrut: "Ingresos mensuales brutos",
        yearlyBrut: "Ingresos anuales brutos",
        commission: "Comisión",
        commissionNote: "excl. gastos de limpieza",
        monthlyNet: "Ingresos netos mensuales",
        yearlyNet: "Ingresos netos anuales",
        seasonalPrices: "Precios estacionales",
        lowSeason: "Temporada baja",
        highSeason: "Temporada alta",
        marketAnalysis: "Análisis de mercado",
        marketTrend: "Tendencia",
        demandLevel: "Demanda",
        competitionLevel: "Competencia",
        recommendations: "Recomendaciones",
        cta: "Obtener una estimación personalizada",
        disclaimer: "Estimación basada en datos del mercado. Los resultados reales pueden variar.",
      },
      propertyTypes: {
        studio: "Estudio",
        t2: "1 Hab",
        t3: "2 Hab",
        t4: "3 Hab",
        house: "Casa",
        villa: "Villa",
      },
      standings: {
        standard: "Estándar",
        premium: "Premium",
        luxury: "Lujo",
      },
      marketTrends: {
        rising: "En alza",
        stable: "Estable",
        declining: "En baja",
      },
      demandLevels: {
        high: "Alta",
        medium: "Media",
        low: "Baja",
      },
      travelers: "huéspedes",
      sqm: "m²",
      country: "País",
      city: "Ciudad",
      countries: {
        France: "Francia",
        Espagne: "España",
        "Royaume-Uni": "Reino Unido",
        Émirats: "Emiratos",
        Italie: "Italia",
        Portugal: "Portugal",
      },
    },
    ar: {
      badge: "محاكي ذكي",
      title: "قدّر دخل الإيجار الخاص بك",
      subtitle: "تحليل يستند إلى بيانات سوق Airbnb بمعدل إشغال 80%",
      propertyType: "نوع العقار",
      location: "الموقع",
      capacity: "سعة الضيوف",
      surface: "المساحة",
      standing: "الفئة",
      equipments: "المرافق",
      advancedOptions: "خيارات متقدمة",
      commission: "عمولة الإدارة",
      results: {
        title: "تقدير دخلك",
        occupancy: "معدل الإشغال",
        pricePerNight: "السعر المقدر لليلة",
        monthlyBrut: "الدخل الشهري الإجمالي",
        yearlyBrut: "الدخل السنوي الإجمالي",
        commission: "العمولة",
        commissionNote: "باستثناء رسوم التنظيف",
        monthlyNet: "الدخل الشهري الصافي",
        yearlyNet: "الدخل السنوي الصافي",
        seasonalPrices: "الأسعار الموسمية",
        lowSeason: "موسم منخفض",
        highSeason: "موسم مرتفع",
        marketAnalysis: "تحليل السوق",
        marketTrend: "الاتجاه",
        demandLevel: "الطلب",
        competitionLevel: "المنافسة",
        recommendations: "التوصيات",
        cta: "احصل على تقدير مخصص",
        disclaimer: "تقدير يستند إلى بيانات السوق. قد تختلف النتائج الفعلية.",
      },
      propertyTypes: {
        studio: "استوديو",
        t2: "غرفة واحدة",
        t3: "غرفتان",
        t4: "3 غرف",
        house: "منزل",
        villa: "فيلا",
      },
      standings: {
        standard: "قياسي",
        premium: "متميز",
        luxury: "فاخر",
      },
      marketTrends: {
        rising: "في ارتفاع",
        stable: "مستقر",
        declining: "في انخفاض",
      },
      demandLevels: {
        high: "مرتفع",
        medium: "متوسط",
        low: "منخفض",
      },
      travelers: "ضيوف",
      sqm: "م²",
      country: "البلد",
      city: "المدينة",
      countries: {
        France: "فرنسا",
        Espagne: "إسبانيا",
        "Royaume-Uni": "المملكة المتحدة",
        Émirats: "الإمارات",
        Italie: "إيطاليا",
        Portugal: "البرتغال",
      },
    },
    ru: {
      badge: "Умный Симулятор",
      title: "Рассчитайте доход от аренды",
      subtitle: "Анализ на основе данных рынка Airbnb с заполняемостью 80%",
      propertyType: "Тип недвижимости",
      location: "Расположение",
      capacity: "Вместимость гостей",
      surface: "Площадь",
      standing: "Класс",
      equipments: "Удобства",
      advancedOptions: "Дополнительные опции",
      commission: "Комиссия за управление",
      results: {
        title: "Расчёт вашего дохода",
        occupancy: "Заполняемость",
        pricePerNight: "Расчётная цена за ночь",
        monthlyBrut: "Валовой месячный доход",
        yearlyBrut: "Валовой годовой доход",
        commission: "Комиссия",
        commissionNote: "без учёта уборки",
        monthlyNet: "Чистый месячный доход",
        yearlyNet: "Чистый годовой доход",
        seasonalPrices: "Сезонные цены",
        lowSeason: "Низкий сезон",
        highSeason: "Высокий сезон",
        marketAnalysis: "Анализ рынка",
        marketTrend: "Тренд",
        demandLevel: "Спрос",
        competitionLevel: "Конкуренция",
        recommendations: "Рекомендации",
        cta: "Получить персональный расчёт",
        disclaimer: "Расчёт на основе рыночных данных. Фактические результаты могут отличаться.",
      },
      propertyTypes: {
        studio: "Студия",
        t2: "1 спальня",
        t3: "2 спальни",
        t4: "3 спальни",
        house: "Дом",
        villa: "Вилла",
      },
      standings: {
        standard: "Стандарт",
        premium: "Премиум",
        luxury: "Люкс",
      },
      marketTrends: {
        rising: "Растёт",
        stable: "Стабильно",
        declining: "Падает",
      },
      demandLevels: {
        high: "Высокий",
        medium: "Средний",
        low: "Низкий",
      },
      travelers: "гостей",
      sqm: "м²",
      country: "Страна",
      city: "Город",
      countries: {
        France: "Франция",
        Espagne: "Испания",
        "Royaume-Uni": "Великобритания",
        Émirats: "ОАЭ",
        Italie: "Италия",
        Portugal: "Португалия",
      },
    },
  };

  // Déterminer la langue actuelle
  const getLang = () => {
    if (t.nav.home === "Accueil") return "fr";
    if (t.nav.home === "Home") return "en";
    if (t.nav.home === "Inicio") return "es";
    if (t.nav.home === "الرئيسية") return "ar";
    if (t.nav.home === "Главная") return "ru";
    return "en";
  };
  const lang = getLang();
  const l = labels[lang as keyof typeof labels];

  return (
    <section
      id="simulateur"
      className="py-24 md:py-32 bg-gradient-to-b from-blanc via-creme/30 to-blanc relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-or/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-bordeaux/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-bordeaux text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 font-outfit bg-bordeaux/5 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            {l.badge}
          </motion.span>

          <motion.h2
            className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-noir font-medium mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {l.title}
          </motion.h2>

          <motion.p
            className="text-noir/60 max-w-2xl mx-auto text-base md:text-lg font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {l.subtitle}
          </motion.p>
        </motion.div>

        <div className={`grid lg:grid-cols-5 gap-6 lg:gap-8 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          {/* Formulaire - 3 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4 md:space-y-6"
          >
            {/* Type de bien */}
            <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
              <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                <Home className="w-4 h-4 text-bordeaux" />
                {l.propertyType}
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as PropertyInput['propertyType'])}
                    className={`py-2.5 md:py-3 px-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-lg ${
                      propertyType === type.id
                        ? "bg-bordeaux text-blanc shadow-lg shadow-bordeaux/20"
                        : "bg-creme text-noir/60 hover:bg-bordeaux/10 hover:text-bordeaux"
                    }`}
                  >
                    {l.propertyTypes[type.id as keyof typeof l.propertyTypes]}
                  </button>
                ))}
              </div>
            </div>

            {/* Localisation - Pays */}
            <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
              <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-4 h-4 text-bordeaux" />
                {l.country}
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`py-2.5 px-3 text-xs md:text-sm transition-all duration-300 rounded-lg ${
                      selectedCountry === country
                        ? "bg-bordeaux text-blanc shadow-lg shadow-bordeaux/20 font-medium"
                        : "bg-creme text-noir/60 hover:bg-bordeaux/10 hover:text-bordeaux"
                    }`}
                  >
                    {l.countries[country as keyof typeof l.countries] || country}
                  </button>
                ))}
              </div>
            </div>

            {/* Localisation - Ville */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm"
              >
                <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                  <MapPin className="w-4 h-4 text-bordeaux" />
                  {l.city}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {citiesByCountry.map((market) => (
                    <button
                      key={market.cityId}
                      onClick={() => setCityId(market.cityId)}
                      className={`py-2.5 px-3 text-xs md:text-sm transition-all duration-300 rounded-lg ${
                        cityId === market.cityId
                          ? "bg-bordeaux text-blanc shadow-lg shadow-bordeaux/20 font-medium"
                          : "bg-creme text-noir/60 hover:bg-bordeaux/10 hover:text-bordeaux"
                      }`}
                    >
                      {market.cityName}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Capacité et Surface */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Capacité */}
              <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
                <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Users className="w-4 h-4 text-bordeaux" />
                  {l.capacity}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={capacity}
                    onChange={(e) => setCapacity(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-creme rounded-lg appearance-none cursor-pointer accent-bordeaux"
                  />
                  <span className="text-bordeaux font-cormorant text-2xl font-semibold min-w-[80px] text-center">
                    {capacity} <span className="text-sm text-noir/50">{l.travelers}</span>
                  </span>
                </div>
              </div>

              {/* Surface */}
              <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
                <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Maximize className="w-4 h-4 text-bordeaux" />
                  {l.surface}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="15"
                    max="400"
                    step="5"
                    value={surface}
                    onChange={(e) => setSurface(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-creme rounded-lg appearance-none cursor-pointer accent-bordeaux"
                  />
                  <span className="text-bordeaux font-cormorant text-2xl font-semibold min-w-[80px] text-center">
                    {surface} <span className="text-sm text-noir/50">{l.sqm}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Standing */}
            <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
              <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                <Star className="w-4 h-4 text-bordeaux" />
                {l.standing}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {standingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setStanding(option.id)}
                    className={`relative p-4 rounded-xl transition-all duration-300 ${
                      standing === option.id
                        ? "bg-gradient-to-br from-bordeaux to-bordeaux/90 text-blanc shadow-lg shadow-bordeaux/20"
                        : "bg-creme text-noir/70 hover:bg-bordeaux/10"
                    }`}
                  >
                    <div className="text-sm md:text-base font-medium mb-1">
                      {l.standings[option.id as keyof typeof l.standings]}
                    </div>
                    <div className={`text-xs ${standing === option.id ? "text-blanc/70" : "text-noir/40"}`}>
                      {option.id === 'standard' && "×1.0"}
                      {option.id === 'premium' && "×1.25"}
                      {option.id === 'luxury' && "×1.55"}
                    </div>
                    {standing === option.id && (
                      <CheckCircle2 className="absolute top-2 right-2 w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Équipements */}
            <div className="bg-blanc p-4 md:p-6 rounded-2xl border border-noir/5 shadow-sm">
              <label className={`flex items-center gap-2 text-noir font-medium mb-4 font-outfit text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                <Sparkles className="w-4 h-4 text-bordeaux" />
                {l.equipments}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {equipmentOptions.map((equipment) => {
                  const Icon = equipmentIcons[equipment.id] || Sparkles;
                  const isSelected = selectedEquipments.includes(equipment.id);
                  return (
                    <button
                      key={equipment.id}
                      onClick={() => toggleEquipment(equipment.id)}
                      className={`flex items-center gap-2 p-3 text-xs md:text-sm transition-all duration-300 rounded-lg ${
                        isSelected
                          ? "bg-bordeaux/10 border-2 border-bordeaux/30 text-bordeaux"
                          : "bg-creme text-noir/60 border-2 border-transparent hover:border-bordeaux/20"
                      } ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-bordeaux" : "text-noir/40"}`} />
                      <span className="truncate">{equipment.name}</span>
                      {isSelected && equipment.priceImpact > 0 && (
                        <span className={`${isRTL ? "mr-auto" : "ml-auto"} text-[10px] text-bordeaux/60 flex-shrink-0`}>
                          +{Math.round(equipment.priceImpact * 100)}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Options avancées */}
            <div className="bg-blanc rounded-2xl border border-noir/5 shadow-sm overflow-hidden">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`w-full p-4 md:p-6 flex items-center justify-between text-noir/70 hover:text-noir transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="font-outfit text-sm font-medium">{l.advancedOptions}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAdvanced ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 border-t border-noir/5">
                      {/* Commission */}
                      <div>
                        <label className={`flex items-center gap-2 text-noir/70 text-sm mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <Info className="w-4 h-4" />
                          {l.commission}
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min="0"
                            max="30"
                            value={commissionRate * 100}
                            onChange={(e) => setCommissionRate(parseInt(e.target.value) / 100)}
                            className="flex-1 h-2 bg-creme rounded-lg appearance-none cursor-pointer accent-bordeaux"
                          />
                          <span className="text-bordeaux font-semibold min-w-[50px] text-center">
                            {Math.round(commissionRate * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Résultats - 2 colonnes */}
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 bg-gradient-to-br from-blanc to-creme/50 rounded-3xl border border-bordeaux/10 shadow-xl overflow-hidden">
              {/* Header des résultats */}
              <div className="bg-gradient-to-r from-bordeaux to-bordeaux/90 p-6 text-blanc">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-cormorant text-xl md:text-2xl font-medium">
                    {l.results.title}
                  </h3>
                  <TrendingUp className="w-6 h-6 opacity-80" />
                </div>
                <div className="flex items-center gap-2 text-blanc/80 text-sm">
                  <span>{l.results.occupancy}:</span>
                  <span className="font-semibold text-blanc">80%</span>
                  <span className="text-blanc/60 text-xs">(fixe)</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isCalculating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-12 flex justify-center"
                  >
                    <div className="w-12 h-12 border-3 border-bordeaux/20 border-t-bordeaux rounded-full animate-spin" />
                  </motion.div>
                ) : estimate ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-5 md:p-6 space-y-4"
                  >
                    {/* Prix par nuit */}
                    <div className="bg-blanc rounded-xl p-4 border border-noir/5">
                      <div className={`flex items-center justify-between mb-1 text-sm text-noir/50 ${isRTL ? "flex-row-reverse" : ""}`}>
                        <span>{l.results.pricePerNight}</span>
                        <Euro className="w-4 h-4" />
                      </div>
                      <div className="text-3xl md:text-4xl font-cormorant text-bordeaux font-semibold">
                        {isResultsInView ? (
                          <AnimatedNumber value={estimate.pricePerNight} suffix=" €" />
                        ) : (
                          `${estimate.pricePerNight} €`
                        )}
                      </div>
                    </div>

                    {/* Prix saisonniers */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <Snowflake className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                        <div className="text-xs text-noir/50 mb-1">{l.results.lowSeason}</div>
                        <div className="text-lg font-cormorant text-blue-600 font-semibold">
                          {estimate.pricePerNightLowSeason} €
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-3 text-center">
                        <Palmtree className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <div className="text-xs text-noir/50 mb-1">{l.results.highSeason}</div>
                        <div className="text-lg font-cormorant text-orange-600 font-semibold">
                          {estimate.pricePerNightHighSeason} €
                        </div>
                      </div>
                    </div>

                    {/* Revenus mensuels et annuels */}
                    <div className="space-y-3">
                      {/* Mensuel brut */}
                      <div className="bg-blanc rounded-xl p-4 border border-noir/5">
                        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-noir/50 text-sm">{l.results.monthlyBrut}</span>
                          <span className="text-2xl font-cormorant text-noir font-semibold">
                            {isResultsInView ? (
                              <AnimatedNumber value={estimate.monthlyRevenueBrut} suffix=" €" />
                            ) : (
                              `${estimate.monthlyRevenueBrut.toLocaleString("fr-FR")} €`
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Annuel brut */}
                      <div className="bg-blanc rounded-xl p-4 border border-noir/5">
                        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-noir/50 text-sm">{l.results.yearlyBrut}</span>
                          <span className="text-2xl font-cormorant text-noir font-semibold">
                            {isResultsInView ? (
                              <AnimatedNumber value={estimate.yearlyRevenueBrut} suffix=" €" />
                            ) : (
                              `${estimate.yearlyRevenueBrut.toLocaleString("fr-FR")} €`
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Commission et net */}
                    <div className="border-t border-noir/10 pt-4 space-y-2">
                      <div className={`flex justify-between text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                        <div className="text-noir/40">
                          <span>{l.results.commission} ({Math.round(estimate.commissionRate * 100)}%)</span>
                          <span className="block text-[10px] text-noir/30 italic">{l.results.commissionNote}</span>
                        </div>
                        <span className="text-noir/60">
                          -{estimate.monthlyCommission.toLocaleString("fr-FR")} €/mois
                        </span>
                      </div>

                      <div className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                        <span className="text-noir font-medium">{l.results.monthlyNet}</span>
                        <span className="text-xl md:text-2xl font-cormorant text-bordeaux font-bold">
                          {isResultsInView ? (
                            <AnimatedNumber value={estimate.monthlyRevenueNet} suffix=" €" />
                          ) : (
                            `${estimate.monthlyRevenueNet.toLocaleString("fr-FR")} €`
                          )}
                        </span>
                      </div>

                      <div className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                        <span className="text-noir font-medium">{l.results.yearlyNet}</span>
                        <span className="text-xl md:text-2xl font-cormorant text-noir font-bold">
                          {isResultsInView ? (
                            <AnimatedNumber value={estimate.yearlyRevenueNet} suffix=" €" />
                          ) : (
                            `${estimate.yearlyRevenueNet.toLocaleString("fr-FR")} €`
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Analyse du marché */}
                    {estimate.marketData && (
                      <div className="bg-creme/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-noir mb-3">{l.results.marketAnalysis}</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-xs text-noir/50 mb-1">{l.results.marketTrend}</div>
                            <div className={`text-sm font-medium ${
                              estimate.marketData.marketTrend === 'rising' ? 'text-green-600' :
                              estimate.marketData.marketTrend === 'declining' ? 'text-red-600' : 'text-noir/70'
                            }`}>
                              {l.marketTrends[estimate.marketData.marketTrend]}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-noir/50 mb-1">{l.results.demandLevel}</div>
                            <div className={`text-sm font-medium ${
                              estimate.marketData.demandLevel === 'high' ? 'text-green-600' :
                              estimate.marketData.demandLevel === 'low' ? 'text-red-600' : 'text-noir/70'
                            }`}>
                              {l.demandLevels[estimate.marketData.demandLevel]}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-noir/50 mb-1">{l.results.competitionLevel}</div>
                            <div className={`text-sm font-medium ${
                              estimate.marketData.competitionLevel === 'low' ? 'text-green-600' :
                              estimate.marketData.competitionLevel === 'high' ? 'text-orange-600' : 'text-noir/70'
                            }`}>
                              {l.demandLevels[estimate.marketData.competitionLevel]}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Recommandations */}
                    {estimate.recommendations.length > 0 && (
                      <div className="bg-bordeaux/5 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-bordeaux mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          {l.results.recommendations}
                        </h4>
                        <ul className="space-y-1.5">
                          {estimate.recommendations.map((rec, idx) => (
                            <li key={idx} className="text-xs text-noir/60 flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-bordeaux mt-0.5 flex-shrink-0" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-bordeaux text-blanc text-sm font-medium hover:bg-noir transition-all duration-300 rounded-xl shadow-lg shadow-bordeaux/20"
                    >
                      <span>{l.results.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Disclaimer */}
                    <p className="text-noir/30 text-[10px] text-center">
                      {l.results.disclaimer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
