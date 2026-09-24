import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Text logo placeholder. To use the official mark, replace the inner markup
 * with an <img src={logo} alt="The Nautilus at CaSoBē" /> import.
 */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="The Nautilus at CaSoBē — Home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-heading text-xl font-light uppercase tracking-[0.32em] transition-colors sm:text-2xl",
          light ? "text-on-image" : "text-foreground",
        )}
      >
        The Nautilus
      </span>
      <span
        className={cn(
          "mt-1.5 font-heading text-[0.58rem] font-semibold uppercase tracking-[0.36em]",
          light ? "text-sand" : "text-primary",
        )}
      >
        at CaSoBē · Calatagan
      </span>
    </Link>
  );
}
