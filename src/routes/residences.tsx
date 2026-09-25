import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site, units } from "@/data/site";
import { images, unitImages } from "@/lib/images";

const title = "Residences | The Nautilus at CaSoBē";
const description =
  "Explore six beachfront residence types at The Nautilus — Studio, 1 Bedroom, 1 Bedroom Loft, 2 Bedroom, 2 Bedroom Loft, and Loft, from 38.1 to 182.7 sqm.";

export const Route = createFileRoute("/residences")({
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
  component: ResidencesPage,
});

function ResidencesPage() {
  return (
    <>
      <PageHero
        image={images.heroResidences}
        eyebrow="Residences"
        title="Find your place by the sea."
        description={`${site.residenceCount} private beachfront residences across six configurations, designed around light, air, and the horizon.`}
      />

      <section className="section-pad bg-background">
        <div className="container-site">
          <SectionHeading
            eyebrow="Six Configurations"
            title="From coastal pied-à-terre to signature loft."
            description="Indicative floor areas are shown below. Exact areas, orientation, views, pricing, and availability are confirmed by the project team upon inquiry."
          />
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((u, i) => (
              <PropertyCard key={u.slug} unit={u} image={unitImages[u.slug]} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand-light">
        <div className="container-site">
          <SectionHeading eyebrow="Size Guide" title="Residences at a glance." align="center" />
          <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-sm border border-border bg-card shadow-soft">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Residence types and indicative floor areas</caption>
              <thead className="bg-muted font-heading text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Residence</th>
                  <th scope="col" className="px-6 py-4 text-right font-semibold">Indicative floor area</th>
                </tr>
              </thead>
              <tbody>
                {units.map((u) => (
                  <tr key={u.slug} className="border-t border-border">
                    <th scope="row" className="px-6 py-4 font-heading font-medium text-foreground">{u.name}</th>
                    <td className="px-6 py-4 text-right text-muted-foreground">{u.sizeRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-border px-6 py-4 text-xs text-muted-foreground">
              Floor areas are indicative and subject to change. Pricing and availability to be confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Request floor plans and availability."
        body="Tell us which residence interests you and we'll send the plans, pricing, and current availability."
        primaryLabel="Request Project Details"
        secondaryLabel="Explore Investment"
        secondaryTo="/investment"
      />
    </>
  );
}
