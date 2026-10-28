---
title: Smart Token Retention
description: Keep tokens a target returned instead of selling and re-buying them.
---

Smart Token Retention is off by default. When a target removes liquidity and gets tokens back that it never sold, Valhalla keeps your matching tokens instead of selling them. If the target re-enters within 5 minutes, your kept tokens are reused. After that, the failsafe swaps them.

It keeps your copy ratio accurate, works out top-ups to existing positions and prevents stacking when a target partly re-enters.

## Turn it on

1. Open the follow editor.
2. Switch on **Smart Token Retention**.
3. Save.

::shot[Retention toggle | Follow editor with Smart Token Retention switched on | The toggle and its help text | meteora-retention.png]
