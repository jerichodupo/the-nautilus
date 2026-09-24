import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  as: Tag = "h2",
}: Props) {
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "text-sand")}>{eyebrow}</p>
      )}
      <Tag
        className={cn(
          "display-title text-3xl sm:text-4xl lg:text-[2.75rem]",
          light ? "text-on-image" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      <div className={cn("hairline mt-6", align === "center" && "mx-auto")} />
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            light ? "text-on-image-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
