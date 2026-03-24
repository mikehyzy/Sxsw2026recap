# Claude Code Handoff Instructions

## Context

This is a personal SXSW 2026 conference recap site. The design was prototyped in
Figma Make; screenshots and/or exported code are in `/design-reference/`. The
Figma export should be treated as a visual spec, not production code.

Build the site from scratch using the stack and structure defined below. Reference
the Figma screenshots for layout, spacing, and visual hierarchy. Use the design
tokens in `tailwind.config.mjs` as the single source of truth for colors,
typography, and spacing.

## Stack

- **Astro** (latest stable) with content collections
- **React** for interactive islands (session filter, trend cards)
- **Tailwind CSS** with the config already in repo root
- **MDX** for session and trend content
- **TypeScript** throughout

## Build Order

### Phase 1: Foundation
1. Initialize Astro project in repo root
2. Configure Tailwind using existing `tailwind.config.mjs`
3. Set up content collections for `sessions` and `trends` using the
   schemas defined in the `_template.mdx` files
4. Create base layout with:
   - Dark header with site title and navigation
   - Footer (dark, centered, minimal)
   - Max-width content container (1200px)
   - Page background #F7F5F0

### Phase 2: Static Pages
Build these as standard Astro pages:
5. **Home** (`/`) - Hero, stats grid, pull quotes, footprint timeline, nav cards
6. **Workshop** (`/workshop`) - Full recap page with stepper layout
7. **Roundtable** (`/roundtable`) - Discussion recap with theme cards
8. **Book** (`/book`) - Book feature page
9. **LinkedIn Series** (`/linkedin-series`) - Article archive
10. **About** (`/about`) - Bio and contact
11. **Photo Gallery** (`/gallery`) - Masonry grid with caption overlays

### Phase 3: Interactive Pages (React Islands)
12. **Session Library** (`/sessions`) - React component with:
    - Client-side filtering by track and format
    - Text search across title, speakers, tags
    - Session count display
    - Card grid with track-colored top borders
    - "Load more" pagination or infinite scroll
    - Reads from Astro content collection at build time, hydrates client-side

13. **Trend Report** (`/trends`) - React component with:
    - Expandable trend cards (click to reveal full analysis)
    - Track tag pills on each card
    - Cross-reference links to session library
    - Optional: signal strength visualization (Recharts or D3)

### Phase 4: Polish
14. Responsive breakpoints (mobile-first: 375px, tablet: 768px, desktop: 1440px)
15. Page transitions / scroll animations (subtle, not decorative)
16. OG meta tags and social sharing images per page
17. Sitemap and basic SEO

## Data Flow

```
src/data/*.json          --> Imported directly in Astro pages (stats, quotes, etc.)
src/content/sessions/    --> Astro content collection, queried at build time
src/content/trends/      --> Astro content collection, queried at build time
src/assets/images/       --> Processed through Astro image optimization
```

The session library and trend report pages should query their content collections
at build time and pass the data as props to React island components for
client-side interactivity.

## Component Architecture

```
components/
  layout/
    Header.astro
    Footer.astro
    PageHero.astro         # Reusable hero section (dark bg, title, subtitle)
    SectionHeading.astro   # Consistent section titles
  home/
    StatCard.astro
    QuoteCard.astro
    FootprintTimeline.astro
    NavCard.astro
  sessions/
    SessionFilter.tsx      # React - filter controls
    SessionGrid.tsx        # React - card grid with filtering logic
    SessionCard.tsx        # React - individual session card
    TrackTag.tsx           # React - colored track pill
    FormatTag.tsx          # React - format pill
  trends/
    TrendCard.tsx          # React - expandable trend card
    TrendGrid.tsx          # React - grid with all trends
    SignalChart.tsx        # React - optional visualization
  shared/
    TagPill.astro          # Colored pill component
    CTACard.astro          # Link card with green left border
    PullQuote.astro        # Quote card with colored background
```

## Content Collection Schemas

Define in `src/content/config.ts`. The frontmatter fields are documented in
the `_template.mdx` files in each content directory. Key validation:

- `track` must be one of the track keys defined in tailwind.config.mjs
- `format` must be one of: keynote, featured, panel, workshop, mentor, solo
- `maturity` (trends only): emerging, accelerating, maturing, plateau
- `enterpriseRelevance` (trends only): low, medium, high, critical
- `sessionLinks` and `trendLinks` should be validated as existing slugs

## Design Reference Notes

When referencing the Figma screenshots in `/design-reference/`:

- Match the layout structure and visual hierarchy, not the exact pixel values
- The Figma export likely uses absolute positioning; convert to flexbox/grid
- Card shadows should be subtle: `shadow-sm` or `shadow` in Tailwind
- The green left border on cards is 4px, using `border-l-4 border-sxsw-green`
- Pull quote decorative quotation marks: 72px, 30% opacity white
- Track tag pills: small (text-xs px-2 py-0.5), rounded-tag, colored bg, white text
- Stat numbers: text-stat weight-extrabold in sxsw-green

## Important Constraints

- No database. Everything is file-based and builds statically.
- No authentication. This is a public site.
- No CMS. Content is edited directly in the repo.
- Images will be added incrementally. Use placeholder divs with aspect ratios
  until real images are available.
- The session library will grow over time. Build the filter/search to handle
  100+ entries without performance issues.
- All interactive components must work with JavaScript disabled (show all
  content by default, enhance with JS).
