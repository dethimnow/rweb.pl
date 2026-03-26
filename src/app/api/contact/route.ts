import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Brak RESEND_API_KEY — skonfiguruj zmienne w Vercel." },
      { status: 503 },
    );
  }

  const to =
    process.env.CONTACT_FORM_TO?.trim() || "kontakt@rweb.com";

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe żądanie." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    "_gotcha" in body
  ) {
    return NextResponse.json({ error: "Odrzucono." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const gotcha = typeof b._gotcha === "string" ? b._gotcha : "";
  if (gotcha.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const consent = b.consent === true;

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Podaj imię i nazwę (max 200 znaków)." }, { status: 400 });
  }
  if (!emailOk(email)) {
    return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 8000) {
    return NextResponse.json(
      { error: "Wiadomość: min. 10 znaków, max. 8000." },
      { status: 400 },
    );
  }
  if (!consent) {
    return NextResponse.json(
      { error: "Wymagana zgoda na kontakt w sprawie zapytania." },
      { status: 400 },
    );
  }

  const from =
    process.env.RESEND_FROM?.trim() || "rweb.pl <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[rweb.pl] Konsultacja — ${name}`,
    html: `
      <p><strong>Imię i nazwa:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Wiadomość:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości. Spróbuj później lub zadzwoń." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
