import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sidebar, NAV } from "./Sidebar";
import { PawGlyph } from "./brand";
import { SidebarStateProvider, useSidebarState } from "./sidebar-state";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SidebarStateProvider>
      <PageShellInner>{children}</PageShellInner>
    </SidebarStateProvider>
  );
}

function PageShellInner({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { collapsed } = useSidebarState();

  return (
    <div className="min-h-screen bg-cream">
      <Sidebar />

      {/* Mobile bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-gold/25 bg-cream px-4 py-3 lg:hidden">
        <Link to="/" className="flex items-center gap-2">
          <PawGlyph className="h-5 w-5 text-gold-deep" />
          <span className="font-display text-[13px] tracking-[0.14em] text-ink">
            ALL ABOUT PAWZ
          </span>
        </Link>
        <button onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Menu className="h-5 w-5 text-ink" />
        </button>
      </div>
      {open && (
        <nav className="border-b border-gold/25 bg-cream px-6 py-4 lg:hidden">
          <ul className="space-y-2">
            {NAV.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-[11px] font-bold tracking-[0.13em] text-ink-soft"
                >
                  <span className="text-gold-deep">{i.n}</span>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main className="lg:pl-[232px]">{children}</main>
    </div>
  );
}

export function PageHeader({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-gold/25 bg-cream px-8 py-3.5 lg:px-12">
      <span className="text-[10.5px] font-bold tracking-[0.2em] text-gold-deep">{n}</span>
      <span className="text-[10.5px] font-bold tracking-[0.2em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="flex flex-col gap-6 px-8 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <PawGlyph className="h-7 w-7 text-gold" />
          <div>
            <div className="font-display text-[17px] tracking-[0.14em] text-on-dark">
              ALL ABOUT PAWZ
            </div>
            <div className="text-[10.5px] italic text-on-dark-muted">
              "From Pawz to PAWfection"
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {(
            [
              ["HOME", "/"],
              ["ABOUT US", "/about"],
              ["SERVICES", "/services"],
              ["PRICING", "/pricing"],
              ["SHOP", "/shop"],
              ["GALLERY", "/gallery"],
              ["BOOK", "/book"],
              ["CONTACT", "/contact"],
            ] as const
          ).map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-[10px] font-bold tracking-[0.16em] text-on-dark-muted hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="space-y-1.5 text-[10.5px] text-on-dark-muted lg:text-right">
          <p>© 2024 All About Pawz LLC. All rights reserved.</p>
          <p className="flex gap-4 lg:justify-end">
            <a href="#" className="text-gold hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gold hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-gold hover:underline">
              Investor Information
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
