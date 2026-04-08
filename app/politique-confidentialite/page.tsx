import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Maison Valfort",
  description: "Politique de confidentialité et protection des données personnelles - Maison Valfort",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-creme">
      {/* Header */}
      <div className="bg-bordeaux py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blanc/60 hover:text-blanc transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="font-cormorant text-4xl md:text-5xl text-blanc font-medium">
            Politique de Confidentialité
          </h1>
          <p className="text-blanc/60 mt-4 font-outfit">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-bordeaux/5 border border-bordeaux/20 p-6 flex items-start gap-4">
          <Shield className="w-8 h-8 text-bordeaux flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-cormorant text-xl text-noir mb-2">Votre vie privée est notre priorité</h2>
            <p className="text-noir/70 font-outfit text-sm leading-relaxed">
              Maison Valfort s&apos;engage à protéger vos données personnelles conformément au
              Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-12">

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">1. Données collectées</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir mb-2">Données d&apos;identification</h4>
                  <ul className="text-noir/60 font-outfit text-sm space-y-1">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresse postale</li>
                  </ul>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir mb-2">Données de navigation</h4>
                  <ul className="text-noir/60 font-outfit text-sm space-y-1">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Pages visitées</li>
                    <li>• Durée de visite</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">2. Finalités du traitement</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="text-noir/70 font-outfit space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center text-bordeaux text-sm flex-shrink-0">1</span>
                  <span>Répondre à vos demandes de contact et de devis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center text-bordeaux text-sm flex-shrink-0">2</span>
                  <span>Gérer la relation commerciale et les prestations de services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center text-bordeaux text-sm flex-shrink-0">3</span>
                  <span>Vous envoyer des informations sur nos services (avec votre consentement)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center text-bordeaux text-sm flex-shrink-0">4</span>
                  <span>Améliorer notre site et personnaliser votre expérience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-bordeaux/10 rounded-full flex items-center justify-center text-bordeaux text-sm flex-shrink-0">5</span>
                  <span>Établir des statistiques de fréquentation</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">3. Base légale et durée de conservation</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-noir mb-2">Base légale</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    Le traitement de vos données repose sur : votre consentement, l&apos;exécution d&apos;un contrat,
                    nos intérêts légitimes ou le respect d&apos;obligations légales.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-2">Durée de conservation</h4>
                  <ul className="text-noir/70 font-outfit text-sm space-y-2">
                    <li>• <strong>Prospects :</strong> 3 ans après le dernier contact</li>
                    <li>• <strong>Clients :</strong> 5 ans après la fin de la relation commerciale</li>
                    <li>• <strong>Données comptables :</strong> 10 ans (obligation légale)</li>
                    <li>• <strong>Cookies :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">4. Cookies</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Notre site utilise différents types de cookies :
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-bordeaux pl-4">
                  <h4 className="font-medium text-noir">Cookies nécessaires</h4>
                  <p className="text-noir/60 font-outfit text-sm">
                    Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                </div>
                <div className="border-l-4 border-bordeaux/50 pl-4">
                  <h4 className="font-medium text-noir">Cookies analytiques</h4>
                  <p className="text-noir/60 font-outfit text-sm">
                    Google Analytics - Pour comprendre comment les visiteurs utilisent le site.
                    Ces cookies peuvent être refusés.
                  </p>
                </div>
                <div className="border-l-4 border-bordeaux/30 pl-4">
                  <h4 className="font-medium text-noir">Cookies marketing</h4>
                  <p className="text-noir/60 font-outfit text-sm">
                    Pour afficher des publicités pertinentes. Ces cookies peuvent être refusés.
                  </p>
                </div>
              </div>
              <p className="text-noir/70 font-outfit text-sm mt-4">
                Vous pouvez modifier vos préférences à tout moment via notre bannière de cookies.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">5. Vos droits</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit d&apos;accès</h4>
                  <p className="text-noir/60 font-outfit text-xs">Obtenir une copie de vos données</p>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit de rectification</h4>
                  <p className="text-noir/60 font-outfit text-xs">Corriger vos données inexactes</p>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit à l&apos;effacement</h4>
                  <p className="text-noir/60 font-outfit text-xs">Demander la suppression de vos données</p>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit à la portabilité</h4>
                  <p className="text-noir/60 font-outfit text-xs">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit d&apos;opposition</h4>
                  <p className="text-noir/60 font-outfit text-xs">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir text-sm mb-1">Droit de limitation</h4>
                  <p className="text-noir/60 font-outfit text-xs">Limiter le traitement de vos données</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">6. Nous contacter</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Pour exercer vos droits ou pour toute question concernant le traitement de vos données :
              </p>
              <ul className="text-noir/70 font-outfit space-y-2">
                <li><strong>Email :</strong> dpo@maisonvalfort.com</li>
                <li><strong>Courrier :</strong> Maison Valfort - DPO, [Adresse], Paris, France</li>
              </ul>
              <p className="text-noir/60 font-outfit text-sm mt-4">
                Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-bordeaux underline">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer simple */}
      <div className="bg-noir py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blanc/40 text-sm font-outfit">
            © 2024 Maison Valfort. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-blanc/40 text-sm hover:text-blanc transition-colors font-outfit">
              Mentions légales
            </Link>
            <Link href="/cgv" className="text-blanc/40 text-sm hover:text-blanc transition-colors font-outfit">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
