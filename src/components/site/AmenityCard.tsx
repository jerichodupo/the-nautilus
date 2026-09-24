import {
  Armchair,
  Droplets,
  Dumbbell,
  Flower2,
  Gamepad2,
  Presentation,
  ShoppingBag,
  UtensilsCrossed,
  Waves,
  Wine,
  type LucideIcon,
} from "lucide-react";
import type { Amenity } from "@/data/site";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  Waves,
  Droplets,
  Dumbbell,
  Flower2,
  UtensilsCrossed,
  Gamepad2,
  Wine,
  Armchair,
  ShoppingBag,
  Presentation,
};

export function AmenityCard({ amenity, index = 0 }: { amenity: Amenity; index?: number }) {
  const Icon = icons[amenity.icon] ?? Waves;
  return (
    <Reveal
      delay={(index % 5) * 60}
      className="group rounded-sm border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-sm bg-sand-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="mt-5 font-heading text-base font-semibold tracking-wide text-foreground">
        {amenity.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{amenity.description}</p>
    </Reveal>
  );
}
