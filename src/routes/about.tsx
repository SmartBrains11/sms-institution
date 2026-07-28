import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Award, TrendingUp, Users, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Reveal, Counter } from "@/components/Reveal";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SMS Institute — 20 Years of Skilled Trades Training" },
      {
        name: "description",
        content:
          "Two decades of turning trainees into tradespeople placed across Singapore, Malaysia and Saudi Arabia.",
      },
      { property: "og:title", content: "About SMS Institute of Technology" },
      {
        property: "og:description",
        content: "Our story, mission and the milestones that shaped SMS Institute.",
      },
    ],
  }),
  component: About,
});

const MILESTONES = [
  {
    year: "2004",
    title: "Institute founded",
    body: "Started as a small welding training unit with a single workshop.",
  },
  {
    year: "2010",
    title: "First overseas batch",
    body: "Placed our first cohort of welders in the Gulf region.",
  },
  {
    year: "2016",
    title: "Expanded trades",
    body: "Added fitting and diesel mechanic programs with new lab spaces.",
  },
  {
    year: "2020",
    title: "Skill testing center",
    body: "Recognized skill testing setup for international employer audits.",
  },
  {
    year: "2024",
    title: "500+ placements",
    body: "Crossed 500 international placements across three countries.",
  },
];

function About() {
  return (
    <PageShell>
      <PageHero
        image={IMG.welding}
        eyebrow="About the Institute"
        title={
          <>
            20 years of turning <span className="text-accent-green">trainees</span> into
            tradespeople.
          </>
        }
        subtitle="Two decades of steady work — building skills that translate directly to overseas job sites."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={IMG.office}
                alt="SMS counseling office"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block glass-card rounded-2xl px-6 py-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Since</div>
                <div className="font-display font-black text-4xl text-navy">2004</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-navy-deep leading-[1.05]">
              Built from the workshop floor.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                SMS Institute of Technology started with one workshop, one trainer, and a simple
                idea — that skilled trades change lives when they're taught properly.
              </p>
              <p>
                Twenty years later, we've helped over a thousand candidates train and thousands walk onto
                overseas job sites confident in what they can do.
              </p>
              <p>
                Every program we run is shaped by what employers abroad ask us for — because getting
                hired is the point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-10 border border-black/5 h-full">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy/5 text-navy">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display font-black text-3xl text-navy-deep">Mission</h3>
              <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                Train skilled tradespeople to the standard overseas employers hire for — and stand
                behind every candidate we place.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl brand-gradient text-white p-10 h-full relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-accent-green/20 blur-3xl" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-display font-black text-3xl">Vision</h3>
              <p className="relative mt-3 text-white/85 text-lg leading-relaxed">
                To be the most trusted skill development and testing center for international trade
                careers from India.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Journey
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
                Milestones along the way.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-navy/10 via-navy/30 to-navy/10" />
            <ol className="space-y-10">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <li className="relative pl-16">
                    <span className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-full brand-gradient text-white text-xs font-black font-display ring-8 ring-background">
                      {m.year.slice(-2)}
                    </span>
                    <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                      {m.year}
                    </div>
                    <h3 className="mt-1 font-display font-black text-2xl text-navy-deep">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-xl">{m.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-navy-deep text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="container-x relative grid gap-10 md:grid-cols-3">
          {[
            { icon: Award, value: 20, suffix: "+", label: "Years Experience" },
            { icon: TrendingUp, value: 5000, suffix: "+", label: "Placed Overseas" },
            { icon: MapPin, value: 3, suffix: "+", label: "Countries Served" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-accent-green">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display font-black text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[2.5rem] bg-secondary/40 p-10 md:p-16 flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-display font-black text-3xl md:text-4xl text-navy-deep">
                  Ready to see the workshop?
                </h2>
                <p className="mt-3 text-muted-foreground text-lg">
                  Visit our campus or talk to a counselor first — whichever works for you.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full brand-gradient text-white px-7 py-4 font-semibold shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Book a Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
