# Complete The Nautilus website

## Build
- Finalize the six requested pages: Home, Residences, Experience, Investment, Location & CaSoBē, and Inquire.
- Preserve the premium tropical-luxury direction, Raleway headings, refined Lato body copy, teal-led palette, and supplied ownership messaging.
- Strengthen conversion paths with clear inquiry calls-to-action, residence-specific inquiry links, responsive navigation, and polished success/error states.
- Keep shared content, imagery, and repeated layouts centralized through reusable site components.

## Inquiry handling
- Store inquiry submissions securely in Lovable Cloud instead of only writing them to temporary server logs.
- Keep submissions private and accepted only through validated server-side form handling.

## Quality checks
- Add complete route-specific social metadata to every content page.
- Verify all six routes, desktop and mobile layouts, navigation, forms, imagery, and browser console behavior in the live preview.
- Remove or clearly isolate any invented contact details so they are not presented as official information.

## Technical details
- Use the existing TanStack Start route structure and semantic Tailwind design tokens.
- Add a private `inquiries` table with server-only writes, validation, timestamps, and locked-down access policies.
- Preserve accessibility features including keyboard navigation, reduced-motion behavior, labels, focus states, and responsive text sizing.
