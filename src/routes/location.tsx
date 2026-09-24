import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { casobeFeatures } from "@/data/site";
import { images } from "@/lib/images";

const title = "Location & CaSoBē | The Nautilus, Calatagan, Batangas";
const description =
  "The Nautilus sits within CaSoBē, a 15-hectare master-planned seaside community in Calatagan, Batangas — beachfront, boardwalk, lighthouse, beach club, Aquaria Waterpark, and dining.";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHero
        image={images.heroLocation}
        eyebrow="Location & CaSoBē"
        title="Calatagan, Batangas."
        description="On the southwestern coast of Luzon, where the land opens to the sea — home to CaSoBē, a 15-hectare master-planned seaside community by Landco."
      />

      <section className="section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Community"
              title="Inside CaSoBē."
              description="The Nautilus is one address within a larger coastal world. CaSoBē brings together beach, leisure, hospitality, and residential life along a single, walkable shoreline."
            />
          </div>
          {/* Map-style location story */}
          <Reveal className="relative overflow-hidden rounded-sm bg-gunmetal p-8 text-gunmetal-foreground lg:col-span-7 lg:p-12">
            <img src={images.aerial} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="relative">
              <p className="eyebrow text-sand">Destination Map</p>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                {casobeFeatures.map((f, i) => (
                  <li key={f.name} className="flex gap-4 rounded-sm border border-gunmetal-foreground/10 bg-gunmetal/60 p-4 backdrop-blur">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-coral font-heading text-xs font-semibold text-coral-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-heading font-medium tracking-wide">{f.name}</p>
                      <p className="mt-1 text-sm text-gunmetal-foreground/70">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex items-center gap-2 text-xs text-gunmetal-foreground/60">
                <MapPin className="size-3.5 text-sand" aria-hidden />
                Illustrative overview. Layout and features subject to the master plan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-sand-light">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Getting There"
            title="A coastal escape from Metro Manila."
            description="Calatagan is reached by road from Metro Manila via the southern expressways and the Batangas coastal routes. Travel times vary with traffic and route; our team can share directions and the best approach for your visit."
          />
          <Reveal className="img-zoom relative aspect-[4/3] rounded-sm">
            <img src={images.boardwalk} alt="CaSoBē boardwalk at sunset" loading="lazy" width={1408} height={1056} className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <CTASection
        variant="image"
        image={images.heroLocation}
        title="See it for yourself."
        body="Request project details or arrange a site visit to CaSoBē with the project team."
        primaryLabel="Request a Site Visit"
        secondaryLabel="Explore the Experience"
        secondaryTo="/experience"
      />
    </>
  );
}
