---
description: Keep tokens a target returned instead of selling and re-buying them.
---

# Smart Token Retention

Smart Token Retention is off by default. When a target removes liquidity and gets tokens back it never sold, Valhalla keeps your matching tokens instead of selling them. If the target re-enters within 5 minutes, your kept tokens are reused. Otherwise they are sold automatically within 5 minutes. If the target sells them, Valhalla sells immediately.

It needs an entry mode that allows token-sided adds. See [Entry modes](entry-modes.md).

## Turn it on

1. Open the follow's editor and go to the **Safety** tab.
2. In the **Positions** section, switch on **Smart Token Retention**.
3. Save.

If a target keeps rebalancing the same position, a banner offers **Turn on Retention**.

{% hint style="info" %}
**Screenshot needed: Retention toggle**

Show: Follow editor Safety tab, Positions section, Retention on

Highlight: The toggle and its help text

Save as: `meteora-retention.png` and insert it here.
{% endhint %}
