---
title: Entry modes
description: Choose which token pairings a follow is allowed to enter.
---

Set it on the follow's **Safety** tab. It applies to DLMM only.

| Mode | What it copies |
|---|---|
| **SOL only** (default) | Adds that deposit SOL only |
| **SOL or USDC** | SOL or USDC adds, including USDC-only adds. Your SOL is swapped to USDC first |
| **SOL-led** | Mostly-SOL adds, with a small token side up to **Max token side** |
| **Any entry** | Every add, including two-sided and token-side. Highest risk |

## Max token side

Only shown with SOL-led. Whole percent from 1 to 25, default 5. It is measured by dollar value. At 5%, an add of $95 SOL and $5 token is copied. $90 and $10 is skipped.

::shot[Entry mode cards | Follow editor Safety tab with the four entry mode cards, SOL-led selected | The Max token side field and the Default tag | meteora-entry-mode.png]

:::tip
Start with SOL only. Move to SOL-led once you are comfortable with the token side limit.
:::
