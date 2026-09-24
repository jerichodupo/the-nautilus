import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import type { UnitType } from "@/data/site";
import { Reveal } from "./Reveal";

type Props = {
  unit: UnitType;
  image: string;
  index?: number;
  detailed?: boolean;
};

export function PropertyCard({ unit, image, index = 0, detailed = false }: Props) {
  return (
    <Reveal delay={index * 80} as="article" className="group flex h-full flex-col">
      <div className="img-zoom relative aspect-[4/3] rounded-sm bg-muted">
        <img
          src={image}
          alt={`${unit.name} residence at The Nautilus`}
          loading="lazy"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1.5 font-heading text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur">
          {unit.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl font-medium tracking-wide text-foreground">{unit.name}</h3>
          <p className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
            <Maximize2 className="size-3.5 text-primary" aria-hidden />
            {unit.sizeRange}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{unit.summary}</p>
        {detailed && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {unit.highlights.map((h) => (
              <li
                key={h}
                className="rounded-sm border border-border bg-sand-light px-2.5 py-1 text-xs text-foreground/80"
              >
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
          <Link
            to="/inquire"
            search={{ unit: unit.name }}
            className="inline-flex items-center gap-2 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-coral"
          >
            Request details
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
