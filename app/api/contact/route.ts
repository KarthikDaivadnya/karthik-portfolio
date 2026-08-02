import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * TODO: this validates and logs the submission but does NOT send an email —
 * no email provider is configured. Wire in Resend, SendGrid, Nodemailer +
 * SMTP, or EmailJS (client-side) before relying on this in production, and
 * add the relevant API key to .env.local (see .env.example).
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.subject !== "string" ||
    typeof body.message !== "string" ||
    body.name.trim().length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()) ||
    body.subject.trim().length < 3 ||
    body.message.trim().length < 15
  ) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("[contact] new submission:", { name: body.name, email: body.email, subject: body.subject });

  return NextResponse.json({ ok: true });
}
