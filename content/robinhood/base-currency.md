---
title: Base currency
description: Choose ETH or USDG as the asset you spend on entries.
beta: true
---

Pick one base for the whole account.

| | ETH (default) | USDG |
|---|---|---|
| Funds entries | Yes | Yes |
| Pays gas | Yes | No, ETH still pays gas |
| Gas refill | Not needed | Automatic top-up of gas |

## Change it

1. Open **Robinhood > Settings**.
2. Choose the new base.
3. Enter new min, max and cap values in the same step. Old limits are in the old currency.
4. Save.

The change affects **future** entries only.

## What to expect

- USDG funds USDG-base entries. ETH never funds them.
- An increase on a position opened in the other base is skipped. Exits still go through.

::shot[Base currency switch | The change-base dialog asking for new limits | The new limit fields | robinhood-base-currency.png]
