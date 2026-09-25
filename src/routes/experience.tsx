import { createFileRoute } from "@tanstack/react-router";
import { AmenityCard } from "@/components/site/AmenityCard";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { amenities } from "@/data/site";
import { images } from "@/lib/images";

const title = "The Experience | The Nautilus at CaSoBē";
const description =
  "Architecture, beachfront living, wellness, dining, and entertainment at The Nautilus — coastal life within the CaSoBē community in Calatagan.";

export const Route = createFileRoute("/experience")({
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
  component: ExperiencePage,
});

const chapters = [
  {
    eyebrow: "Architecture",
    title: "Form drawn from the sea.",
    body: "The Nautilus takes its name and its shape from a journey — layered terraces spiral toward the horizon, timber louvers filter the light, and every residence opens outward. It is architecture as sanctuary: a landmark from the beach, a refuge from within.",
    image: images.architecture,
    alt: "Curved facade and timber louvers of The Nautilus",
    portrait: true,
  },
  {
    eyebrow: "Beachfront Living",
    title: "The shoreline as your front garden.",
    body: "Step from the lobby to the sand. Mornings begin with the tide; evenings close with the sun dropping into the sea. The infinity pool holds the horizon in place between them.",
    image: images.heroHome,
    alt: "Infinity pool overlooking the Calatagan coast at sunset",
  },
  {
    eyebrow: "Wellness",
    title: "Slow days, by design.",
    body: "Yoga at first light, a sauna after a swim, a spa ritual in the afternoon. Wellness spaces are woven into the residence so restoration becomes routine, not a retreat you have to book.",
    image: images.wellness,
    alt: "Open-air yoga pavilion by the sea",
  },
  {
    eyebrow: "Dining & Entertainment",
    title: "From restobar to speakeasy.",
    body: "Coastal dining at the restobar, an intimate speakeasy for late conversations, a gameroom for family evenings, and a lobby lounge for quiet arrivals — all within a few steps of home.",
    image: images.dining,
    alt: "Seaside restobar terrace at golden hour",
  },
  {
    eyebrow: "CaSoBē Lifestyle",
    title: "A whole coastal world beyond your door.",
    body: "The Nautilus sits within CaSoBē's 15-hectare seaside community — boardwalk strolls, the lighthouse at dusk, the beach club, Aquaria Waterpark for the family, and a growing collection of dining and hospitality.",
    image: images.boardwalk,
    alt: "CaSoBē boardwalk with lighthouse at sunset",
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHero
        image={images.heroExperience}
        eyebrow="The Experience"
        title="Life, at the pace of the tide."
        description="An editorial look at the architecture, shoreline, wellness, and dining that define daily life at The Nautilus."
      />

      {chapters.map((c, i) => (
        <section key={c.title} className={i % 2 === 0 ? "section-pad bg-background" : "section-pad bg-sand-light"}>
          <div className="container-site grid items-center gap-12 lg:grid-cols-12">
            <Reveal
              className={`img-zoom relative rounded-sm lg:col-span-6 ${c.portrait ? "aspect-[4/5]" : "aspect-[4/3]"} ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <img src={c.image} alt={c.alt} loading="lazy" width={1408} height={1056} className="h-full w-full object-cover" />
            </Reveal>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-8"}`}>
              <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.body} />
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="Amenities" title="Everything, arranged around the sea." align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {amenities.map((a, i) => (
              <AmenityCard key={a.name} amenity={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="image"
        image={images.heroExperience}
        title="Make this your everyday."
        body="Request the project brief and discover which residence fits the life you have in mind."
        secondaryLabel="View Residences"
        secondaryTo="/residences"
      />
    </>
  );
}
