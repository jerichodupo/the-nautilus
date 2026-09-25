import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";
import { images } from "@/lib/images";

const title = "Inquire | Request Project Details — The Nautilus at CaSoBē";
const description =
  "Request the project brief, floor plans, pricing, and availability for The Nautilus at CaSoBē, Calatagan. A project specialist will get in touch.";

export const Route = createFileRoute("/inquire")({
  validateSearch: z.object({ unit: z.string().optional() }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InquirePage,
});

function InquirePage() {
  const { unit } = Route.useSearch();
  return (
    <>
      <section className="relative overflow-hidden bg-gunmetal pt-32 pb-16 text-gunmetal-foreground lg:pt-44 lg:pb-24">
        <img src={images.heroInquire} alt="" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-site relative">
          <SectionHeading
            as="h1"
            eyebrow="Inquire"
            title="Request project details."
            tone="light"
            description="Share a few details and receive the project brief, floor plans, current pricing, and availability — directly from the team, with no obligation."
          />
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="rounded-sm border border-border bg-card p-6 shadow-card sm:p-10 lg:col-span-7">
            <InquiryForm defaultUnit={unit} />
          </Reveal>

          <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <h2 className="eyebrow">Project Location</h2>
              <ul className="mt-6 space-y-5 text-sm text-foreground/85">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{site.contact.address}</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="rounded-sm bg-sand-light p-6">
              <ShieldCheck className="size-5 text-primary" aria-hidden />
              <h2 className="mt-4 font-heading font-medium tracking-wide text-foreground">Your privacy</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your details are used only to respond to this inquiry. We don't sell or share your information
                with third parties for marketing, and you can ask us to delete it at any time.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="eyebrow">What happens next</h2>
              <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li><span className="font-semibold text-foreground">1.</span> A project specialist reviews your inquiry.</li>
                <li><span className="font-semibold text-foreground">2.</span> You receive the brief, plans, pricing, and availability.</li>
                <li><span className="font-semibold text-foreground">3.</span> Optional: schedule a call or a site visit to CaSoBē.</li>
              </ol>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
