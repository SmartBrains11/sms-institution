import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, ShieldCheck, Wallet, Users, Star } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMG, COUNTRIES, TESTIMONIALS, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — Singapore, Malaysia, Saudi Arabia | SMS Skill Development & Testing Center" },
      {
        name: "description",
        content:
          "500+ overseas placements. Transparent process, real contracts and end-to-end documentation support.",
      },
      { property: "og:title", content: "International Placements at SMS Skill Development & Testing Center" },
      {
        property: "og:description",
        content: "Where SMS Skill Development & Testing Center trainees work and how the placement process runs.",
      },
    ],
  }),
  component: Placements,
});

const PIPELINE = ["Training", "Documentation", "Interview", "Visa", "Departure"];

function Placements() {
  return (
    <PageShell>
      <PageHero
        image={IMG.welding}
        eyebrow="Placements"
        title={
          <>
            Real contracts. <span className="text-accent-green">Real countries.</span> Real people.
          </>
        }
        subtitle="Every placement is a verified overseas job — not a promise. Here's how it works, where we hire, and who's already gone."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3 font-semibold shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Apply now <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-6 py-3 font-semibold hover:bg-white/15 transition-colors"
          >
            Talk to a counselor
          </a>
        </div>
      </PageHero>

      {/* Trust bar */}
      <section className="py-12">
        <div className="container-x grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Verified employers",
              body: "Every contract vetted before we sign a candidate.",
            },
            {
              icon: Users,
              title: "500+ placed",
              body: "Real trainees now working across three countries.",
            },
            {
              icon: Wallet,
              title: "Transparent fees",
              body: "You know what you pay and what it covers, up front.",
            },
          ].map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-green/15 text-accent-green">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display font-bold text-navy-deep">{t.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Country cards */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Where you'll work
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
                Active hiring countries.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl">{c.flag}</span>
                    <span className="rounded-full bg-accent-green/15 text-navy-deep text-xs font-bold px-3 py-1 uppercase tracking-widest">
                      Hiring
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-black text-2xl text-navy-deep">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground mb-1">Hiring roles</dt>
                      <dd className="flex flex-wrap gap-1.5">
                        {c.roles.map((r) => (
                          <span
                            key={r}
                            className="rounded-full bg-navy/5 text-navy px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {r}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-16 md:py-24 bg-navy-deep text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Placement Process
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-[1.05]">
              Training to departure, in one place.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {PIPELINE.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="glass-dark rounded-3xl p-6 h-full">
                  <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                    Step {i + 1}
                  </div>
                  <div className="mt-2 font-display font-black text-2xl">{step}</div>
                  <div className="mt-4 h-1 w-10 bg-accent-green rounded-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
