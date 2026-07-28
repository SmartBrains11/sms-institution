import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { IMG, CONTACT, NAV, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-navy-deep text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-1">
              <img src={IMG.logo} alt="SMS Institute" className="h-full w-auto" />
            </span>
            <div>
              <div className="font-display font-extrabold text-lg leading-tight">SMS Institute</div>
              <div className="text-xs text-white/60 tracking-widest uppercase">Of Technology</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
            Vocational training and international placement for skilled trades. Train here. Work
            abroad.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 hover:text-accent-green transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent-green shrink-0" /> {CONTACT.phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent-green shrink-0" /> {CONTACT.email}
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-4 w-4 mt-0.5 text-accent-green shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent-green shrink-0" /> {CONTACT.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent-green hover:text-navy-deep transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">Skill Development & Testing Center</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} SMS Institute of Technology. All rights reserved.
          </span>
          <span>Train here. Work abroad.</span>
        </div>
      </div>
    </footer>
  );
}
