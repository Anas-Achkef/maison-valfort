import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { VideoProvider } from "@/contexts/VideoContext";

export const metadata: Metadata = {
  title: "Maison Valfort | Conciergerie de Luxe",
  description: "L'excellence au service de votre bien. Conciergerie haut de gamme pour locations saisonnières à Paris et Île-de-France.",
  keywords: "conciergerie, luxe, location saisonnière, Paris, gestion locative, Airbnb",
  metadataBase: new URL("https://maisonvalfort.com"),
  openGraph: {
    title: "Maison Valfort | Conciergerie de Luxe",
    description: "L'excellence au service de votre bien. Conciergerie haut de gamme pour locations saisonnières.",
    type: "website",
    locale: "fr_FR",
    siteName: "Maison Valfort",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Valfort | Conciergerie de Luxe",
    description: "L'excellence au service de votre bien. Conciergerie haut de gamme pour locations saisonnières.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maisonvalfort.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#6D0303" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-outfit bg-creme text-noir antialiased">
        <LanguageProvider>
          <VideoProvider>
            <GoogleAnalytics />
            {children}
          </VideoProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
