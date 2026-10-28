---
title: Token filters
description: Skip tokens that do not meet your standards. Filters apply when a position opens.
---

Open the follow's editor and go to the **Filters** tab. A value of 0 turns a filter off.

| Filter | What it checks |
|---|---|
| **Min token age** | Time since launch (units: minutes, hours, days) |
| **Min holders** | Holder count |
| **Min market cap**, **Max market cap** | Market cap range |
| **Min 24h volume** | Trading volume |
| **Min Jup score** | Jupiter organic score, 0 to 100. Below 30 forces Pump.fun and StonkFun only |
| **Token tax** | Skip tokens with a transfer fee of 1%, 2% or 3% or more. Default **Allow all** |
| **Max launch sniper** | Maximum share of supply held by launch snipers (%) |
| **Pump+Stonk only** | Restrict to those launchpads |
| **Max price change** and **Price change window** | Skip tokens that moved too much in 5m, 1h, 6h or 24h |

Filters apply to opens. They never block an exit.

## Always on: Jupiter Shield

Valhalla will not open or add to a token that Jupiter flags with a security warning, such as an incident or a non-transferable token. You are told what Jupiter said. Exits are never blocked.

## When filters do not apply

- On a **Preset** follow, the Filters tab says the filters belong to the preset.
- Filters do not apply to DAMM.
- If a filter is on and its data cannot be read, the entry is skipped. Activity > Skipped shows why.

::shot[Filters tab | Follow editor Filters tab with age, market cap and Jup score filled | Min Jup score and Token tax | meteora-filters.png]
