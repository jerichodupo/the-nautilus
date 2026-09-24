import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: "/residences" | "/investment" | "/experience" | "/location";
  image?: string;
  variant?: "sea" | "sand" | "image";
  className?: string;
};

/** Reusable conversion block used at the end of every page and between sections. */
export function CTASection({
  eyebrow = "Ownership Inquiry",
  title,
  body,
  primaryLabel = "Inquire Now",
  secondaryLabel,
  secondaryTo,
  image,
  variant = "sea",
  className,
}: Props) {
  const light = variant !== "sand";
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "sea" && "bg-sea-gradient",
        variant === "sand" && "bg-sand-light",
        className,
      )}
    >
      {variant === "image" && image && (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gunmetal/65" aria-hidden />
        </>
      )}
      <div className="container-site relative section-pad text-center">
        <Reveal className="mx-auto max-w-3xl">
          <p className={cn("eyebrow mb-4", light && "text-sand")}>{eyebrow}</p>
          <h2
            className={cn(
              "display-title text-3xl sm:text-4xl lg:text-5xl",
              light ? "text-on-image" : "text-foreground",
            )}
          >
            {title}
          </h2>
          {body && (
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
                light ? "text-on-image-muted" : "text-muted-foreground",
              )}
            >
              {body}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant={light ? "coral" : "default"} size="xl">
              <Link to="/inquire">
                {primaryLabel}
                <ArrowRight />
              </Link>
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button asChild variant={light ? "outline-light" : "outline"} size="xl">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
