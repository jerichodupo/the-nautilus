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

/**
 * Receives inquiry submissions. Currently logs server-side; connect a database,
 * CRM, or email service here to persist leads.
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { website: _honeypot, ...lead } = data;
    console.log("[inquiry] new lead", {
      ...lead,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const, receivedAt: new Date().toISOString() };
  });
