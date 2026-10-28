---
title: Base currency
description: Choose USDG or ETH as the asset you spend on entries.
beta: true
---

Pick one base for the whole account. New accounts start in USDG. Existing accounts keep the value they have.

| | USDG | ETH |
|---|---|---|
| Copies are sized in | USDG | ETH |
| Gas | Paid in ETH. ETH is kept for gas only | Paid in ETH from the same balance |
| Gas refill | Swaps small USDG amounts to ETH when gas runs low | Not needed |

## Change it

1. Open **Robinhood LP > Settings** and find the **Base currency** card.
2. Pick the other currency. The dialog **Switch base currency to ETH** (or USDG) opens.
3. Enter all five new limits: **Min per action**, **Max per action**, **Position cap**, **Max per pool** and **Max per token**. Blank caps mean no limit.
4. Click **Switch to ETH** (or USDG).

The dialog also shows your open positions, and your ETH balance when switching to ETH.

The change affects **future** entries only. Open positions keep their currency, and Settings shows how many you have from before the switch.

## What to expect

- USDG funds USDG-base entries. ETH never funds them.
- An increase on a position opened in the other base is skipped. Exits still go through.

::shot[Base currency switch | The Switch base currency dialog with the five limit fields | The five fields and the confirm button | robinhood-base-currency.png]
