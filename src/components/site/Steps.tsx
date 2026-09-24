import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Step = { step: string; title: string; body: string };

export function Steps({ steps, tone = "default" }: { steps: Step[]; tone?: "default" | "light" }) {
  const light = tone === "light";
  return (
    <ol className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal
          key={s.step}
          as="li"
          delay={i * 100}
          className={cn(
            "relative flex flex-col p-8 lg:p-10",
            light ? "bg-primary-deep text-on-image" : "bg-card text-foreground",
          )}
        >
          <span
            className={cn(
              "font-heading text-5xl font-extralight tracking-tight",
              light ? "text-sand/70" : "text-primary/30",
            )}
          >
            {s.step}
          </span>
          <h3 className="mt-6 font-heading text-2xl font-light uppercase tracking-[0.18em]">{s.title}</h3>
          <p className={cn("mt-4 text-sm leading-relaxed", light ? "text-on-image-muted" : "text-muted-foreground")}>
            {s.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
