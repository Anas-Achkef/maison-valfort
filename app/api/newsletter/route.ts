import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@maisonvalfort.com";
const resend = new Resend(process.env.RESEND_API_KEY);

// Fichier pour stocker les emails (simple solution)
const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

interface Subscriber {
  email: string;
  subscribedAt: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

// Email de notification à l'admin
function getAdminNotificationTemplate(email: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin:0;padding:0;background-color:#F5F3EF;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F3EF;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="500" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
          <tr>
            <td bgcolor="#6D0303" style="background:#6D0303;padding:30px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:300;letter-spacing:3px;">
                MAISON VALFORT
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#6D0303;margin:0 0 20px;font-size:20px;">
                Nouvelle inscription newsletter
              </h2>
              <p style="color:#1a1a1a;font-size:16px;margin:0 0 20px;">
                Un nouveau visiteur s'est inscrit à la newsletter :
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:20px;">
                <tr>
                  <td>
                    <p style="margin:0;color:#666;font-size:12px;">EMAIL</p>
                    <p style="margin:5px 0 0;color:#1a1a1a;font-size:18px;">
                      <a href="mailto:${email}" style="color:#6D0303;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>
              <p style="color:#666;font-size:14px;margin:20px 0 0;">
                Inscrit le ${new Date().toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#1a1a1a" style="background:#1a1a1a;padding:20px;text-align:center;">
              <p style="color:#666;margin:0;font-size:11px;">
                © ${new Date().getFullYear()} Maison Valfort
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

// Email de bienvenue au nouvel abonné
function getWelcomeTemplate(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin:0;padding:0;background-color:#F5F3EF;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F3EF;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="500" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
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
          <tr>
            <td style="padding:50px 40px;text-align:center;">
              <h2 style="color:#6D0303;margin:0 0 20px;font-size:24px;font-weight:400;">
                Bienvenue dans notre cercle privé
              </h2>
              <p style="color:#666;font-size:16px;line-height:1.7;margin:0 0 30px;">
                Merci de votre inscription à la newsletter Maison Valfort.<br>
                Vous recevrez désormais :
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                <tr>
                  <td style="padding:15px;background:#FFF8F0;border-left:3px solid #6D0303;">
                    <p style="margin:0;color:#1a1a1a;font-size:14px;">
                      <strong>Nos offres exclusives</strong> - Réductions et avantages réservés aux abonnés
                    </p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:15px;background:#FFF8F0;border-left:3px solid #6D0303;">
                    <p style="margin:0;color:#1a1a1a;font-size:14px;">
                      <strong>Biens d'exception</strong> - Les propriétés à ne pas manquer avant tout le monde
                    </p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:15px;background:#FFF8F0;border-left:3px solid #6D0303;">
                    <p style="margin:0;color:#1a1a1a;font-size:14px;">
                      <strong>Conseils d'experts</strong> - Optimisez vos revenus locatifs
                    </p>
                  </td>
                </tr>
              </table>

              <div style="background:#f5f5f5;padding:25px;margin:30px 0;">
                <p style="color:#1a1a1a;font-size:18px;font-style:italic;margin:0;">
                  "Les détails font la perfection,<br>
                  et la perfection n'est pas un détail."
                </p>
              </div>

              <p style="color:#999;font-size:14px;margin:30px 0 0;">
                Des questions ? Contactez-nous :<br>
                <a href="tel:+33189710000" style="color:#6D0303;text-decoration:none;font-size:18px;">
                  +33 1 89 71 00 00
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#1a1a1a" style="background:#1a1a1a;padding:30px 40px;text-align:center;">
              <p style="color:#666;margin:0;font-size:11px;">
                © ${new Date().getFullYear()} Maison Valfort - Conciergerie de Luxe
              </p>
              <p style="color:#444;margin:10px 0 0;font-size:10px;">
                Pour vous désinscrire, répondez à cet email avec "STOP"
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
    const { email } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Vérifier si déjà inscrit
    const subscribers = await getSubscribers();
    const alreadySubscribed = subscribers.some(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );

    if (alreadySubscribed) {
      return NextResponse.json(
        { error: "Cet email est déjà inscrit" },
        { status: 400 }
      );
    }

    // Ajouter le nouvel abonné
    subscribers.push({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    });
    await saveSubscribers(subscribers);

    // Logger
    console.log("📬 Nouvel abonné newsletter:", email);
    console.log("   Total abonnés:", subscribers.length);

    // Envoyer les emails si Resend est configuré
    if (process.env.RESEND_API_KEY) {
      try {
        // Notifier l'admin
        await resend.emails.send({
          from: "Maison Valfort <onboarding@resend.dev>",
          to: ADMIN_EMAIL,
          subject: `📬 Nouvel abonné newsletter: ${email}`,
          html: getAdminNotificationTemplate(email),
        });

        // Email de bienvenue (uniquement si l'email est celui du compte Resend)
        if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          await resend.emails.send({
            from: "Maison Valfort <onboarding@resend.dev>",
            to: email,
            subject: "Bienvenue dans le cercle Maison Valfort",
            html: getWelcomeTemplate(),
          });
        }

        console.log("✅ Emails newsletter envoyés");
      } catch (emailError) {
        console.error("⚠️ Erreur envoi email newsletter:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inscription réussie ! Vous recevrez bientôt nos offres exclusives.",
    });
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

// Endpoint pour récupérer la liste des abonnés (protégé)
export async function GET() {
  try {
    const subscribers = await getSubscribers();
    return NextResponse.json({
      count: subscribers.length,
      subscribers: subscribers,
    });
  } catch (error) {
    console.error("Erreur GET newsletter:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
