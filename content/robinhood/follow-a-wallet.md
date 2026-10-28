---
title: Follow a wallet on Robinhood Chain
description: Add a target wallet and set the amounts you copy.
beta: true
---

## Steps

1. Open **Robinhood > Copy trade**.
2. Click **Add follow** and paste the target address.
3. Set the **Copy ratio**. The default is 10%. The suggested ratio is your portfolio value divided by the target's, times 100.
4. Set **Min** and **Max** amount per action, and the **Position cap**.
5. Choose **Protocols**: copy v3, copy v4, or both (both on by default).
6. Choose an **Entry mode**: Any pool, or Pools with my base currency only.
7. Optional: set [token risk filters](token-risk-filters.md).
8. Save.

::shot[Robinhood follow form | /dashboard/robinhood/copy-trade follow form filled in | Ratio, min and max amount, protocols | robinhood-follow-form.png]

## Pause, unfollow, change protocols

Any of these stops new exposure. Exits keep being mirrored for positions you already hold.

## If something is off

Open **Activity > Skipped** for the reason. Common ones: amount below your minimum, a risk filter failed, or the pool is not in your base currency.
