# SXSW 2026 Recap Site — Figma Make Prompts

Use these prompts sequentially in Figma Make. Build one page per Make session. After each initial generation, use point-and-edit to refine specific elements before moving to the next page.

-----

## Global Design Tokens (Reference for All Pages)

Paste this at the start of your first prompt so Make establishes the system. Reference it in subsequent pages by saying “use the same design system as the previous pages.”

```
Design system:
- Font: Inter (headlines in bold/black weight, body in regular/medium)
- Primary accent: #12674A (deep verdant green)
- Secondary accent: #F97C3C (coral orange, used for CTAs and highlights)
- Background dark: #0A0A0A
- Background light: #F7F5F0 (warm off-white)
- Text primary: #1A1A1A
- Text secondary: #6B6B6B
- Track colors: Tech & AI #50AFE8, Music #C0392B, Film & TV #D4A017, Design #12674A, Brand & Marketing #F97C3C, Health #2E8B57, Culture #6C7EB7
- Border radius: 8px on cards, 4px on tags/badges
- Spacing scale: 8px base unit
- Max content width: 1200px centered
```

-----

## Page 1: Home / Overview

### Prompt:

```
Create a conference recap landing page for SXSW 2026. Desktop width 1440px. Use Inter font throughout, #F7F5F0 warm off-white for the page background.

HERO SECTION:
- Full-width dark background #0A0A0A, 80vh height
- Large white headline "SXSW 2026: All Together Now" in bold, 64px
- Subtitle beneath in #6B6B6B: "March 12–18 | Austin, TX | Innovation · Music · Film & TV"
- Below the subtitle, a single line of body text in white, 18px: placeholder for a 2-sentence editorial POV on the event
- Right side or bottom-right: placeholder rectangle for a photo, 400x500px with rounded corners
- Subtle gradient at the bottom edge of the hero fading from #0A0A0A to #F7F5F0

BY THE NUMBERS SECTION:
- Section title "By the Numbers" left-aligned, 32px bold, #1A1A1A
- Horizontal row of 6 stat cards on the #F7F5F0 background
- Each card: white background, subtle shadow, 8px border radius
- Large number in #12674A at 48px bold
- Label beneath in #6B6B6B at 14px
- Placeholder stats: "850+" / Sessions, "4,400" / Musicians, "375+" / Screenings, "450" / Brand Activations, "6" / LinkedIn Articles Published, "1" / Book Signing
- Add a thin top border on each card in #12674A, 3px

PULL QUOTES SECTION:
- Section title "Signals Worth Repeating" left-aligned, 32px bold
- 3 quote cards in a row
- Alternating background colors: first card #12674A with white text, second card #F97C3C with white text, third card #0A0A0A with white text
- Each card: large opening quotation mark as a decorative element at 72px in 30% opacity white
- Quote text in 20px italic
- Attribution line beneath in 14px regular with a thin horizontal rule separating it from the quote
- 8px border radius on all cards

MY SXSW FOOTPRINT SECTION:
- Section title "What I Did at SXSW" left-aligned, 32px bold
- Horizontal timeline with 4 nodes connected by a thin #12674A line
- Each node: circle marker in #12674A, title in bold 16px, subtitle in 14px #6B6B6B, and a brief description
- Node 1: "Workshop" / "Artistic Disruption for Business Innovation"
- Node 2: "Braindate" / "Why Your AI Strategy Needs an Artist"
- Node 3: "Book Signing" / "Gamification for Product Excellence"
- Node 4: "LinkedIn Series" / "6-Part SXSW Coverage"
- Each node should look clickable (subtle hover state implied)

NAVIGATION SECTION:
- Dark background #0A0A0A, full width
- Title in white 24px bold: "Go Deeper"
- 5 cards in a row, each linking to a subpage
- Each card: dark gray background #1A1A1A, white text, 8px radius
- Card title in 18px bold, one-line description in 14px #6B6B6B
- Cards: "Trend Report" / "Signals and patterns across 850+ sessions", "Session Library" / "Searchable archive of every session I attended", "Workshop Recap" / "Artistic Disruption for Business Innovation", "Roundtable Recap" / "Why Your AI Strategy Needs an Artist", "Photo Journal" / "Visual field notes from 7 days in Austin"
- Green left border on each card, 3px #12674A

FOOTER:
- #0A0A0A background, centered text
- Name, one-line title, links to LinkedIn and Forbes column
- Small text: "Built from field notes. Not a corporate recap."
- Copyright 2026
```

-----

## Page 2: Interactive Trend Report

### Prompt:

```
Create a trend report page for SXSW 2026. Desktop width 1440px. Same design system: Inter font, #F7F5F0 background, max content width 1200px centered.

HERO SECTION:
- Shorter hero than the home page, 40vh, #0A0A0A background
- Title "What SXSW 2026 Signaled" in white, 56px bold
- Subtitle in #6B6B6B: "A practitioner's trend synthesis from 7 days of sessions, conversations, and activations"

METHODOLOGY NOTE:
- Light background section
- Small label "How I Built This" in #12674A uppercase 12px tracking-wide
- 2-3 lines of placeholder body text explaining your synthesis approach
- Thin bottom border in #E0E0E0

TREND MATRIX (OPTIONAL VISUAL):
- Full-width section with #0A0A0A background
- Placeholder rectangle 1100x500px for a custom chart you will add later
- Caption beneath in #6B6B6B: "Signal strength vs. enterprise readiness"
- Note: this will be replaced with an actual visualization post-export

TREND CARDS SECTION:
- Section title "10 Signals from SXSW 2026" left-aligned, 32px bold
- Grid of cards, 2 columns, 5 rows
- Each card: white background, subtle shadow, 8px radius, left border 4px in #12674A
- Card structure:
  - Trend number in #12674A, 14px bold (e.g., "01")
  - Trend title in 22px bold #1A1A1A
  - One-sentence signal summary in 16px #1A1A1A
  - "Supporting evidence" label in 12px uppercase #6B6B6B
  - 2-3 bullet points in 14px with session references
  - "What it means" label in 12px uppercase #12674A
  - A short paragraph in 14px for your interpretation
  - Tag pills at the bottom: track tags in the appropriate track colors with white text, rounded, small

- Placeholder trend titles:
  1. "Agentic AI Moves from Demo to Deployment"
  2. "The Artist-Engineer Convergence"
  3. "Behavioral Science as the Missing Adoption Layer"
  4. "Governance Fatigue vs. Governance Necessity"
  5. "Creator Economy Meets Enterprise Tooling"
  6. "Post-Convention-Center SXSW as Spatial Design Case Study"
  7. "AI in Healthcare Hits Regulatory Reality"
  8. "The Brand Activation Arms Race"
  9. "Open Source as Competitive Moat"
  10. "The Death of the Slide Deck"

- Between cards, no extra spacing beyond the grid gap

CROSS-REFERENCE FOOTER:
- Light gray background #F0EEEA
- Text: "Each trend links to supporting sessions in the Session Library →"
- Link styled in #12674A with underline

Same footer as home page.
```

-----

## Page 3: Session Library

### Prompt:

```
Create a session library page for SXSW 2026. Desktop width 1440px. Same design system.

HERO SECTION:
- Short hero, 30vh, #0A0A0A background
- Title "Session Library" in white, 56px bold
- Subtitle: "Searchable archive of sessions attended, March 12–18, 2026"
- Search bar: white input field, 500px wide centered, rounded corners, placeholder text "Search by title, speaker, or topic..."

FILTER BAR:
- Sticky bar below the hero, white background with bottom shadow
- Horizontal row of filter pills
- Track filter pills: "All" (selected state, filled #12674A white text), "Tech & AI" (#50AFE8), "Brand & Marketing" (#F97C3C), "Design" (#12674A), "Health" (#2E8B57), "Culture" (#6C7EB7), "Startups" (#D4A017)
- Format filter pills in a second row: "All Formats", "Keynote", "Featured Session", "Panel", "Workshop", "Mentor Session"
- Unselected pills: white background, 1px border in the respective color, colored text
- Selected pills: filled background with white text

SESSION COUNT:
- Below filter bar: "Showing 47 sessions" in 14px #6B6B6B, left-aligned

SESSION GRID:
- 3-column grid of session cards
- Each card: white background, subtle shadow, 8px radius
- Top of card: colored stripe 4px tall in the track color
- Card contents:
  - Track tag pill (small, top-left, colored background, white text, 10px font)
  - Format tag pill (small, next to track tag, #F7F5F0 background, #6B6B6B text)
  - Session title in 18px bold #1A1A1A, 2 lines max
  - Speaker names in 14px #12674A
  - Date in 12px #6B6B6B
  - 3-line summary text in 14px #6B6B6B (truncated with ellipsis)
  - Bottom of card: "Read more →" in 14px #12674A

- Show 9 placeholder cards with varied track colors and placeholder content
- Below the grid: "Load more sessions" button, outlined style in #12674A

Same footer.
```

-----

## Page 4: Workshop Recap — Artistic Disruption

### Prompt:

```
Create a detailed workshop recap page. Desktop width 1440px. Same design system.

HERO SECTION:
- Full-width, #0A0A0A background, 50vh
- Small label above title: "WORKSHOP RECAP" in #12674A, 12px uppercase tracking-wide
- Title "Artistic Disruption for Business Innovation" in white, 48px bold
- Subtitle: "Co-led with Michael Marshall | SXSW 2026"
- Below: track tag "Design" in #12674A pill, format tag "Workshop" in outlined pill, date "March 2026"
- Placeholder image area on the right: 500x350px rounded rectangle for a session photo

OVERVIEW SECTION:
- Two-column layout on #F7F5F0
- Left column (60%): 
  - Section label "The Premise" in #12674A uppercase 12px
  - 2-3 paragraphs of placeholder body text about why artistic methodologies unlock innovation that conventional frameworks miss
- Right column (40%):
  - Quick facts card, white background, shadow
  - Format: Workshop
  - Duration: placeholder
  - Participants: placeholder number
  - Track: Design
  - Methods: "Surrealist, Situationist, Futurist"

METHODOLOGY WALKTHROUGH:
- Section title "How the Workshop Worked" in 32px bold
- Vertical stepper/timeline layout, left-aligned
- 4-5 steps, each with:
  - Step number in a circle, #12674A background, white text
  - Step title in 20px bold
  - Description paragraph in 16px
  - Placeholder image rectangle 600x300px for activity photos or whiteboard shots
  - Thin connecting line between steps in #12674A

OUTCOMES SECTION:
- Section title "What Emerged" in 32px bold
- 3 quote cards from participants, horizontal row
- Same style as home page pull quotes: #12674A, #F97C3C, #0A0A0A alternating backgrounds
- Below quotes: 2-3 paragraphs on patterns and artifacts from the session

THE BIGGER ARGUMENT:
- Full-width section, #0A0A0A background
- Title in white 28px bold: "What This Proves"
- 2-3 paragraphs of white body text, 18px, max-width 800px centered
- This is the editorial synthesis connecting the workshop to the broader thesis

CTA SECTION:
- Light background
- Two cards side by side:
  - Left card: "Read the Roundtable Recap →" with brief description
  - Right card: "Book This Workshop →" with brief description
- Cards: white, shadow, green left border

Same footer.
```

-----

## Page 5: Roundtable Recap — AI Strategy Needs an Artist

### Prompt:

```
Create a roundtable discussion recap page. Desktop width 1440px. Same design system.

HERO SECTION:
- Full-width #0A0A0A, 45vh
- Small label: "BRAINDATE RECAP" in #F97C3C, 12px uppercase
- Title "Why Your AI Strategy Needs an Artist as Much as an Engineer" in white, 44px bold
- Subtitle in #6B6B6B: "A Braindate conversation at SXSW 2026"
- Small explainer text in 14px white, max-width 700px: placeholder text explaining the Braindate format for unfamiliar visitors

THE PROVOCATION:
- #F7F5F0 background
- Section label "The Argument" in #12674A uppercase 12px
- Large pull quote style: your central thesis in 28px bold #1A1A1A, max-width 900px centered, with decorative quotation marks in #12674A at 30% opacity
- 1-2 supporting paragraphs beneath in 16px

DISCUSSION MAP:
- Section title "How the Conversation Unfolded" in 32px bold
- 4-5 theme cards in a single column, full content width
- Each card: white background, subtle shadow, 8px radius
- Card structure:
  - Theme title in 20px bold
  - Icon or number on the left in #12674A
  - 1-2 paragraph summary of what was discussed under this theme
  - A "tension" callout: a contrasting viewpoint that surfaced, styled as an inset block with #F97C3C left border and slightly indented

PARTICIPANT VOICES:
- Section title "What People Said" in 32px bold
- Masonry or staggered grid of short quote cards
- 6-8 cards with placeholder quotes
- Each card: different subtle background tint (light green, light orange, light gray, light blue) to add visual variety
- Quote text in 16px italic, attribution in 12px bold
- No two adjacent cards the same color

SYNTHESIS:
- Full-width #0A0A0A section
- Title in white 28px bold: "What I Took Away"
- 2-3 paragraphs white text, 18px, max-width 800px centered
- End with a single bold sentence as a closing statement

CTA SECTION:
- Light background
- Two cards: "Read the Workshop Recap →" and "See the Trend Report →"
- Same card style as previous page

Same footer.
```

-----

## Page 6: LinkedIn Series Archive

### Prompt:

```
Create a content archive page for a 6-part LinkedIn article series about SXSW 2026. Desktop width 1440px. Same design system.

HERO SECTION:
- #0A0A0A background, 35vh
- Title "The SXSW 2026 Series" in white, 48px bold
- Subtitle: "6 dispatches from 7 days in Austin"

SERIES OVERVIEW:
- #F7F5F0 background
- 2-3 sentences framing the series arc
- Small detail: "Published on LinkedIn, March 2026"

ARTICLE CARDS:
- Single column layout, full content width
- 6 cards, stacked vertically with 24px gap
- Each card: white background, shadow, 8px radius
- Left side: large article number "01" through "06" in #12674A, 48px bold, vertically centered
- Right side:
  - Article title in 22px bold #1A1A1A (placeholder titles)
  - Publication date in 12px #6B6B6B
  - 2-3 line excerpt in 14px #6B6B6B
  - "Read on LinkedIn →" link in #12674A, 14px
- Thin bottom border on each card in #E0E0E0
- On hover implied: slight lift/shadow increase

Same footer.
```

-----

## Page 7: Book Signing

### Prompt:

```
Create a book feature page for a SXSW 2026 book signing event. Desktop width 1440px. Same design system.

HERO SECTION:
- Two-column layout on #0A0A0A, 50vh
- Left column: Title "Gamification for Product Excellence" in white 44px bold, subtitle "Signed at SXSW 2026" in #6B6B6B, and a placeholder for 2-3 endorsement quotes stacked vertically in 16px italic white with attributions
- Right column: placeholder rectangle 350x500px for the book cover image, slight rotation (2 degrees), drop shadow

ABOUT THE BOOK:
- #F7F5F0 background
- 2-3 paragraphs placeholder body text about the book and its relevance
- A "Buy the Book →" button: #12674A background, white text, rounded, 16px

SXSW CONTEXT:
- Section title "Why This Book at SXSW" in 24px bold
- Brief paragraph connecting gamification to adoption, not just engagement
- Placeholder image 800x400px for signing event photos

Same footer.
```

-----

## Page 8: Photo Journal

### Prompt:

```
Create a photo gallery page for SXSW 2026. Desktop width 1440px. Same design system.

HERO SECTION:
- #0A0A0A background, 30vh
- Title "Visual Field Notes" in white, 48px bold
- Subtitle: "7 days in Austin, March 2026"

GALLERY GRID:
- Masonry-style photo grid, 3 columns with varied aspect ratios
- 12-16 placeholder image rectangles in varied sizes:
  - Some landscape 400x260
  - Some portrait 400x550
  - Some square 400x400
- Each image has a caption overlay on hover: semi-transparent #0A0A0A bottom gradient with white caption text 14px and a location/date in 12px #6B6B6B
- Mix of placeholder background tints to suggest different photo content: light blue, light green, warm gray, light coral

- Subtle gap between images: 8px

Same footer.
```

-----

## Page 9: About / Contact

### Prompt:

```
Create an about and contact page. Desktop width 1440px. Same design system.

HERO SECTION:
- Two-column layout, #F7F5F0 background
- Left column (40%): placeholder rectangle 400x500px for headshot, rounded corners
- Right column (60%):
  - Name in 40px bold #1A1A1A
  - Title line in 18px #6B6B6B: "VP of AI Strategy & Product Development"
  - 3-4 short paragraphs of bio placeholder text
  - Row of icon links: LinkedIn, Forbes, Book — styled as small pills with #12674A text

CREDENTIALS BAR:
- Horizontal strip, #0A0A0A background
- 4 items in a row, white text:
  - "Forbes Technology Council"
  - "Roosevelt University Board, AI Advisory"
  - "MBA, University of Illinois Gies"
  - "Former pipefitter and general contractor"
- Simple text, 14px, separated by vertical dividers

CONTACT SECTION:
- Centered layout on #F7F5F0
- Title "Get in Touch" in 28px bold
- Placeholder for email address or contact form
- Brief text: "For speaking engagements, workshops, or consulting inquiries"
- Two CTA buttons side by side: "Email" in #12674A filled, "LinkedIn" in #12674A outlined

Same footer.
```

-----

## Page 10: Resources & Tools Mentioned

### Prompt:

```
Create a resources reference page for tools and platforms mentioned during SXSW 2026 sessions. Desktop width 1440px. Same design system.

HERO SECTION:
- #0A0A0A background, 30vh
- Title "Resources & Tools" in white, 48px bold
- Subtitle: "Platforms, frameworks, and companies referenced across sessions"

CATEGORY SECTIONS:
- Repeating section pattern on #F7F5F0
- Each category has:
  - Category title in 24px bold with a colored left border (4px, using track colors to loosely map to domains)
  - Grid of resource cards, 3 columns
  - Each card: white background, shadow, 8px radius
  - Card: resource/tool name in 18px bold, one-line description in 14px #6B6B6B, category tag pill, "Visit →" link in #12674A
  - Placeholder cards per category: 3-4

- Placeholder categories:
  - "AI & Machine Learning Platforms" (blue border #50AFE8)
  - "Governance & Safety Frameworks" (green border #12674A)
  - "Creative & Design Tools" (coral border #F97C3C)
  - "Data & Analytics" (periwinkle border #6C7EB7)
  - "Books & Publications" (gold border #D4A017)

Same footer.
```

-----

## Post-Generation Refinement Notes

After each page generates, use point-and-edit to fix:

1. **Typography hierarchy** — Make sure there is clear visual distinction between H1, H2, section labels, body, and captions. If everything looks the same size, manually adjust.
1. **Color accuracy** — Figma Make sometimes approximates hex values. Verify your greens, corals, and dark backgrounds match the spec.
1. **Card consistency** — All cards across all pages should use the same shadow depth, border radius, and padding. If one page drifts, correct it.
1. **Spacing** — Check that section spacing is consistent. 80-120px between major sections, 24-48px between cards or content blocks.
1. **Footer** — Copy the footer component exactly from page to page. Consistency matters.
1. **Responsive check** — Toggle to mobile view and verify nothing collapses badly. Figma Make handles this unevenly; you may need to manually adjust the mobile layout for each page.