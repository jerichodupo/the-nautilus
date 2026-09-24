import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { interestOptions, site, unitOptions } from "@/data/site";
import { inquirySchema, submitInquiry, type InquiryInput } from "@/lib/inquiry.functions";
import { cn } from "@/lib/utils";

type Props = {
  defaultUnit?: string;
  compact?: boolean;
  className?: string;
  submitLabel?: string;
};

export function InquiryForm({
  defaultUnit,
  compact = false,
  className,
  submitLabel = "Request Project Details",
}: Props) {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const initialUnit = unitOptions.find((u) => u === defaultUnit);

  const form = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      unit: initialUnit,
      interest: undefined,
      message: "",
      consent: undefined as unknown as true,
      website: "",
    },
  });

  const { register, handleSubmit, setValue, watch, formState } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      await send({ data: values });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn("rounded-sm border border-primary/20 bg-sand-light p-10 text-center", className)}
      >
        <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden />
        <h3 className="display-title mt-6 text-2xl text-foreground">Thank you</h3>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Your inquiry has been received. A project specialist will reach out with the latest
          residence details, pricing, and availability.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer to talk sooner? Email{" "}
          <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldClass = "h-12 rounded-sm border-input bg-background text-base";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("space-y-5", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message} htmlFor="firstName">
          <Input id="firstName" autoComplete="given-name" className={fieldClass} {...register("firstName")} />
        </Field>
        <Field label="Last name" error={errors.lastName?.message} htmlFor="lastName">
          <Input id="lastName" autoComplete="family-name" className={fieldClass} {...register("lastName")} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input id="email" type="email" autoComplete="email" inputMode="email" className={fieldClass} {...register("email")} />
        </Field>
        <Field label="Mobile number" error={errors.mobile?.message} htmlFor="mobile">
          <Input id="mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="+63" className={fieldClass} {...register("mobile")} />
        </Field>
        <Field label="Interested residence" error={errors.unit?.message} htmlFor="unit">
          <Select
            value={watch("unit")}
            onValueChange={(v) => setValue("unit", v as InquiryInput["unit"], { shouldValidate: true })}
          >
            <SelectTrigger id="unit" className={fieldClass} aria-invalid={!!errors.unit}>
              <SelectValue placeholder="Select a residence type" />
            </SelectTrigger>
            <SelectContent>
              {unitOptions.map((u) => (
                <SelectItem key={u} value={u}>
                  {u}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Primary interest" error={errors.interest?.message} htmlFor="interest">
          <Select
            value={watch("interest")}
            onValueChange={(v) => setValue("interest", v as InquiryInput["interest"], { shouldValidate: true })}
          >
            <SelectTrigger id="interest" className={fieldClass} aria-invalid={!!errors.interest}>
              <SelectValue placeholder="What brings you here?" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Message (optional)" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          rows={compact ? 3 : 5}
          placeholder="Tell us what you're looking for — timing, budget range, preferred views, or questions."
          className="rounded-sm border-input bg-background text-base"
          {...register("message")}
        />
      </Field>

      {/* Honeypot */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={watch("consent") === true}
          onCheckedChange={(c) => setValue("consent", (c === true) as true, { shouldValidate: true })}
          aria-invalid={!!errors.consent}
          className="mt-0.5"
        />
        <div>
          <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-muted-foreground">
            I agree to be contacted about The Nautilus at CaSoBē. My details will be used only to
            respond to this inquiry and will not be shared with third parties for marketing.
          </Label>
          {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent.message}</p>}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-sm border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          Something went wrong sending your inquiry. Please try again or email us directly at{" "}
          {site.contact.email}.
        </p>
      )}

      <Button type="submit" variant="coral" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="animate-spin" /> : null}
        {submitLabel}
        {!isSubmitting && <ArrowRight />}
      </Button>
      <p className="text-xs text-muted-foreground">
        No obligation. Pricing and availability are confirmed directly by the project team.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="font-heading text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/80">
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
