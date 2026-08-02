"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { useToast } from "@/components/ui/Toast";
import { profile } from "@/lib/data";

interface FormState { name: string; email: string; subject: string; message: string; }
const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email.";
    if (form.subject.trim().length < 3) next.subject = "Add a subject line.";
    if (form.message.trim().length < 15) next.message = "Message should be at least 15 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast("Please fix the highlighted fields.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // eslint-disable-next-line no-console
      console.warn("[contact] EmailJS env vars missing — check .env.local has NEXT_PUBLIC_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY, then restart the dev server.");
      toast("Email sending isn't configured yet — see the console for details.");
      return;
    }

    setSubmitting(true);
    try {
      // Sending both naming conventions (from_name/name, subject/title, etc.)
      // so this works regardless of which variable names your EmailJS
      // template's Content tab actually uses — check your template's
      // {{...}} placeholders against whichever set applies, and feel free to
      // delete the unused half once you've confirmed which one your
      // template needs.
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: form.name,
          name: form.name,
          to_email: form.email,
          email: form.email,
          subject: form.subject,
          title: form.subject,
          message: form.message,
        },
        { publicKey }
      );
      toast("Message sent — I'll reply within a day.");
      setForm(initial);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error("[contact] EmailJS error:", {
        name: err?.name,
        message: err?.message,
        status: err?.status,
        text: err?.text,
        raw: err,
      });
      toast(`Couldn't send right now — email ${profile.email} directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            Contact
          </div>
          <h2 className="font-grotesk text-[clamp(26px,3.4vw,36px)] font-semibold leading-tight">
            Let&apos;s talk about a role or a project.
          </h2>
          <p className="mt-3.5 max-w-md text-[15px] leading-relaxed text-inkDim">
            Recruiters, hiring managers, or anyone with an interesting problem — I usually reply within
            a day.
          </p>

          <GlowCard className="mt-7 divide-y divide-white/10 px-6">
            <div className="flex items-center gap-3.5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-secondary"><Mail size={15} /></span>
              <b className="text-[13.5px]">{profile.email}</b>
            </div>
            <div className="flex items-center gap-3.5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-secondary"><Phone size={15} /></span>
              <span className="text-[13.5px] text-inkDim">+91 7624991932</span>
            </div>
            <div className="flex items-center gap-3.5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-secondary"><MapPin size={15} /></span>
              <span className="text-[13.5px] text-inkDim">{profile.location}</span>
            </div>
          </GlowCard>

          <div className="mt-6 h-48 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Location map"
              loading="lazy"
              className="h-full w-full grayscale"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.40%2C12.80%2C77.85%2C13.15&layer=mapnik"
            />
          </div>
        </div>

        <GlowCard as="form" className="p-8" onSubmit={handleSubmit} noValidate>
          {(["name", "email", "subject"] as const).map((field) => (
            <div key={field} className="mb-4.5 py-4">
              <label htmlFor={`c-${field}`} className="mb-2 block font-mono text-[11.5px] uppercase tracking-wide text-inkDim">
                {field}
              </label>
              <input
                id={`c-${field}`}
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 text-[14px] outline-none transition-colors focus:border-secondary"
              />
              {errors[field] && <p className="mt-1.5 text-xs text-accent">{errors[field]}</p>}
            </div>
          ))}
          <div className="mb-4.5 py-4">
            <label htmlFor="c-message" className="mb-2 block font-mono text-[11.5px] uppercase tracking-wide text-inkDim">Message</label>
            <textarea
              id="c-message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={4}
              className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 text-[14px] outline-none transition-colors focus:border-secondary"
            />
            {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message}</p>}
          </div>
          <MagneticButton
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-primary to-accent px-3 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </MagneticButton>
        </GlowCard>
      </div>
    </section>
  );
}