/**
 * Centralized site content for THE NAUTILUS at CaSoBē.
 * Edit copy, units, amenities, and FAQs here — components read from this file.
 */

export const site = {
  name: "The Nautilus",
  fullName: "THE NAUTILUS at CaSoBē",
  tagline: "Where the horizon becomes home.",
  location: "CaSoBē, Calatagan, Batangas, Philippines",
  developer: "Landco Pacific Corporation",
  operator: "Landco Lifestyle Ventures",
  residenceCount: 176,
  contact: {
    // Replace with the official project hotline / email when confirmed.
    email: "inquiries@thenautilus-casobe.ph",
    phone: "+63 (2) 0000 0000",
    hours: "Monday to Saturday, 9:00 AM – 6:00 PM (PHT)",
    address: "CaSoBē, Barangay Santa Ana, Calatagan, Batangas",
  },
  siteUrl: "https://id-preview--0bbb5ea1-7d6b-4be2-9628-855409130128.lovable.app",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Residences", to: "/residences" },
  { label: "Experience", to: "/experience" },
  { label: "Investment", to: "/investment" },
  { label: "Location", to: "/location" },
] as const;

export type UnitType = {
  slug: string;
  name: string;
  sizeRange: string;
  minSqm: number;
  maxSqm: number;
  summary: string;
  highlights: string[];
};

export const units: UnitType[] = [
  {
    slug: "studio",
    name: "Studio",
    sizeRange: "38.1 – 39.0 sqm",
    minSqm: 38.1,
    maxSqm: 39.0,
    summary: "A refined coastal pied-à-terre — efficient, light-filled, and effortless to keep.",
    highlights: ["Open-plan living", "Ideal first coastal address", "Easiest entry point"],
  },
  {
    slug: "one-bedroom",
    name: "1 Bedroom",
    sizeRange: "63.1 – 92.2 sqm",
    minSqm: 63.1,
    maxSqm: 92.2,
    summary: "Separate sleeping and living quarters for longer stays and unhurried mornings.",
    highlights: ["Dedicated bedroom", "Generous living area", "Flexible layouts"],
  },
  {
    slug: "one-bedroom-loft",
    name: "1 Bedroom Loft",
    sizeRange: "65.0 – 79.9 sqm",
    minSqm: 65.0,
    maxSqm: 79.9,
    summary: "Double-height volume and an elevated sleeping loft that frames the sea.",
    highlights: ["Double-height ceiling", "Loft-level bedroom", "Architectural drama"],
  },
  {
    slug: "two-bedroom",
    name: "2 Bedroom",
    sizeRange: "76.4 – 96.5 sqm",
    minSqm: 76.4,
    maxSqm: 96.5,
    summary: "Room for family and guests, designed around shared coastal living.",
    highlights: ["Two private bedrooms", "Family-ready", "Entertaining space"],
  },
  {
    slug: "two-bedroom-loft",
    name: "2 Bedroom Loft",
    sizeRange: "123.4 – 124.6 sqm",
    minSqm: 123.4,
    maxSqm: 124.6,
    summary: "Expansive split-level living with the scale of a private seaside villa.",
    highlights: ["Split-level living", "Two bedrooms plus loft", "Villa-like proportions"],
  },
  {
    slug: "loft",
    name: "Loft",
    sizeRange: "138.2 – 182.7 sqm",
    minSqm: 138.2,
    maxSqm: 182.7,
    summary: "The signature residence — soaring volumes and the most generous footprint.",
    highlights: ["Largest floor plans", "Soaring volumes", "Signature residence"],
  },
];

export const unitOptions = [...units.map((u) => u.name), "Not sure"] as const;

export const interestOptions = ["Personal use", "Investment", "Both", "Still exploring"] as const;

export type Amenity = { name: string; description: string; icon: string };

export const amenities: Amenity[] = [
  { name: "Beachfront", description: "Direct access to the Calatagan shoreline.", icon: "Waves" },
  { name: "Infinity Pool", description: "An edge that dissolves into the horizon.", icon: "Droplets" },
  { name: "Fitness & Yoga", description: "Movement spaces with sea air and light.", icon: "Dumbbell" },
  { name: "Spa & Sauna", description: "Restorative rituals for slower days.", icon: "Flower2" },
  { name: "Restobar", description: "Coastal dining from morning to last light.", icon: "UtensilsCrossed" },
  { name: "Gameroom", description: "Playful evenings for family and friends.", icon: "Gamepad2" },
  { name: "Speakeasy", description: "An intimate, tucked-away bar.", icon: "Wine" },
  { name: "Lobby Lounge", description: "A quiet arrival, framed by the sea.", icon: "Armchair" },
  { name: "Retail", description: "Everyday conveniences, steps from home.", icon: "ShoppingBag" },
  { name: "Conference Room", description: "Work and gather when you need to.", icon: "Presentation" },
];

export const ownershipSteps = [
  {
    step: "01",
    title: "Own",
    body: "Acquire a private beachfront residence at The Nautilus — a titled coastal address in a master-planned community.",
  },
  {
    step: "02",
    title: "Enjoy",
    body: "Use your residence for personal escapes, family holidays, and unhurried time by the sea.",
  },
  {
    step: "03",
    title: "Enroll",
    body: "Optionally enroll in the Landco Lifestyle Ventures rental / leaseback program, subject to program terms and availability.",
  },
];

export const programSteps = [
  {
    step: "01",
    title: "Enroll",
    body: "Owners may opt into the rental / leaseback program under a separate agreement, subject to eligibility and program terms.",
  },
  {
    step: "02",
    title: "Management",
    body: "Landco Lifestyle Ventures may manage guest stays, housekeeping, and upkeep of enrolled residences in line with the agreement.",
  },
  {
    step: "03",
    title: "Revenue",
    body: "Participating owners may share in rental revenue as defined by the program — net of applicable fees, taxes, and conditions. Returns are not guaranteed.",
  },
];

export const casobeFeatures = [
  { name: "Beachfront", body: "A long, walkable stretch of Calatagan coastline." },
  { name: "Boardwalk", body: "A seaside promenade linking the community's destinations." },
  { name: "Lighthouse", body: "A landmark at the water's edge and a community icon." },
  { name: "Residential Beach Club", body: "Leisure spaces reserved for the community." },
  { name: "Aquaria Waterpark", body: "A family destination within the estate." },
  { name: "Dining & Hospitality", body: "Restaurants, cafés, and hospitality offerings." },
];

export const privilegeBenefits = [
  "Access to Landco Privilege Program / Club benefits across participating Landco destinations",
  "Member rates and privileges at select Landco lifestyle offerings",
  "Priority information on future Landco releases and events",
];

export const faqs = [
  {
    q: "What residence types are available at The Nautilus?",
    a: "The Nautilus offers 176 residences across six configurations: Studio, 1 Bedroom, 1 Bedroom Loft, 2 Bedroom, 2 Bedroom Loft, and Loft. Availability of specific units is confirmed upon inquiry.",
  },
  {
    q: "How large are the residences?",
    a: "Indicative floor areas range from approximately 38.1 sqm for Studios to 182.7 sqm for the largest Loft residences. Exact areas vary by unit and are confirmed in official project documents.",
  },
  {
    q: "Is The Nautilus truly beachfront? Do units have sea views?",
    a: "The Nautilus is a beachfront development within CaSoBē. Views vary by unit orientation and floor level; our team can walk you through specific unit positions.",
  },
  {
    q: "What is the rental / leaseback program?",
    a: "Owners may optionally enroll their residence in a rental / leaseback program with Landco Lifestyle Ventures. Participation is voluntary and governed by a separate agreement. Terms, fees, taxes, availability, and conditions apply, and income is not guaranteed.",
  },
  {
    q: "Who manages the property?",
    a: "The development is by Landco Pacific Corporation. Property management and the optional rental program are expected to be handled by Landco Lifestyle Ventures or its appointed operator, subject to final arrangements.",
  },
  {
    q: "What amenities are included?",
    a: "Planned amenities include the beachfront, an infinity pool, fitness and yoga spaces, spa and sauna, a restobar, gameroom, speakeasy, lobby lounge, retail, and a conference room.",
  },
  {
    q: "Where exactly is The Nautilus?",
    a: "The Nautilus is located within CaSoBē, a 15-hectare master-planned seaside community in Calatagan, Batangas, Philippines.",
  },
  {
    q: "How much do units cost, and how do I reserve one?",
    a: "Pricing, payment terms, and availability are shared directly upon inquiry so you receive current, accurate information. Submit the inquiry form and a project specialist will get in touch.",
  },
];

export const disclaimer =
  "This website is for information purposes only and does not constitute an offer, solicitation, or guarantee. Renderings, images, floor areas, amenities, and features are indicative and subject to change without prior notice. Participation in any rental or leaseback program is optional, subject to a separate agreement, eligibility, program terms, fees, taxes, and availability; income is not guaranteed. Please refer to official project documents and consult the developer for the latest information.";
