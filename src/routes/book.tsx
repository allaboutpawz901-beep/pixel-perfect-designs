import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { PawGlyph } from "@/components/brand";
import pom from "@/assets/dog-pomeranian.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | All About Pawz" },
      {
        name: "description",
        content:
          "Book your dog's grooming appointment online in just a few easy steps — choose a service, pick a date and time, and confirm.",
      },
      { property: "og:title", content: "Book an Appointment | All About Pawz" },
      {
        property: "og:description",
        content: "Your pup deserves this. Book online in just a few easy steps.",
      },
    ],
  }),
  component: Book,
});

const STEPS = ["CHOOSE SERVICE", "PICK DATE & TIME", "YOUR DETAILS", "CONFIRM"];
const SIZES = ["Small (0-20 lbs)", "Medium (20-50 lbs)", "Large (50-90 lbs)", "X-Large (90+ lbs)"];

function Book() {
  const [size, setSize] = useState(SIZES[0]);

  return (
    <PageShell>
      <PageHeader n="09" label="BOOK APPOINTMENT" />

      <section className="marble grid grid-cols-1 items-center gap-8 bg-cream px-8 py-10 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <h1 className="font-display text-[38px] leading-[1.1] text-ink">
            Your Pup
            <br />
            Deserves This.
          </h1>
          <p className="mt-5 text-[12.5px] leading-[1.85] text-ink-soft">
            Book online in just a few easy steps.
          </p>
        </div>
        <img
          src={pom}
          alt="Happy pomeranian"
          width={900}
          height={1024}
          loading="lazy"
          className="mx-auto h-[320px] w-full object-cover object-center"
        />
      </section>

      <section className="marble bg-cream px-8 pb-14 lg:px-12">
        <ol className="relative flex items-start justify-between">
          <span className="absolute left-[8%] right-[8%] top-[22px] h-px bg-gold/30" />
          {STEPS.map((s) => (
            <li key={s} className="relative z-10 flex-1 text-center">
              <span className="mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-full border border-gold/45 bg-cream">
                <PawGlyph className="h-5 w-5 text-gold-deep" />
              </span>
              <span className="mt-3 block text-[9px] font-bold tracking-[0.13em] text-ink-soft">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <form
          className="mt-10 border border-gold/30 bg-card p-7"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Label>SELECT A SERVICE</Label>
          <select
            aria-label="Select a service"
            className="mt-2 w-full appearance-none border border-gold/35 bg-cream px-3.5 py-3 text-[12px] text-ink focus:outline-none focus:ring-1 focus:ring-gold-deep"
          >
            <option>Grooming - Full Groom</option>
            <option>Bath &amp; Brush</option>
            <option>Deluxe Spa</option>
            <option>Nail &amp; Paw Care</option>
          </select>

          <div className="mt-7">
            <Label>SELECT YOUR PUP'S SIZE</Label>
            <div className="mt-3 flex flex-wrap gap-6">
              {SIZES.map((s) => (
                <label key={s} className="flex items-center gap-2 text-[11.5px] text-ink-soft">
                  <input
                    type="radio"
                    name="size"
                    checked={size === s}
                    onChange={() => setSize(s)}
                    className="h-3 w-3 accent-[oklch(0.6_0.093_62)]"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <Label>SELECT DATE &amp; TIME</Label>
            <div className="mt-2 grid gap-4 lg:grid-cols-2">
              <select
                aria-label="Select date"
                className="w-full appearance-none border border-gold/35 bg-cream px-3.5 py-3 text-[12px] text-ink focus:outline-none focus:ring-1 focus:ring-gold-deep"
              >
                <option>May 24, 2025</option>
                <option>May 25, 2025</option>
                <option>May 26, 2025</option>
              </select>
              <select
                aria-label="Select time"
                className="w-full appearance-none border border-gold/35 bg-cream px-3.5 py-3 text-[12px] text-ink focus:outline-none focus:ring-1 focus:ring-gold-deep"
              >
                <option>10:00 AM</option>
                <option>11:30 AM</option>
                <option>1:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn-dark mt-8 w-full">
            CONTINUE TO YOUR DETAILS
            <PawGlyph className="h-3.5 w-3.5 text-gold" />
          </button>
        </form>

        <p className="mt-6 text-center text-[11.5px] text-ink-soft">
          Need help? Call or text us at (555) 123-PAWZ
        </p>
      </section>

      <SiteFooter />
    </PageShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9.5px] font-bold tracking-[0.16em] text-gold-deep">{children}</span>
  );
}
