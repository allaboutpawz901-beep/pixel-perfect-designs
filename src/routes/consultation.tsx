import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import golden from "@/assets/dog-golden.jpg";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Consultation | All About Pawz" },
      {
        name: "description",
        content:
          "Schedule a free consultation to get personalized product recommendations for your pup's grooming routine. No obligation, just expert advice.",
      },
      { property: "og:title", content: "Free Consultation | All About Pawz" },
      {
        property: "og:description",
        content: "The right care starts with the right conversation.",
      },
    ],
  }),
  component: Consultation,
});

const POINTS = [
  "Tell us about your pup",
  "Get expert recommendations",
  "Find the perfect products",
  "Order with confidence",
];

function Consultation() {
  return (
    <PageShell>
      <PageHeader n="07" label="FREE CONSULTATION" />

      <section className="marble grid grid-cols-1 items-center gap-8 bg-cream px-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <h1 className="font-display text-[36px] leading-[1.12] text-ink">
            The Right Care
            <br />
            Starts With the
            <br />
            Right Conversation.
          </h1>
          <p className="mt-6 max-w-[330px] text-[12.5px] leading-[1.85] text-ink-soft">
            Schedule a free consultation to get personalized product recommendations for your
            pup's needs.
          </p>

          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[12.5px] text-ink-soft">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gold-deep">
                  <Check className="h-2.5 w-2.5 text-gold-deep" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={golden}
          alt="Golden retriever looking up"
          width={900}
          height={1024}
          loading="lazy"
          className="mx-auto h-[420px] w-full object-cover object-center"
        />
      </section>

      <section className="marble bg-cream px-8 pb-14 lg:px-12">
        <div className="border border-gold/30 bg-card p-8">
          <h2 className="text-center text-[10.5px] font-bold tracking-[0.2em] text-ink">
            SCHEDULE YOUR FREE CONSULTATION
          </h2>
          <form
            className="mt-7 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field label="Your Name" />
              <Field label="Phone Number" type="tel" />
              <Field label="Email Address" type="email" />
              <Field label="Your Pup's Name" />
            </div>
            <textarea
              rows={4}
              aria-label="Tell us about your pup"
              placeholder="Tell us about your pup (breed, age, coat, any concerns)"
              className="w-full border border-gold/35 bg-cream px-3.5 py-3 text-[12px] text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold-deep"
            />
            <button type="submit" className="btn-dark w-full">
              BOOK MY FREE CONSULTATION
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-[11.5px] text-ink-soft">
          No obligation. Just expert advice and happy tails.
        </p>
      </section>

      <SiteFooter />
    </PageShell>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <input
      type={type}
      aria-label={label}
      placeholder={label}
      className="w-full border border-gold/35 bg-cream px-3.5 py-3 text-[12px] text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold-deep"
    />
  );
}
