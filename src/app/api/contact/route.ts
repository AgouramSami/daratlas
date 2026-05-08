import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website?: string;
  honeypot?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Format de requête invalide' }, { status: 400 });
  }

  if (body.honeypot && body.honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, projectType, budget, message, website } = body;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? 'contact@daratlas.fr';
  const from = process.env.CONTACT_EMAIL_FROM ?? 'site@daratlas.fr';

  if (!apiKey) {
    // En l'absence de clé Resend, on log côté serveur sans bloquer le visiteur.
    // Phase intermédiaire avant activation du compte email pro.
    console.warn('[contact] RESEND_API_KEY non défini, message non envoyé:', { name, email });
    return NextResponse.json({ ok: true, queued: true });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Nouveau contact, Dar Atlas</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Type de projet :</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Budget :</strong> ${escapeHtml(budget || 'non précisé')}</p>
    ${website ? `<p><strong>Site existant :</strong> ${escapeHtml(website)}</p>` : ''}
    <hr />
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    const result = await resend.emails.send({
      from: `Dar Atlas <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Contact site : ${projectType}, ${name}`,
      html,
    });

    if (result.error) {
      console.error('[contact] Resend a retourné une erreur:', result.error);
      return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (error) {
    console.error('[contact] Exception lors de l\'envoi:', error);
    return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 });
  }
}
