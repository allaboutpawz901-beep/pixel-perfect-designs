import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, ChevronDown, Menu, MoreVertical, Search } from "lucide-react";
import pawLogo from "@/assets/paw.png";
import type { PortalRole } from "@/lib/portal";

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-adm-line bg-adm-card shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHead({
  title,
  action,
  actionTo,
}: {
  title: string;
  action?: string;
  actionTo?: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-3">
      <h3 className="text-[15px] font-semibold text-adm-ink">{title}</h3>
      {action ? (
        actionTo ? (
          <Link to={actionTo} className="text-[13px] font-medium text-adm-primary hover:underline">
            {action}
          </Link>
        ) : (
          <button className="text-[13px] font-medium text-adm-primary hover:underline">{action}</button>
        )
      ) : null}
    </div>
  );
}

const toneMap: Record<string, string> = {
  primary: "bg-adm-primary-soft text-adm-primary",
  green: "bg-adm-green-soft text-adm-green",
  blue: "bg-adm-blue-soft text-adm-blue",
  amber: "bg-adm-amber-soft text-adm-amber",
  pink: "bg-adm-pink-soft text-adm-pink",
};

export function StatCard({
  icon,
  label,
  value,
  delta,
  deltaTone = "green",
  tone = "primary",
  footer,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "green" | "pink";
  tone?: keyof typeof toneMap;
  footer?: ReactNode;
}) {
  return (
    <Card className="px-5 py-4">
      <div className="flex items-start gap-3">
        <div className={`grid size-11 shrink-0 place-items-center rounded-xl ${toneMap[tone]}`}>{icon}</div>
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-adm-muted">{label}</p>
          <p className="mt-1 text-[26px] leading-8 font-bold text-adm-ink">{value}</p>
          {delta ? (
            <p className="mt-1 text-[12px] text-adm-muted">
              <span className={deltaTone === "green" ? "text-adm-green" : "text-adm-pink"}>{delta}</span>
            </p>
          ) : null}
          {footer}
        </div>
      </div>
    </Card>
  );
}

const pillTone: Record<string, string> = {
  "Checked In": "bg-adm-green-soft text-adm-green",
  Scheduled: "bg-adm-blue-soft text-adm-blue",
  "In Service": "bg-adm-primary-soft text-adm-primary",
  "Ready for Pickup": "bg-adm-amber-soft text-adm-amber",
  Paid: "bg-adm-green-soft text-adm-green",
  Approved: "bg-adm-green-soft text-adm-green",
  Default: "bg-adm-blue-soft text-adm-blue",
};

export function Pill({ children }: { children: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        pillTone[children] ?? pillTone.Default
      }`}
    >
      {children}
    </span>
  );
}

export function Initials({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="grid shrink-0 place-items-center rounded-full bg-adm-primary-soft font-semibold text-adm-primary"
    >
      {initials}
    </span>
  );
}

export function NavItem({
  to,
  icon,
  label,
  active,
  badge,
}: {
  to?: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}) {
  const cls = `flex items-center gap-3 rounded-xl px-3 py-2 text-[14px] transition-colors ${
    active
      ? "bg-adm-primary-soft font-semibold text-adm-primary"
      : "font-medium text-adm-ink-soft hover:bg-adm-bg"
  }`;
  const inner = (
    <>
      <span className="shrink-0 opacity-90">{icon}</span>
      <span className="flex-1 truncate">{label}</span>
      {badge ? (
        <span className="rounded-full bg-adm-primary-soft px-2 py-0.5 text-[11px] font-semibold text-adm-primary">
          {badge}
        </span>
      ) : null}
    </>
  );
  return to ? (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  ) : (
    <button className={`${cls} w-full text-left`}>{inner}</button>
  );
}

export function SidebarBrand() {
  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-4">
      <div className="flex items-center gap-3">
        <img src={pawLogo} alt="" className="size-9 object-contain" />
        <div className="leading-[1.05]">
          <p className="text-[17px] font-bold text-adm-ink">
            All About
            <br />
            the Dawg
          </p>
          <p className="text-[12px] font-semibold text-adm-muted">OS</p>
        </div>
      </div>
      <Menu className="size-5 text-adm-muted" />
    </div>
  );
}

export function SidebarFooter({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="mt-auto px-4 pb-5">
      <div className="flex items-center gap-3 rounded-xl px-2 py-3">
        <Initials name={name} size={34} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-adm-ink">{name}</p>
          <p className="truncate text-[12px] text-adm-muted">{sub}</p>
        </div>
        <MoreVertical className="size-4 text-adm-muted" />
      </div>
    </div>
  );
}

export function TopBar({
  title,
  subtitle,
  date,
  right,
  role,
  onRole,
  showSearch = true,
  notifications = 8,
}: {
  title: ReactNode;
  subtitle?: string;
  date: string;
  right?: ReactNode;
  role: PortalRole;
  onRole: (r: PortalRole) => void;
  showSearch?: boolean;
  notifications?: number;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 px-8 pt-7 pb-5">
      <div>
        <h1 className="text-[22px] font-bold text-adm-ink">{title}</h1>
        {subtitle ? <p className="mt-1 text-[14px] text-adm-muted">{subtitle}</p> : null}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-adm-line bg-adm-card px-3 py-2.5 text-[13px] font-medium text-adm-ink">
          <span className="text-adm-muted">📅</span>
          {date}
          <ChevronDown className="size-4 text-adm-muted" />
        </div>
        {showSearch ? (
          <div className="flex w-[240px] items-center gap-2 rounded-xl border border-adm-line bg-adm-card px-3 py-2.5 text-[13px] text-adm-muted">
            <Search className="size-4" />
            <span className="flex-1">Search...</span>
            <span className="rounded-md border border-adm-line px-1.5 py-0.5 text-[11px]">Ctrl + K</span>
          </div>
        ) : null}
        <div className="relative">
          <Bell className="size-5 text-adm-ink-soft" />
          <span className="absolute -top-1.5 -right-1.5 grid size-4 place-items-center rounded-full bg-adm-pink text-[10px] font-bold text-adm-card">
            {notifications}
          </span>
        </div>
        <select
          value={role}
          onChange={(e) => onRole(e.target.value as PortalRole)}
          className="rounded-xl border border-adm-line bg-adm-card px-3 py-2.5 text-[13px] font-medium text-adm-ink"
          aria-label="Switch role"
        >
          <option value="admin">Administrator</option>
          <option value="groomer">Groomer</option>
        </select>
        {right}
      </div>
    </div>
  );
}
