import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle, ArrowRight, CalendarPlus, Cake, DollarSign, FileSignature,
  MoreHorizontal, PackageMinus, PawPrint, Plus, TrendingUp, Users, CalendarDays,
} from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardHead, Initials, Pill, StatCard, TopBar } from "@/components/portal/kit";
import {
  dogPhoto, funnel, groomingRecords, revenueSeries, staffToday, todaysAppointments, useRole,
} from "@/lib/portal";

export const Route = createFileRoute("/admin/")({ component: AdminDashboard });

function slotColor(c: string) {
  if (c === "b") return "bg-adm-green";
  if (c === "r") return "bg-adm-pink";
  return "bg-adm-line";
}

function AdminDashboard() {
  const [role, setRole] = useRole();

  return (
    <div className="pb-10">
      <TopBar
        title={<>Welcome back, Admin! 👋</>}
        subtitle="Here's what's happening in your business today."
        date="May 12, 2025"
        role={role}
        onRole={setRole}
        right={
          <div className="flex items-center gap-2 rounded-xl px-1 py-1">
            <Initials name="Admin Dawg" size={36} />
            <p className="text-[13px] leading-tight font-semibold text-adm-ink">
              All About<br />the Dawg
            </p>
          </div>
        }
      />

      <div className="grid gap-4 px-8 md:grid-cols-2 xl:grid-cols-5">
        <StatCard tone="primary" icon={<CalendarDays className="size-5" />} label="Today's Appointments" value="28" delta="↑ 12% vs yesterday" />
        <StatCard tone="green" icon={<DollarSign className="size-5" />} label="Today's Revenue" value="$6,842.50" delta="↑ 18% vs yesterday" />
        <StatCard tone="blue" icon={<Users className="size-5" />} label="New Customers (30d)" value="46" delta="↑ 15% vs last 30 days" />
        <StatCard tone="amber" icon={<PawPrint className="size-5" />} label="No Show Rate (30d)" value="4.2%" delta="↓ 1.3% vs last 30 days" deltaTone="green" />
        <StatCard tone="pink" icon={<TrendingUp className="size-5" />} label="Rebook Rate (30d)" value="68%" delta="↑ 6% vs last 30 days" />
      </div>

      <div className="mt-5 grid gap-4 px-8 xl:grid-cols-[1fr_1.15fr_1fr]">
        <Card>
          <CardHead title="Today's Appointments" action="View Calendar" />
          <ul className="px-5 pb-3">
            {todaysAppointments.map((a) => (
              <li key={a.time} className="flex items-center gap-3 py-2.5">
                <span className="w-[62px] shrink-0 text-[12px] font-medium text-adm-muted">{a.time}</span>
                <img src={dogPhoto[a.pet]} alt={a.pet} className="size-9 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-adm-ink">{a.pet}</p>
                  <p className="truncate text-[12px] text-adm-muted">{a.breed}</p>
                </div>
                <div className="hidden min-w-0 flex-1 sm:block">
                  <p className="truncate text-[13px] text-adm-ink">{a.service}</p>
                  <p className="truncate text-[12px] text-adm-muted">{a.sub}</p>
                </div>
                <Pill>{a.status}</Pill>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-2 px-5 pb-5 text-[13px] font-medium text-adm-primary">
            View all appointments <ArrowRight className="size-4" />
          </button>
        </Card>

        <Card>
          <CardHead title="Revenue Overview" action="This Week ⌄" />
          <div className="px-5">
            <p className="text-[26px] font-bold text-adm-ink">$34,341.00</p>
            <p className="mt-1 text-[12px] text-adm-muted">
              <span className="text-adm-green">↑ 16.4%</span> vs last week
            </p>
            <div className="mt-3 h-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueSeries} margin={{ left: -18, right: 8, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-adm-line)" vertical={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--color-adm-muted)" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--color-adm-muted)" }} tickFormatter={(v) => `$${v / 1000}K`} />
                  <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                  <Line type="monotone" dataKey="v" stroke="var(--color-adm-primary)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--color-adm-primary)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 pb-5">
              {[
                ["Services", "$26,541.00", "77%", "border-l-adm-primary"],
                ["Products", "$4,842.00", "14%", "border-l-adm-blue"],
                ["Add-ons", "$2,958.00", "9%", "border-l-adm-green"],
              ].map(([l, v, p, b]) => (
                <div key={l} className={`rounded-xl border border-adm-line border-l-[3px] ${b} bg-adm-bg px-3 py-2.5`}>
                  <p className="text-[12px] text-adm-muted">{l}</p>
                  <p className="text-[15px] font-bold text-adm-ink">{v}</p>
                  <p className="text-[11px] text-adm-muted">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <CardHead title="Today's Schedule (Staff)" action="View Full Schedule" />
          <ul className="px-5">
            {staffToday.map((s) => (
              <li key={s.name} className="flex items-center gap-3 py-2.5">
                <Initials name={s.name} size={36} />
                <div className="w-[86px] shrink-0">
                  <p className="text-[13px] font-semibold text-adm-ink">{s.name}</p>
                  <p className="text-[12px] text-adm-muted">{s.role}</p>
                </div>
                <div className="flex flex-1 gap-1">
                  {s.slots.split("").map((c, i) => (
                    <span key={i} className={`h-4 w-3.5 rounded-[3px] ${slotColor(c)}`} />
                  ))}
                </div>
                <p className="w-[42px] text-right text-[12px] leading-tight text-adm-muted">
                  <span className="block font-semibold text-adm-ink">{s.appts}</span>appts
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 px-5 py-4 text-[11px] text-adm-muted">
            {[["bg-adm-green", "Booked"], ["bg-adm-line", "Available"], ["bg-adm-pink", "Break"], ["bg-adm-amber", "Blocked"]].map(([c, l]) => (
              <span key={l} className="flex items-center gap-1.5">
                <span className={`size-2.5 rounded-[3px] ${c}`} />
                {l}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 px-8 xl:grid-cols-3">
        <Card>
          <CardHead title="Bookings Funnel (30 Days)" />
          <div className="flex flex-col items-center gap-1.5 px-5 pb-6">
            {funnel.map((f, i) => (
              <div key={f.label} className="flex w-full items-center gap-3">
                <div
                  className="rounded-md py-2.5 text-center text-adm-card"
                  style={{ background: f.tone, width: `${f.w}%`, marginLeft: `${(100 - f.w) / 2}%` }}
                >
                  <p className="text-[15px] font-bold">{f.value}</p>
                  <p className="text-[11px] font-medium opacity-90">{f.label}</p>
                </div>
                <span className="w-12 shrink-0 text-[11px] text-adm-muted">
                  {i < funnel.length - 1 ? ["45.9%", "75.1%", "83.1%", "81.4%"][i] : ""}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHead title="Recent Grooming Records" action="View All" />
          <ul className="px-5">
            {groomingRecords.map((r) => (
              <li key={r.pet + r.date} className="flex items-center gap-3 py-2.5">
                <img src={dogPhoto[r.pet]} alt={r.pet} className="size-9 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-adm-ink">{r.pet}</p>
                  <p className="text-[12px] text-adm-muted">{r.breed}</p>
                </div>
                <div className="hidden min-w-0 flex-1 sm:block">
                  <p className="truncate text-[12px] text-adm-ink">{r.date} • {r.service}</p>
                  <p className="truncate text-[12px] text-adm-muted">Groomer: {r.groomer}</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-semibold text-adm-ink">{r.amount}</p>
                  <Pill>Paid</Pill>
                </div>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-2 px-5 py-5 text-[13px] font-medium text-adm-primary">
            View all grooming records <ArrowRight className="size-4" />
          </button>
        </Card>

        <Card>
          <CardHead title="Alerts & Reminders" />
          <ul className="px-5">
            {[
              [<AlertTriangle className="size-4" key="a" />, "pink", "Vaccinations Expiring Soon", "12 pets have vaccinations expiring in 30 days", 12],
              [<FileSignature className="size-4" key="b" />, "amber", "Unsigned Documents", "8 documents need customer signature", 8],
              [<Cake className="size-4" key="c" />, "blue", "Upcoming Birthdays", "5 pets have birthdays this week", 5],
              [<PackageMinus className="size-4" key="d" />, "primary", "Low Inventory", "7 products are running low", 7],
            ].map(([ic, tone, title, desc, count]) => (
              <li key={title as string} className="flex items-center gap-3 py-3">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full bg-adm-${tone}-soft text-adm-${tone}`}>
                  {ic as JSX.Element}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-adm-ink">{title as string}</p>
                  <p className="truncate text-[12px] text-adm-muted">{desc as string}</p>
                </div>
                <span className={`rounded-full bg-adm-${tone}-soft px-2 py-0.5 text-[11px] font-semibold text-adm-${tone}`}>
                  {count as number}
                </span>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-2 px-5 py-5 text-[13px] font-medium text-adm-primary">
            View all alerts <ArrowRight className="size-4" />
          </button>
        </Card>
      </div>

      <div className="mt-5 px-8">
        <Card className="flex flex-wrap items-center gap-3 px-5 py-4">
          <p className="mr-3 text-[15px] font-semibold text-adm-ink">Quick Actions</p>
          {[
            [<CalendarPlus className="size-4" key="1" />, "New Appointment"],
            [<Plus className="size-4" key="2" />, "Add Customer"],
            [<PawPrint className="size-4" key="3" />, "Add Pet"],
            [<FileSignature className="size-4" key="4" />, "Intake Form"],
            [<DollarSign className="size-4" key="5" />, "Payment"],
            [<Plus className="size-4" key="6" />, "Invoice"],
          ].map(([ic, label]) => (
            <button
              key={label as string}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-adm-line px-4 py-2.5 text-[13px] font-medium text-adm-ink hover:bg-adm-bg"
            >
              {ic as JSX.Element}
              {label as string}
            </button>
          ))}
          <button className="flex items-center gap-2 rounded-xl border border-adm-line px-4 py-2.5 text-[13px] font-medium text-adm-ink hover:bg-adm-bg">
            <MoreHorizontal className="size-4" /> More Actions
          </button>
        </Card>
      </div>
    </div>
  );
}
