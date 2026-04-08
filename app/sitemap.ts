import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maisonvalfort.com";

  // Pages principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Pages propriétés
  const properties = [
    "appartement-paris-luxe",
    "chalet-chamonix",
    "mas-provencal",
    "penthouse-dubai",
    "penthouse-marbella",
    "riad-marrakech",
    "villa-ibiza",
    "villa-marbella",
    "villa-mediterraneenne",
    "villa-mykonos",
    "villa-palmeraie-marrakech",
    "villa-vue-mer",
  ].map((slug) => ({
    url: `${baseUrl}/properties/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Pages services
  const services = [
    "accueil-voyageurs",
    "annonces-optimisees",
    "maintenance",
    "menage-hotelier",
    "shooting-photo",
    "tarification-dynamique",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pages expériences
  const experiences = [
    "activites-nautiques",
    "chauffeur-prive",
    "chef-domicile",
    "conciergerie-voyage",
    "excursions-privees",
    "photographe-prive",
    "reservations-vip",
    "spa-bien-etre",
  ].map((slug) => ({
    url: `${baseUrl}/experiences/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pages légales
  const legalPages = [
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...mainPages, ...properties, ...services, ...experiences, ...legalPages];
}
