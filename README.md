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
