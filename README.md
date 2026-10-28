# Valhalla Docs

Static docs site for Valhalla. Markdown in `content/`, built by `build.ts`, searched with Pagefind, deployed to GitHub Pages on every push to `main`.

## Write a page

`content/<section>/<slug>.md`, listed under its section in `nav.json` (order = sidebar order).

```
---
title: Follow a wallet
description: One sentence shown under the title.
beta: true        # optional, shows a Beta badge
---
```

Helpers:

- `::shot[Screen | State to capture | What to highlight or redact | file.png]` renders a placeholder. Drop `file.png` in `assets/shots/` and the same line renders the real image.
- `:::beta`, `:::warn`, `:::tip`, `:::note` then `:::` on its own line makes a callout.
- Link other pages with relative `.md` paths. The build rewrites them and fails on broken links.
- No em dashes. The build rejects them.

## Run locally

```
bun install
bun run dev      # http://localhost:4173
```

## Keep it current

- A feature ships: update the LP page and add a line to `content/help/whats-new.md`.
- A beta graduates: remove `beta: true` from the pages and the `beta` flag in `nav.json`.
- A new LP: see `templates/lp/README.md`.
- Facts come from the app: beta list in `features.ts`, settings editors in `apps/web/src/lps/*`, glossary in `CONTEXT.md`.
- Check `REVIEW.md` for facts that need an operator to confirm before the site replaces the Gitbook.

## Put it in Gitbook

The site and Gitbook share one source. Run:

```
bun run gitbook      # writes gitbook/ (README.md, SUMMARY.md, pages) and .gitbook.yaml
```

Then in Gitbook open the space, choose **Configure > GitHub Sync**, connect `mukul013/valhalla-docs`, branch `main`, and set sync direction **GitHub to Gitbook**. `.gitbook.yaml` already points Gitbook at `gitbook/`, so the sidebar groups come from `SUMMARY.md`. Callouts become Gitbook hints and screenshot placeholders become blue info hints.

Alternative: import the `gitbook/` folder once with **Import** (Markdown).

When you add a screenshot, put the PNG in `assets/shots/` and rerun `bun run gitbook`. The image replaces the hint.

Run `bun run gitbook` and commit `gitbook/` whenever content changes (the Pages workflow does not need it).
