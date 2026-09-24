/**
 * Central image registry. Swap any file in src/assets to update the site —
 * component code references these keys, never file paths.
 */
import heroHome from "@/assets/hero-home.jpg";
import heroResidences from "@/assets/hero-residences.jpg";
import heroExperience from "@/assets/hero-experience.jpg";
import heroLocation from "@/assets/hero-location.jpg";
import architecture from "@/assets/architecture.jpg";
import wellness from "@/assets/wellness.jpg";
import dining from "@/assets/dining.jpg";
import boardwalk from "@/assets/boardwalk.jpg";

export const images = {
  heroHome,
  heroResidences,
  heroExperience,
  heroLocation,
  heroInvestment: architecture,
  heroInquire: heroExperience,
  architecture,
  wellness,
  dining,
  boardwalk,
  interior: heroResidences,
  pool: heroExperience,
  aerial: heroLocation,
};

/** Per-residence imagery. Replace with actual unit renders when available. */
export const unitImages: Record<string, string> = {
  studio: heroResidences,
  "one-bedroom": architecture,
  "one-bedroom-loft": heroExperience,
  "two-bedroom": wellness,
  "two-bedroom-loft": heroHome,
  loft: dining,
};
