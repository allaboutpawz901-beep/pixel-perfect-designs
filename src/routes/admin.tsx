import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  BarChart3, CalendarDays, ClipboardList, CreditCard, FileText, Grid2x2, Layers,
  MapPin, MessageSquare, PawPrint, Receipt, Scissors, Settings, ShoppingBag,
  Users, Wallet, ChevronDown, CalendarClock,
} from "lucide-react";
import { NavItem, SidebarBrand, SidebarFooter } from "@/components/portal/kit";
import { useRole } from "@/lib/portal";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Dashboard | All About the Dawg OS" },
      { name: "description", content: "Operations dashboard for All About the Dawg grooming: appointments, revenue, staff schedule and customer records." },
      { property: "og:title", content: "Admin Dashboard | All About the Dawg OS" },
      { property: "og:description", content: "Appointments, revenue, staff schedule and customer records in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminLayout,
});

const icon = "size-[18px]";

function AdminLayout() {
  const [role, , ready] = useRole();
  const navigate = useNavigate();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/admin";

  useEffect(() => {
    if (ready && role === "groomer") navigate({ to: "/manage", replace: true });
  }, [ready, role, navigate]);

  return (
    <div className="flex min-h-screen bg-adm-bg font-adm text-adm-ink">
      <aside className="sticky top-0 hidden h-screen w-[274px] shrink-0 flex-col border-r border-adm-line bg-adm-card lg:flex">
        <SidebarBrand />
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-4">
          <NavItem to="/admin" icon={<Grid2x2 className={icon} />} label="Dashboard" active={pathname === "/admin"} />
          <NavItem to="/admin/customers" icon={<Users className={icon} />} label="Customers" active={pathname.startsWith("/admin/customers")} />
          <NavItem icon={<PawPrint className={icon} />} label="Pets" />
          <NavItem icon={<ClipboardList className={icon} />} label="Appointments" />
          <NavItem icon={<Scissors className={icon} />} label="Grooming Records" />
          <NavItem icon={<CalendarDays className={icon} />} label="Calendar" />
          <NavItem icon={<Layers className={icon} />} label="Services" />
          <NavItem icon={<CreditCard className={icon} />} label="Payments" />
          <NavItem icon={<Receipt className={icon} />} label="Invoices" />
          <NavItem icon={<FileText className={icon} />} label="Documents" />
          <NavItem icon={<MessageSquare className={icon} />} label="Communications" />
          <NavItem icon={<Users className={icon} />} label="Staff" />
          <NavItem icon={<CalendarClock className={icon} />} label="Schedule / Shifts" />
          <NavItem icon={<Wallet className={icon} />} label="Payroll & Commissions" />
          <NavItem icon={<ShoppingBag className={icon} />} label="Products & Inventory" />
          <NavItem icon={<BarChart3 className={icon} />} label="Reports" />
          <NavItem icon={<Settings className={icon} />} label="Settings" />
        </nav>
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 rounded-xl border border-adm-line px-3 py-3">
            <MapPin className="size-4 text-adm-muted" />
            <p className="flex-1 text-[13px] leading-tight font-medium text-adm-ink">
              All About the Dawg –<br />Main Location
            </p>
            <ChevronDown className="size-4 text-adm-muted" />
          </div>
        </div>
        <SidebarFooter name="Admin User" sub="Administrator" />
      </aside>
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
