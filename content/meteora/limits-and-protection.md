---
title: Limits and protection
description: Open-position caps, repeated entries, stop-loss, take-profit and automatic closes.
---

## On the follow's Limits tab

| Section | Settings |
|---|---|
| Open positions | **Max open positions** and **Counted over** (minutes). 0 means no limit |
| Repeated entries per pair | **Maximum entries** and **Time window** (1 to 10,080 minutes). 0 is off |
| Stop loss and take profit | **Stop loss** %, **Take profit** %, **Stop loss delay** (0 to 60 minutes). Empty uses your account value. 0 or 100 turns it off |

## On the follow's Safety tab

- **Auto Close Above Range:** closes after the position has been above range for the minutes you set. It only watches upward moves. A drop below range never closes it.
- **Auto-ban:** pauses a follow after repeated bad trades. Set a **Threshold** (1 to 50) and a **Time window** (1 to 1,440 minutes). Use **Resume auto-banned follow** to turn it back on.
- **Single Pool Per Token** and **Min Bin Count Check** (skips positions under 3 bins).

## On the account Settings page

- **Global stop loss**, **Stop loss timer** (0 to 60 minutes) and **Take profit** are the defaults for every follow.
- **Rug check stop loss** with a **Rug check threshold** (%, 0 to 100).
- **Max per token** (SOL, 0 is off) is a ceiling across follows.
- **Max open positions** is an account-wide cap.
- **Ignored tokens:** add a token mint and a label. These are never copied.

::shot[Limits tab | Follow editor Limits tab with all three sections | Counted over and the stop loss fields | meteora-limits.png]
::shot[Account settings | /dashboard/meteora/settings Protection defaults section | Global stop loss and Rug check threshold | meteora-protection-defaults.png]
