import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Bath, Droplets } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { PawGlyph } from "@/components/brand";
import doodle from "@/assets/dog-doodle.jpg";
import svcGroom from "@/assets/svc-groom.jpg";
import svcBath from "@/assets/svc-bath.jpg";
import svcNails from "@/assets/svc-nails.jpg";
import svcAddon from "@/assets/svc-addon.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | All About Pawz Luxury Grooming" },
      {
        name: "description",
        content:
          "Premium grooming services tailored to your dog's breed, coat, and lifestyle: full grooms, bath & spa, nail & paw care, and add-on services.",
      },
      { property: "og:title", content: "Services | All About Pawz" },
      {
        property: "og:description",
        content: "Every pup. Every breed. Every detail. Explore our full grooming service menu.",
      },
    ],
  }),
  component: Services,
});

const ROWS = [
  {
    Icon: Scissors,
    title: "GROOMING SERVICES",
    body: "Haircuts, styling, baths, and full grooming for all breeds.",
    img: svcGroom,
    alt: "Groomer trimming a dog's coat with scissors",
  },
  {
    Icon: Bath,
    title: "BATH & SPA",
    body: "De-shedding, deep cleanse, and relaxing spa treatments.",
    img: svcBath,
    alt: "Small dog enjoying a bubble bath",
  },
  {
    Icon: PawGlyph,
    title: "NAIL & PAW CARE",
    body: "Nail trims, paw balm, and pawdicures.",
    img: svcNails,
    alt: "Dog's nails being trimmed",
  },
  {
    Icon: Droplets,
    title: "ADD-ON SERVICES",
    body: "Teeth brushing, ear cleaning, fragrance, and more.",
    img: svcAddon,
    alt: "Paw balm being applied to a dog's paw",
  },
];

function Services() {
  return (
    <PageShell>
      <PageHeader n="03" label="SERVICES" />

      <section className="marble grid grid-cols-1 items-center gap-8 bg-cream px-8 py-12 lg:grid-cols-[1fr_0.85fr] lg:px-12">
        <div>
          <h1 className="font-display text-[38px] leading-[1.1] text-ink">
            Every Pup.
            <br />
            Every Breed.
            <br />
            Every Detail.
          </h1>
          <p className="mt-6 max-w-[330px] text-[12.5px] leading-[1.85] text-ink-soft">
            Premium grooming services tailored to your dog's breed, coat, and lifestyle.
          </p>
          <Link to="/pricing" className="btn-gold mt-7">
            VIEW PACKAGES
          </Link>
        </div>
        <img
          src={doodle}
          alt="Goldendoodle wearing a black bow tie"
          width={768}
          height={1024}
          loading="lazy"
          className="h-[420px] w-full object-cover object-center"
        />
      </section>

      <section className="marble bg-cream px-8 pb-14 lg:px-12">
        <div className="divide-y divide-gold/20 border-y border-gold/25">
          {ROWS.map(({ Icon, title, body, img, alt }) => (
            <div key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5">
              <Icon className="h-7 w-7 text-gold-deep" strokeWidth={1.2} />
              <div>
                <h2 className="text-[11.5px] font-bold tracking-[0.14em] text-ink">{title}</h2>
                <p className="mt-1.5 max-w-[420px] text-[12px] leading-[1.7] text-ink-soft">
                  {body}
                </p>
              </div>
              <img
                src={img}
                alt={alt}
                width={640}
                height={512}
                loading="lazy"
                className="h-[70px] w-[190px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-3 bg-ink px-8 py-9 text-center">
        <PawGlyph className="h-6 w-6 text-gold" />
        <p className="text-[12px] leading-[1.7] text-on-dark-muted">
          All services include premium products, one-on-one care, and a whole lot of love.
        </p>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
