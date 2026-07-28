import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { IMG, NAV } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const transparent = path === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_-16px_rgba(15,23,42,0.25)]"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={IMG.logo} alt="SMS Institute" className="h-11 w-auto" />
          <span
            className={`hidden sm:block font-display font-extrabold text-sm leading-tight ${transparent ? "text-white" : "text-navy-deep"}`}
          >
            SMS Institute
            <span
              className={`block text-[10px] font-medium tracking-widest uppercase ${transparent ? "text-white/70" : "text-muted-foreground"}`}
            >
              Skill Development & Testing
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  transparent
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-foreground/70 hover:text-navy"
                }`}
              >
                {n.label}
                {active && (
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full ${transparent ? "bg-white" : "bg-navy"}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold brand-gradient text-white shadow-lg shadow-navy/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Check Eligibility <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ${transparent ? "bg-white/10 text-white" : "bg-navy/5 text-navy"}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:bg-navy/5 hover:text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold brand-gradient text-white"
            >
              Check Eligibility <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
