---
description: Add a target wallet, set the amounts you copy, then resume the follow.
---

# Follow a wallet on Robinhood Chain

## Steps

1. Open **Robinhood LP > Copy trade**.
2. Click **Copy trade a wallet**.
3. Paste the target address. Optionally add a name (up to 40 characters, only you see it). **Suggest a copy ratio** fills a ratio from both wallets' balances.
4. Click **Add paused follow**. New follows start paused.
5. Open the follow and set it up on its tabs (below).
6. **Resume** the follow, and make sure the **Robinhood copying** switch is on.

{% hint style="info" %}
**Screenshot needed: Add follow dialog**

Show: /dashboard/robinhood/copy-trade with the Copy trade a wallet dialog

Highlight: The name field, Suggest a copy ratio and Add paused follow

Save as: `robinhood-add-follow.png` and insert it here.
{% endhint %}
## The follow editor

| Tab | Settings |
|---|---|
| Sizing | **Copy ratio** (default 10%), **Position cap**, **Min per action**, **Max per action** |
| Safety | **Uniswap v3** and **Uniswap v4** (keep at least one), **Entry mode** |
| Filters | Six optional token risk filters. See [Token risk filters](token-risk-filters.md) |

**Entry mode** is **Any pool** or **Pools with my base currency only**. Any pool is the default.

**Position cap** is the most this follow puts into one position. Empty means no cap.

The suggested ratio is your portfolio value divided by the target's portfolio value, times 100.

{% hint style="info" %}
**Screenshot needed: Robinhood follow editor**

Show: The editor on the Sizing tab

Highlight: Copy ratio, Position cap and the Min and Max per action fields

Save as: `robinhood-follow-form.png` and insert it here.
{% endhint %}
## Pause or stop

Pausing, unfollowing or changing protocols stops new exposure. Exits keep being mirrored for positions you already hold. Pausing asks you to confirm.

## If something is off

Open **Activity > Skipped** for the reason. Common ones: amount below your minimum, a risk filter failed, or "this pool isn't paired with your base currency".
