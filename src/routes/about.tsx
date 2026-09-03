import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import {
  PawGlyph,
  IconLuxury,
  IconBreeds,
  IconSafety,
  IconHappy,
} from "@/components/brand";
import shihtzu from "@/assets/dog-shihtzu.jpg";
import salon from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | All About Pawz Luxury Grooming" },
      {
        name: "description",
        content:
          "All About Pawz was created with a simple belief: dogs deserve the same level of care, respect, and luxury we expect for ourselves.",
      },
      { property: "og:title", content: "About Us | All About Pawz" },
      {
        property: "og:description",
        content: "Our story, our mission, and our promise — built on love, driven by purpose.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { Icon: IconLuxury, title: "Luxury Experience", body: ["Spa-level care in", "a calming", "environment"] },
  { Icon: IconBreeds, title: "All Breeds Welcome", body: ["From tiny pups", "to giant breeds"] },
  { Icon: IconSafety, title: "Safety & Comfort", body: ["Clean, cage-free", "care with gentle", "handling"] },
  { Icon: IconHappy, title: "Happy Pups", body: ["Tail wags", "guaranteed", "every time"] },
];

function About() {
  return (
    <PageShell>
      <PageHeader n="02" label="ABOUT US" />

      <section className="marble grid grid-cols-1 items-center gap-10 bg-cream px-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:py-16 lg:pl-14 lg:pr-0">
        <div className="max-w-[560px]">
          <h1 className="font-display text-[clamp(40px,4.4vw,62px)] leading-[1.06] text-ink">
            Our Story.
            <br />
            Our Promise.
          </h1>
          <p className="script mt-4 text-[clamp(28px,2.4vw,36px)]">
            Built on love. Driven by purpose.
          </p>

          <p className="mt-8 max-w-[500px] text-[14px] leading-[1.95] text-ink-soft">
            All About Pawz was created with a simple belief: dogs deserve the same level of care,
            respect, and luxury we expect for ourselves.
          </p>
          <p className="mt-4 max-w-[500px] text-[14px] leading-[1.95] text-ink-soft">
            We are more than a grooming salon — we're a place where dogs feel safe, look their
            best, and leave happy.
          </p>
        </div>

        <div className="relative">
          <div className="photo-halo pointer-events-none absolute inset-0" />
          <img
            src={shihtzu}
            alt="Freshly groomed shih tzu wearing a bow tie"
            width={768}
            height={1024}
            loading="lazy"
            className="photo-blend relative h-[clamp(380px,44vw,620px)] w-full object-cover object-center"
          />
        </div>
      </section>

      <section className="marble grid grid-cols-2 gap-y-8 border-y border-gold/25 bg-cream px-8 py-10 lg:grid-cols-4 lg:px-12">
        {VALUES.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className={`px-5 ${i > 0 ? "lg:border-l lg:border-gold/25" : ""}`}
          >
            <Icon className="h-8 w-8 text-gold-deep" />
            <h3 className="mt-3 text-[11.5px] font-bold tracking-[0.06em] text-ink">{title}</h3>
            <p className="mt-2 text-[11.5px] leading-[1.7] text-ink-soft">
              {body.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-ink px-8 py-12 lg:px-12">
          <PawGlyph className="h-6 w-6 text-gold" />
          <h2 className="mt-4 font-display text-[22px] text-gold">Our Mission</h2>
          <p className="mt-3 max-w-[320px] text-[12.5px] leading-[1.85] text-on-dark-muted">
            To provide exceptional grooming in a safe, loving, and luxurious environment.
          </p>

          <h2 className="mt-9 font-display text-[22px] text-gold">Our Promise</h2>
          <p className="mt-3 max-w-[320px] text-[12.5px] leading-[1.85] text-on-dark-muted">
            We treat every pup like our own and every parent like family.
          </p>
        </div>
        <img
          src={salon}
          alt="All About Pawz salon reception"
          width={1280}
          height={900}
          loading="lazy"
          className="photo-blend-soft h-full min-h-[340px] w-full object-cover"
        />
      </section>

      <SiteFooter />
    </PageShell>
  );
}
