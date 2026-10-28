---
description: Choose which token pairings a follow is allowed to enter.
---

# Entry modes

Set it on the follow's **Safety** tab. It applies to DLMM only.

| Mode | What it copies |
|---|---|
| **SOL only** (default) | Adds that deposit SOL only |
| **SOL or USDC** | SOL or USDC adds, including USDC-only adds. Your SOL is swapped to USDC first |
| **SOL-led** | Mostly-SOL adds, with a small token side up to **Max token side** |
| **Any entry** | Every add, including two-sided and token-side. Highest risk |

## Max token side

Only shown with SOL-led. Whole percent from 1 to 25, default 5. It is measured by dollar value. At 5%, an add of $95 SOL and $5 token is copied. $90 and $10 is skipped.

{% hint style="info" %}
**Screenshot needed: Entry mode cards**

Show: Follow editor Safety tab with the four entry mode cards, SOL-led selected

Highlight: The Max token side field and the Default tag

Save as: `meteora-entry-mode.png` and insert it here.
{% endhint %}
{% hint style="success" %}
Start with SOL only. Move to SOL-led once you are comfortable with the token side limit.
{% endhint %}
