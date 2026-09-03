import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { Divider } from "@/components/brand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Policies | All About Pawz Grooming" },
      {
        name: "description",
        content:
          "Answers to common grooming questions plus our cancellation, late arrival, vaccination, and matted coat policies at All About Pawz.",
      },
      { property: "og:title", content: "FAQ & Policies | All About Pawz" },
      {
        property: "og:description",
        content: "Good To Know. Common questions and our salon policies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

const FAQS = [
  {
    q: "How often should my dog be groomed?",
    a: "Most coats do best on a four to six week schedule. Doodles, poodles, and other curly coats benefit from every four weeks to prevent matting, while short smooth coats can comfortably stretch to eight weeks.",
  },
  {
    q: "How long does an appointment take?",
    a: "A full groom typically takes two to three hours depending on size, coat condition, and the services selected. We groom one dog at a time so your pup is never left in a kennel waiting.",
  },
  {
    q: "Do you use cage dryers?",
    a: "Never. Every dog is hand dried and hand finished by their groomer from start to finish.",
  },
  {
    q: "What products do you use?",
    a: "Salon exclusive, sulphate free, plant based shampoos and conditioners selected for each coat and skin type. All of our retail products are the same ones we use at the table.",
  },
  {
    q: "Can I stay with my dog during the groom?",
    a: "We ask parents to step out during the groom. Most dogs settle far more quickly without an audience, and we will always call if anything needs your attention.",
  },
  {
    q: "Do you groom senior dogs or dogs with anxiety?",
    a: "Yes. We offer a gentle, low stress approach with breaks built in, and we will happily split services across visits when that is kinder for your dog.",
  },
];

const POLICIES = [
  {
    title: "CANCELLATIONS",
    body: "Please give 24 hours notice to cancel or reschedule. Cancellations inside 24 hours are subject to a 50% service fee.",
  },
  {
    title: "LATE ARRIVALS",
    body: "Arrivals more than 15 minutes late may need to be rescheduled so we can honour the appointments that follow.",
  },
  {
    title: "VACCINATIONS",
    body: "Current rabies and distemper records are required for every dog on their first visit.",
  },
  {
    title: "MATTED COATS",
    body: "Humanity before vanity. Severely matted coats may require a short clip, and de-matting is charged in 15 minute increments.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHeader n="11" label="FAQ / POLICIES" />

      <section className="marble bg-cream px-8 py-14 lg:px-12">
        <h1 className="font-display text-[38px] leading-[1.1] text-ink">
          Good
          <br />
          To Know.
        </h1>
        <Divider />
        <p className="mt-5 max-w-md text-[12.5px] leading-[1.9] text-ink-soft">
          Everything you might want to ask before your first visit, and the house rules that keep
          every pup safe and every appointment on time.
        </p>

        <div className="mt-10 max-w-3xl border-t border-gold/25">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-gold/25">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-[16px] leading-[1.4] text-ink">{f.q}</span>
                {open === i ? (
                  <Minus className="h-4 w-4 shrink-0 text-gold-deep" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-gold-deep" />
                )}
              </button>
              {open === i && (
                <p className="pb-6 pr-10 text-[12.5px] leading-[1.9] text-ink-soft">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-8 py-14 lg:px-12">
        <h2 className="font-display text-[26px] text-on-dark">Salon Policies</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POLICIES.map((p) => (
            <div key={p.title} className="border border-gold/25 p-6">
              <p className="text-[10px] font-bold tracking-[0.18em] text-gold">{p.title}</p>
              <p className="mt-3 text-[12px] leading-[1.8] text-on-dark-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
