import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Home as HomeIcon, KeyRound, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmenityCard } from "@/components/site/AmenityCard";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Steps } from "@/components/site/Steps";
import { amenities, ownershipSteps, privilegeBenefits, site, units } from "@/data/site";
import { images, unitImages } from "@/lib/images";

const title = "The Nautilus at CaSoBē | Luxury Beachfront Residences in Calatagan, Batangas";
const description =
  "Own a luxury beachfront residence at The Nautilus, CaSoBē, Calatagan. 176 residences from Studio to Loft, with optional rental participation by Landco. Request project details.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const pillars = [
  {
    icon: Building2,
    title: "Architectural Icon",
    body: "A sculptural beachfront landmark inspired by exploration and sanctuary — designed to be recognized from the shoreline.",
  },
  {
    icon: HomeIcon,
    title: "Beachfront Living",
    body: "Wake to the Calatagan coastline. Beach, pool, wellness, and dining are part of daily life — not a holiday exception.",
  },
  {
    icon: KeyRound,
    title: "Ownership Opportunity",
    body: "A titled residence you can enjoy personally, with optional rental participation through Landco Lifestyle Ventures.",
  },
];

function Index() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <img
          src={images.heroHome}
          alt="The Nautilus beachfront residences at sunset, CaSoBē, Calatagan"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="container-site relative pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow text-sand animate-in fade-in slide-in-from-bottom-2 duration-700">
              {site.location}
            </p>
            <h1 className="display-title mt-6 text-4xl text-on-image animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-100 sm:text-6xl lg:text-7xl">
              Where the horizon becomes home.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-image-muted animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-200 sm:text-xl">
              The Nautilus at CaSoBē, Calatagan, Batangas. Luxury beachfront residences for coastal
              living, personal escape, and ownership.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-300">
              <Button asChild variant="coral" size="xl">
                <Link to="/investment">
                  Explore Ownership
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/residences">View Residences</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-on-image/60 sm:flex" aria-hidden>
          <span className="font-heading text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-on-image/40" />
        </div>
      </section>

      {/* 2. Three pillars */}
      <section className="section-pad bg-background">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Nautilus"
            title="A place to live. A place to escape. A place to own."
            description="More than a beachfront address, The Nautilus is a way of holding time by the sea — designed for the way you live, the way you rest, and the way you invest."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="group rounded-sm border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:p-10"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-sm bg-sand-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-8 font-heading text-xl font-medium tracking-wide text-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. More than an escape — Own/Enjoy/Enroll */}
      <section className="section-pad bg-sand-light">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Ownership, Reimagined"
                title="More than a beachfront escape."
                description="The Nautilus offers private coastal residences you own outright. Use your home whenever you wish. And when you're away, you may choose to enroll it in the Landco Lifestyle Ventures rental / leaseback program — subject to applicable terms — so the residence stays cared for and in use."
              />
            </div>
            <Reveal className="lg:col-span-5">
              <Button asChild variant="outline" size="lg">
                <Link to="/investment">
                  Explore Investment
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14">
            <Steps steps={ownershipSteps} />
          </div>
        </div>
      </section>

      {/* 4. Early lead capture */}
      <section className="section-pad bg-background" id="inquire">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Start the Conversation"
              title="Could The Nautilus be your next coastal address?"
              description="Share a few details and receive the project brief, floor plans, and current pricing and availability directly from the team."
            />
            <Reveal className="mt-10 space-y-4 text-sm text-muted-foreground">
              {[
                "Project brief and residence floor plans",
                "Current pricing, payment terms, and availability",
                "Rental / leaseback program overview and terms",
              ].map((t) => (
                <p key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {t}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal className="rounded-sm border border-border bg-card p-6 shadow-card sm:p-10 lg:col-span-7">
            <InquiryForm compact />
          </Reveal>
        </div>
      </section>

      {/* 5. Location story */}
      <section className="section-pad bg-gunmetal text-gunmetal-foreground">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="img-zoom relative aspect-[4/3] rounded-sm">
            <img
              src={images.boardwalk}
              alt="CaSoBē boardwalk and lighthouse along the Calatagan coast"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Calatagan, Batangas"
              title="Your escape, within reach."
              tone="light"
              description="The Nautilus rises within CaSoBē, a 15-hectare master-planned seaside community on the Calatagan coast. Beachfront, boardwalk, lighthouse, beach club, waterpark, and dining — a complete coastal world on Luzon's southwestern shore."
            />
            <Reveal className="mt-10">
              <Button asChild variant="outline-light" size="lg">
                <Link to="/location">
                  Discover the Location
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Architecture */}
      <section className="section-pad bg-background">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:order-2">
            <SectionHeading
              eyebrow="Design"
              title="An architectural icon by the sea."
              description="Inspired by the spirit of maritime exploration and the idea of sanctuary, The Nautilus takes its form from the sea itself — curved terraces, layered volumes, and timber textures that soften the light. It is designed as both a landmark and a refuge."
            />
            <Reveal className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-heading text-3xl font-light text-primary">{site.residenceCount}</p>
                <p className="mt-1 text-sm text-muted-foreground">Private residences</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-light text-primary">6</p>
                <p className="mt-1 text-sm text-muted-foreground">Residence configurations</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="img-zoom relative aspect-[4/5] rounded-sm lg:col-span-6 lg:order-1">
            <img
              src={images.architecture}
              alt="Curved terraces and timber louvers of The Nautilus facade"
              loading="lazy"
              width={1408}
              height={1760}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* 7. Residences */}
      <section className="section-pad bg-sand-light">
        <div className="container-site">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Residences"
              title="Find your place by the sea."
              description={`${site.residenceCount} residences across six configurations — from an efficient Studio to the signature Loft. Availability and pricing are confirmed upon inquiry.`}
            />
            <Reveal>
              <Button asChild variant="outline">
                <Link to="/residences">View all residences</Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((u, i) => (
              <PropertyCard key={u.slug} unit={u} image={unitImages[u.slug]} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Amenities */}
      <section className="section-pad bg-background">
        <div className="container-site">
          <SectionHeading
            eyebrow="Amenities"
            title="More than a residence."
            description="Everything a coastal life asks for, arranged around the shoreline."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {amenities.map((a, i) => (
              <AmenityCard key={a.name} amenity={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Rental / leaseback */}
      <section className="relative overflow-hidden section-pad bg-primary-deep text-on-image">
        <img
          src={images.pool}
          alt=""
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="container-site relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Optional Program"
              title="Let your residence work for you."
              tone="light"
              description="When you're not in residence, you may choose to enroll your unit in a rental / leaseback program operated by Landco Lifestyle Ventures. Enrolled residences may be offered to guests and professionally managed, with participating owners sharing in rental revenue as defined by the program."
            />
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <ul className="space-y-5 border-l border-on-image/20 pl-6 text-on-image-muted">
              {[
                "Participation is entirely optional and governed by a separate agreement.",
                "Program terms, fees, taxes, availability, and conditions apply.",
                "Rental income is not guaranteed and depends on market performance.",
                "Full program details are provided upon inquiry.",
              ].map((t) => (
                <li key={t} className="text-sm leading-relaxed sm:text-base">
                  {t}
                </li>
              ))}
            </ul>
            <Button asChild variant="coral" size="lg" className="mt-10">
              <Link to="/investment">
                How it works
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 10. Developer */}
      <section className="section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Developer"
              title="Backed by Landco."
              description="The Nautilus is developed by Landco Pacific Corporation, with over 30 years of experience creating leisure and lifestyle destinations across the Philippines — including the CaSoBē community itself."
            />
          </div>
          <Reveal className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3 lg:col-span-7">
            {[
              { k: "30+", v: "Years of developing leisure and lifestyle communities" },
              { k: "CaSoBē", v: "15-hectare master-planned seaside community by Landco" },
              { k: "LLV", v: "Landco Lifestyle Ventures — hospitality and rental operations" },
            ].map((s) => (
              <div key={s.k} className="bg-card p-8">
                <p className="font-heading text-3xl font-light text-primary">{s.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 11. Owner benefits */}
      <section className="section-pad bg-sand-light">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="img-zoom relative aspect-[4/3] rounded-sm lg:order-2">
            <img
              src={images.dining}
              alt="Seaside dining terrace at golden hour"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div className="lg:order-1">
            <SectionHeading
              eyebrow="Owner Privileges"
              title="Belong to the Landco lifestyle."
              description="Ownership at The Nautilus may extend beyond the property through the Landco Privilege Program / Club, subject to its terms and conditions."
            />
            <Reveal className="mt-8 space-y-4">
              {privilegeBenefits.map((b) => (
                <p key={b} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  {b}
                </p>
              ))}
              <p className="pt-2 text-xs text-muted-foreground/80">
                Benefits, eligibility, and participating destinations are subject to program terms and may change.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked."
              description="Straight answers on residences, ownership, and the program."
            />
            <Reveal className="mt-8">
              <Button asChild variant="outline">
                <Link to="/inquire">Ask the team</Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <FAQ />
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <CTASection
        variant="image"
        image={images.heroHome}
        eyebrow="The Nautilus at CaSoBē"
        title="Your place by the sea."
        body="Request the project brief, floor plans, and current availability. A project specialist will guide you from first look to ownership."
        primaryLabel="Inquire Now"
        secondaryLabel="View Residences"
        secondaryTo="/residences"
      />
    </>
  );
}
