# SXSW 2026 Recap Site

ENGAGEMENT: Personal project. Mike Hyzy, VP of AI Strategy at CGI. March 24 – August 30, 2026.
KIND: built
REPO: mikehyzy/Sxsw2026recap, e96a27a..f7642ff, 2026-03-24 to 2026-08-30
WHY: A practitioner who led a workshop, hosted a roundtable, signed a book, and attended 30+ sessions at SXSW 2026 needed a single artifact that turned those field notes into a durable professional asset — a public site that positioned him as someone who does the work, not someone who summarizes it. The conference recap site is the answer to a specific problem: raw session transcripts, workshop video frames, and draft write-ups scattered across a local machine have no shelf life. A published, navigable site does. [inferred]

## What this is

A 10-page personal conference recap site for SXSW 2026. It exists in two states in this repo: a working React SPA on the `main` branch (Figma Make export, progressively replaced with real content), and an in-progress Astro rebuild on the `claude/setup-project-foundation-AnyPh` branch. [repo]

The main branch ships a client-side React app via Vite with react-router hash routing, 10 pages, 30 session recaps loaded as markdown at runtime, 91 video frame images from the workshop, a Recharts scatter chart for trend visualization, and client-side session filtering with track and format pills. [repo]

The feature branch has the Astro foundation: project scaffolded, Tailwind v4 wired to the existing design token config, Figma export preserved in `design-reference/figma-export/`, JSON data files copied to `src/data/`, build verified. No pages built yet. [repo]

## What it is for

From the footer, present on every page: "Built from field notes. Not a corporate recap." [product]

From the README: "Personal conference recap site for SXSW 2026 (March 12-18, Austin TX)." [repo]

From the home page hero: "Seven days of collisions between technologists, artists, and strategists revealed a festival in transformation. This is a practitioner’s field guide to what mattered — and what it means for the rest of 2026." [product]

## Who it was written for

From `CLAUDE_CODE_INSTRUCTIONS.md`: "This is a personal SXSW 2026 conference recap site." No explicit audience statement beyond that. [repo]

The SETUP.md mentions a CGI employer context: "If your CGI GitHub org blocks personal repo creation, create it under your personal GitHub account instead." This frames it as a personal project by someone employed at a large enterprise consultancy who built it on a personal account. [repo]

## Architecture

### What shipped on main (the React SPA)

A Vite + React 18 single-page application using react-router hash routing. [repo]

```
index.html               -> loads src/main.tsx
src/app/App.tsx           -> RouterProvider
src/app/routes.tsx        -> 10 routes under Layout
src/app/components/       -> Layout, Footer, Navbar, page components
src/app/pages/            -> 12 page files (Home, TrendReport, Sessions, etc.)
content/                  -> 30 session recap markdown files, 3 long-form docs
public/                   -> 91 workshop video frames, hero image, session recaps
```

Ten routes: `/`, `/trends`, `/sessions`, `/workshop`, `/roundtable`, `/linkedin`, `/book`, `/photos`, `/about`, `/resources`. [repo]

Dependencies from the Figma Make export’s `package.json`: React 18, react-router 7, Recharts, MUI, 24 Radix UI packages, lucide-react, motion, shadcn/ui components. A heavy frontend stack characteristic of Figma Make code generation. [repo]

### What the Astro rebuild targets

From `CLAUDE_CODE_INSTRUCTIONS.md`: [repo]

- Astro with content collections (static output)
- React for interactive islands only (session filter, trend cards)
- Tailwind CSS with pre-defined config
- MDX for session and trend content
- TypeScript throughout
- No database, no auth, no CMS
- File-based content, builds statically

The Astro config as built: [repo]

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react(), mdx()],
  vite: { plugins: [tailwindcss()] },
});
```

### Design tokens

The `tailwind.config.mjs` was authored before the Figma Make export and serves as the single source of truth. Twelve track colors, a nine-step type scale with pixel values matching Figma Make prompts, semantic spacing values (`section: 96px`, `subsection: 48px`, `card-gap: 24px`), and custom border radii (`card: 8px`, `tag: 4px`). [repo]

### Content

30 session recap markdown files ranging from 51 to 249 lines. Two first-person write-ups (workshop, braindate) at 138 and 128 lines. One 443-line festival overview. One trend report at 470 lines. Five JSON data files (stats, quotes, footprint, linkedin-series, resources), most partially populated with placeholder values. [repo]

## How it was built with Claude

### No CLAUDE.md

This repo has no `CLAUDE.md`, no `.claude/` directory, no skills, no hooks, no MCP config, and no `settings.json` or `settings.local.json` — not in any branch, not in any commit in git history. [repo]

The build spec lives entirely in two files: `CLAUDE_CODE_INSTRUCTIONS.md` (142 lines) and `claude-code-prompt.pdf` (7 pages). Both were uploaded to the repo on March 24 as part of a scaffolding tarball before any Claude Code session began. [repo]

This means every instruction was delivered per-session through the prompt and the two spec files. Nothing was hardened into persistent configuration. There are no hooks because no repeated failure forced one. There are no skills because no prompt was retyped often enough to justify one.

### The build spec as the instruction surface

`CLAUDE_CODE_INSTRUCTIONS.md` served as both the CLAUDE.md equivalent and the architecture doc. It specifies: [repo]

- A four-phase build order (Foundation, Static Pages, Interactive Pages, Polish)
- A component architecture tree with 23 named components and their file types (`.astro` for static, `.tsx` for interactive)
- Content collection schemas with field-level validation rules (track must match tailwind config keys, format must be one of six values)
- Design reference notes translating Figma patterns to Tailwind utilities (`border-l-4 border-sxsw-green`, `text-stat weight-extrabold`)
- Six hard constraints ("No database," "No authentication," "All interactive components must work with JavaScript disabled")

The `claude-code-prompt.pdf` adds per-page section specs and explicit design rules: [repo]

- "Never use pure white (#FFFFFF) as page background; always #F7F5F0"
- "Do not use the Figma export code as-is. Rebuild from scratch."
- "Do not hardcode content that exists in JSON data files. Always read from the data."

### Session structure

The git history shows two distinct phases of Claude-assisted work, separated by five months: [repo]

**Phase 1 (March 24-25, 2026):** Figma Make export pushed to GitHub, then iteratively replaced with real content over ~27 hours. 22 commits on `main`. The work was done inside the Figma Make React app, not in Astro — the spec called for an Astro rebuild, but the first phase populated content into the existing React SPA instead.

**Phase 2 (August 30, 2026):** A Claude Code session on a feature branch initialized the Astro project, moved the Figma export to `design-reference/`, installed dependencies, configured Tailwind v4, and verified the build. 2 commits on `claude/setup-project-foundation-AnyPh`.

### Load-bearing decisions in the Astro session

**Tailwind v4 integration.** The `@astrojs/tailwind` package had peer dependency conflicts with Astro 6. The resolution was to skip the official integration and use `@tailwindcss/vite` as a Vite plugin directly: [repo]

```javascript
vite: { plugins: [tailwindcss()] }
```

The CSS entry point uses Tailwind v4’s `@config` directive to point at the existing v3-style config file: [repo]

```css
@import "tailwindcss";
@config "../../tailwind.config.mjs";
```

This preserved the pre-authored design tokens without rewriting them for v4’s CSS-native config format.

**Astro without internet.** The `npm create astro@latest` scaffolding command failed because the environment had no internet access for template fetching. The project was scaffolded manually: `npm install astro` (which worked from cache), then hand-writing `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro`, and `src/styles/global.css`. [session record]

**Build verification.** The first build attempt linked the CSS via an HTML `<link>` tag (`<link rel="stylesheet" href="/src/styles/global.css" />`). Tailwind classes compiled but were not included in the output. The fix was switching to a frontmatter import (`import '../styles/global.css'`), which is Astro’s mechanism for processing styles through Vite. Custom classes (`bg-sxsw-light`, `text-sxsw-green`, `text-section-heading`) were verified in the compiled CSS output. [session record]

## The practice worth copying

### Writing the spec before touching the tool

The build spec (`CLAUDE_CODE_INSTRUCTIONS.md`) was authored and committed before any Claude Code session ran. It includes phase ordering, component names, file types, content schemas, design rules, and hard constraints.

**What happened.** The spec was uploaded as part of a scaffolding tarball on March 24, before the first Figma Make commit. The `SETUP.md` tells the user to open Claude Code and say: "Read CLAUDE_CODE_INSTRUCTIONS.md and the design reference screenshots in /design-reference/." [repo]

**The practice.** Write the architecture doc in the repo before starting the AI session. Name every component, specify its file type, define the data flow, and list the constraints. The AI reads it on every session start. This replaces CLAUDE.md for projects where the entire instruction surface fits in one document.

### Using Figma Make as visual reference, not code source

The Figma Make export produced a working React SPA with 75+ files, 24 Radix UI packages, MUI, shadcn/ui, and inline styles throughout. The build spec explicitly says to discard it as code: "Do not use the Figma export code as-is. Rebuild from scratch." [repo]

**What happened.** The first phase of work (March 24-25) did not follow this instruction. Content was populated directly into the Figma Make React components on main, not into a fresh Astro project. The Astro rebuild started five months later. [repo]

**The practice.** When prototyping in a design-to-code tool, commit the export to a reference directory and build production code separately. The design tool output establishes the visual contract — layout hierarchy, spacing, color application — without dictating the component architecture or dependency tree. The Astro session moved all Figma files to `design-reference/figma-export/` in its first commit. [repo]

### Design tokens as the bridge between design tool and production

The `tailwind.config.mjs` was authored independently of the Figma Make export. It defines the full design system: brand colors, track badge colors, a type scale with pixel values and weights, semantic spacing, and border radii. Both the Figma Make React code and the Astro rebuild reference the same token file. [repo]

**The practice.** Define design tokens in a framework-agnostic config file before starting either the design prototype or the production build. The Tailwind config serves as the shared contract. When you move from prototype to production, the tokens survive the framework change.

### Separating content creation from site building

The 30 session recaps, workshop write-up, braindate write-up, and festival overview were all authored as standalone markdown files and imported into the repo in a single commit (`217fb2e`, March 25). The site code was modified to render them, not the other way around. [repo]

**What happened.** The session recaps README reveals the content creation process: recaps were generated from PDF session transcripts using AI, with 3 of the original 5 failing due to corrupted PDFs. The remaining 25+ recaps were generated in a separate process and batch-imported. [repo]

**The practice.** Produce content artifacts independently of the site that renders them. Import in bulk. Build the rendering layer to consume whatever exists. This separates the content quality problem (are the recaps good?) from the engineering problem (does the site work?).

## Where the model surprised us

### Content scale from transcripts

The session recaps README states that of the first 5 sessions attempted, 2 completed successfully from transcripts and 3 failed due to corrupted PDFs. By the final state, 30 recaps exist — ranging from 51 to 249 lines each, with detailed speaker backgrounds, specific financial figures, direct quotes, and cross-references to other sessions. The 443-line festival overview synthesizes data across all sessions into a single analytical document. This volume of structured editorial content (4,700+ lines of markdown across 33 documents) was produced and imported within a single day’s work (March 25). [repo]

### The scatter chart took six commits to land

The trend report’s signal-strength scatter chart required six consecutive commits in 68 minutes (15:02 to 15:23 on March 25): initial build, improving quadrant lines and point spread, equalizing quadrant boxes, distributing signals across all four quadrants, fixing the midpoint, and matching circle colors to quadrants. Each commit message describes a visual adjustment. This is the tightest iteration loop in the repo — a Recharts visualization being refined through repeated commits where the output had to be visually inspected after each change. [repo]

### The workshop image curation took seven commits

After the workshop page rebuild with 91 video frames imported, seven consecutive commits (15:47 to 15:54 on March 25) curated the images: moving a card image to the correct section, removing two images from the gallery, removing the entire photo gallery section, replacing a post-session image with one showing the facilitator prominently, swapping the establishing shot to a packed-room view, and removing another frame from the closing section. Each commit message describes the editorial decision. [repo]

This is visual editing expressed as git commits — a process where each image placement is a judgment call about what the page should emphasize. The model could generate the page structure but the image selection required iterative human review.

## The sequence

### Day 0: Figma Make export (March 24, 2026, 14:18 UTC)

`e96a27a` — Initial commit by `figma[bot]`. A README placeholder. [repo]

`a0e633b` through `2417eba` — Five commits from `figma[bot]` in 8 minutes (14:18 to 14:26 UTC). The full Figma Make export lands: 87 files, a Vite + React SPA with 10 pages, shadcn/ui components, MUI, 24 Radix packages, inline styles throughout. This is the auto-generated code from the Figma Make design tool. [repo]

### Day 0: Scaffolding upload (March 24, 2026, 09:41-09:44 CDT)

`60ade8e` — A scaffolding tarball uploaded by Mike Hyzy via GitHub web UI. [repo]

`46b58fb` — The tarball deleted. [repo]

`2af5f9e` — The tarball contents extracted: `CLAUDE_CODE_INSTRUCTIONS.md`, `README.md`, `SETUP.md`, `_template.mdx`, five JSON data files, and `tailwind.config.mjs`. 10 files, 548 lines. These were pre-authored before the Figma Make export. [repo]

`9caae4e` — `claude-code-prompt.pdf` uploaded (91 KB, 7 pages). The complete build spec as a PDF. [repo]

### Day 1: Content import and page building (March 25, 2026, 13:16-15:54 CDT)

A single day of intensive work, 22 commits in 2 hours 38 minutes. The sequence shows three distinct work phases:

**Phase A: Content import (13:16).** `217fb2e` — "Add SXSW 2026 content from local output folder." 126 files, 5,466 lines. This single commit added all 30 session recap markdown files, the workshop and braindate write-ups, the festival overview, the trend report, and 91 workshop video frames. The content had been produced elsewhere and was batch-imported. [repo]

**Phase B: Home page iteration (13:39-14:37).** Six commits replacing the Figma Make home page with real content: updating quotes with real speaker attributions, fixing the correct page file (the Figma export had both `components/HomePage.tsx` and `pages/Home.tsx`), updating the color palette, adding a real hero image, and fixing the image path to use Vite’s base URL. [repo]

**Phase C: Feature pages (14:37-15:54).** The trend report rebuilt with an interactive Recharts scatter chart (6 commits over 21 minutes to get the visualization right). The session library rebuilt with all 30 recaps wired in and client-side filtering (1 commit, a 699-line page rewrite). The workshop page rebuilt with real content and 91 images (1 commit), then 7 image curation commits over 7 minutes. [repo]

### Five-month gap (March 25 – August 30, 2026)

No commits between March 25, 2026 and August 30, 2026. [repo]

### Day 2: Astro rebuild begins (August 30, 2026)

`a40daa3` — "Initialize Astro project foundation, move Figma export to design-reference." 97 files changed, 7,396 lines added. The entire Figma Make export moved to `design-reference/figma-export/`. Astro 6 scaffolded manually (scaffolding CLI failed without internet). Tailwind v4 wired via `@tailwindcss/vite`. React, MDX, Recharts installed. Build verified. [session record]

`f7642ff` — "Extract 15 stories from SXSW 2026 session recaps and project build." 15 markdown files created in `extracted-stories/`, written for the book project. [session record]

## Numbers

- **34 commits** on main, **2 commits** on the feature branch [repo]
- **350 files** on main at HEAD [repo]
- **84 code files** (.tsx/.ts/.jsx/.js) [repo]
- **73 markdown files** (33 editorial content + 40 config/docs) [repo]
- **183 image files** (91 workshop video frames duplicated across `content/` and `public/`, plus hero image) [repo]
- **30 session recaps**, 51-249 lines each [repo]
- **1 festival overview**, 443 lines [repo]
- **1 trend report**, 470 lines [repo]
- **10 pages** in the shipped React SPA [repo]
- **12 track colors** defined in tailwind.config.mjs [repo]
- **6 format types** in the content schema (keynote, featured, panel, workshop, mentor, solo) [repo]
- **5 JSON data files** (stats, quotes, footprint, linkedin-series, resources) [repo]
- **91 video frames** from Canon and DJI cameras across the workshop [repo]
- **2 hours 38 minutes** of active commits on the content build day (March 25) [repo]
- **6 commits in 21 minutes** for the scatter chart iteration [repo]
- **7 commits in 7 minutes** for workshop image curation [repo]
- **5-month gap** between content population (March 25) and Astro rebuild (August 30) [repo]
- **2.34 seconds** Astro build time for the minimal verification page [session record]
- **248 npm packages** for Astro core, **154 additional** for integrations [session record]
- **0 CLAUDE.md files**, **0 skills**, **0 hooks**, **0 MCP configs** in the entire git history [repo]

## Gaps

- No deployed URL found in the repo. No Vercel, Netlify, or other deployment config. The README mentions "Vercel or Netlify via GitHub push" as the target but no deployment has been configured. Whether the React SPA on main was ever publicly accessible is UNKNOWN. [repo]
- No session transcripts or prompt logs from the March 25 work session. The commit messages are the only record of what was asked for. [repo]
- The content generation process — how 30 session recaps were produced from PDF transcripts — is described only in the `README.md` inside `content/session-recaps/`, which mentions corrupted PDFs and a 40% initial completion rate. What tool, what prompts, and what editing process produced the final 30 recaps is not recorded in this repo. [repo]
- The five-month gap between content population and Astro rebuild has no explanation in the repo. [repo]
- The Astro rebuild is at Phase 1, Step 2 of a 17-step build plan. No layouts, no pages, no components, no content collections have been built yet. [repo]
- Whether the design token values in `tailwind.config.mjs` were extracted from the Figma Make design or authored independently is not recorded. The config was committed as part of the pre-authored scaffolding, before the Figma Make export. [repo]
- Cost data: UNKNOWN. No billing, token counts, or API usage recorded anywhere. [repo]
