---
title: Robinhood settings reference
description: Every Robinhood Chain setting with defaults.
beta: true
---

## Master switch

**Robinhood copying** (on **Copy trade**). When it is off, follows are on standby and keep their own Active or Paused state. Turning it off asks you to confirm.

## Per follow

| Setting | Default | What it does |
|---|---|---|
| Name | None | Optional, up to 40 characters |
| Copy ratio | 10% | Your size relative to the target |
| Position cap | No cap | Most this follow puts into one position |
| Min per action | 0.001 ETH or 5 USDG | Skip copies smaller than this |
| Max per action | 0.01 ETH or 50 USDG | Cap each copy |
| Uniswap v3, Uniswap v4 | Both on | Keep at least one on |
| Entry mode | Any pool | Or base currency pools only |
| Token risk filters | Off | Six optional filters. Website only |

## Per account (Settings page)

| Setting | What it does |
|---|---|
| Base currency | USDG (default for new accounts) or ETH. See [Base currency](base-currency.md) |
| Max per pool | Most you hold in any one pool across all follows. A copy that goes over is reduced |
| Max per token | Most you hold in one token across every pool. A new position that does not fit is skipped |

Empty limits mean no limit. When a follow's cap is higher than the account limit, the lower one wins.

Gas is always paid in ETH. About 0.050 ETH is suggested to keep on the wallet.

::shot[Robinhood settings | /dashboard/robinhood/settings with Base currency and Position limits | The two cards and the Max per pool field | robinhood-settings.png]
