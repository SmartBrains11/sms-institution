import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  HardHat,
  Users2,
  ClipboardCheck,
  FileCheck2,
  Sparkles,
  MessageCircle,
  Plane,
  GraduationCap,
  Wrench,
  Flame,
  Cog,
  Boxes,
  Star,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal, Counter } from "@/components/Reveal";
import { IMG, STATS, PROGRAMS, COUNTRIES, PROCESS, TESTIMONIALS, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustStats />
      <WhyChoose />
      <ProgramsPreview />
      <TrainingEnvironment />
      <CountriesSection />
      <ProcessTimeline />
      <PartnersSection />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={IMG.welding}
        alt="SMS Skill Development & Testing Center welding workshop"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/75 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

      <div className="container-x relative z-10 pt-28 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
            Skill Development & Testing Center
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 font-black text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-balance"
          >
            Train here.
            <br />
            <span className="text-accent-green">Work abroad.</span>
            <br />
            Build a career that lasts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed"
          >
            SMS Skill Development & Testing Center trains skilled workers in welding, fitting and diesel
            mechanics — and helps place them in overseas jobs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-7 py-4 font-semibold shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-4 font-semibold hover:bg-white/15 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="glass-dark rounded-3xl p-6 text-white"
            style={{ animation: "float-slow 6s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-green/20 text-accent-green">
                <Plane className="h-5 w-5" />
              </span>
              <div>
                <div className="text-3xl font-black font-display leading-none">
                  <Counter to={5000} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                  Placed Overseas
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="glass-dark rounded-3xl p-6 text-white mt-4 ml-8"
            style={{ animation: "float-slow 7s ease-in-out infinite 1.5s" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="text-3xl font-black font-display leading-none">
                  <Counter to={20} suffix="+ yrs" />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                  Trusted Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-5 rounded-full border border-white/30 overflow-hidden">
          <span
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"
            style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}

function TrustStats() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 rounded-3xl bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] p-4 md:p-6 border border-black/5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center px-3 py-4">
                <div className="text-4xl md:text-5xl font-black font-display text-navy tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const row1Images = [
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/images/17.jpeg",
    "/images/18.jpeg",
    "/images/19.jpeg",
    "/images/20.jpeg",
  ];

  const row2Images = [
    "/images/21.jpeg",
    "/images/22.jpeg",
    "/images/23.jpeg",
    "/images/24.jpeg",
    "/images/25.jpeg",
    "/images/26.jpeg",
    "/images/27.jpeg",
    "/images/28.jpeg",
    "/images/29.jpeg",
    "/images/30.jpeg",
    "/images/31.jpeg",
    "/images/32.jpeg",
    "/images/33.jpeg",
    "/images/34.jpeg",
    "/images/dubai 1.jpeg",
    "/images/dubai 2.jpeg",
    "/images/dubai 3.jpeg",
    "/images/dubai 4.jpeg",
    "/images/dubai 5.jpeg",
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden border-y border-black/5">
      <div className="container-x mb-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Our Placement & Hiring Network
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-navy-deep leading-tight">
              Where Our Trainees Work
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              SMS Skill Development & Testing Center connects qualified welders, fitters, and technicians with reputable
              employers across Singapore, Malaysia, and the Middle East.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 w-full pause-on-hover relative">
        {/* Row 1: Scrolling Left to Right */}
        <div className="relative flex overflow-x-hidden w-full mask-gradient">
          <div className="animate-marquee flex gap-6 items-center py-2">
            {row1Images.map((src, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-52 h-32 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow p-3 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Placement Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless scrolling */}
          <div className="animate-marquee flex gap-6 items-center py-2" aria-hidden="true">
            {row1Images.map((src, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 w-52 h-32 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow p-3 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Placement Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right to Left */}
        <div className="relative flex overflow-x-hidden w-full mask-gradient">
          <div className="animate-marquee-reverse flex gap-6 items-center py-2">
            {row2Images.map((src, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-52 h-32 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow p-3 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Placement Client ${index + 16}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless scrolling */}
          <div className="animate-marquee-reverse flex gap-6 items-center py-2" aria-hidden="true">
            {row2Images.map((src, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 w-52 h-32 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow p-3 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Placement Client ${index + 16}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-10 pt-8 border-t border-black/5">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mr-2">
              Placement Locations:
            </span>
            {[
              { name: "Saudi Arabia", flag: "🇸🇦" },
              { name: "Oman", flag: "🇴🇲" },
              { name: "Dubai (UAE)", flag: "🇦🇪" },
              { name: "Russia", flag: "🇷🇺" },
              { name: "Kuwait", flag: "🇰🇼" },
              { name: "Bahrain", flag: "🇧🇭" },
            ].map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-sm font-bold text-navy-deep hover:-translate-y-0.5 transition-all"
              >
                <span className="text-lg" role="img" aria-label={c.name}>
                  {c.flag}
                </span>
                {c.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: HardHat,
    title: "Hands-on workshop training",
    body: "Real machinery, real hours. No shortcut theory-only classes.",
  },
  {
    icon: Users2,
    title: "Industry experienced trainers",
    body: "Instructors who've worked on the same jobs you're heading to.",
  },
  {
    icon: Plane,
    title: "International placement support",
    body: "Direct hiring partners in Singapore, Malaysia and Saudi Arabia.",
  },
  {
    icon: ClipboardCheck,
    title: "Interview preparation",
    body: "Mock interviews and technical drills before every employer round.",
  },
  {
    icon: FileCheck2,
    title: "Documentation assistance",
    body: "Passport, certificates, medicals and skill tests — handled.",
  },
  {
    icon: Sparkles,
    title: "Transparent process",
    body: "Clear fees, clear timelines, clear expectations. No surprises.",
  },
];

function WhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Why Choose SMS Skill Development & Testing Center
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
              Built for real jobs, not just certificates.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every hour on our workshop floor is designed to match what employers abroad actually
              test for on day one.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl bg-white border border-black/5 p-7 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_60px_-20px_rgba(30,58,138,0.35)] hover:-translate-y-1 transition-all duration-300">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display font-bold text-xl text-navy-deep">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROG_ICONS: Record<string, any> = {
  welder: Flame,
  fitter: Wrench,
  "diesel-mechanic": Cog,
  "other-trades": Boxes,
};

function ProgramsPreview() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/40 to-transparent">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Our Programs
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
                Trades employers hire for.
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:gap-3 transition-all"
            >
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => {
            const Icon = PROG_ICONS[p.slug] ?? GraduationCap;
            return (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to="/programs"
                  className="group relative block h-full overflow-hidden rounded-3xl bg-navy-deep text-white p-7 min-h-[280px] hover:-translate-y-1 transition-all duration-500 shadow-xl"
                >
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{
                      backgroundImage: `url(${IMG.welding})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/90 to-navy/70" />
                  <div className="relative flex h-full flex-col">
                    <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent-green/20 text-accent-green group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display font-black text-2xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.tagline}</p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-green">
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrainingEnvironment() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Inside SMS Skill Development & Testing Center
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
              A real workshop. Real training.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From the welding booths to counseling rooms — every space is built for hands-on
              learning.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 lg:col-span-8">
            <figure className="group relative overflow-hidden rounded-3xl">
              <img
                src={IMG.welding}
                alt="Welding workshop booths at SMS Skill Development & Testing Center"
                className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                  01 — Welding Bay
                </div>
                <div className="mt-1 font-display font-bold text-xl">
                  Individual booths equipped for 3G & 6G training
                </div>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <figure className="group relative overflow-hidden rounded-3xl h-full">
              <img
                src={IMG.reception}
                alt="Reception area"
                className="w-full h-[280px] md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                  02 — Reception
                </div>
                <div className="mt-1 font-display font-bold text-xl">
                  Walk-in support & counseling
                </div>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.15} className="col-span-12 sm:col-span-6 lg:col-span-5">
            <figure className="group relative overflow-hidden rounded-3xl">
              <img
                src={IMG.office}
                alt="Counselor office"
                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                  03 — Counseling Room
                </div>
                <div className="mt-1 font-display font-bold text-xl">1-on-1 guidance sessions</div>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-3xl brand-gradient text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-accent-green/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                  04 — Our Promise
                </div>
                <h3 className="mt-3 font-display font-black text-3xl md:text-4xl leading-tight">
                  You spend the hours. We open the doors.
                </h3>
                <p className="mt-4 text-white/80 max-w-md">
                  Every trainee gets floor time on the exact equipment they'll use overseas — from
                  arc welders to diesel test benches.
                </p>
              </div>
              <Link
                to="/about"
                className="relative inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent-green hover:gap-3 transition-all"
              >
                About the institute <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CountriesSection() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Where You'll Work
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-[1.05]">
              Live contracts. Real countries.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {COUNTRIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className="group h-full rounded-3xl glass-dark p-7 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{c.flag}</span>
                  <span className="text-xs uppercase tracking-widest text-accent-green font-bold">
                    Active hiring
                  </span>
                </div>
                <h3 className="mt-6 font-display font-black text-2xl">{c.name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.blurb}</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="text-xs uppercase tracking-widest text-white/50">Roles</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.roles.map((r) => (
                      <span key={r} className="text-xs rounded-full bg-white/10 px-3 py-1">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Your Journey
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
              From counseling to departure.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Six clear steps. Same team. No handoffs to strangers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-navy/10 via-navy/30 to-navy/10 md:-translate-x-1/2" />
          <ol className="space-y-8 md:space-y-16">
            {PROCESS.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={p.title} delay={0.05 * i}>
                  <li
                    className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center`}
                  >
                    <div
                      className={`${left ? "md:order-1 md:text-right md:pr-14" : "md:order-2 md:text-left md:pl-14"}`}
                    >
                      <div className="text-xs uppercase tracking-widest text-accent-green font-bold">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display font-black text-2xl md:text-3xl text-navy-deep">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{p.body}</p>
                    </div>
                    <div className={`hidden md:block ${left ? "md:order-2" : "md:order-1"}`} />
                    <span className="absolute left-4 md:left-1/2 top-1 md:-translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-navy text-white text-xs font-bold ring-8 ring-background">
                      {i + 1}
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Success Stories
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-navy-deep leading-[1.05]">
              Trainees who now work abroad.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-3xl bg-white border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] flex flex-col">
                <div className="flex gap-0.5 text-accent-green">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg text-navy-deep font-medium leading-snug">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-black/5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full brand-gradient text-white font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-bold text-navy-deep">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.trade} · {t.country}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] brand-gradient text-white p-10 md:p-20">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-green/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Not sure yet?
              </span>
              <h2 className="mt-3 font-display font-black text-4xl md:text-6xl leading-[1.02]">
                Not sure which path is right for you?
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/85 max-w-xl">
                Talk to a counselor today. It's free, it's straightforward, and it takes 15 minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-7 py-4 font-semibold shadow-2xl hover:-translate-y-0.5 transition-all"
                >
                  Book Free Counseling <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-7 py-4 font-semibold hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
