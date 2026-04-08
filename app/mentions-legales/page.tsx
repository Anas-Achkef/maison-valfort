import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Maison Valfort",
  description: "Mentions légales du site Maison Valfort - Conciergerie de luxe pour locations saisonnières",
};

export default function MentionsLegales() {
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
            Mentions Légales
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
            <h2 className="font-cormorant text-2xl text-noir mb-4">1. Éditeur du site</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Le site <strong>maisonvalfort.com</strong> est édité par :
              </p>
              <ul className="text-noir/70 font-outfit space-y-2">
                <li><strong>Raison sociale :</strong> Maison Valfort SAS</li>
                <li><strong>Siège social :</strong> [Adresse à compléter], Paris, France</li>
                <li><strong>Capital social :</strong> [Montant à compléter] euros</li>
                <li><strong>RCS :</strong> Paris [Numéro à compléter]</li>
                <li><strong>SIRET :</strong> [Numéro à compléter]</li>
                <li><strong>N° TVA Intracommunautaire :</strong> FR [Numéro à compléter]</li>
                <li><strong>Téléphone :</strong> +33 1 89 71 00 00</li>
                <li><strong>Email :</strong> contact@maisonvalfort.com</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">2. Directeur de la publication</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed">
                Le directeur de la publication est <strong>[Nom du dirigeant]</strong>,
                en qualité de Président de Maison Valfort SAS.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">3. Hébergement</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <ul className="text-noir/70 font-outfit space-y-2">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li><strong>Site web :</strong> vercel.com</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">4. Propriété intellectuelle</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                L&apos;ensemble des éléments constituant le site maisonvalfort.com (textes, graphismes,
                logiciels, photographies, images, vidéos, sons, plans, logos, marques, créations et
                œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même,
                sont la propriété exclusive de Maison Valfort SAS ou de ses partenaires.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                Toute reproduction, représentation, utilisation, adaptation, modification, incorporation,
                traduction, commercialisation, partielle ou intégrale des éléments du site, par quelque
                procédé que ce soit, sans l&apos;autorisation préalable écrite de Maison Valfort SAS est
                strictement interdite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">5. Données personnelles</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé
                par Maison Valfort SAS pour la gestion de notre clientèle et de nos prospects.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de
                portabilité, d&apos;effacement de vos données ou de limitation du traitement.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-bordeaux underline hover:no-underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">6. Cookies</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Le site maisonvalfort.com utilise des cookies pour améliorer l&apos;expérience utilisateur
                et analyser le trafic. Lors de votre première visite, une bannière vous informe de
                l&apos;utilisation des cookies et vous permet de les accepter ou de les refuser.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                Pour plus d&apos;informations sur les cookies, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-bordeaux underline hover:no-underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">7. Limitation de responsabilité</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Maison Valfort SAS s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et
                la mise à jour des informations diffusées sur ce site. Toutefois, Maison Valfort SAS
                ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
                à disposition sur ce site.
              </p>
              <p className="text-noir/70 font-outfit leading-relaxed">
                En conséquence, Maison Valfort SAS décline toute responsabilité pour tout dommage
                résultant notamment d&apos;une imprécision ou inexactitude des informations disponibles
                sur ce site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">8. Droit applicable</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-noir mb-4">9. Contact</h2>
            <div className="bg-blanc p-6 border border-noir/10">
              <p className="text-noir/70 font-outfit leading-relaxed mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="text-noir/70 font-outfit space-y-2">
                <li><strong>Email :</strong> contact@maisonvalfort.com</li>
                <li><strong>Téléphone :</strong> +33 1 89 71 00 00</li>
                <li><strong>Formulaire :</strong>{" "}
                  <Link href="/#contact" className="text-bordeaux underline hover:no-underline">
                    Page de contact
                  </Link>
                </li>
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
            <Link href="/politique-confidentialite" className="text-blanc/40 text-sm hover:text-blanc transition-colors font-outfit">
              Politique de confidentialité
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
