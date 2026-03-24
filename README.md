# SXSW 2026 Recap Site

Personal conference recap site for SXSW 2026 (March 12-18, Austin TX).

## Stack

- **Framework:** Astro (content-heavy site with interactive islands)
- **Styling:** Tailwind CSS with custom SXSW-inspired design tokens
- **Interactive components:** React (for trend report, session filters)
- **Data:** File-based content collections (MDX for sessions, JSON for trends)
- **Deployment:** Vercel or Netlify via GitHub push
- **Design reference:** Figma Make exports in `/design-reference/`

## Structure

```
├── design-reference/       # Figma Make screenshots + exported ZIP
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/images/      # Optimized images (Astro image pipeline)
│   │   ├── hero/
│   │   ├── workshop/
│   │   ├── roundtable/
│   │   ├── gallery/
│   │   └── book-signing/
│   ├── components/         # Astro + React components
│   ├── content/
│   │   ├── sessions/       # MDX files, one per session
│   │   └── trends/         # MDX files, one per trend
│   ├── data/               # JSON data files (stats, quotes, resources)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # Global CSS + Tailwind config
```

## Getting Started

```bash
npm install
npm run dev
```

## Content Workflow

1. Add session recaps as MDX files in `src/content/sessions/`
2. Add trend write-ups as MDX files in `src/content/trends/`
3. Update JSON data files in `src/data/` for stats, quotes, resources
4. Drop images into appropriate `src/assets/images/` subdirectories

## Design Reference

Figma Make exports and screenshots go in `/design-reference/`. These are
not used in the build; they exist as the visual spec for Claude Code to
reference when building components.
