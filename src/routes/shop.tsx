import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Lightbulb, Heart } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import shampoo from "@/assets/product-shampoo.jpg";
import spray from "@/assets/product-spray.jpg";
import brush from "@/assets/product-brush.jpg";
import bandana from "@/assets/product-bandana.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop | All About Pawz Grooming Products" },
      {
        name: "description",
        content:
          "Bring the pawfection home. Curated grooming products we love and trust for your pup — shampoo, conditioning spray, brushes, and bandanas.",
      },
      { property: "og:title", content: "Shop | All About Pawz" },
      {
        property: "og:description",
        content: "Curated products we love and trust for your pup.",
      },
    ],
  }),
  component: Shop,
});

const PRODUCTS = [
  { img: shampoo, name: ["Pawz Signature", "Shampoo"], price: "$34.00", alt: "Pawz signature shampoo bottle" },
  { img: spray, name: ["Coat Conditioning", "Spray"], price: "$22.00", alt: "Coat conditioning spray bottle" },
  { img: brush, name: ["Grooming Brush", ""], price: "$26.00", alt: "Wooden grooming brush" },
  { img: bandana, name: ["Pawz Bandana", ""], price: "$16.00", alt: "Black dog bandana with gold paw" },
];

const BADGES = [
  { Icon: Award, title: "Premium Quality", body: ["Only the best for", "your best friend."] },
  { Icon: Lightbulb, title: "Expert Guidance", body: ["We help you choose", "what's right."] },
  { Icon: Heart, title: "Loved by Pups", body: ["Tried, tested, and", "tail-wag approved."] },
];

function Shop() {
  return (
    <PageShell>
      <PageHeader n="06" label="SHOP" />

      <section className="marble grid grid-cols-1 items-center gap-8 bg-cream px-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <h1 className="font-display text-[38px] leading-[1.1] text-ink">
            Bring the
            <br />
            Pawfection
            <br />
            Home.
          </h1>
          <p className="mt-6 max-w-[300px] text-[12.5px] leading-[1.85] text-ink-soft">
            Curated products we love and trust for your pup.
          </p>
          <Link to="/consultation" className="btn-gold mt-7">
            SCHEDULE A FREE CONSULTATION
          </Link>
          <p className="mt-6 max-w-[300px] text-[12.5px] leading-[1.85] text-ink-soft">
            Let's find the perfect products for your pup.
          </p>
        </div>
        <img
          src={shampoo}
          alt="Pawz signature shampoo on a folded towel"
          width={900}
          height={1024}
          loading="lazy"
          className="h-[420px] w-full object-cover object-center"
        />
      </section>

      <section className="marble bg-cream px-8 pb-14 lg:px-12">
        <h2 className="border-t border-gold/25 pt-8 text-center text-[10.5px] font-bold tracking-[0.2em] text-ink">
          SHOP OUR FAVORITES
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <div key={p.alt} className="text-center">
              <div className="bg-cream-deep p-4">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="mx-auto h-[150px] w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[11.5px] leading-[1.5] text-ink">
                {p.name.map((l) => (
                  <span key={l} className="block">
                    {l || "\u00A0"}
                  </span>
                ))}
              </h3>
              <p className="mt-1 text-[11.5px] font-bold text-gold-deep">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 bg-ink px-8 py-10 lg:grid-cols-3 lg:px-12">
        {BADGES.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className={`px-6 text-center ${i > 0 ? "lg:border-l lg:border-gold/25" : ""}`}
          >
            <Icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.2} />
            <h3 className="mt-3 text-[11px] font-bold tracking-[0.1em] text-gold">{title}</h3>
            <p className="mt-2 text-[11.5px] leading-[1.7] text-on-dark-muted">
              {body.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </PageShell>
  );
}
