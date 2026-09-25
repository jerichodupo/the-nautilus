import { createFileRoute } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Steps } from "@/components/site/Steps";
import { ownershipSteps, programSteps, site } from "@/data/site";
import { images } from "@/lib/images";

const title = "Investment & Ownership | The Nautilus at CaSoBē";
const description =
  "Own a beachfront residence at The Nautilus for personal use, with optional rental / leaseback participation through Landco Lifestyle Ventures, subject to program terms.";

export const Route = createFileRoute("/investment")({
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
  component: InvestmentPage,
});

const why = [
  { t: "Beachfront scarcity", b: "Genuine beachfront residences in a master-planned community are finite by nature." },
  { t: "Lifestyle you actually use", b: "A titled residence for your own escapes — not a timeshare, not a hotel room." },
  { t: "Optional income participation", b: "Enroll in the LLV rental / leaseback program when you're away, subject to terms." },
  { t: "Established developer", b: `${site.developer}, with 30+ years of leisure and lifestyle developments.` },
  { t: "Integrated destination", b: "CaSoBē's beach club, waterpark, boardwalk, and dining support year-round appeal." },
  { t: "Professional management", b: "Hospitality-grade operations planned for enrolled residences by Landco Lifestyle Ventures." },
];

function InvestmentPage() {
  return (
    <>
      <PageHero
        image={images.heroInvestment}
        eyebrow="Investment & Ownership"
        title="Own the escape. Let it work while you're away."
        description="The Nautilus is designed as both a lifestyle asset and an optional income participation opportunity — presented plainly, without guarantees."
        ctaLabel="Request Investment Brief"
      />

      <section className="section-pad bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="Why The Nautilus" title="Six reasons owners choose the horizon." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 70} className="rounded-sm border border-border bg-card p-8 shadow-soft">
                <Check className="size-5 text-primary" aria-hidden />
                <h3 className="mt-5 font-heading text-lg font-medium tracking-wide text-foreground">{w.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand-light">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Ownership Path"
            title="Own. Enjoy. Enroll."
            description="Ownership comes first. Enjoyment is yours whenever you wish. Enrollment in the rental program is a choice you can make — or not."
          />
          <div className="mt-14">
            <Steps steps={ownershipSteps} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-deep text-on-image">
        <div className="container-site">
          <SectionHeading
            eyebrow="Optional Rental / Leaseback"
            title="How it works."
            tone="light"
            description="At a high level, the Landco Lifestyle Ventures program follows three stages. Complete program documents are provided upon inquiry."
          />
          <div className="mt-14">
            <Steps steps={programSteps} tone="light" />
          </div>
          <Reveal className="mt-10 flex gap-4 rounded-sm border border-on-image/20 bg-on-image/5 p-6 text-sm leading-relaxed text-on-image-muted">
            <Info className="mt-0.5 size-5 shrink-0 text-sand" aria-hidden />
            <p>
              <strong className="text-on-image">Important:</strong> Participation is optional and subject to a
              separate agreement. Program terms, management fees, applicable taxes, unit availability, blackout or
              owner-use provisions, and other agreement conditions apply. Rental revenue depends on market
              performance and is not guaranteed. This page is informational and not financial advice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="img-zoom relative aspect-[4/3] rounded-sm">
            <img src={images.aerial} alt="Aerial view of the CaSoBē seaside community" loading="lazy" width={1920} height={1088} className="h-full w-full object-cover" />
          </Reveal>
          <SectionHeading
            eyebrow="Developer Credibility"
            title="Backed by Landco Pacific Corporation."
            description="With over 30 years developing leisure and lifestyle communities across the Philippines, Landco created CaSoBē and operates hospitality through Landco Lifestyle Ventures — the same group behind the optional rental program."
          />
        </div>
      </section>

      <CTASection
        title="Request the investment brief."
        body="Receive pricing, payment terms, program details, and availability directly from the project team."
        primaryLabel="Request Project Details"
        secondaryLabel="View Residences"
        secondaryTo="/residences"
      />
    </>
  );
}
