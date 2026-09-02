import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { PawGlyph } from "@/components/brand";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | All About Pawz Grooming Results" },
      {
        name: "description",
        content:
          "Happy pups. Happy parents. Beautiful results. Browse grooming, bath & spa, and transformation photos from the All About Pawz salon.",
      },
      { property: "og:title", content: "Gallery | All About Pawz" },
      {
        property: "og:description",
        content: "Happy pups. Happy parents. Beautiful results.",
      },
    ],
  }),
  component: Gallery,
});

const FILTERS = ["ALL", "GROOMING", "BATH & SPA", "TRANSFORMATIONS"] as const;

const PHOTOS = [
  { src: g1, alt: "Cream cockapoo with a bow tie", tag: "GROOMING" },
  { src: g2, alt: "Apricot cockapoo portrait", tag: "TRANSFORMATIONS" },
  { src: g3, alt: "Smiling corgi", tag: "BATH & SPA" },
  { src: g4, alt: "Golden retriever with tongue out", tag: "GROOMING" },
  { src: g5, alt: "Black poodle mix portrait", tag: "TRANSFORMATIONS" },
  { src: g6, alt: "Apricot labradoodle sitting", tag: "GROOMING" },
  { src: g7, alt: "Salt and pepper schnauzer", tag: "BATH & SPA" },
  { src: g8, alt: "Cream goldendoodle puppy", tag: "TRANSFORMATIONS" },
];

function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const shown = filter === "ALL" ? PHOTOS : PHOTOS.filter((p) => p.tag === filter);

  return (
    <PageShell>
      <PageHeader n="08" label="GALLERY" />

      <section className="marble bg-cream px-8 py-14 lg:px-12">
        <h1 className="font-display text-[38px] leading-[1.1] text-ink">
          Happy Pups.
          <br />
          Happy Parents.
          <br />
          Beautiful Results.
        </h1>

        <div className="mt-8 flex flex-wrap gap-8 border-b border-gold/25 pb-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative pb-2 text-[10px] font-bold tracking-[0.16em] transition-colors ${
                filter === f ? "text-gold-deep" : "text-ink-soft hover:text-gold-deep"
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute -bottom-[13px] left-0 h-[2px] w-full bg-gold-deep" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shown.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={640}
              height={768}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 bg-ink px-8 py-10 text-center lg:flex-row lg:justify-center lg:gap-6 lg:text-left">
        <PawGlyph className="h-7 w-7 text-gold" />
        <p className="text-[12.5px] leading-[1.7] text-on-dark-muted">
          Every pup leaves looking their best
          <br />
          and feeling even better.
        </p>
        <a href="#" className="btn-gold">
          FOLLOW US
          <Instagram className="h-3.5 w-3.5" />
        </a>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
