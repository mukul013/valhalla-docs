---
title: Token filters
description: Skip tokens that do not meet your standards. Filters apply when a position opens.
---

Filters apply to **opens** (and Jupiter Shield also to adds). They never block an exit.

| Filter | What it checks | Sensible start |
|---|---|---|
| Token age | Minimum hours since launch | 8 hours |
| Market cap | Min and max | Above $800k, better above $2M |
| Holders | Minimum holder count | |
| 24h volume | Minimum | |
| Jupiter organic score | 0 to 100 | Above 55 |
| Max price change | Over 5m, 1h, 6h or 24h | |
| Pump.fun and StonkFun only | Restrict to those launchpads | |
| Launch sniper (bundler) % | Skip tokens with heavy bundled supply | |
| Token tax | Skip a token whose transfer fee is at or above your limit | 0 means off |

## Always on: Jupiter Shield

Valhalla will not open or add to a token that Jupiter flags with a security warning, such as an incident or a non-transferable token. You are told what Jupiter said. Exits are never blocked. If the warning cannot be read, the entry proceeds.

## When a filter cannot be checked

If a filter is on and its data is missing, the entry is skipped and Activity shows why.

::shot[Filters panel | Follow editor, token filters section with age, market cap and score filled | Jupiter score and market cap fields | meteora-filters.png]
