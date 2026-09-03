import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Scissors, Droplets, Bug } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { PawGlyph } from "@/components/brand";
import bichon from "@/assets/dog-bichon.jpg";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | All About Pawz Luxury Grooming" },
      {
        name: "description",
        content:
          "Simple, transparent grooming prices based on size, coat condition, breed, and service package. Bath & brush, full groom, and deluxe spa.",
      },
      { property: "og:title", content: "Pricing | All About Pawz" },
      {
        property: "og:description",
        content: "Simple. Transparent. Worth every penny. See our grooming packages and add-ons.",
      },
    ],
  }),
  component: Pricing,
});

const SIZES = ["SMALL", "MEDIUM", "LARGE", "X-LARGE"];
const PACKAGES = [
  { name: "Bath & Brush", prices: ["$75", "$95", "$115", "$135"] },
  { name: "Full Groom", prices: ["$95", "$115", "$135", "$155"] },
  { name: "Deluxe Spa", prices: ["$125", "$145", "$165", "$185"] },
];

const ADDONS = [
  { Icon: Sparkles, title: "Teeth Brushing", price: "$15" },
  { Icon: Scissors, title: "De-shedding", price: "$15 - $35" },
  { Icon: PawGlyph, title: "Paw Treatment", price: "$15" },
  { Icon: Droplets, title: "Nail Trim", price: "$15" },
  { Icon: Bug, title: "Flea Bath", price: "$10" },
];

function Pricing() {
  return (
    <PageShell>
      <PageHeader n="05" label="PRICING" />

      <section className="marble grid grid-cols-1 gap-10 bg-cream px-8 py-14 lg:grid-cols-[1fr_0.8fr] lg:px-12">
        <div>
          <h1 className="font-display text-[38px] leading-[1.1] text-ink">
            Simple.
            <br />
            Transparent.
            <br />
            Worth Every Penny.
          </h1>
          <p className="mt-6 max-w-[320px] text-[12.5px] leading-[1.85] text-ink-soft">
            Pricing is based on size, coat condition, breed, and service package.
          </p>
        </div>
        <img
          src={bichon}
          alt="White bichon frise wearing a black bow tie"
          width={900}
          height={1024}
          loading="lazy"
          className="h-[300px] w-full object-contain"
        />
      </section>

      <section className="marble bg-cream px-8 pb-14 lg:px-12">
        <div className="border border-gold/30">
          <h2 className="border-b border-gold/30 bg-cream-deep py-3 text-center text-[10.5px] font-bold tracking-[0.2em] text-ink">
            GROOMING PACKAGES
          </h2>
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-gold/25">
                <th className="w-[34%] px-5 py-3 text-left"></th>
                {SIZES.map((s) => (
                  <th
                    key={s}
                    className="px-3 py-3 text-center text-[9.5px] font-bold tracking-[0.16em] text-gold-deep"
                  >
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PACKAGES.map((p) => (
                <tr key={p.name} className="border-b border-gold/15 last:border-0">
                  <td className="px-5 py-3.5 text-left text-ink">{p.name}</td>
                  {p.prices.map((price, i) => (
                    <td key={i} className="px-3 py-3.5 text-center text-ink-soft">
                      {price}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border border-gold/30">
          <h2 className="border-b border-gold/30 bg-cream-deep py-3 text-center text-[10.5px] font-bold tracking-[0.2em] text-ink">
            POPULAR ADD-ONS
          </h2>
          <div className="grid grid-cols-2 divide-gold/20 py-6 lg:grid-cols-5 lg:divide-x">
            {ADDONS.map(({ Icon, title, price }) => (
              <div key={title} className="px-4 py-3 text-center">
                <Icon className="mx-auto h-6 w-6 text-gold-deep" strokeWidth={1.2} />
                <h3 className="mt-3 text-[11px] text-ink">{title}</h3>
                <p className="mt-1 text-[11.5px] font-bold text-gold-deep">{price}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[11.5px] leading-[1.7] text-ink-soft">
          Prices are starting points. Final pricing may vary based on coat condition,
          temperament, and length of service.
        </p>

        <div className="mt-6 text-center">
          <Link to="/book" className="btn-gold">
            VIEW FULL PRICING GUIDE
          </Link>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
