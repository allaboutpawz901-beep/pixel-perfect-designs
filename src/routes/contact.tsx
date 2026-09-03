import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageShell, PageHeader, SiteFooter } from "@/components/PageShell";
import { Divider } from "@/components/brand";
import storefront from "@/assets/storefront.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | All About Pawz Dog Grooming Salon" },
      {
        name: "description",
        content:
          "Visit, call, or message the All About Pawz grooming salon. Address, hours, phone, email, social links, and directions to our boutique.",
      },
      { property: "og:title", content: "Contact | All About Pawz" },
      {
        property: "og:description",
        content: "Come Say Hello. Address, hours, phone, and directions to our salon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  { icon: MapPin, label: "VISIT US", lines: ["1428 Maple Grove Avenue", "Suite 4, Riverbend, IL 60614"] },
  { icon: Phone, label: "CALL US", lines: ["(312) 555-0142"] },
  { icon: Mail, label: "EMAIL US", lines: ["hello@allaboutpawz.com"] },
  {
    icon: Clock,
    label: "HOURS",
    lines: ["Tuesday – Saturday  9am – 6pm", "Sunday  10am – 4pm", "Monday  Closed"],
  },
];

function Contact() {
  return (
    <PageShell>
      <PageHeader n="10" label="CONTACT" />

      <section className="marble bg-cream px-8 py-14 lg:px-12">
        <h1 className="font-display text-[38px] leading-[1.1] text-ink">
          Come Say
          <br />
          Hello.
        </h1>
        <Divider />
        <p className="mt-5 max-w-md text-[12.5px] leading-[1.9] text-ink-soft">
          Questions about a service, a coat type, or which package suits your pup best? We would love
          to hear from you. Reach out and a member of our team will respond personally.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-7">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex gap-4">
                <d.icon className="mt-[2px] h-4 w-4 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-ink">{d.label}</p>
                  {d.lines.map((l) => (
                    <p key={l} className="mt-1 text-[12.5px] leading-[1.8] text-ink-soft">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <img
            src={storefront}
            alt="All About Pawz boutique grooming salon storefront"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-ink px-8 py-12 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="flex h-56 items-center justify-center border border-gold/25 bg-ink-soft/40">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-gold" />
              <p className="mt-3 text-[10px] font-bold tracking-[0.18em] text-gold">
                FIND US ON THE MAP
              </p>
              <p className="mt-2 text-[12px] text-on-dark-muted">
                1428 Maple Grove Avenue, Riverbend, IL
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-[24px] leading-[1.2] text-on-dark">
              Free parking directly
              <br />
              behind the salon.
            </h2>
            <a
              href="https://maps.google.com/?q=1428+Maple+Grove+Avenue"
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-6 inline-flex"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
