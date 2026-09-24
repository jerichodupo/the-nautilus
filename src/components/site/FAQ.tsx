import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  return (
    <Reveal>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="py-6 text-left font-heading text-base font-medium tracking-wide text-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
