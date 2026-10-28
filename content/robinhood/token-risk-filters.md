---
title: Token risk filters
description: What Valhalla refuses to copy on Robinhood Chain, and the optional filters you can add.
beta: true
---

The gate applies to **opens only**. Exits are never blocked.

## Always on: the safety floor

Valhalla refuses a pool or token when:

- the pool's hook can trap or skim withdrawals,
- the token cannot be sold back,
- the sell tax is above 10%.

## Optional filters (website only)

All six are off by default.

| Filter |
|---|
| Bundled wallets |
| Insiders |
| Creator and dev team |
| Top 10 holders |
| Pool liquidity |
| Token age |

When a filter is on and its data is missing, the open is skipped. Tokens in their first minute are often skipped for this reason.

::shot[Risk filters | Follow form with the six filters visible | The toggles and thresholds | robinhood-risk-filters.png]
