import { ArrowUpRight, Loader2, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Toast from "@/components/ui/Toast";
import { CONTRA_JOKI_URL, partners, services, studio } from "@/data/content";
import { emptyContact, validateContact, type ContactValues } from "@/lib/validation";
import { cn, externalLink } from "@/lib/utils";

const budgets = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

export default function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [tone, setTone] = useState<"success" | "error">("success");

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const accessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY;
  const fallbackEmail = import.meta.env.VITE_CONTACT_EMAIL || studio.email;

  function update(field: keyof ContactValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function notify(message: string, nextTone: "success" | "error" = "success") {
    setTone(nextTone);
    setToast(message);
    window.setTimeout(() => setToast(null), 4200);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      notify("Please fix the highlighted fields.", "error");
      return;
    }
    // Honeypot: silently accept submissions from bots.
    if (values.company.trim()) {
      setValues(emptyContact);
      return;
    }
    setSending(true);

    if (!endpoint) {
      const subject = encodeURIComponent(`Project inquiry — ${values.service}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nService: ${values.service}\nBudget: ${values.budget || "Not specified"}\n\n${values.message}`,
      );
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      notify("Opening your email app…");
      setSending(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...values, subject: "New project inquiry — Nitin & Mahi" }),
      });
      if (!response.ok) throw new Error("Form provider rejected the submission");
      notify("Message sent — we'll reply soon.");
      setValues(emptyContact);
    } catch {
      notify(`Couldn't send. Please email ${fallbackEmail} directly.`, "error");
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-c";

  return (
    <section id="contact" className="border-t border-line bg-bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Say hello"
          title={<>Let&apos;s build <span className="text-gradient">something real.</span></>}
          subtitle="Tell us what you need. Mahi will reply with next steps, a timeline and a clear quote."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {partners.map((partner) => {
              const isNitin = partner.id === "nitin";
              return (
                <Reveal key={partner.id}>
                  <div className={cn("card-surface rounded-3xl p-6", isNitin ? "border-a/25" : "border-b/25")}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={cn("font-mono text-[10px] uppercase tracking-[0.2em]", isNitin ? "text-a" : "text-b")}>
                          {isNitin ? "Technical & security queries" : "Project inquiries · primary"}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold">{partner.name}</h3>
                        <p className="mt-1 text-sm text-muted">{partner.role}</p>
                      </div>
                      <span className={cn("size-3 rounded-full", isNitin ? "bg-a" : "bg-b")} />
                    </div>
                    <a href={`mailto:${partner.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-c hover:underline">
                      <Mail className="size-4" /> {partner.email}
                    </a>
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4">
                      {partner.links.slice(0, 4).map((link) => (
                        <a key={link.label} href={link.url} {...externalLink()} className="text-xs text-muted hover:text-ink">
                          {link.label} <ArrowUpRight className="inline size-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal>
              <a
                href={CONTRA_JOKI_URL}
                {...(CONTRA_JOKI_URL === "#" ? {} : externalLink())}
                className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-a via-c to-b p-6 text-bg"
              >
                <span className="flex items-center gap-2 font-display text-lg font-bold">
                  <Sparkles className="size-5" /> Hire us on Contra Joki
                </span>
                <ArrowUpRight className="size-5" />
              </a>
            </Reveal>
          </div>

          <Reveal>
            <form onSubmit={submit} noValidate className="card-surface rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-medium text-ink">
                  Your name *
                  <input className={inputClass} value={values.name} onChange={(event) => update("name", event.target.value)} placeholder="Alex Client" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <span className="mt-1.5 block text-[11px] text-b">{errors.name}</span> : null}
                </label>
                <label className="block text-xs font-medium text-ink">
                  Email *
                  <input type="email" className={inputClass} value={values.email} onChange={(event) => update("email", event.target.value)} placeholder="alex@company.com" aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <span className="mt-1.5 block text-[11px] text-b">{errors.email}</span> : null}
                </label>
                <label className="block text-xs font-medium text-ink">
                  Service *
                  <select className={inputClass} value={values.service} onChange={(event) => update("service", event.target.value)} aria-invalid={Boolean(errors.service)}>
                    <option value="">Select a service</option>
                    {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
                  </select>
                  {errors.service ? <span className="mt-1.5 block text-[11px] text-b">{errors.service}</span> : null}
                </label>
                <label className="block text-xs font-medium text-ink">
                  Budget
                  <select className={inputClass} value={values.budget} onChange={(event) => update("budget", event.target.value)}>
                    <option value="">Prefer to discuss</option>
                    {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-xs font-medium text-ink">
                Project details *
                <textarea
                  className={cn(inputClass, "min-h-36 resize-y")}
                  value={values.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="What are you building, and what does success look like?"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <span className="mt-1.5 block text-[11px] text-b">{errors.message}</span> : null}
              </label>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={(event) => update("company", event.target.value)} />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-a to-c py-3.5 text-sm font-semibold text-bg disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {sending ? <Loader2 className="size-4 animate-spin" /> : <Mail className="size-4" />}
                {sending ? "Sending…" : "Send inquiry"}
              </button>
              <p className="mt-4 text-[11px] leading-relaxed text-muted">
                We only use your details to reply to this inquiry. Spam submissions are filtered with a honeypot and rate-limited by the form provider.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
      <Toast message={toast} tone={tone} />
    </section>
  );
}
