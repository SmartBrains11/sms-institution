import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMG, CONTACT, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SMS Skill Development & Testing Center — Check Your Eligibility" },
      {
        name: "description",
        content:
          "Talk to a counselor, WhatsApp us, or visit the campus. We reply within one working day.",
      },
      { property: "og:title", content: "Contact SMS Skill Development & Testing Center" },
      {
        property: "og:description",
        content: "Reach the team for counseling, admissions and placement queries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero
        image={IMG.reception}
        eyebrow="Get in Touch"
        title={
          <>
            Let's find the right <span className="text-accent-green">trade</span> for you.
          </>
        }
        subtitle="Share a few details and a counselor will get back within one working day. No spam, no fluff."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <ContactInfo />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-black/5 shadow-xl">
              <iframe
                title="SMS Skill Development & Testing Center location"
                src="https://www.google.com/maps?q=India&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", email: "", trade: "", message: "" });

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 80) errs.name = "Please enter your name.";
    if (!/^[+0-9\s-]{7,20}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (form.message.length > 1000) errs.message = "Message too long.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      const text = `Hi SMS Skill Development & Testing Center, I'd like to submit an inquiry:\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        (form.email ? `*Email:* ${form.email}\n` : "") +
        `*Trade:* ${form.trade || "Not specified"}\n` +
        (form.message ? `*Message:* ${form.message}` : "");
      
      const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-10 md:p-14 border border-black/5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-green/15 text-accent-green mx-auto">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display font-black text-3xl text-navy-deep">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-muted-foreground">
          A counselor will reach out within one working day. For anything urgent, WhatsApp us now.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold"
        >
          <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl bg-white p-8 md:p-10 border border-black/5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]"
    >
      <h2 className="font-display font-black text-3xl text-navy-deep">Send an inquiry</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        We'll match you with a counselor for your trade.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            required
            maxLength={80}
            value={form.name}
            onChange={set("name")}
            className="input"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input required type="tel" value={form.phone} onChange={set("phone")} className="input" />
        </Field>
        <Field label="Email (optional)" error={errors.email}>
          <input type="email" value={form.email} onChange={set("email")} className="input" />
        </Field>
        <Field label="Interested trade">
          <select value={form.trade} onChange={set("trade")} className="input">
            <option value="">Select a trade</option>
            <option>Welder</option>
            <option>Fitter</option>
            <option>Electrician</option>
            <option>Other Trades</option>
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Message" error={errors.message}>
            <textarea
              rows={4}
              maxLength={1000}
              value={form.message}
              onChange={set("message")}
              className="input resize-none"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full brand-gradient text-white px-7 py-4 font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
      >
        Submit inquiry <Send className="h-4 w-4" />
      </button>

      <style>{`
        .input {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 0.9rem;
          background: var(--color-secondary);
          border: 1px solid transparent;
          font-size: 0.95rem;
          outline: none;
          transition: all .2s;
        }
        .input:focus { background: white; border-color: var(--navy); box-shadow: 0 0 0 4px color-mix(in oklab, var(--navy) 12%, transparent); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function ContactInfo() {
  return (
    <div className="h-full rounded-3xl brand-gradient text-white p-8 md:p-10 relative overflow-hidden">
      <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-accent-green/20 blur-3xl" />
      <h2 className="relative font-display font-black text-3xl">Reach us directly</h2>
      <p className="relative mt-2 text-white/80 text-sm">Prefer to talk? Here are all the ways.</p>

      <ul className="relative mt-8 space-y-5">
        <Item
          icon={Phone}
          label="Call"
          value={CONTACT.phone}
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
        />
        <Item
          icon={Phone}
          label="Call (Alt)"
          value={CONTACT.phone2}
          href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`}
        />
        <Item icon={MessageCircle} label="WhatsApp" value="Chat now" href={WHATSAPP_URL} accent />
        <Item icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
        <Item icon={MapPin} label="Address" value={CONTACT.address} />
      </ul>

      <div className="relative mt-10 pt-8 border-t border-white/15">
        <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
          Working hours
        </div>
        <div className="mt-2 text-white/85">Mon – Sat · 9:00 AM – 6:00 PM</div>
      </div>
    </div>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <>
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accent ? "bg-accent-green text-navy-deep" : "bg-white/15 text-white"}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-white/60 font-bold">{label}</div>
        <div className="font-semibold text-white">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="flex items-center gap-4 hover:opacity-90"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
