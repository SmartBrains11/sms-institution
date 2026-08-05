import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  CheckCircle2,
  Flame,
  Wrench,
  Cog,
  Boxes,
  MapPin,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMG, PROGRAMS } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Welder, Fitter & Electrician Training | SMS Skill Development & Testing Center" },
      {
        name: "description",
        content:
          "Vocational programs in welding, fitting, electrical and instrumentation and other trades — designed for international placement.",
      },
      { property: "og:title", content: "Programs at SMS Skill Development & Testing Center" },
      {
        property: "og:description",
        content: "Trade programs built for overseas hiring standards.",
      },
    ],
  }),
  component: Programs,
});

const ICONS: Record<string, any> = {
  "6g-tig-arc-welder": Flame,
  "mig-welder": Flame,
  "arc-welder": Flame,
  "ss-full-tig": Flame,
  "cs-full-tig": Flame,
  "pipe-fitter": Wrench,
  "fabricator": Wrench,
  "structure-fitter": Wrench,
  "electrician": Cog,
  "rigger": Wrench,
  "scaffolding": Boxes,
  "steel-fixer": Wrench,
};

function Programs() {
  return (
    <PageShell>
      <PageHero
        image={IMG.welding}
        eyebrow="Our Programs"
        title={
          <>
            Trade programs built for <span className="text-accent-green">real hiring</span>.
          </>
        }
        subtitle="Each program is timed and structured against the skill tests overseas employers use to hire."
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-8">
          {PROGRAMS.map((p, i) => {
            const Icon = ICONS[p.slug] ?? GraduationCap;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.slug} delay={0.05}>
                <article
                  className={`grid gap-8 lg:grid-cols-12 items-stretch rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]`}
                >
                  <div
                    className={`lg:col-span-5 relative min-h-[280px] ${reverse ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={p.image || IMG.welding}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/50 to-transparent" />
                    <div className="relative p-8 flex flex-col h-full text-white">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-green/20 text-accent-green">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="mt-auto font-display font-black text-4xl md:text-5xl leading-[1.02]">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-white/80 max-w-sm">{p.tagline}</p>
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-7 p-8 md:p-10 flex flex-col ${reverse ? "lg:order-1" : ""}`}
                  >
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-secondary/40 p-4">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-bold">
                          <Clock className="h-4 w-4" /> Duration
                        </div>
                        <div className="mt-1 font-display font-bold text-navy-deep">
                          {p.duration}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                        Learning Outcomes
                      </div>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {p.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-green shrink-0" />{" "}
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-6 border-t border-black/5">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Countries hiring this trade
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.countries.map((c) => (
                          <span
                            key={c}
                            className="rounded-full bg-navy/5 text-navy px-3 py-1 text-xs font-semibold"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full brand-gradient text-white px-6 py-3 text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        Inquire Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
