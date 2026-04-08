import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CreditCard, Calendar, AlertTriangle, Scale, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Maison Valfort",
  description: "Conditions générales de vente et d'utilisation des services Maison Valfort",
};

export default function CGV() {
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
            Conditions Générales de Vente
          </h1>
          <p className="text-blanc/60 mt-4 font-outfit">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 1 - Objet</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
                entre <strong>Maison Valfort SAS</strong> et ses clients dans le cadre de ses prestations
                de conciergerie et de gestion locative.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                Toute commande de prestation implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 2 - Services proposés</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Maison Valfort propose les services suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir mb-2">Gestion locative</h4>
                  <ul className="text-noir/60 font-outfit text-sm space-y-1">
                    <li>• Publication des annonces</li>
                    <li>• Gestion des réservations</li>
                    <li>• Communication voyageurs</li>
                    <li>• Optimisation tarifaire</li>
                  </ul>
                </div>
                <div className="bg-creme/50 p-4">
                  <h4 className="font-medium text-noir mb-2">Conciergerie</h4>
                  <ul className="text-noir/60 font-outfit text-sm space-y-1">
                    <li>• Accueil des voyageurs</li>
                    <li>• Ménage professionnel</li>
                    <li>• Gestion du linge</li>
                    <li>• Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 3 - Tarifs et paiement</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-noir mb-2">3.1 Commission</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    La commission de Maison Valfort est de <strong>20% TTC</strong> du montant
                    des réservations, incluant l&apos;ensemble des services de gestion et de conciergerie.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-2">3.2 Facturation</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    Les commissions sont prélevées directement sur les revenus locatifs avant
                    reversement au propriétaire. Un relevé détaillé est fourni mensuellement.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-2">3.3 Reversement</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    Les revenus nets sont reversés au propriétaire dans un délai de 7 jours
                    ouvrés suivant le départ du voyageur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 4 - Durée et résiliation</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-noir mb-2">4.1 Durée du contrat</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    Le contrat est conclu pour une durée indéterminée à compter de sa signature.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-2">4.2 Résiliation</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    Chaque partie peut résilier le contrat à tout moment avec un préavis de
                    <strong> 30 jours</strong>, notifié par lettre recommandée avec accusé de réception
                    ou par email avec confirmation de lecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-2">4.3 Réservations en cours</h4>
                  <p className="text-noir/70 font-outfit text-sm leading-relaxed">
                    En cas de résiliation, les réservations déjà confirmées seront honorées
                    et gérées par Maison Valfort jusqu&apos;à leur terme.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 5 - Obligations des parties</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-noir mb-3">Obligations de Maison Valfort</h4>
                  <ul className="text-noir/70 font-outfit text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Gérer les annonces et réservations avec diligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Assurer l&apos;accueil des voyageurs dans les conditions prévues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Effectuer les prestations de ménage avec professionnalisme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Reverser les loyers dans les délais convenus</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-noir mb-3">Obligations du propriétaire</h4>
                  <ul className="text-noir/70 font-outfit text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Fournir un logement conforme et décent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Disposer des autorisations nécessaires à la location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Maintenir le bien en bon état de fonctionnement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bordeaux rounded-full mt-2"></span>
                      <span>Souscrire une assurance propriétaire non occupant</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 6 - Responsabilité</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <div className="space-y-4">
                <p className="text-noir/70 font-outfit leading-relaxed">
                  Maison Valfort agit en qualité de mandataire du propriétaire et met en œuvre
                  tous les moyens nécessaires pour l&apos;exécution de ses obligations.
                </p>
                <p className="text-noir/70 font-outfit leading-relaxed">
                  Maison Valfort ne pourra être tenue responsable :
                </p>
                <ul className="text-noir/70 font-outfit text-sm space-y-2 pl-4">
                  <li>• Des dommages causés par les voyageurs au-delà de la caution perçue</li>
                  <li>• Des annulations de réservations par les plateformes</li>
                  <li>• Des cas de force majeure</li>
                  <li>• Des vices cachés du logement</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 7 - Assurance</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Maison Valfort dispose d&apos;une assurance responsabilité civile professionnelle
                couvrant les dommages pouvant survenir dans le cadre de ses prestations.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                Le propriétaire doit souscrire une assurance propriétaire non occupant (PNO)
                et une garantie villégiature couvrant l&apos;activité de location saisonnière.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 8 - Litiges</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties
                s&apos;engagent à rechercher une solution amiable.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                À défaut d&apos;accord amiable, tout litige sera soumis aux tribunaux compétents de Paris.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-bordeaux" />
              <h2 className="font-cormorant text-2xl text-noir">Article 9 - Contact</h2>
            </div>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Pour toute question relative aux présentes CGV :
              </p>
              <ul className="text-noir/70 font-outfit space-y-2">
                <li><strong>Maison Valfort SAS</strong></li>
                <li>Email : contact@maisonvalfort.com</li>
                <li>Téléphone : +33 1 89 71 00 00</li>
                <li>Adresse : [Adresse à compléter], Paris, France</li>
              </ul>
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
            <Link href="/politique-confidentialite" className="text-blanc/40 text-sm hover:text-blanc transition-colors font-outfit">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
