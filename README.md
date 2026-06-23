# Diyetisten Web

Premium Next.js web sitesi for a dietitian, built with Tailwind CSS and TypeScript.

## What is included

- Mobile-first booking experience with a stepped appointment flow.
- Calculator hub for BMI, BMR, water needs, and macro estimates.
- Reusable UI primitives in `components/ui/`.
- Tailwind-based design system with custom colors and typography.
- Email contact API using `nodemailer`.

## Run locally

1. Install dependencies
   ```bash
   npm install
   ```

2. Create `.env.local` with SMTP settings and email recipient.

3. Run development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Main pages

- `/` - Home
- `/about` - About
- `/services` - Services
- `/book` - Booking flow
- `/api/contact` - Email submission endpoint

## Design system

- Primary color: soft modern green
- Accent: warm neutral tones
- Surface palette: light glass and high-contrast text
- Rounded cards and consistent spacing
- Mobile-first typography scale

## Notes

- The booking flow is implemented as a multi-step form.
- The calculator section is an interactive health tool with actionable CTAs.
- Docs are available in `docs/` for design and implementation guidance.
# Diyetisyen
