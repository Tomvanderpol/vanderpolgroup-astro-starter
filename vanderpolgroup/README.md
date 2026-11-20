# van der Pol Group — Astro website

A responsive, static academic research group website for **Optoelectronic Mixed Conductors**. Intended domain: `vanderpolgroup.nl` (registration not confirmed).

## Run locally

Requires Node.js 20.3+ (Node.js 22 recommended).

```bash
npm install
npm run dev
```

Open the localhost URL printed by Astro. To test production output:

```bash
npm run build
npm run preview
```

## Edit content without code

The `.pages.yml` file configures [Pages CMS](https://pagescms.org/) for the `research`, `people`, `publications`, and `news` Markdown collections. Push the project to a GitHub repository and sign in to Pages CMS with GitHub, then select the repository. Pages CMS writes changes back to GitHub; your hosting platform can rebuild on each push. CMS availability, permissions, and integration should be verified after GitHub setup.

Until profiles, publications, or news are added, the website shows an appropriate empty state rather than fictional records.

## Deploy

1. Push the repository to GitHub.
2. Connect it to a static Astro-capable host (e.g., Cloudflare Pages / Workers static assets).
3. Use build command `npm run build` and output directory `dist` where the host asks for these values. Follow the host's current Astro deployment documentation for Workers.
4. Test the generated preview URL.
5. Register and attach `vanderpolgroup.nl` only after confirming domain availability and DNS requirements.

## Before publishing

- Replace `public/images/hero-original.png` with a final approved, web-optimized version of the supplied visual. The provided image is used here as a faithful placeholder, not the generated full-page mockup.
- Confirm research descriptions, institutional affiliation, contact details, and any image usage permissions.
- Add real people, news, and publication entries in Pages CMS.
- Review privacy and accessibility requirements before launch.

## Project structure

- `src/pages/` — Astro routes
- `src/components/` — Header and footer
- `src/content/` — CMS-editable Markdown
- `src/content.config.ts` — Astro collection schemas
- `.pages.yml` — Pages CMS editor configuration
- `public/images/` — website images
