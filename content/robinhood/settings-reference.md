---
title: Robinhood settings reference
description: Every Robinhood Chain setting with defaults.
beta: true
---

## Per follow

| Setting | Default | What it does |
|---|---|---|
| Copy ratio | 10% | Your size relative to the target |
| Min per action | 0.001 ETH or 5 USDG | Skip copies smaller than this |
| Max per action | 0.01 ETH or 50 USDG | Cap each copy |
| Max per position | No limit | Cap per copied position |
| Max per pool | No limit | Cap per pool |
| Protocols | v3 and v4 on | Which Uniswap versions to copy |
| Entry mode | Any pool | Or base currency pools only |
| Early copy | Off | Copy before the target confirms. See [Early copy](early-copy.md) |
| Token risk filters | Off | Six optional filters. Website only. See [Token risk filters](token-risk-filters.md) |

## Per account

| Setting | What it does |
|---|---|
| Base currency | ETH (default) or USDG, one for the whole account. See [Base currency](base-currency.md) |
| Max per pool, max per token | Account-wide ceilings |

Blank limits mean no limit.

::shot[Robinhood settings | /dashboard/robinhood/settings with base currency and caps | Base currency and per-pool caps | robinhood-settings.png]
