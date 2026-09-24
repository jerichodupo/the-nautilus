import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  compact?: boolean;
};

/** Interior page hero — image with a dark overlay and page-level heading. */
export function PageHero({
  image,
  eyebrow,
  title,
  description,
  ctaLabel = "Request Project Details",
  compact = false,
}: Props) {
  return (
    <section className={cn("relative flex items-end overflow-hidden", compact ? "min-h-[60vh]" : "min-h-[72vh]")}>
      <img
        src={image}
        alt=""
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />
      <div className="container-site relative pb-16 pt-40 lg:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-sand animate-in fade-in slide-in-from-bottom-2 duration-700">
            {eyebrow}
          </p>
          <h1 className="display-title mt-5 text-4xl text-on-image animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-image-muted animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200">
              {description}
            </p>
          )}
          <div className="mt-9 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300">
            <Button asChild variant="coral" size="lg">
              <Link to="/inquire">
                {ctaLabel}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
