import { fr, Translations } from "./fr";
import { en } from "./en";
import { es } from "./es";
import { ar } from "./ar";
import { ru } from "./ru";

export type Language = "fr" | "en" | "es" | "ar" | "ru";

export const languages: { code: Language; name: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
];

export const translations: Record<Language, Translations> = {
  fr,
  en,
  es,
  ar,
  ru,
};

export type { Translations };
