import { Link, useRouterState } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  Facebook,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { PawGlyph } from "./brand";

export const NAV = [
  { n: "01", label: "HOME", to: "/" },
  { n: "02", label: "ABOUT US", to: "/about" },
  { n: "03", label: "SERVICES", to: "/services" },
  { n: "04", label: "OUR PROCESS", to: "/process" },
  { n: "05", label: "PRICING", to: "/pricing" },
  { n: "06", label: "SHOP", to: "/shop" },
  { n: "07", label: "FREE CONSULTATION", to: "/consultation" },
  { n: "08", label: "GALLERY", to: "/gallery" },
  { n: "09", label: "BOOK APPOINTMENT", to: "/book" },
  { n: "10", label: "CONTACT", to: "/contact" },
  { n: "11", label: "FAQ / POLICIES", to: "/faq" },
] as const;

function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2 1.6 3.5 3.5 3.8v2.6c-1.3.1-2.6-.3-3.7-1v6.3c0 3.2-2.5 5.6-5.6 5.6A5.6 5.6 0 1 1 12 8.9v2.8a2.8 2.8 0 1 0 2 2.7V3h2.5Z" />
    </svg>
  );
}
function Pinterest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.7 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.4-4.4-3 0-4.8 2.2-4.8 4.6 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1c0 .2-.1.3-.3.2-1.3-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="marble fixed inset-y-0 left-0 z-40 hidden w-[232px] flex-col overflow-y-auto border-r border-gold/25 bg-cream lg:flex">
      <div className="px-7 pt-8">
        <Link to="/" className="block text-center">
          <PawGlyph className="mx-auto h-9 w-9 text-gold-deep" />
          <div className="mt-3 font-display text-[15px] tracking-[0.16em] text-ink">
            ALL ABOUT PAWZ
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <span className="h-px w-4 bg-gold/60" />
            <span className="text-[8px] font-bold tracking-[0.3em] text-ink-soft">
              LUXURY GROOMING
            </span>
            <span className="h-px w-4 bg-gold/60" />
          </div>
          <div className="script mt-3 text-[19px]">From Pawz to PAWfection</div>
        </Link>
      </div>

      <div className="mt-6 h-px bg-gold/20" />

      <nav className="relative px-7 py-6">
        <span className="absolute bottom-9 left-[42px] top-9 w-px bg-gold/25" />
        <ul className="space-y-[9px]">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group relative flex items-center gap-3"
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={`relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border text-[9px] font-bold transition-colors ${
                      active
                        ? "border-gold-deep bg-gold-deep text-on-dark"
                        : "border-gold/45 bg-cream text-gold-deep"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span
                    className={`text-[10.5px] font-bold tracking-[0.13em] transition-colors ${
                      active
                        ? "text-gold-deep"
                        : "text-ink-soft group-hover:text-gold-deep"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6">
        <Link
          to="/book"
          className="flex items-center justify-center gap-2 border border-gold-deep/70 bg-cream-deep px-3 py-3.5 text-[9.5px] font-bold tracking-[0.14em] text-ink transition-colors hover:bg-gold-deep hover:text-on-dark"
        >
          <CalendarDays className="h-3.5 w-3.5 text-gold-deep" />
          BOOK APPOINTMENT
        </Link>
      </div>

      <div className="mt-7 space-y-3.5 px-7 text-[10.5px] leading-[1.55] text-ink-soft">
        <div className="flex gap-2.5">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
          <span>
            123 Pawz Lane
            <br />
            Yourtown, ST 12345
          </span>
        </div>
        <div className="flex gap-2.5">
          <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
          <span>(555) 123-PAWZ (7299)</span>
        </div>
        <div className="flex gap-2.5">
          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
          <span>hello@allaboutpawz.com</span>
        </div>
        <div className="flex gap-2.5">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
          <span>
            Mon - Fri 8:00am - 6:00pm
            <br />
            Sat 8:00am - 4:00pm
            <br />
            Closed Sunday
          </span>
        </div>
      </div>

      <div className="mt-6 flex gap-2 px-7">
        {[Facebook, Instagram, TikTok, Pinterest].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social profile"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-gold-deep"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>

      <div className="mt-7 border-t border-gold/20 px-7 py-5">
        <a
          href="#"
          className="flex items-center gap-1 text-[10px] tracking-[0.06em] text-ink-soft hover:text-gold-deep"
        >
          Investor Information <ChevronRight className="h-3 w-3" />
        </a>
      </div>
    </aside>
  );
}
