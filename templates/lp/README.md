# Add a new LP

1. Copy this folder's pages from `content/robinhood/` (it is the leaner template) to `content/<lp-id>/`.
2. Keep the skeleton: overview, set-up, follow-a-wallet, settings-reference, token filters or risk page, activity, fees.
3. Add a section to `nav.json` with an `lp` block (chain, status, logo, summary). The Welcome cards and sidebar pick it up.
4. Put the logo in `assets/logos/`.
5. If the LP is beta, set `beta: true` in each page's front matter and `"beta": true` in the `lp` block.
6. Add the LP to `content/start/how-copy-trading-works.md` comparison table and to `content/help/faq.md`.
7. Run `bun run build`. It fails on broken links and em dashes.
