# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Local development server with live reload
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

Node 22+ is required. Deployment happens via GitHub Actions on push to `main`.

## Architecture

This is a **single-page portfolio/resume website** built with **Astro** and **Tailwind CSS v4**.

**Bilingual:** English (default, `/`) and Spanish (`/es`). All content lives in `src/i18n/en.ts` and `src/i18n/es.ts` as typed TypeScript objects — no markdown files.

### Key directories

- `src/i18n/` — all site content (EN + ES). Edit here to change text/copy.
- `src/components/` — one Astro component per section:
  - `Navbar.astro` — sticky glassmorphism navbar with dark mode toggle + language switcher
  - `Hero.astro` — hero banner with Golden Jacket spotlight
  - `About.astro` — profile photo + bio + skills
  - `Experience.astro` — timeline of 6 work experiences
  - `Certifications.astro` — full AWS Golden Jacket wall (12 certs) + Azure + CCNP
  - `Education.astro` — 4 education cards
  - `Projects.astro` — 3 project cards
  - `Contact.astro` — email CTA + social links + footer
- `src/layouts/Layout.astro` — HTML shell, fonts, analytics, dark mode init
- `src/styles/global.css` — Tailwind + CSS custom properties for color theme
- `public/images/` — static assets (profile photos, logo, cert badge images)
- `src/pages/index.astro` — English homepage
- `src/pages/es/index.astro` — Spanish homepage

### Color scheme

Teal (`#0f766e`) primary on warm cream (`#f3efe7`) background. Dark mode: `#7fe0c6` on `#101715`.
Fonts: Sora (headings/UI) + Source Serif 4 (body).

### Deployment

GitHub Actions (`.github/workflows/build.yml`) triggers on push to `main`:
1. Install Node 22 + run `npm ci`
2. `npm run build` → outputs to `dist/`
3. Sync `dist/` to S3 (`s3://jacobogonzalez-hugo-website`) with split cache headers (HTML: no-cache, assets: 20yr)
4. Invalidate CloudFront distribution (requires `CLOUDFRONT_DISTRIBUTION_ID` secret)

Required GitHub secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `CLOUDFRONT_DISTRIBUTION_ID`.

## Updating content

- **Text/copy**: Edit `src/i18n/en.ts` (English) or `src/i18n/es.ts` (Spanish).
- **Cert badge IDs**: Some Credly badge IDs in the i18n files are placeholders (`your-*-badge-id`). Replace with real IDs from https://www.credly.com/users/jacobog/badges.json
- **Section layout**: Edit the corresponding component in `src/components/`.
- **Styles**: Edit `src/styles/global.css`.

## Claude API Frontend Integration

If adding Claude-powered features (chatbot, AI assistant, dynamic content), use the `claude-api` skill for implementation guidance.

Since this is a static Astro site (no server-side runtime), Claude API calls must go through a separate backend or a serverless function. Typical approach: add a Lambda/API Gateway endpoint, then call it from a `<script>` tag in a custom Astro component.
