---
title: Token risk filters
description: What Valhalla refuses to copy on Robinhood Chain, and the optional filters you can add.
beta: true
---

The gate applies to **opens only**. Exits are never blocked.

## Always on: the safety floor

Valhalla skips an entry when:

- the pool's v4 hook can block withdrawals or take a cut of them,
- the token cannot be sold back,
- the sell tax is above 10%.

A pool with no ETH, WETH or USDG side skips the sell check.

## Optional filters

Open the follow's **Filters** tab. Type a value to turn a filter on. An empty field means **Off**. A value of 0 is a real limit.

| Filter | Unit |
|---|---|
| Bundled wallets share limit | % |
| Insider share limit | % |
| Developer share limit | % |
| Top 10 holders share limit | % |
| Minimum liquidity | USD |
| Minimum token age | minutes |

Data comes from GMGN plus a sell simulation. When a filter is on and its data is missing, the open is skipped. The reason shows in Activity > Skipped. Brand new tokens are often skipped for this reason.

::shot[Risk filters | Follow editor Filters tab with the six filters | The fields showing Off | robinhood-risk-filters.png]
