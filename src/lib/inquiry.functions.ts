import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { interestOptions, unitOptions } from "@/data/site";

export const inquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  mobile: z
    .string()
    .trim()
    .min(7, "Enter a valid mobile number")
    .max(24)
    .regex(/^[+\d\s()-]+$/, "Enter a valid mobile number"),
  unit: z.enum(unitOptions, { errorMap: () => ({ message: "Select a residence type" }) }),
  interest: z.enum(interestOptions, { errorMap: () => ({ message: "Select your primary interest" }) }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to be contacted" }) }),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { website: _honeypot, ...lead } = data;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const receivedAt = new Date().toISOString();
    const { error } = await supabaseAdmin.from("inquiries").insert({
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      mobile: lead.mobile,
      unit: lead.unit,
      interest: lead.interest,
      message: lead.message || null,
      consent: lead.consent,
      received_at: receivedAt,
    });

    if (error) {
      console.error("[inquiry] unable to save lead", { code: error.code });
      throw new Error("Unable to save inquiry");
    }

    return { ok: true as const, receivedAt };
  });
