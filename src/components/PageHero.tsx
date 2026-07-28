import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[68vh] flex items-end pt-32 pb-16 overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/95" />
      <div className="container-x relative text-white">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green border border-white/15">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] text-balance max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
