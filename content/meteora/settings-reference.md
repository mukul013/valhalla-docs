---
title: Settings reference
description: Every Meteora setting, what it does and when to change it.
---

Settings live in two places: per follow (**Copy trade**) and per account or wallet (**Settings**).

## Per follow

| Setting | What it does | Notes |
|---|---|---|
| Copy DLMM / Copy DAMM | Which pool types this follow copies | DAMM is [beta](damm.md) |
| Copy ratio | Your size relative to the target | 100% is the same size |
| Max trade size | Most SOL spent per copied trade | `0` copies no entries |
| Entry mode | Which token pairings you accept | [Entry modes](entry-modes.md) |
| Shape filter | Only copy chosen liquidity shapes (Spot, Curve, BidAsk) | |
| Infinite add liquidity | Copy every add, not only the first plus the funding add | Higher exposure |
| Single pool per token | One position per token | Recommended |
| Auto-close out of range | Close above range after a set number of minutes | |
| Min bin count | Skip positions under 3 bins | |
| Min target position size | Skip small target positions, measured on the target's deposit | In SOL |
| Smart Token Retention | Keep tokens a target returned instead of selling | [Details](smart-token-retention.md) |
| Stop-loss, stop-loss timer, take-profit | Override the account values for this follow | Percent |
| Swap routing | Jupiter Ultra first, or OKX | OKX is not available for Privy wallets |

## Per account or wallet

| Setting | What it does |
|---|---|
| Global stop-loss, timer (0 to 60 min), take-profit | Defaults for every follow |
| Rug check on stop-loss | Checks the token before a stop-loss exit |
| Min price range % | Skip positions with a narrower range |
| Max per token (SOL) | Ceiling per token across follows |
| Max open positions | Cap on simultaneous positions |
| Ignored tokens | Never copy these |
| Priority fee tier and max cap | Low, Medium or High |
| Slippage | Applies to OKX routing |
| Jito fee max | Default 0.001 SOL. Lower to 0.0001 to save cost |

::shot[Settings page | /dashboard/meteora/settings with the stop-loss, max per token and fee sections visible | Max per token and priority fee tier | meteora-settings.png]

:::tip
Medium or Low priority fee and a Jito cap near 0.00005 to 0.0001 SOL keeps fees down for most people.
:::
