import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Configuration
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@maisonvalfort.com";
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Template email élégant
function getEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3EF; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F3EF; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0;">

          <!-- Header -->
          <tr>
            <td bgcolor="#6D0303" style="background:#6D0303;padding:40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:300;letter-spacing:4px;">
                MAISON VALFORT
              </h1>
              <p style="color:#cccccc;margin:10px 0 0;font-size:12px;letter-spacing:2px;">
                CONCIERGERIE DE LUXE
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <h2 style="color: #6D0303; margin: 0 0 30px; font-size: 24px; font-weight: 400;">
                Nouveau message reçu
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nom</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px;">
                      <a href="mailto:${data.email}" style="color: #6D0303; text-decoration: none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px;">
                      ${data.phone ? `<a href="tel:${data.phone}" style="color: #6D0303; text-decoration: none;">${data.phone}</a>` : '<span style="color: #999;">Non renseigné</span>'}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message du client - SECTION PRINCIPALE -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td bgcolor="#6D0303" style="background:#6D0303;color:#ffffff;padding:12px 15px;font-size:14px;font-weight:bold;letter-spacing:1px;">
                    📝 MESSAGE DU CLIENT - À TRAITER
                  </td>
                </tr>
                <tr>
                  <td style="background:#FFF8F0;padding:25px;border:2px solid #6D0303;border-top:none;">
                    <p style="margin:0;color:#1a1a1a;font-size:16px;line-height:1.8;">
                      ${data.message.replace(/\n/g, '<br>')}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Résumé rapide -->
              <div style="background-color: #f0f0f0; padding: 15px; margin-bottom: 20px; font-size: 13px;">
                <strong>📋 Résumé :</strong> ${data.name} (${data.email}${data.phone ? ` - ${data.phone}` : ''}) vous a contacté.
              </div>

              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td align="center" style="padding:5px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="#6D0303" style="background:#6D0303;padding:18px 50px;">
                          <a href="mailto:${data.email}?subject=Re: Votre demande - Maison Valfort&body=${encodeURIComponent(`Bonjour ${data.name},\n\nMerci pour votre message.\n\n---\nVotre question était :\n"${data.message}"\n---\n\n`)}"
                             style="color:#ffffff;text-decoration:none;font-size:15px;letter-spacing:1px;font-weight:bold;">
                            ✉️ RÉPONDRE PAR EMAIL
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td align="center" style="padding:10px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="#1a1a1a" style="background:#1a1a1a;padding:12px 30px;">
                          <a href="tel:${data.phone}" style="color:#ffffff;text-decoration:none;font-size:13px;letter-spacing:1px;">
                            📞 APPELER ${data.phone}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#1a1a1a" style="background:#1a1a1a;padding:30px 40px;text-align:center;">
              <p style="color:#888888;margin:0;font-size:12px;">
                Message reçu le ${new Date().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="color:#666666;margin:15px 0 0;font-size:11px;">
                © ${new Date().getFullYear()} Maison Valfort - Conciergerie de Luxe
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Email de confirmation pour le client
function getConfirmationTemplate(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3EF; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F3EF; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">

          <!-- Header -->
          <tr>
            <td style="background-color: #6D0303; padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 4px;">
                MAISON VALFORT
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px; text-align: center;">
              <h2 style="color: #6D0303; margin: 0 0 20px; font-size: 24px; font-weight: 400;">
                Merci ${name} !
              </h2>
              <p style="color: #666; font-size: 16px; line-height: 1.7; margin: 0 0 30px;">
                Nous avons bien reçu votre message.<br>
                Notre équipe vous répondra dans les plus brefs délais,<br>
                généralement sous 24 heures.
              </p>

              <div style="background-color: #F5F3EF; padding: 25px; margin: 30px 0;">
                <p style="color: #1a1a1a; font-size: 18px; font-style: italic; margin: 0;">
                  "Les détails font la perfection,<br>
                  et la perfection n'est pas un détail."
                </p>
              </div>

              <p style="color: #999; font-size: 14px; margin: 30px 0 0;">
                En attendant, n'hésitez pas à nous appeler :<br>
                <a href="tel:+33189710000" style="color: #6D0303; text-decoration: none; font-size: 18px;">
                  +33 1 89 71 00 00
                </a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px 40px; text-align: center;">
              <p style="color: rgba(255,255,255,0.3); margin: 0; font-size: 11px;">
                © ${new Date().getFullYear()} Maison Valfort - Conciergerie de Luxe
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validation des données
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Logger le message reçu
    console.log("📧 Nouveau message reçu:");
    console.log("   Nom:", data.name);
    console.log("   Email:", data.email);
    console.log("   Téléphone:", data.phone || "Non renseigné");
    console.log("   Message:", data.message);

    // Vérifier si Resend est configuré
    if (!process.env.RESEND_API_KEY) {
      console.log("⚠️ RESEND_API_KEY non configurée - Email non envoyé");

      return NextResponse.json({
        success: true,
        message: "Votre message a bien été reçu. Nous vous répondrons sous 24h.",
      });
    }

    // Essayer d'envoyer les emails
    try {
      // Envoyer l'email à l'admin
      await resend.emails.send({
        from: "Maison Valfort <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `💎 Nouveau message de ${data.name}`,
        html: getEmailTemplate(data),
      });

      // Envoyer un email de confirmation au client
      await resend.emails.send({
        from: "Maison Valfort <onboarding@resend.dev>",
        to: data.email,
        subject: "Votre demande a bien été reçue - Maison Valfort",
        html: getConfirmationTemplate(data.name),
      });

      console.log("✅ Emails envoyés avec succès");
    } catch (emailError) {
      // Si l'envoi d'email échoue, on log l'erreur mais on retourne quand même un succès
      console.error("⚠️ Erreur d'envoi email (message quand même reçu):", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
    });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
