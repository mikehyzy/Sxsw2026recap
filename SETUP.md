# Setup: Getting This Repo to GitHub

## Step 1: Create the GitHub repo

Go to github.com and create a new repository manually.
- Name: `sxsw-2026-recap` (or whatever you prefer)
- Visibility: Private (switch to public when ready to launch)
- Do NOT initialize with README, .gitignore, or license (the repo has these already)

If your CGI GitHub org blocks personal repo creation, create it under your
personal GitHub account instead. You can always transfer it later.

## Step 2: Download this scaffolding

Download the folder from Claude and unzip it on your machine.

## Step 3: Add your Figma Make exports

In Figma Make, for each page you've built:
1. Take a full-page screenshot (Cmd+Shift+4 on Mac, drag to capture)
2. Save as `page-name.png` (e.g., `home.png`, `trend-report.png`)
3. Drop all screenshots into `design-reference/`

Also download the code export ZIP from Figma Make:
1. In Make, click the download/export button
2. Save the ZIP as `figma-export.zip` in `design-reference/`

You don't need to unzip it. Claude Code will reference the screenshots
for visual direction and can inspect the ZIP if it needs to pull specific
CSS values or component patterns.

## Step 4: Initialize git and push

Open Terminal, navigate to the project folder:

```bash
cd ~/path/to/sxsw-2026-recap

git init
git add .
git commit -m "initial scaffolding with design tokens and content schemas"

git remote add origin git@github.com:YOUR_USERNAME/sxsw-2026-recap.git
git branch -M main
git push -u origin main
```

If you use HTTPS instead of SSH:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sxsw-2026-recap.git
```

## Step 5: Open in Claude Code

```bash
cd ~/path/to/sxsw-2026-recap
claude
```

Then tell Claude Code:

> Read CLAUDE_CODE_INSTRUCTIONS.md and the design reference screenshots
> in /design-reference/. Initialize an Astro project and start building
> Phase 1 (foundation) and Phase 2 (static pages).

## Step 6: Add content as you write it

As you complete session summaries and trend write-ups, save them as MDX
files following the templates in:
- `src/content/sessions/_template.mdx`
- `src/content/trends/_template.mdx`

Update the JSON files in `src/data/` with your real stats, quotes, and
LinkedIn article links.

Commit and push as you go. Claude Code can pick up where it left off.
